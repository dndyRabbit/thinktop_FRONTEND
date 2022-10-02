import React, { useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TableWrapper } from "../../components/shared/Table";
import TitleCard from "../../components/shared/TitleCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { warning } from "../../components/shared/Notification";
import { postProduct } from "../../core/redux/actions/product.action";

const TambahProductPage = () => {
  const initialState = {
    product_name: "",
    description: "",
    price: 0,
    stock: 0,
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { product } = useSelector((state) => state);

  const [data, setData] = React.useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    if (data.product_name === "" || data.price === 0 || data.stock === 0) {
      await warning("Data produk tidak boleh kosong.");
    } else {
      dispatch(postProduct({ data, setData, initialState }));
    }
  };

  return (
    <Box sx={{ p: 3 }} component="form">
      <Card elevation={0}>
        <TitleCard title="TAMBAH PRODUK" />
        <CardContent>
          <FormControl fullWidth>
            <InputLabel>Nama Produk</InputLabel>
            <OutlinedInput
              label="Nama Produk"
              name="product_name"
              value={data.product_name}
              onChange={handleChangeInput}
              required
            />
          </FormControl>
        </CardContent>
        <CardContent>
          <FormControl fullWidth>
            <InputLabel>Deskripsi</InputLabel>
            <OutlinedInput
              label="Deskripsi"
              name="description"
              value={data.description}
              onChange={handleChangeInput}
            />
          </FormControl>
        </CardContent>

        <CardContent>
          <FormControl fullWidth>
            <InputLabel>Harga</InputLabel>
            <OutlinedInput
              label="Harga"
              name="price"
              value={data.price}
              onChange={handleChangeInput}
            />
          </FormControl>
        </CardContent>

        <CardContent>
          <FormControl fullWidth>
            <InputLabel>Stok</InputLabel>
            <OutlinedInput
              label="Stok"
              name="stock"
              value={data.stock}
              onChange={handleChangeInput}
            />
          </FormControl>
        </CardContent>

        <CardContent>
          <LoadingButton
            color="primary"
            variant="contained"
            disableElevation
            endIcon={<AddIcon />}
            onClick={() => onSubmit()}
            loading={product.loading ? true : false}
          >
            TAMBAH
          </LoadingButton>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TambahProductPage;
