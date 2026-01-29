// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   Button,
// } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";
// import { Link,} from "react-router-dom";

// const Navbar = () => {
//   return (
//     <AppBar
//       position="fixed"   
//       elevation={0}
//       sx={{
//         backgroundColor: "#ffffff",
//         borderBottom: "1px solid #eee",
//         zIndex: (theme) => theme.zIndex.drawer + 1,
//       }}
//     >
//       <Toolbar sx={{ px: { xs: 2, md: 8 }, justifyContent: "space-between" }}>
//         {/* LOGO */}
//         <Box display="flex" alignItems="center" gap={1.5}>
//           <Box
//             sx={{
//               width: 40,
//               height: 40,
//               borderRadius: 2,
//               background:
//                 "linear-gradient(135deg,#5f5cff,#8a2cff)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <SchoolIcon sx={{ color: "#fff" }} />
//           </Box>

//           <Typography fontSize={22} fontWeight={700} color="#111">
//             SmartLearnX
//           </Typography>
//         </Box>

//         {/* MENU */}
//         <Box display="flex" gap={4}>
//           {[
//             "Home",
//             "Courses",
//             "Programs",
//             "Pricing",
//             "About",
//             "Reviews",
//             "FAQ",
//             "Contact",
//           ].map((item) => (
//             <Typography
//               key={item}
//               sx={{
//                 cursor: "pointer",
//                 fontWeight: 500,
//                 color: "#444",
//                 "&:hover": { color: "#5f5cff" },
//               }}
//             >
//               {item}
//             </Typography>
//           ))}
//         </Box>

//         {/* ACTIONS */}
//         <Box display="flex" gap={2}>
//           <Button
//             component={Link}
//             to="/login"
//             variant="outlined"
//             sx={{
//               borderRadius: 2,
//               textTransform: "none",
//               fontWeight: 600,
//             }}
//           >
//             Login
//           </Button>

//           <Button
//             component={Link}
//             to="/register"
//             variant="contained"
//             sx={{
//               borderRadius: 2,
//               textTransform: "none",
//               fontWeight: 600,
//               background:
//                 "linear-gradient(135deg,#5f5cff,#8a2cff)",
//             }}
//           >
//             Get Started
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


// import {
//   AppBar,
//   Toolbar,
//   Box,
//   Typography,
//   Button,
// } from "@mui/material";
// import SchoolIcon from "@mui/icons-material/School";
// import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
// const isLoginPage = location.pathname === "/login";
//   /* ---------- HANDLERS ---------- */
//   const handleLogoClick = () => navigate("/");
//   const handleMenuClick = (path) => navigate(path);

//   return (
//     <AppBar
//       position="fixed"
//       elevation={0}
//       sx={{
//         backgroundColor: "#ffffff",
//         borderBottom: "1px solid #eee",
//         zIndex: (theme) => theme.zIndex.drawer + 1,
//       }}
//     >
//       <Toolbar sx={{ px: { xs: 2, md: 8 }, justifyContent: "space-between" }}>
//         {/* LOGO */}
//         <Box
//           display="flex"
//           alignItems="center"
//           gap={1.5}
//           onClick={handleLogoClick}
//           sx={{ cursor: "pointer" }}
//         >
//           <Box
//             sx={{
//               width: 40,
//               height: 40,
//               borderRadius: 2,
//               background:
//                 "linear-gradient(135deg,#5f5cff,#8a2cff)",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <SchoolIcon sx={{ color: "#fff" }} />
//           </Box>

//           <Typography fontSize={22} fontWeight={700} color="#111">
//             SmartLearnX
//           </Typography>
//         </Box>

//         {/* MENU */}
//         <Box display="flex" gap={4}>
//           {[
//             { label: "Home", path: "/" },
//             { label: "Courses", path: "/courses" },
//             { label: "Programs", path: "/programs" },
//             { label: "Pricing", path: "/pricing" },
//             { label: "About", path: "/about" },
//             { label: "Reviews", path: "/reviews" },
//             { label: "FAQ", path: "/faq" },
//             { label: "Contact", path: "/contact" },
//           ].map((item) => (
//             <Typography
//               key={item.label}
//               onClick={() => handleMenuClick(item.path)}
//               sx={{
//                 cursor: "pointer",
//                 fontWeight: 500,
//                 color: "#444",
//                 "&:hover": { color: "#5f5cff" },
//               }}
//             >
//               {item.label}
//             </Typography>
//           ))}
//         </Box>

//         {/* ACTIONS */}
//         <Box display="flex" gap={2}>
//           <Button
//             component={Link}
//             to="/login"
//             variant="outlined"
//             sx={{
//               borderRadius: 2,
//               textTransform: "none",
//               fontWeight: 600,
//             }}
//           >
//             Login
//           </Button>

//           <Button
//             component={Link}
//             to="/register"
//             variant="contained"
//             sx={{
//               borderRadius: 2,
//               textTransform: "none",
//               fontWeight: 600,
//               background:
//                 "linear-gradient(135deg,#5f5cff,#8a2cff)",
//             }}
//           >
//             Get Started
//           </Button>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const NAVBAR_HEIGHT = 72;


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";
  const isRegisterPage = location.pathname === "/register";


  /* ---------- HANDLERS ---------- */

  const handleMenuClick = (path) => navigate(path);
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Already on home → just scroll
      document
        .getElementById("hero-section")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home, then scroll
      navigate("/", { replace: false });

      setTimeout(() => {
        document
          .getElementById("hero-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        height: NAVBAR_HEIGHT,
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eee",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          height: "100%",
          px: { xs: 2, md: 8 },
          justifyContent: "space-between",
        }}
      >
        {/* LOGO */}
        <Box
          display="flex"
          alignItems="center"
          gap={1.5}
          onClick={handleLogoClick}
          sx={{ cursor: "pointer" }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: 2,
              background:
                "linear-gradient(135deg,#2563eb,#9333ea)",
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
            { label: "Home", path: "/" },
            { label: "Courses", path: "/courses" },
            { label: "Programs", path: "/programs" },
            { label: "Pricing", path: "/pricing" },
            { label: "About", path: "/about" },
            { label: "Reviews", path: "/reviews" },
            { label: "FAQ", path: "/faq" },
            { label: "Contact", path: "/contact" },
          ].map((item) => (
            <Typography
              key={item.label}
              onClick={() => handleMenuClick(item.path)}
              sx={{
                cursor: "pointer",
                fontWeight: 500,
                color: "#444",
                "&:hover": { color: "#5f5cff" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>

        {/* ACTIONS (CONDITIONAL) */}
        <Box display="flex" gap={2}>
          {/* Login page → show only Get Started */}
          {isLoginPage && (
            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                background:
                  "linear-gradient(135deg,#2563eb,#9333ea)",
              }}
            >
              Sign Up
            </Button>
          )}

          {/* Register page → show only Login */}
          {isRegisterPage && (
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 600,
                background:
                  "linear-gradient(135deg,#2563eb,#9333ea)",
              }}
            >
              Login
            </Button>
          )}

          {/* All other pages → show both */}
          {!isLoginPage && !isRegisterPage && (
            <>
              <Button
                component={Link}
                to="/login"
                variant="contained"
                sx={{
                  borderRadius: 2,
                  textTransform: "none",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg,#2563eb,#9333ea)",
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
                    "linear-gradient(135deg,#2563eb,#9333ea)",
                }}
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
