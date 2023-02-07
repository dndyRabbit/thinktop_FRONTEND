import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Tabs,
  Tab,
  FormControl,
  TextField,
  Button,
  LinearProgress,
  TableRow,
  TableCell,
} from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useMemo, useState } from "react";
import dataReportSvg from "../../assets/svg/data_report.svg";
import { useDispatch, useSelector } from "react-redux";
import { getLaporan, printLaporan } from "../../store/actions/laporanAction";
import Table from "../../components/table";
import { convertPrice } from "../../utils/currency";
import PrintRoundedIcon from '@mui/icons-material/PrintRounded';
import PreviewPDF from "../../components/shared/PreviewPDF";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function Laporan() {
  const dispatch = useDispatch();
  const {laporan} = useSelector((state) => state);
  const [urlPDF, setUrlPDF] = useState(null);
  const [showDialogPreviewPDF, setShowDialogPreviewPDF] = useState(false);
  const [loadingGetPDF, setLoadingGetPDF] = useState(false);

  const bulan = useMemo(() => {
    return laporan.filter.bulan;
  }, [laporan.filter]);

  const years = useMemo(() => {
    return laporan.filter.tahun;
  }, [laporan.filter.tahun]);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTerapkan = () => {
    dispatch(getLaporan());
  }

  const handlePrint = async () => {
    setLoadingGetPDF(true);
    const dataPrint = await dispatch(printLaporan());
    if (dataPrint) {
      setUrlPDF(dataPrint);
      setShowDialogPreviewPDF(true);
    }
    setLoadingGetPDF(false);
  }

  useEffect(() => {
    handleTerapkan();
  }, []);

  return (
    <Box>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        marginBottom={3}
      >
        <Grid item xs={3} sm={4} md={5} lg={6}>
          <Typography fontWeight="bold" fontSize={20}>
            Laporan
          </Typography>
        </Grid>
      </Grid>
      <Card>
        <CardContent>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Laporan" {...a11yProps(0)} />
              <Tab label="Laba Rugi" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container spacing={1} justifyContent="end">
              <Grid item xs={2} lg={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <FormControl fullWidth>
                    <DatePicker
                      views={["month"]}
                      label="Bulan"
                      value={bulan}
                      inputFormat="MMMM"
                      renderInput={(params) => <TextField {...params} size="small" />}
                      onChange={(newValue) => dispatch({type: 'laporan/setFilter', payload: {bulan: newValue}})}
                    />
                  </FormControl>
                </LocalizationProvider>
              </Grid>
              <Grid item xs={2} lg={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <FormControl fullWidth>
                    <DatePicker
                      views={["year"]}
                      label="Tahun"
                      value={years}
                      inputFormat="YYYY"
                      renderInput={(params) => <TextField {...params} size="small" />}
                      onChange={(newValue) => dispatch({type: 'laporan/setFilter', payload: {tahun: newValue}})}
                    />
                  </FormControl>
                </LocalizationProvider>
              </Grid>
              <Grid item>
                <Button variant="contained" disableElevation onClick={() => handleTerapkan()}>
                  Terapkan
                </Button>
                <LoadingButton loading={loadingGetPDF} sx={{ml: 1}} variant="contained" disableElevation onClick={() => handlePrint()}>
                  <PrintRoundedIcon />
                </LoadingButton>
              </Grid>
            </Grid>
            {laporan?.data?.length !== 0 &&  <Box sx={{mt: 5}}>
              <Table
                headers={[
                  "No",
                  "Deskripsi",
                  "Quantity",
                  "Harga",
                  "Total",
                  "Jenis",
                ]}
              >
                {!laporan.loading.request &&
                  laporan.data.map((data, key) => (
                    <TableRow key={key}>
                      <TableCell>{key + 1}</TableCell>
                      <TableCell>
                        {
                          (data?.akun?.kategori === 'revenue' || data?.akun?.kategori === 'etc') ? data?.product?.product_name : data?.deskripsi
                        }
                      </TableCell>
                      <TableCell>
                        {
                          (data?.akun?.kategori === 'revenue' || data?.akun?.kategori === 'etc') ? data?.quantity : '-'
                        }
                      </TableCell>
                      <TableCell>
                        Rp {
                          (data?.akun?.kategori === 'revenue' || data?.akun?.kategori === 'etc') ? convertPrice(data?.product?.price) : convertPrice(data?.jumlah)
                        }
                      </TableCell>
                      <TableCell>
                        Rp {
                          (data?.akun?.kategori === 'revenue' || data?.akun?.kategori === 'etc') ? convertPrice(data?.product?.price * data?.quantity) : convertPrice(data?.jumlah)
                        }
                      </TableCell>
                      <TableCell>
                        {
                          (data?.akun?.kategori === 'revenue' || data?.akun?.kategori === 'etc') ? 'Pemasukan' : 'Pengeluaran'
                        }
                      </TableCell>
                    </TableRow>
                  ))}
              </Table>
            </Box>}
            {laporan?.data?.length === 0 && <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5}}>
              <Box component="div" sx={{ width: "50%", px: 4 }}>
                <img
                  src={dataReportSvg}
                  alt="data-report"
                  style={{ width: "100%" }}
                />
                {laporan.loading.request && <LinearProgress sx={{ width: "100%" }} />}
              </Box>
            </Box>}
          </TabPanel>
          <TabPanel value={value} index={1}>
            Laba Rugi
          </TabPanel>
        </CardContent>
      </Card>
      <PreviewPDF  
        show={showDialogPreviewPDF}
        handleClose={() => setShowDialogPreviewPDF(false)}
        url={urlPDF}
      />
    </Box>
  );
}
