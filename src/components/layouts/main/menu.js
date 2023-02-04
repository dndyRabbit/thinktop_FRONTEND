import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';

const Menu = [
  {
    path: "/app/dashbard",
    parent: "dashboard",
    title: "Beranda",
    icon: <DashboardRoundedIcon />,
    children: null,
  },
  {
    path: "/app/produk",
    parent: "produk",
    title: "Produk",
    icon: <InventoryRoundedIcon />,
    children: null,
  },
  {
    path: "/app/akun",
    parent: "akun",
    title: "Akun",
    icon: <AccountBalanceWalletRoundedIcon />,
    children: null,
  },
  {
    path: "/app/pembelian",
    parent: "pembelian",
    title: "Pembelian",
    icon: <ShoppingBagRoundedIcon />,
    children: null,
  },
  {
    path: "/biaya",
    parent: "biaya",
    title: "Biaya",
    icon: <PaymentsRoundedIcon />,
    children: null,
  },
  {
    path: "/laporan",
    parent: "laporan",
    title: "Laporan",
    icon: <ReceiptLongRoundedIcon />,
    children: null,
  },
  {
    path: "/karyawan",
    parent: "karyawan",
    title: "Karyawan",
    icon: <PeopleRoundedIcon />,
    children: null,
  },
];

export default Menu;
