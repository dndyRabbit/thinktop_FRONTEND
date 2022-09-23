import { LoadingButton } from "@mui/lab";
import { CardContent, Grid, Paper, styled } from "@mui/material";
import React from "react";

const DaftarAkunContent = ({ data, handleNav }) => {
  console.log(data, "DATAA");

  return (
    <CardContent>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <LoadingButton
              variant="contained"
              sx={{ width: "100%", color: "#fff" }}
              onClick={() =>
                handleNav({
                  uuid_akun: item.uuid,
                  nama_akun: item.nama_akun,
                  kode_akun: item.kode_akun,
                })
              }
            >
              {item?.nama_akun}
            </LoadingButton>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  );
};

export default DaftarAkunContent;
