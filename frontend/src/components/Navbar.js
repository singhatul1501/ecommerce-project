// import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           ASDFGHJK
//         </Typography>

//         <Box>
//           <Button component={RouterLink} to="/login" color="inherit">
//             Login
//           </Button>
//           <Button component={RouterLink} to="/register" color="inherit">
//             Register
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  Button,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  return (
    <AppBar
      position="static"
      elevation={1}
      sx={{ bgcolor: "white", color: "black" }}
    >
      <Toolbar sx={{ gap: 3 }}>
        {/* Logo */}
        <Box sx={{ lineHeight: 1 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#2874f0" }}
          >
            Atul
          </Typography>
        </Box>

        {/* Search Bar */}
        <Box
          sx={{
            flex: 1,
            maxWidth: 700,
            display: "flex",
            alignItems: "center",
            bgcolor: "#f1f5ff",
            px: 2,
            py: 0.8,
            borderRadius: 999,
          }}
        >
          <SearchIcon sx={{ color: "gray", mr: 1 }} />
          <InputBase
            placeholder="Search for Products, Brands and More"
            sx={{ width: "100%" }}
          />
        </Box>

        {/* Login */}
        <Button
          color="inherit"
          startIcon={<AccountCircleOutlinedIcon />}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ textTransform: "none", fontWeight: 500 }}
        >
          Login
        </Button>

        {/* Cart */}
        <Button
          color="inherit"
          startIcon={<ShoppingCartOutlinedIcon />}
          sx={{ textTransform: "none", fontWeight: 500 }}
        >
          Cart
        </Button>

        {/* Seller */}
        <Button
          color="inherit"
          startIcon={<StorefrontOutlinedIcon />}
          sx={{ textTransform: "none", fontWeight: 500 }}
        >
          Become a Seller
        </Button>

        {/* More */}
        <IconButton color="inherit">
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
