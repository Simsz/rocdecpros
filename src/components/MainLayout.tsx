"use client";

import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBox from "./ui/AnimatedBox";

interface MainLayoutProps {
  children: React.ReactNode;
  hideContactForm?: boolean;
}

// Create a motion-enabled version of Box
const MotionBox = motion(Box);

export default function MainLayout({ children, hideContactForm = false }: MainLayoutProps) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <AnimatePresence mode="wait">
        <MotionBox 
          flex="1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
          {!hideContactForm && (
            <AnimatedBox variant="fadeInUp" delay={0.2}>
              <ContactForm />
            </AnimatedBox>
          )}
        </MotionBox>
      </AnimatePresence>
      <Footer />
    </Box>
  );
} 