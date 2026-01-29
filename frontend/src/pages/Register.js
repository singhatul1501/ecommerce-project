// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Link,
// } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import { useState } from "react";
// import api from "../services/api";
// import { InputAdornment, IconButton } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";


// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await api.post("/register", {
//         name,
//         email,
//         password,
//       });

//       alert(response.data.message);
//     } catch (error) {
//       console.error("Register error:", error);
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 5 }}>
//       <Typography sx={{ mt: 2 }}>
//         Already have an account?{" "}
//         <Link component={RouterLink} to="/login">
//           Login
//         </Link>
//       </Typography>

//       <Box component="form" onSubmit={handleSubmit}>
//         <TextField
//           label="Full Name"
//           fullWidth
//           margin="normal"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />

//         <TextField
//           label="Email"
//           type="email"
//           fullWidth
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <TextField
//           label="Password"
//           type={showPassword ? "text" : "password"}
//           fullWidth
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton
//                   onClick={() => setShowPassword(!showPassword)}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />


//         <TextField
//           label="Confirm Password"
//           type={showConfirmPassword ? "text" : "password"}
//           fullWidth
//           margin="normal"
//           value={confirmPassword}
//           onChange={(e) => setConfirmPassword(e.target.value)}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton
//                   onClick={() =>
//                     setShowConfirmPassword(!showConfirmPassword)
//                   }
//                   edge="end"
//                 >
//                   {showConfirmPassword ? (
//                     <VisibilityOff />
//                   ) : (
//                     <Visibility />
//                   )}
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//         <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
//           Register
//         </Button>
//       </Box>
//     </Container>
//   );
// }

// export default Register;

import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Paper,
  Grid,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const NAVBAR_HEIGHT = 72;

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await api.post("/register", {
        name,
        email,
        password,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",  
        pt: `${NAVBAR_HEIGHT}px`,
        background:
          "linear-gradient(135deg, #f3f0ff 0%, #f8fbff 60%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* LEFT CONTENT */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 520 }}>
              <Typography variant="h3" fontWeight={700} gutterBottom>
                Join{" "}
                <Box
                  component="span"
                  sx={{
                    background: "linear-gradient(90deg,#5f5cff,#8a2cff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  5000+
                </Box>{" "}
                Learners Transforming Their Careers
              </Typography>

              <Typography color="text.secondary" sx={{ mb: 4 }}>
                Access industry-ready courses, mentorship from top
                professionals, and get certified. Your journey to
                mastering new skills starts here.
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  maxWidth: 420,
                }}
              >
                <Typography fontStyle="italic" color="text.secondary">
                  “The bootcamp completely changed my career trajectory.
                  Mentors were incredibly supportive and the curriculum
                  was spot on.”
                </Typography>

                <Typography fontWeight={600} sx={{ mt: 2 }}>
                  Sarah Jenkins
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Frontend Developer at TechCorp
                </Typography>
              </Paper>
            </Box>
          </Grid>

          {/* RIGHT FORM */}
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                maxWidth: 420,
                width: "100%",
              }}
            >
              <Typography variant="h5" fontWeight={700} textAlign="center">
                Create Account
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="center"
                sx={{ mb: 3 }}
              >
                Start your 30-day free trial today
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  label="Full Name"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <TextField
                  label="Email Address"
                  type="email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  fullWidth
                  margin="normal"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(
                              !showConfirmPassword
                            )
                          }
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    background:
                      "linear-gradient(135deg,#5f5cff,#8a2cff)",
                  }}
                >
                  Sign Up
                </Button>

                <Divider sx={{ my: 2 }}>OR</Divider>

                <Typography variant="body2" textAlign="center">
                  Already have an account?{" "}
                  <Link component={RouterLink} to="/login"
                    sx={{
                      background: "linear-gradient(135deg,#5f5cff,#8a2cff)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      fontWeight: 700,
                    }}>
                    Log in
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Register;
