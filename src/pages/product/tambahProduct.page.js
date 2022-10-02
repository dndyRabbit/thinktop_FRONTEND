import React from "react";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TitleCard from "../../components/shared/TitleCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { warning } from "../../components/shared/Notification";
import { postProduct } from "../../core/redux/actions/product.action";

const TambahProductPage = () => {
  const initialState = {
    product_name: "",
    description: "",
    price: 0,
  };

  const dispatch = useDispatch();

  const { product, auth } = useSelector((state) => state);

  const [data, setData] = React.useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    if (data.product_name === "" || data.price === 0) {
      await warning("Data produk tidak boleh kosong.");
    } else {
      dispatch(
        postProduct({
          data,
          setData,
          initialState,
          token: `bearer ${auth?.auth?.access_token}`,
        })
      );
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
