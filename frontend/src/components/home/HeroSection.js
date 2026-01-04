import {
    Box,
    Grid,
    Typography,
    Button,
    TextField,
    InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const HeroSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                background: "linear-gradient(180deg, #f5f6ff 0%, #ffffff 100%)",
                py: { xs: 8, md: 12 },
            }}
        >
            <Box maxWidth="1200px" mx="auto" px={{ xs: 2, md: 4 }}>
                <Grid container spacing={6} alignItems="stretch">

                    {/* LEFT CONTENT */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: 32, md: 48 },
                                    fontWeight: 800,
                                    lineHeight: 1.15,
                                    color: "#0f172a",
                                }}
                            >
                                Upskill with <br />
                                <Box
                                    component="span"
                                    sx={{
                                        background: "linear-gradient(90deg,#5f5cff,#8a2cff)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Industry-Ready
                                </Box>
                                <br />
                                Online Courses
                            </Typography>

                            <Typography mt={2} color="#475569" maxWidth={520}>
                                Job-oriented learning and certification for students and professionals.
                                Master the skills top companies are hiring for today.
                            </Typography>

                            <TextField
                                fullWidth
                                placeholder="Search Data Science, Web Dev..."
                                sx={{
                                    mt: 4,
                                    maxWidth: 420,
                                    backgroundColor: "#ffffff",
                                    borderRadius: "px",          // pill shape
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "999px",        // IMPORTANT
                                        height: 52,
                                        paddingLeft: 1,
                                    },
                                    "& .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#e2e8f0",
                                    },
                                    "&:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#c7d2fe",
                                    },
                                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#6366f1",
                                        borderWidth: 2,
                                    },
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon sx={{ color: "#64748b" }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />


                            <Box mt={4} display="flex" gap={2} flexWrap="wrap">
                                <Button
                                    variant="contained"
                                    sx={{
                                        px: 4,
                                        py: 1.4,
                                        borderRadius: 3,
                                        fontWeight: 600,
                                        textTransform: "none",
                                        background: "linear-gradient(90deg,#5f5cff,#8a2cff)",
                                    }}
                                >
                                    Browse Courses →
                                </Button>

                                <Button
                                    variant="outlined"
                                    startIcon={<CallOutlinedIcon />}
                                    sx={{
                                        px: 4,
                                        py: 1.4,
                                        borderRadius: 3,
                                        fontWeight: 600,
                                        textTransform: "none",
                                    }}
                                >
                                    Book a Free Call
                                </Button>
                            </Box>

                            <Box mt={3} display="flex" gap={3}>
                                {["Certified Courses", "Expert Mentors"].map((item) => (
                                    <Box key={item} display="flex" alignItems="center" gap={1}>
                                        <CheckCircleRoundedIcon sx={{ color: "#22c55e", fontSize: 18 }} />
                                        <Typography fontSize={14}>{item}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    {/* RIGHT IMAGE */}
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    position: "relative",     // 🔒 REQUIRED FOR BADGE
                                    width: "100%",
                                    maxWidth: 520,
                                    height: 420,
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    boxShadow: "0 30px 60px rgba(0,0,0,0.15)",
                                }}
                            >
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                                    alt="Learning"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />


                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: 16,
                                        right: 16,
                                        backgroundColor: "#ffffff",
                                        px: 2.5,
                                        py: 1.4,
                                        borderRadius: 3,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.2,
                                        boxShadow: "0 12px 25px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    <TrendingUpRoundedIcon sx={{ color: "#22c55e" }} />
                                    <Box>
                                        <Typography fontSize={12} color="text.secondary">
                                            Course Completion
                                        </Typography>
                                        <Typography fontWeight={800}>
                                            98% Success
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
};

export default HeroSection;
