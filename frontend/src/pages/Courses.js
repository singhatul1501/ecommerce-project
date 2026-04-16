import {
    Box,
    Typography,
    Card,
    Button,
    Chip,
    Grid,
    Checkbox,
    FormControlLabel,
    RadioGroup,
    Radio,
    Slider,
} from "@mui/material";

/* ================= CURRENCY UTILS ================= */
const USD_TO_INR = 83;

const formatINR = (usdPrice) => {
    if (usdPrice == null) return "";

    const inr = usdPrice * USD_TO_INR;

    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(inr);
};

// COURSE DATA 
export const courseList = [
    {
        id: "python",
        title: "Advanced Python for Data Engineering",
        category: "Development",
        duration: "12h 45m",
        price: 89,
        oldPrice: 120,
        rating: 4.8,
        reviews: 2450,
        tag: "Bestseller",
        image:
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    },
    {
        id: "react",
        title: "Mastering React 18 & Next.js 14",
        category: "Web Dev",
        duration: "22h 10m",
        price: 119,
        rating: 5.0,
        reviews: 890,
        tag: "New",
        image:
            "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    },
    {
        id: "design",
        title: "UI/UX Strategy: High-Fidelity Design",
        category: "Design",
        duration: "8h 15m",
        price: 54.99,
        rating: 4.7,
        reviews: 1210,
        image:
            "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    },
    {
        id: "data",
        title: "Predictive Analytics with R & Python",
        category: "Data Science",
        duration: "18h 30m",
        price: 95,
        rating: 4.6,
        reviews: 622,
        image:
            "https://images.unsplash.com/photo-1523289333742-be1143f6b766",
    },
    {
        id: "marketing",
        title: "Digital Marketing & Growth Hacking",
        category: "Business",
        duration: "6h 00m",
        price: 45,
        oldPrice: 150,
        rating: 4.9,
        reviews: 3800,
        tag: "Trending",
        image:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786",
    },
    {
        id: "java",
        title: "Java Spring Boot: Microservices Architecture",
        category: "Development",
        duration: "30h 20m",
        price: 149,
        rating: 4.7,
        reviews: 415,
        image:
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    },
];

/* ================= FILTER SIDEBAR ================= */
const Filters = () => (
    <Grid item xs={12} md={4} lg={3}>
        <Box
            sx={{

                width: 350,
                backgroundColor: "#fff",
                borderRadius: 3,
                p: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                position: "sticky",
                top: 100,
                height: "fit-content",
            }}
        >
            <Typography fontWeight={700}>Filters</Typography>
            <Typography fontSize={14} color="text.secondary" mb={3}>
                Refine your learning path
            </Typography>

            <Typography fontSize={12} fontWeight={700} mb={1}>
                CATEGORIES
            </Typography>
            {["Development", "Design", "Business", "Data Science"].map((c) => (
                <FormControlLabel
                    key={c}
                    control={<Checkbox />}
                    label={c}
                />
            ))}

            <Typography fontSize={12} fontWeight={700} mt={3} mb={1}>
                DIFFICULTY
            </Typography>
            <RadioGroup>
                {["Beginner", "Intermediate", "Expert"].map((d) => (
                    <FormControlLabel
                        key={d}
                        value={d}
                        control={<Radio />}
                        label={d}
                    />
                ))}
            </RadioGroup>

            <Typography fontSize={12} fontWeight={700} mt={3} mb={1}>
                PRICE RANGE
            </Typography>
            <Slider />

            <Button
                fullWidth
                variant="contained"
                sx={{
                    mt: 3,
                    borderRadius: 3,
                    py: 1.2,
                    fontWeight: 700,
                    background: "linear-gradient(135deg,#2563eb,#9333ea)",
                }}
            >
                Apply Filters
            </Button>
        </Box>
    </Grid>
);

/* ================= COURSE CARD ================= */
const CourseCard = ({ course }) => (
    <Card
        sx={{
            borderRadius: 4,
            overflow: "hidden",
            backgroundColor: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            transition: "all 0.3s ease",
            "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            },
        }}
    >
        <Box sx={{ position: "relative" }}>
            <Box
                component="img"
                src={course.image}
                alt={course.title}
                sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                }}
            />

            {course.tag && (
                <Chip
                    label={course.tag}
                    size="small"
                    sx={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        backgroundColor: "#7c3aed",
                        color: "#fff",
                        fontWeight: 700,
                    }}
                />
            )}
        </Box>

        <Box p={3}>
            <Typography fontSize={12} color="text.secondary" mb={0.5}>
                {course.category} • {course.duration}
            </Typography>

            <Typography fontWeight={700} mb={1}>
                {course.title}
            </Typography>

            <Typography fontSize={14} mb={2}>
                ⭐ {course.rating} ({course.reviews})
            </Typography>

            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
            >
                <Box>
                    <Typography fontWeight={800} fontSize={20}>
                        {formatINR(course.price)}
                    </Typography>

                    {course.oldPrice && (
                        <Typography
                            fontSize={12}
                            color="text.secondary"
                            sx={{ textDecoration: "line-through" }}
                        >
                            {formatINR(course.oldPrice)}
                        </Typography>
                    )}
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        borderRadius: 3,
                        textTransform: "none",
                        fontWeight: 700,
                        px: 3,
                        background:
                            "linear-gradient(135deg,#2563eb,#9333ea)",
                    }}
                >
                    Buy Now
                </Button>
            </Box>
        </Box>
    </Card>
);

/* ================= PAGE ================= */
const Courses = () => {
    return (
        <Box sx={{ backgroundColor: "#f9fafb", minHeight: "100vh" }}>
            <Box
                sx={{
                    maxWidth: "1440px",

                    px: 3,
                    py: 4,
                    display: "flex",
                    gap: 4,
                }}
            >
                <Filters />

                <Box flex={1}>
                    <Typography fontSize={14} color="text.secondary" mb={1}>
                        Home / Course Catalog
                    </Typography>

                    <Typography
                        fontSize={36}
                        fontWeight={800}
                        letterSpacing="-0.02em"
                        mb={1}
                    >
                        Industry Mastery
                    </Typography>

                    <Typography fontSize={16} color="text.secondary" mb={4}>
                        Discover 1,200+ specialized courses curated for modern professionals.
                    </Typography>


                    <Grid container spacing={4}>
                        {courseList.map((course) => (
                            <Grid item xs={12} md={6} lg={4} key={course.id}>
                                <CourseCard course={course} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Courses;
