"use client";

import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

interface MainLayoutProps {
  children: React.ReactNode;
  hideContactForm?: boolean;
}

export default function MainLayout({ children, hideContactForm = false }: MainLayoutProps) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box flex="1">
        {children}
        {!hideContactForm && <ContactForm />}
      </Box>
      <Footer />
    </Box>
  );
} 