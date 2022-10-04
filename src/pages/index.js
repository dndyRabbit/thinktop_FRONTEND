import { Box, Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import TitleCard from "../components/shared/TitleCard";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import Menu from "../components/layouts/menu";

const Beranda = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 3 }}>
      <Card elevation={0}>
        <TitleCard title="BERANDA" />
        <CardContent>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Menu?.slice(1).map((item, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <LoadingButton
                  sx={{ width: "100%" }}
                  variant="contained"
                  onClick={() => navigate(`${item.path}`)}
                >
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    sx={{ fontWeight: "500" }}
                  >
                    {item.title}
                  </Typography>
                </LoadingButton>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Beranda;
