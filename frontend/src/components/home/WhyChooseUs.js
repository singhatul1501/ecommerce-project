import { Box, Grid, Typography } from "@mui/material";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";

const features = [
  {
    title: "Live Classes",
    desc:
      "Interactive live sessions with industry experts and real-time doubt solving",
    icon: <VideocamRoundedIcon fontSize="inherit" />,
    bg: "#e0e7ff",
    color: "#2563eb",
  },
  {
    title: "Recorded Lectures",
    desc:
      "Learn at your own pace with lifetime access to course materials",
    icon: <MenuBookRoundedIcon fontSize="inherit" />,
    bg: "#f3e8ff",
    color: "#9333ea",
  },
  {
    title: "24/7 Doubt Support",
    desc:
      "Get your questions answered anytime with our dedicated support team",
    icon: <HeadsetMicRoundedIcon fontSize="inherit" />,
    bg: "#dcfce7",
    color: "#16a34a",
  },
  {
    title: "Job Assistance",
    desc:
      "Resume building, interview prep and placement support included",
    icon: <WorkRoundedIcon fontSize="inherit" />,
    bg: "#ffedd5",
    color: "#f97316",
  },
];

const WhyChooseUs = () => {
  return (
    <Box py={12} px={{ xs: 2, md: 8 }} bgcolor="#ffffff">
      {/* Heading */}
      <Box textAlign="center" mb={8}>
        <Typography fontSize={34} fontWeight={800} color="#0f172a">
          Why Choose SmartLearnX?
        </Typography>
        <Typography color="#475569" mt={1}>
          Everything you need to succeed in your career
        </Typography>
      </Box>

      {/* ONE ROW – PERFECTLY ALIGNED */}
      <Box maxWidth={1200} mx="auto">
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {features.map((item, index) => (
            <Grid
              item
              key={index}
              sx={{
                width: "25%", 
                textAlign: "center",
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: "auto",
                  mb: 3,
                  borderRadius: "50%",
                  backgroundColor: item.bg,
                  color: item.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                }}
              >
                {item.icon}
              </Box>

              {/* Title */}
              <Typography
                fontWeight={700}
                fontSize={18}
                color="#0f172a"
                mb={1}
              >
                {item.title}
              </Typography>

              {/* Description */}
              <Typography
                fontSize={14}
                color="#475569"
                lineHeight={1.7}
                maxWidth={240}
                mx="auto"
              >
                {item.desc}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
