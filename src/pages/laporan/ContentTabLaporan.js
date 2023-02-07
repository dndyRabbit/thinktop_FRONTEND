import { Box, LinearProgress, TableRow, TableCell } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { convertPrice } from "../../utils/currency";
import Table from "../../components/table";
import dataReportSvg from "../../assets/svg/data_report.svg";
import { LoadingButton } from "@mui/lab";
import PrintRoundedIcon from "@mui/icons-material/PrintRounded";
import { useState } from "react";
import PreviewPDF from "../../components/shared/PreviewPDF";
import { printLaporan } from "../../store/actions/laporanAction";

export default function ContentTabLaporan() {
  const dispatch = useDispatch();
  const { laporan } = useSelector((state) => state);
  const [loadingGetUrlPdf, setLoadingGetUrlPdf] = useState(false);
  const [showDialogPrintPdf, setShowDialogPrintPdf] = useState(false);
  const [urlPdf, setUrlPdf] = useState(null);

  const handlePrint = async () => {
    setLoadingGetUrlPdf(true);
    const dataPrint = await dispatch(printLaporan());
    if (dataPrint) {
      setUrlPdf(dataPrint);
      setShowDialogPrintPdf(true);
    }
    setLoadingGetUrlPdf(false);
  };
  return (
    <Box component="div">
      {laporan?.data?.length !== 0 && (
        <Box component="div" sx={{ mt: 2 }}>
          <Box
            component="div"
            sx={{ mb: 2, display: "flex", justifyContent: "end" }}
          >
            <LoadingButton
              loading={loadingGetUrlPdf}
              sx={{ ml: 1 }}
              variant="contained"
              disableElevation
              onClick={() => handlePrint()}
            >
              <PrintRoundedIcon />
            </LoadingButton>
          </Box>
          <Table
            headers={["No", "Deskripsi", "Quantity", "Harga", "Total", "Jenis"]}
          >
            {!laporan.loading.request &&
              laporan.data.map((data, key) => (
                <TableRow key={key}>
                  <TableCell>{key + 1}</TableCell>
                  <TableCell>
                    {data?.akun?.kategori === "revenue" ||
                    data?.akun?.kategori === "etc"
                      ? data?.product?.product_name
                      : data?.deskripsi}
                  </TableCell>
                  <TableCell>
                    {data?.akun?.kategori === "revenue" ||
                    data?.akun?.kategori === "etc"
                      ? data?.quantity
                      : "-"}
                  </TableCell>
                  <TableCell>
                    Rp{" "}
                    {data?.akun?.kategori === "revenue" ||
                    data?.akun?.kategori === "etc"
                      ? convertPrice(data?.product?.price)
                      : convertPrice(data?.jumlah)}
                  </TableCell>
                  <TableCell>
                    Rp{" "}
                    {data?.akun?.kategori === "revenue" ||
                    data?.akun?.kategori === "etc"
                      ? convertPrice(data?.product?.price * data?.quantity)
                      : convertPrice(data?.jumlah)}
                  </TableCell>
                  <TableCell>
                    {data?.akun?.kategori === "revenue" ||
                    data?.akun?.kategori === "etc"
                      ? "Pemasukan"
                      : "Pengeluaran"}
                  </TableCell>
                </TableRow>
              ))}
          </Table>
        </Box>
      )}
      {laporan?.data?.length === 0 && (
        <Box
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 5,
          }}
        >
          <Box component="div" sx={{ width: "50%", px: 4 }}>
            <img
              src={dataReportSvg}
              alt="data-report"
              style={{ width: "100%" }}
            />
            {laporan.loading.request && (
              <LinearProgress sx={{ width: "100%" }} />
            )}
          </Box>
        </Box>
      )}
      <PreviewPDF
        show={showDialogPrintPdf}
        handleClose={() => setShowDialogPrintPdf(false)}
        url={urlPdf}
      />
    </Box>
  );
}
