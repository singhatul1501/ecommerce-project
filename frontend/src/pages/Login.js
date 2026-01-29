// import { Container, TextField, Button, Typography, Box, Link } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";
// import { useState } from "react";
// import api from "../services/api";
// import { InputAdornment, IconButton } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPassword, setShowPassword] = useState(false);
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await api.post("/login", {
//                 email,
//                 password,
//             });
//             const { token } = response.data;

//             // Store JWT
//             localStorage.setItem("token", token);

//             alert("Login successful");

//             // Optional: redirect later
//             // navigate("/");
//         } catch (error) {
//             console.error("Login error:", error);
//             alert(error.response?.data?.message || "Login failed");
//         }
//     };
//     return (
//         <Container maxWidth="sm" sx={{ mt: 5 }}>
//             <Typography sx={{ mt: 2 }}>
//                 Don’t have an account?{" "}
//                 <Link component={RouterLink} to="/register">
//                     Register
//                 </Link>
//             </Typography>

//             <Box component="form" onSubmit={handleSubmit}>
//                 <TextField
//                     label="Email"
//                     type="email"
//                     fullWidth
//                     margin="normal"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />

//                 <TextField
//                     label="Password"
//                     type={showPassword ? "text" : "password"}
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     InputProps={{
//                         endAdornment: (
//                             <InputAdornment position="end">
//                                 <IconButton
//                                     onClick={() => setShowPassword(!showPassword)}
//                                     edge="end"
//                                 >
//                                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                                 </IconButton>
//                             </InputAdornment>
//                         ),
//                     }}
//                 />

//                 <Button
//                     type="submit"
//                     variant="contained"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                 >
//                     Login
//                 </Button>
//             </Box>
//         </Container>
//     );
// }

// export default Login;

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

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/login", {
                email,
                password,
            });
            const { token } = response.data;
            localStorage.setItem("token", token);
            alert("Login successful");
        } catch (error) {
            console.error("Login error:", error);
            alert(error.response?.data?.message || "Login failed");
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
                    {/* LEFT */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ maxWidth: 520 }}>
                            <Typography variant="h3" fontWeight={700} gutterBottom>
                                Welcome back to{" "}
                                <Box
                                    component="span"
                                    sx={{
                                        background: "linear-gradient(135deg,#5f5cff,#8a2cff)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        fontWeight: 700,
                                    }}
                                >
                                    SmartLearnX
                                </Box>

                            </Typography>

                            <Typography color="text.secondary" sx={{ mb: 4 }}>
                                Continue your learning journey and unlock new
                                opportunities.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* RIGHT */}
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
                                Welcome Back
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                textAlign="center"
                                sx={{ mb: 3 }}
                            >
                                Please enter your details to sign in
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit}>
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
                                                    onClick={() =>
                                                        setShowPassword(!showPassword)
                                                    }
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
                                    Sign In
                                </Button>

                                <Divider sx={{ my: 2 }}>OR</Divider>

                                <Typography variant="body2" textAlign="center">
                                    Don’t have an account?{" "}
                                    <Link component={RouterLink} to="/register"
                                        sx={{
                                            background: "linear-gradient(135deg,#5f5cff,#8a2cff)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            fontWeight: 700,
                                        }}>
                                        Sign up
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

export default Login;
