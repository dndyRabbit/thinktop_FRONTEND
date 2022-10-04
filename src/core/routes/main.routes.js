import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import AkunPage from "../../pages/akun";
import LoginPage from "../../pages/auth/Login";
import TambahAkunPage from "../../pages/akun/tambahAkun.page";
import Beranda from "../../pages";
import ProductPage from "../../pages/product";
import TambahProductPage from "../../pages/product/tambahProduct.page";
import TambahPembelianPage from "../../pages/Pembelian";
import LaporanMenuPage from "../../pages/Laporan";
import LaporanHarianPage from "../../pages/Laporan/harian.page";
import LaporanHarianDetail from "../../pages/Laporan/harian.detail.page";
import LaporanBulananPage from "../../pages/Laporan/bulanan.page";
import LaporanBulananDetail from "../../pages/Laporan/bulanan.detail.page";
import LaporanTahunanPage from "../../pages/Laporan/tahunan.page";
import LaporanTahunanDetail from "../../pages/Laporan/tahunan.detail.page";
import KaryawanPage from "../../pages/karyawan";
import TambahKaryawanPage from "../../pages/karyawan/tambahKaryawan.page";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index path="" element={<Navigate replace to="/login" />} /> */}
          <Route path="" element={<Beranda />} />
          <Route path="produk" element={<ProductPage />} />
          <Route path="produk/tambah" element={<TambahProductPage />} />
          <Route path="akun" element={<AkunPage />} />
          <Route path="akun/tambah" element={<TambahAkunPage />} />
          <Route path="pembelian" element={<TambahPembelianPage />} />
          <Route path="laporan" element={<LaporanMenuPage />} />
          <Route path="laporan/harian" element={<LaporanHarianPage />} />
          <Route
            path="laporan/harian/:waktu"
            element={<LaporanHarianDetail />}
          />
          <Route path="laporan/bulanan" element={<LaporanBulananPage />} />
          <Route
            path="laporan/bulanan/:waktu"
            element={<LaporanBulananDetail />}
          />
          <Route path="laporan/tahunan" element={<LaporanTahunanPage />} />
          <Route
            path="laporan/tahunan/:waktu"
            element={<LaporanTahunanDetail />}
          />
          <Route path="karyawan" element={<KaryawanPage />} />
          <Route path="karyawan/tambah" element={<TambahKaryawanPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<>HALAMAN TIDAK ADA.</>} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
