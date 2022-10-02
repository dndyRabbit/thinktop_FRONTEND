import { Box, Button, Card, CardContent } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { TableWrapper } from "../../components/shared/Table";
import TitleCard from "../../components/shared/TitleCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { confirmation } from "../../components/shared/Notification";

import ProductTable from "../../components/Product/Product.table";
import { deleteProduct } from "../../core/redux/actions/product.action";

function ProductPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state);

  const handleDelete = async ({ uuid_product }) => {
    await confirmation(
      "Apakah kamu yakin ingin menghapus akun?",
      "Data tidak bisa dikembalikan!"
    ).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct({ uuid_product }));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="PRODUK">
          <Button
            color="primary"
            variant="contained"
            disableElevation
            endIcon={<AddIcon />}
            onClick={() => navigate("tambah")}
          >
            TAMBAH
          </Button>
        </TitleCard>
        <CardContent>
          <TableWrapper headers={product?.product?.head} align="center">
            {product?.product?.data?.map((data, index) => (
              <ProductTable
                key={index}
                product={product}
                data={data}
                index={index}
                handleDelete={handleDelete}
              />
            ))}
          </TableWrapper>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ProductPage;
