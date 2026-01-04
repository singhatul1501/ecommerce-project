import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"   
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eee",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ px: { xs: 2, md: 8 }, justifyContent: "space-between" }}>
        {/* LOGO */}
        <Box display="flex" alignItems="center" gap={1.5}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              background:
                "linear-gradient(135deg,#5f5cff,#8a2cff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SchoolIcon sx={{ color: "#fff" }} />
          </Box>

          <Typography fontSize={22} fontWeight={700} color="#111">
            SmartLearnX
          </Typography>
        </Box>

        {/* MENU */}
        <Box display="flex" gap={4}>
          {[
            "Home",
            "Courses",
            "Programs",
            "Pricing",
            "About",
            "Reviews",
            "FAQ",
            "Contact",
          ].map((item) => (
            <Typography
              key={item}
              sx={{
                cursor: "pointer",
                fontWeight: 500,
                color: "#444",
                "&:hover": { color: "#5f5cff" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* ACTIONS */}
        <Box display="flex" gap={2}>
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Login
          </Button>

          <Button
            component={Link}
            to="/register"
            variant="contained"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              fontWeight: 600,
              background:
                "linear-gradient(135deg,#5f5cff,#8a2cff)",
            }}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
