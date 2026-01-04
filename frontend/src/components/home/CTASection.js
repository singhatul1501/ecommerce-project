import { Box, Typography, Button } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

const CTASection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 8, md: 12 },
        px: 2,
        background: "linear-gradient(90deg, #2563eb 0%, #9333ea 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "#ffffff",
      }}
    >
      <Box maxWidth={800}>
        {/* OFFER BADGE */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 3,
            py: 1,
            mb: 4,
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.2)",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          <BoltIcon sx={{ fontSize: 18 }} />
          Limited Time Offer - 30% Off
        </Box>

        {/* HEADING */}
        <Typography
          fontWeight={800}
          fontSize={{ xs: 28, sm: 36, md: 44 }}
          lineHeight={1.2}
          mb={2}
        >
          Ready to Start Your Learning
          <br />
          Journey?
        </Typography>

        {/* SUBTEXT */}
        <Typography
          fontSize={{ xs: 14, md: 18 }}
          sx={{ opacity: 0.9 }}
          mb={5}
        >
          Join thousands of students building their dream careers
        </Typography>

        {/* CTA BUTTON */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ffffff",
            color: "#2563eb",
            px: 5,
            py: 1.6,
            borderRadius: 3,
            fontSize: 16,
            fontWeight: 700,
            textTransform: "none",
            boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
            "&:hover": {
              backgroundColor: "#f1f5f9",
              transform: "translateY(-3px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            },
          }}
        >
          Sign Up for Free
        </Button>
      </Box>
    </Box>
  );
};

export default CTASection;
