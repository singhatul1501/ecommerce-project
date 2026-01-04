import { Box } from "@mui/material";

import HeroSection from "../components/home/HeroSection";
import StatsSection from "../components/home/StatsSection";
import PopularCourses from "../components/home/PopularCourses";
import LearningPaths from "../components/home/LearningPaths";
import WhyChooseUs from "../components/home/WhyChooseUs";
import MentorsSection from "../components/home/MentorsSection";
import SuccessStories from "../components/home/SuccessStories";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <StatsSection />
      <PopularCourses />
      <LearningPaths />
      <WhyChooseUs />
      <MentorsSection />
      <SuccessStories />
      <FAQSection />
      <CTASection />
      <Footer />
    </Box>
  );
};

export default Home;
