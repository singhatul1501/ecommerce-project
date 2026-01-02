import { Container, TextField, Button, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";
import { InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

            // Store JWT
            localStorage.setItem("token", token);

            alert("Login successful");

            // Optional: redirect later
            // navigate("/");
        } catch (error) {
            console.error("Login error:", error);
            alert(error.response?.data?.message || "Login failed");
        }
    };
    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography sx={{ mt: 2 }}>
                Don’t have an account?{" "}
                <Link component={RouterLink} to="/register">
                    Register
                </Link>
            </Typography>

            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Email"
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
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
}

export default Login;
