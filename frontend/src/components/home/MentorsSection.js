import { Box, Grid, Paper, Typography, Avatar } from "@mui/material";

const mentors = [
  {
    name: "Rahul Sharma",
    role: "Senior Developer",
    exp: "Ex-Google · 10+ years",
    image: "/assets/images/mentors/mentor1.jpg",
  },
  {
    name: "Priya Verma",
    role: "Data Scientist",
    exp: "Ex-Microsoft · 8+ years",
    image: "/assets/images/mentors/mentor2.jpg",
  },
  {
    name: "Amit Kumar",
    role: "Cloud Architect",
    exp: "Ex-Amazon · 12+ years",
    image: "/assets/images/mentors/mentor3.jpg",
  },
  {
    name: "Sneha Patel",
    role: "UX Designer",
    exp: "Ex-Adobe · 7+ years",
    image: "/assets/images/mentors/mentor4.jpg",
  },
];

const MentorsSection = () => {
  return (
    <Box py={12} px={{ xs: 2, md: 8 }} bgcolor="#f7f7ff">
      {/* Heading */}
      <Box textAlign="center" mb={8}>
        <Typography fontSize={34} fontWeight={800} color="#0f172a">
          Learn from Industry Experts
        </Typography>
        <Typography color="#475569" mt={1}>
          Our mentors work at top companies
        </Typography>
      </Box>

      {/* Mentor Cards */}
      <Box maxWidth={1200} mx="auto">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
        >
          {mentors.map((mentor, index) => (
            <Grid
              item
              key={index}
              sx={{
                width: "23%", // 👈 forces 4 in one row with gap
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 4,
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Avatar */}
                <Avatar
                  src={mentor.image}
                  alt={mentor.name}
                  sx={{
                    width: 80,
                    height: 80,
                    mx: "auto",
                    mb: 3,
                    border: "4px solid #f1f5f9",
                  }}
                />

                {/* Name */}
                <Typography
                  fontSize={18}
                  fontWeight={700}
                  color="#0f172a"
                >
                  {mentor.name}
                </Typography>

                {/* Role */}
                <Typography
                  fontSize={14}
                  fontWeight={600}
                  color="#2563eb"
                  mt={0.5}
                >
                  {mentor.role}
                </Typography>

                {/* Experience */}
                <Typography
                  fontSize={13}
                  color="#64748b"
                  mt={1}
                >
                  {mentor.exp}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MentorsSection;
