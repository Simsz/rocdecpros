"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // Reset the success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
    
    // In a real implementation, you would send the data to your server
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
  };
  
  return (
    <Box
      id="contact"
      bg={useColorModeValue("gray.50", "rochester.gray")}
      py={16}
    >
      <Container maxW="7xl">
        <Stack
          spacing={8}
          direction={{ base: "column", lg: "row" }}
          align={{ lg: "flex-start" }}
        >
          <VStack
            flex={1}
            spacing={8}
            align="flex-start"
            mb={{ base: 10, lg: 0 }}
          >
            <Box>
              <Heading
                as="h2"
                fontSize={{ base: "3xl", sm: "4xl" }}
                fontWeight="bold"
                color={useColorModeValue("gray.900", "white")}
                mb={4}
              >
                Get in Touch
              </Heading>
              <Text
                color={useColorModeValue("gray.600", "gray.300")}
                fontSize="lg"
              >
                Ready to transform your outdoor space? Contact us today for a free consultation
                and quote. Our team of experts is ready to help you create the deck of your dreams.
              </Text>
            </Box>

            <Divider borderColor={useColorModeValue("gray.200", "gray.600")} />

            <Stack spacing={4} w="100%">
              <ContactInfo
                icon={MdPhone}
                title="Call Us"
                content="+1 (585) 649-6017"
              />
              <ContactInfo
                icon={MdEmail}
                title="Email"
                content="hello@rochesterdeckpros.com"
              />
              <ContactInfo
                icon={MdLocationOn}
                title="Address"
                content="Greece, NY 14624"
              />
            </Stack>
          </VStack>

          <Box
            flex={1}
            p={8}
            bg={useColorModeValue("white", "rochester.black")}
            borderRadius="lg"
            boxShadow="lg"
            borderWidth="1px"
            borderColor={useColorModeValue("gray.200", "rochester.gray")}
          >
            {isSubmitted ? (
              <VStack spacing={4} py={8}>
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="bold"
                  color="primary.500"
                  textAlign="center"
                >
                  Thank you for contacting us!
                </Heading>
                <Text textAlign="center">
                  We&apos;ve received your message and will get back to you soon.
                </Text>
              </VStack>
            ) : (
              <form onSubmit={handleSubmit}>
                <VStack spacing={6}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(585) 649-6017"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                    />
                  </FormControl>
                  <Button
                    type="submit"
                    colorScheme="red"
                    bg="primary.500"
                    size="lg"
                    width="full"
                    fontSize="md"
                    isLoading={isSubmitting}
                    _hover={{
                      bg: "primary.600",
                    }}
                  >
                    Send Message
                  </Button>
                </VStack>
              </form>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

interface ContactInfoProps {
  icon: React.ElementType;
  title: string;
  content: string;
}

const ContactInfo = ({ icon, title, content }: ContactInfoProps) => {
  return (
    <HStack spacing={4} align="flex-start">
      <Flex
        align="center"
        justify="center"
        p={2}
        bg="primary.500"
        borderRadius="md"
        color="white"
      >
        <Icon as={icon} boxSize={6} />
      </Flex>
      <VStack spacing={0} align="flex-start">
        <Text fontWeight="bold">{title}</Text>
        <Text color={useColorModeValue("gray.600", "gray.300")}>
          {content}
        </Text>
      </VStack>
    </HStack>
  );
}; 