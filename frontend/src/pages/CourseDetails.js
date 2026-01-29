import { useParams } from "react-router-dom";
import { Box, Typography, Button, Chip } from "@mui/material";

/* SAME DATA (TEMP — WILL MOVE TO BACKEND LATER) */
const courseList = [
  {
    id: "python",
    title: "Advanced Python for Data Engineering",
    category: "Development",
    duration: "12h 45m",
    price: 89,
    rating: 4.8,
    reviews: 2450,
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    description:
      "Learn advanced Python concepts including data pipelines, ETL, performance optimization, and real-world engineering workflows.",
  },
  {
    id: "react",
    title: "Mastering React 18 & Next.js 14",
    category: "Web Development",
    duration: "22h 10m",
    price: 119,
    rating: 5.0,
    reviews: 890,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    description:
      "Build modern, scalable frontend applications using React 18, hooks, Next.js routing, SSR, and production best practices.",
  },
];

const CourseDetails = () => {
  const { id } = useParams();
  const course = courseList.find((c) => c.id === id);

  if (!course) {
    return (
      <Typography sx={{ p: 4 }}>
        Course not found
      </Typography>
    );
  }

  return (
    <Box sx={{ backgroundColor: "#f9fafb", minHeight: "100vh", py: 4 }}>
      <Box sx={{ maxWidth: "1100px", mx: "auto", px: 3 }}>
        {/* IMAGE */}
        <Box
          component="img"
          src={course.image}
          alt={course.title}
          sx={{
            width: "100%",
            height: 360,
            objectFit: "cover",
            borderRadius: 4,
            mb: 4,
          }}
        />

        {/* INFO */}
        <Chip label={course.category} sx={{ mb: 2 }} />

        <Typography
          fontSize={32}
          fontWeight={800}
          mb={1}
        >
          {course.title}
        </Typography>

        <Typography fontSize={14} mb={2}>
          ⭐ {course.rating} ({course.reviews}) • {course.duration}
        </Typography>

        <Typography
          fontSize={18}
          fontWeight={700}
          mb={3}
        >
          ${course.price}
        </Typography>

        <Typography
          fontSize={16}
          color="text.secondary"
          mb={4}
        >
          {course.description}
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: 3,
            fontWeight: 700,
            px: 4,
            py: 1.5,
          }}
        >
          Buy This Course
        </Button>
      </Box>
    </Box>
  );
};

export default CourseDetails;
