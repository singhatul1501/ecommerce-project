import { Box, Grid, Typography } from "@mui/material";

const stats = [
  {
    value: "50,000+",
    label: "Active Learners",
    color: "#2563eb", // Blue
  },
  {
    value: "100+",
    label: "Industry Mentors",
    color: "#7c3aed", // Purple
  },
  {
    value: "4.8★",
    label: "Average Rating",
    color: "#f59e0b", // Yellow
  },
  {
    value: "85%",
    label: "Placement Success",
    color: "#16a34a", // Green
  },
];

const StatsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f7ff",
        
        py: { xs: 4, md: 6 },
      }}
    >
      <Grid
        container
        maxWidth="lg"
        mx="auto"
        spacing={{ xs: 4, md: 0 }}
        justifyContent="space-between"
        alignItems="center"
      >
        {stats.map((item) => (
          <Grid item xs={12} sm={6} md={3} key={item.label}>
            <Box textAlign="center">
              <Typography
                fontSize={{ xs: 28, md: 34 }}
                fontWeight={800}
                color={item.color}
              >
                {item.value}
              </Typography>

              <Typography
                fontSize={15}
                color="#64748b"
                mt={0.5}
              >
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
