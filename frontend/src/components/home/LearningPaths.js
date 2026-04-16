import {
  Box,
  Grid,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";

const learningPaths = [
  {
    title: "Full Stack Developer Program",
    subtitle:
      "Complete web development track from basics to advanced",
    icon: <MenuBookRoundedIcon />,
    iconBg: "#e0e7ff",
    iconColor: "#2563eb",
    duration: "8 months",
    projects: "10 Projects",
    steps: [
      "HTML, CSS & JavaScript Fundamentals",
      "React & Modern Frontend Development",
      "Node.js, Express & Database Management",
      "Full Stack Projects & Job Preparation",
    ],
  },
  {
    title: "Data Science Career Track",
    subtitle:
      "Master data analysis, ML and become job-ready",
    icon: <WorkspacePremiumRoundedIcon />,
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    duration: "10 months",
    projects: "12 Projects",
    steps: [
      "Python Programming & Statistics",
      "Data Analysis with Pandas & NumPy",
      "Machine Learning Algorithms",
      "Deep Learning & Real-world Projects",
    ],
  },
];

const LearningPaths = () => {
  return (
    <Box
      py={12}
      px={{ xs: 2, md: 8 }}
      sx={{
        backgroundColor: "#f5f7ff", 
      }}
    >
      {/* Heading */}
      <Box textAlign="center" mb={8}>
        <Typography
          fontSize={{ xs: 28, md: 36 }}
          fontWeight={800}
          color="#0f172a"
        >
          Complete Learning Paths
        </Typography>
        <Typography color="#475569" mt={1}>
          Structured career tracks for your dream job
        </Typography>
      </Box>

      {/* Cards */}
      <Box maxWidth={1200} mx="auto">
        <Grid container spacing={4} justifyContent="center"  alignItems="stretch">
          {learningPaths.map((path, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Paper
                sx={{
                  p: 4,
                  height: "100%",
                  borderRadius: 4,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                  transition: "0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow:
                      "0 30px 60px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Header */}
                <Box display="flex" gap={2} mb={3}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 2,
                      backgroundColor: path.iconBg,
                      color: path.iconColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 28,
                    }}
                  >
                    {path.icon}
                  </Box>

                  <Box>
                    <Typography
                      fontSize={20}
                      fontWeight={700}
                      color="#0f172a"
                    >
                      {path.title}
                    </Typography>
                    <Typography
                      fontSize={14}
                      color="#475569"
                      mt={0.5}
                    >
                      {path.subtitle}
                    </Typography>
                  </Box>
                </Box>

                {/* Steps */}
                <Box mb={4}>
                  {path.steps.map((step, i) => (
                    <Box
                      key={i}
                      display="flex"
                      alignItems="flex-start"
                      gap={2}
                      mb={2}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          backgroundColor: "#e0e7ff",
                          color: "#2563eb",
                          fontWeight: 700,
                          fontSize: 14,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {i + 1}
                      </Box>
                      <Typography
                        fontSize={15}
                        color="#334155"
                        lineHeight={1.6}
                      >
                        {step}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Footer */}
                <Box
                  pt={3}
                  borderTop="1px solid #e5e7eb"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  flexWrap="wrap"
                  gap={2}
                >
                  <Box display="flex" gap={3}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <AccessTimeRoundedIcon
                        sx={{ fontSize: 18, color: "#64748b" }}
                      />
                      <Typography fontSize={14} color="#475569">
                        {path.duration}
                      </Typography>
                    </Box>

                    <Box display="flex" alignItems="center" gap={1}>
                      <FolderRoundedIcon
                        sx={{ fontSize: 18, color: "#64748b" }}
                      />
                      <Typography fontSize={14} color="#475569">
                        {path.projects}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      borderRadius: 2,
                      px: 3,
                      background:
                        "linear-gradient(135deg,#2563eb,#9333ea)",
                    }}
                  >
                    View Details
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default LearningPaths;
