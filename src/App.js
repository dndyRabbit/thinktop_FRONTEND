import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index path="" element={<Navigate replace to="/login" />} /> */}
          <Route path="" element={<>DASHBOARD</>} />
          <Route path="profil" element={<>PROFIL</>} />
          <Route path="akun" element={<>AKUN</>} />
          <Route path="jurnal-umum" element={<>JURNAL UMUM</>} />
          <Route path="buku-besar" element={<>BUKU BESAR</>} />
          <Route path="neraca-saldo" element={<>NERACA SALDO</>} />
        </Route>
        {/* <Route path="/login" element={<PAGES.LoginPage />} /> */}
        <Route path="*" element={<>HALAMAN TIDAK ADA.</>} />
      </Routes>
    </Router>
  );
}

export default App;
