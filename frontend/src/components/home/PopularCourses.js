import { Box, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { courseList } from "../../pages/Courses";

const PopularCourses = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: 8, backgroundColor: "#f9fafb" }}>
      <Box maxWidth="1200px" mx="auto" px={3}>
        <Typography variant="h4" fontWeight={800} mb={1}>
          Popular Courses
        </Typography>

        <Typography color="text.secondary" mb={4}>
          Learn the most in-demand skills chosen by learners.
        </Typography>

        <Grid container spacing={4}>
          {courseList.map((course) => (
            <Grid item xs={12} md={4} key={course.id}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />

                <Typography fontWeight={700} mt={2}>
                  {course.title}
                </Typography>

                <Typography fontSize={14} color="text.secondary">
                  ⭐ {course.rating} ({course.reviews})
                </Typography>

                <Button
                  fullWidth
                  sx={{ mt: 2 }}
                  variant="contained"
                  onClick={() => navigate("/courses")}
                >
                  View Course
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PopularCourses;
