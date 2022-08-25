import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PrintingInvoices from "../../assets/img/undraw/printing_invoices.svg";
const theme = createTheme();

function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            background:
              "linear-gradient(206.96deg, #063970 -0.58%, #4D3EBA 106.14%)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "white",
              height: "100vh"
            }}
          >
            <Box component="div" sx={{width: '100%', px: 4}}>
              <img src={PrintingInvoices} alt="logo-ils" style={{width: '100%'}} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box sx={{ mx: 4, mt: 8 }}>
            <Typography component="h1" variant="h5" fontWeight="bold">
              Login
            </Typography>
          </Box>
          <Box
            sx={{
              my: 4,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              sx={{ mt: 1, width: "100%" }}
            >
              <Typography>Username</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                // value={form.email}
                // onChange={(e) =>
                //   dispatch({
                //     type: "SET_FORM_LOGIN",
                //     payload: { email: e.target.value },
                //   })
                // }
              />
              <Typography>Password</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                // value={form.pw}
                // onChange={(e) =>
                //   dispatch({
                //     type: "SET_FORM_LOGIN",
                //     payload: { pw: e.target.value },
                //   })
                // }
                // onKeyPress={(e) => {
                //   if (e.key === "Enter") refSubmitButton.current.click();
                // }}
              />
              <Button
                // ref={refSubmitButton}
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 3, mb: 2, background: "#063970" }}
              >
                Masuk
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
};

export default LoginPage;