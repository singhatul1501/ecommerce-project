import { useEffect, useRef, useState } from "react";
import {
    Box,
    Typography,
    Paper,
    Avatar,
    useMediaQuery,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const testimonials = [
    {
        text: "The Full Stack course was amazing! Got placed within 2 months.",
        name: "Priya Sharma",
        role: "Software Engineer at TCS",
        image: "https://i.pravatar.cc/150?img=1",
    },
    {
        text: "Excellent mentors and practical projects.",
        name: "Rahul Verma",
        role: "Data Analyst at Infosys",
        image: "https://i.pravatar.cc/150?img=2",
    },
    {
        text: "Real-world projects helped me land my dream job.",
        name: "Sneha Patel",
        role: "UI/UX Designer at Wipro",
        image: "https://i.pravatar.cc/150?img=3",
    },
    {
        text: "Support team is extremely responsive.",
        name: "Amit Kumar",
        role: "Backend Developer",
        image: "https://i.pravatar.cc/150?img=4",
    },
    {
        text: "Perfect balance of theory and practice.",
        name: "Neha Singh",
        role: "Cloud Engineer",
        image: "https://i.pravatar.cc/150?img=5",
    },
    {
        text: "Mentorship made all the difference.",
        name: "Rohit Mehta",
        role: "Frontend Developer",
        image: "https://i.pravatar.cc/150?img=6",
    },
    {
        text: "Highly recommended for career switch.",
        name: "Anjali Gupta",
        role: "Data Scientist",
        image: "https://i.pravatar.cc/150?img=7",
    },
    {
        text: "Industry-level curriculum.",
        name: "Kunal Shah",
        role: "DevOps Engineer",
        image: "https://i.pravatar.cc/150?img=8",
    },
    {
        text: "Worth every rupee.",
        name: "Pooja Nair",
        role: "QA Engineer",
        image: "https://i.pravatar.cc/150?img=9",
    },
];

const SuccessStories = () => {
    const isMobile = useMediaQuery("(max-width:600px)");
    const isTablet = useMediaQuery("(max-width:900px)");

    const VISIBLE = isMobile ? 1 : isTablet ? 2 : 3;

    const [index, setIndex] = useState(0);
    const startX = useRef(0);

    /* AUTO SLIDE */
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    /* SWIPE SUPPORT */
    const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
    const onTouchEnd = (e) => {
        const diff = startX.current - e.changedTouches[0].clientX;
        if (diff > 50) setIndex((i) => (i + 1) % testimonials.length);
        if (diff < -50)
            setIndex((i) =>
                i === 0 ? testimonials.length - 1 : i - 1
            );
    };

    const visibleItems = Array.from({ length: VISIBLE }).map(
        (_, i) => testimonials[(index + i) % testimonials.length]
    );

    return (
        <Box py={12} bgcolor="#ffffff">
            {/* HEADER */}
            <Box textAlign="center" mb={8}>
                <Typography fontSize={34} fontWeight={800}>
                    Student Success Stories
                </Typography>
                <Typography color="text.secondary">
                    Hear from our learners
                </Typography>
            </Box>

            {/* SLIDER */}
            <Box
                maxWidth={1200}
                mx="auto"
                px={2}
                overflow="hidden"
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <Box
                    display="flex"
                    gap={3}
                    justifyContent="center"
                    sx={{
                        transition: "transform 0.6s ease",
                    }}
                >
                    {visibleItems.map((item, i) => (
                        <Paper
                            key={i}
                            sx={{
                                width: isMobile ? "100%" : isTablet ? "48%" : "32%",
                                minHeight: 280,
                                p: 4,
                                borderRadius: 4,

                                /* 🌈 MODERN GRADIENT CARD */
                                background: "linear-gradient(180deg, #2563eb 0%, #9333ea 100%)",

                                /* DEPTH */
                                boxShadow: "0 10px 30px rgba(15,23,42,0.10)",

                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",

                                /* HOVER EFFECT */
                                transition: "all 0.35s ease",
                                "&:hover": {
                                    transform: "translateY(-8px)",
                                    boxShadow: "0 22px 50px rgba(15,23,42,0.18)",
                                    background:
                                        "linear-gradient(180deg, #ffffff 0%, #e8edff 100%)",
                                },
                            }}
                        >

                            {/* STARS */}
                            <Box mb={2}>
                                {[...Array(5)].map((_, i) => (
                                    <StarRoundedIcon
                                        key={i}
                                        sx={{ color: "#fbbf24" }}
                                    />
                                ))}
                            </Box>

                            {/* TEXT */}
                            <Typography color="#334155" mb={3}>
                                “{item.text}”
                            </Typography>

                            {/* USER */}
                            <Box display="flex" gap={2} alignItems="center">
                                <Avatar src={item.image} />
                                <Box>
                                    <Typography fontWeight={700}>
                                        {item.name}
                                    </Typography>
                                    <Typography fontSize={13} color="text.secondary">
                                        {item.role}
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    ))}
                </Box>
            </Box>

            {/* DOTS */}
            <Box display="flex" justifyContent="center" mt={4} gap={1}>
                {testimonials.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => setIndex(i)}
                        sx={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            cursor: "pointer",
                            bgcolor: i === index ? "#2563eb" : "#cbd5f5",
                            transition: "0.3s",
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default SuccessStories;
