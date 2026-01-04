import {
  Box,
  Grid,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SchoolIcon from "@mui/icons-material/School";

const Footer = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(180deg, #0b1220 0%, #0e1628 100%)",
        color: "#cbd5f5",
        px: { xs: 3, md: 8 },
        pt: 8,
        pb: 4,
      }}
    >
      {/* TOP */}
      <Grid container spacing={6}>
        {/* Brand */}
        <Grid item xs={12} md={4}>
          <Box display="flex" alignItems="center" gap={1.5} mb={2}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                background:
                  "linear-gradient(135deg,#5f5cff,#8a2cff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SchoolIcon sx={{ color: "#fff" }} />
            </Box>
            <Typography fontSize={22} fontWeight={700} color="#fff">
              SmartLearnX
            </Typography>
          </Box>

          <Typography fontSize={14} color="#94a3b8" mb={3}>
            Empowering learners worldwide with industry-ready
            online courses and certification programs. Your
            journey to success starts here.
          </Typography>

          <Box display="flex" gap={1}>
            {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon, YouTubeIcon].map(
              (Icon, i) => (
                <IconButton
                  key={i}
                  sx={{
                    bgcolor: "#1e293b",
                    color: "#cbd5f5",
                    "&:hover": { bgcolor: "#334155" },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              )
            )}
          </Box>
        </Grid>

        {/* Company */}
        <Grid item xs={6} md={2}>
          <Typography fontWeight={600} color="#fff" mb={2}>
            Company
          </Typography>
          {["About Us", "Careers", "Press & Media", "Blog", "Partners"].map(
            (item) => (
              <Typography
                key={item}
                fontSize={14}
                color="#94a3b8"
                mb={1}
                sx={{ cursor: "pointer", "&:hover": { color: "#fff" } }}
              >
                {item}
              </Typography>
            )
          )}
        </Grid>

        {/* Programs */}
        <Grid item xs={6} md={3}>
          <Typography fontWeight={600} color="#fff" mb={2}>
            Programs
          </Typography>
          {[
            "Data Science",
            "Web Development",
            "AI & ML",
            "Cloud Computing",
            "Cyber Security",
          ].map((item) => (
            <Typography
              key={item}
              fontSize={14}
              color="#94a3b8"
              mb={1}
              sx={{ cursor: "pointer", "&:hover": { color: "#fff" } }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Support */}
        <Grid item xs={6} md={3}>
          <Typography fontWeight={600} color="#fff" mb={2}>
            Support
          </Typography>
          {[
            "Help Center",
            "Contact Us",
            "FAQs",
            "Refund Policy",
            "Student Login",
          ].map((item) => (
            <Typography
              key={item}
              fontSize={14}
              color="#94a3b8"
              mb={1}
              sx={{ cursor: "pointer", "&:hover": { color: "#fff" } }}
            >
              {item}
            </Typography>
          ))}
        </Grid>
      </Grid>

      {/* CONTACT */}
      <Divider sx={{ my: 6, borderColor: "#1e293b" }} />

      <Grid container spacing={4}>
        <Grid item xs={12} md={4} display="flex" gap={2}>
          <EmailIcon color="primary" />
          <Typography>support@smartlearnx.com</Typography>
        </Grid>

        <Grid item xs={12} md={4} display="flex" gap={2}>
          <PhoneIcon color="primary" />
          <Typography>+1 (555) 123-4567</Typography>
        </Grid>

        <Grid item xs={12} md={4} display="flex" gap={2}>
          <LocationOnIcon color="primary" />
          <Typography>
            123 Education St, Learning City
          </Typography>
        </Grid>
      </Grid>

      {/* BOTTOM */}
      <Divider sx={{ my: 4, borderColor: "#1e293b" }} />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography fontSize={13} color="#94a3b8">
            © 2025 SmartLearnX. All rights reserved.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          gap={3}
        >
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
            (item) => (
              <Typography
                key={item}
                fontSize={13}
                color="#94a3b8"
                sx={{ cursor: "pointer", "&:hover": { color: "#fff" } }}
              >
                {item}
              </Typography>
            )
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
