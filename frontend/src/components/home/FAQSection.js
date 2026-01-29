import { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    q: "Are the classes live or recorded?",
    a: "We offer both live interactive sessions and recorded lectures for flexible learning.",
  },
  {
    q: "Do you provide certificates?",
    a: "Yes, industry-recognized certificates are provided upon successful course completion.",
  },
  {
    q: "Is there placement assistance?",
    a: "Yes, we provide job assistance, resume building, and interview preparation support.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes, we offer EMI options for all our courses. Contact our support team for details.",
  },
  {
    q: "What if I miss a live class?",
    a: "All live sessions are recorded and available for viewing anytime.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we have a 7-day money-back guarantee if you're not satisfied.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
     <Box
            sx={{
                width: "100%",
                background: "linear-gradient(180deg, #f5f6ff 0%, #ffffff 100%)",
                py: { xs: 8, md: 12 },
            }}
        >
      {/* HEADER */}
      <Box textAlign="center" mb={6}>
        <Typography fontSize={34} fontWeight={800}>
          Frequently Asked Questions
        </Typography>
        <Typography color="text.secondary" mt={1}>
          Got questions? We've got answers
        </Typography>
      </Box>

      {/* FAQ LIST */}
      <Box maxWidth={900} mx="auto" px={2}>
        {faqs.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            disableGutters
            elevation={0}
            sx={{
              mb: 3,
              borderRadius: 3,
              backgroundColor: "#ffffff",
              boxShadow: "0 8px 24px rgba(15,23,42,0.08)",
              "&:before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    fontSize: 28,
                    transition: "0.3s",
                    transform:
                      expanded === index
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              }
              sx={{
                px: 4,
                py: 2.5,
              }}
            >
              <Typography fontWeight={700} fontSize={17}>
                {item.q}
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 4, pb: 3 }}>
              <Typography color="#475569" lineHeight={1.7}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default FAQSection;
