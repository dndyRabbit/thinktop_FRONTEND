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
import JurnalUmumPage from "../../pages/jurnalUmum";
import TambahJurnalPage from "../../pages/jurnalUmum/tambahJurnal.page";
import DetailJurnal from "../../pages/jurnalUmum/detailJurnal.page";
import BukuBesarPage from "../../pages/bukuBesar";
import WaktuBukuBesar from "../../pages/bukuBesar/waktuBukuBesar.page";
import DetailBukuBesar from "../../pages/bukuBesar/detailBukuBesar.page";
import NeracaSaldoPage from "../../pages/neracaSaldo";
import DetailNeracaSaldoPage from "../../pages/neracaSaldo/detailNeracaSaldo.page";

const MainRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index path="" element={<Navigate replace to="/login" />} /> */}
          <Route path="" element={<>DASHBOARD</>} />
          <Route path="profil" element={<>PROFIL</>} />
          <Route path="akun" element={<AkunPage />} />
          <Route path="akun/tambah" element={<TambahAkunPage />} />
          <Route path="jurnal-umum" element={<JurnalUmumPage />} />
          <Route path="jurnal-umum/tambah" element={<TambahJurnalPage />} />
          <Route path="jurnal-umum/:waktu" element={<DetailJurnal />} />
          <Route path="buku-besar" element={<BukuBesarPage />} />
          <Route path="buku-besar/:akun" element={<WaktuBukuBesar />} />
          <Route path="buku-besar/:akun/:waktu" element={<DetailBukuBesar />} />
          <Route path="neraca-saldo" element={<NeracaSaldoPage />} />
          <Route
            path="neraca-saldo/:waktu"
            element={<DetailNeracaSaldoPage />}
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />;
        <Route path="*" element={<>HALAMAN TIDAK ADA.</>} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
