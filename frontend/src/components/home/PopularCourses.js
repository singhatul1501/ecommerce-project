import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
  Chip,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const courses = [
  {
    title: "Full Stack Web Development",
    level: "Beginner",
    duration: "6 months",
    rating: "4.8",
    students: "8,540",
    price: "₹24,999",
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de01f17",
  },
  {
    title: "Data Science & Machine Learning",
    level: "Intermediate",
    duration: "8 months",
    rating: "4.9",
    students: "6,230",
    price: "₹29,999",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Cloud Computing with AWS",
    level: "Intermediate",
    duration: "4 months",
    rating: "4.7",
    students: "4,890",
    price: "₹19,999",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Cyber Security Fundamentals",
    level: "Beginner",
    duration: "5 months",
    rating: "4.6",
    students: "3,420",
    price: "₹22,999",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    title: "Digital Marketing Mastery",
    level: "Beginner",
    duration: "3 months",
    rating: "4.5",
    students: "5,670",
    price: "₹14,999",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40",
  },
  {
    title: "UI/UX Design Professional",
    level: "Beginner",
    duration: "4 months",
    rating: "4.7",
    students: "4,320",
    price: "₹18,999",
    image:
      "https://images.unsplash.com/photo-1587614382346-acb6d1c1f8c1",
  },
];

const PopularCourses = () => {
  return (
    <Box py={10} px={{ xs: 2, md: 8 }} bgcolor="#ffffff">
      {/* Heading */}
      <Box textAlign="center" mb={6}>
        <Typography fontSize={32} fontWeight={800}>
          Popular Courses
        </Typography>
        <Typography color="text.secondary">
          Explore our most in-demand programs
        </Typography>
      </Box>

      {/* Centered Grid Wrapper */}
      <Box
        maxWidth={1200}
        mx="auto"
        display="flex"
        justifyContent="center"
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          {courses.map((course, index) => (
            <Grid
              item
              key={index}
              xs={6}   // mobile → 2 cards
              sm={4}   // tablet → 3 cards
              md={4}   // laptop → 3 cards
              lg={4}
              xl={4}
            >
              <Paper
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 4,
                  overflow: "hidden",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={course.image}
                  alt={course.title}
                  onError={(e) =>
                    (e.target.src =
                      "https://images.unsplash.com/photo-1498050108023-c5249f4df085")
                  }
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                  }}
                />

                {/* Content */}
                <Box
                  p={3}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  {/* Tags */}
                  <Box display="flex" gap={1} mb={1}>
                    <Chip
                      label={course.level}
                      size="small"
                      color="success"
                    />
                    <Chip
                      label={course.duration}
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  {/* Title */}
                  <Typography fontWeight={700} mb={1}>
                    {course.title}
                  </Typography>

                  {/* Rating */}
                  <Box display="flex" alignItems="center" gap={1}>
                    <StarRoundedIcon sx={{ color: "#fbbf24" }} />
                    <Typography fontSize={14}>
                      {course.rating} · {course.students} students
                    </Typography>
                  </Box>

                  {/* Spacer */}
                  <Box flexGrow={1} />

                  {/* Price + Button */}
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Typography fontWeight={800}>
                      {course.price}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        borderRadius: 2,
                      }}
                    >
                      View Details
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* View All */}
      <Box textAlign="center" mt={6}>
        <Button
          variant="outlined"
          size="large"
          sx={{ borderRadius: 3 }}
        >
          View All Courses
        </Button>
      </Box>
    </Box>
  );
};

export default PopularCourses;
