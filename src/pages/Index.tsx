import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LearningOutcomes from "@/components/LearningOutcomes";
import HowItWorks from "@/components/HowItWorks";
import ParentTestimonial from "@/components/ParentTestimonial";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import EnrollmentModal from "@/components/EnrollmentModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onEnrollClick={handleEnrollClick} />
      <LearningOutcomes />
      <HowItWorks />
      <ParentTestimonial />
      <FAQ />
      <CTABanner onEnrollClick={handleEnrollClick} />
      <Footer />
      <EnrollmentModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
};

export default Index;
