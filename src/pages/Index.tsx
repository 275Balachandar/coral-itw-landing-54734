import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import StatsSection from "@/components/StatsSection";
import LearningOutcomes from "@/components/LearningOutcomes";
import ClassVideo from "@/components/ClassVideo";
import CTABanner from "@/components/CTABanner";
import EnrollmentModal from "@/components/EnrollmentModal";
import { trackPageView } from "@/lib/mixpanel";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Track page view on mount
  useEffect(() => {
    trackPageView("Home Page", {
      page_path: window.location.pathname,
      page_title: document.title,
    });
  }, []);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onEnrollClick={handleEnrollClick} />
      <TestimonialCarousel />
      <StatsSection />
      <LearningOutcomes />
      <ClassVideo />
      <CTABanner onEnrollClick={handleEnrollClick} />
      <EnrollmentModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
};

export default Index;
