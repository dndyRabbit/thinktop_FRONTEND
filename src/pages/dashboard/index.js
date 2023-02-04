import { Box, Grid } from "@mui/material";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import CardStats from "./CardStats";

export default function Dashboard() {
  return (
    <Box>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item xs={2} sm={3} md={4} lg={5}>
          <CardStats
            title="Transaksi"
            amount={200}
            icon={<BarChartRoundedIcon sx={{ fontSize: 60, color: "white" }} />}
          />
        </Grid>
        <Grid item xs={2} sm={3} md={4} lg={5}>
          <CardStats
            title="Penjualan"
            amount={20}
            icon={
              <ShoppingCartRoundedIcon sx={{ fontSize: 60, color: "white" }} />
            }
            backgroundIcon="#e74c3c"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
