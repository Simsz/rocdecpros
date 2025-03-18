"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTools, FaUserCheck, FaAward, FaShieldAlt } from "react-icons/fa";
import { MdDeck } from "react-icons/md";
import Link from "next/link";
import MainLayout from "@/components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesPreview />
    </MainLayout>
  );
}

function HeroSection() {
  return (
    <Box
      position="relative"
      h={{ base: "90vh", md: "100vh" }}
      maxH="1080px"
      overflow="hidden"
    >
      {/* Dark overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bg="blackAlpha.700"
        zIndex="1"
      />
      
      {/* Background image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        bgImage="url('https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        bgSize="cover"
        bgPosition="center"
        zIndex="0"
        filter="brightness(0.7)"
      />
      
      {/* Content */}
      <Container
        maxW="container.xl"
        position="relative"
        zIndex="2"
        h="full"
        centerContent
        justifyContent="center"
      >
        <VStack
          spacing={6}
          maxW={{ base: "100%", md: "80%", lg: "60%" }}
          textAlign="center"
        >
          <Heading
            as="h1"
            size="3xl"
            color="white"
            fontWeight="bold"
            lineHeight="shorter"
            textShadow="2px 2px 4px rgba(0,0,0,0.4)"
          >
            Premium Deck Building in Rochester, NY
          </Heading>
          
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.900"
            textShadow="1px 1px 2px rgba(0,0,0,0.4)"
            px={4}
          >
            Transform your outdoor space with custom decks built to last through Rochester's seasons.
            Expert craftsmanship, quality materials, and local expertise.
          </Text>
          
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            mt={4}
            w={{ base: "100%", sm: "auto" }}
          >
            <Button
              as={Link}
              href="/services"
              size="lg"
              fontSize="md"
              px={8}
              bg="primary.500"
              color="white"
              _hover={{
                bg: "primary.600",
              }}
            >
              Our Services
            </Button>
            <Button
              as={Link}
              href="/#contact"
              size="lg"
              fontSize="md"
              px={8}
              variant="outline"
              colorScheme="whiteAlpha"
              _hover={{
                bg: "whiteAlpha.200",
              }}
            >
              Get a Free Quote
            </Button>
          </Stack>
        </VStack>
      </Container>
    </Box>
  );
}

function FeaturesSection() {
  const bgColor = useColorModeValue("white", "rochester.black");
  const borderColor = useColorModeValue("gray.200", "rochester.gray");
  
  const features = [
    {
      title: "Professional Craftsmanship",
      text: "Our skilled team builds decks with precision and care, ensuring every detail meets our high standards.",
      icon: FaTools,
    },
    {
      title: "Local Expertise",
      text: "We understand Rochester's climate and building requirements to create outdoor spaces that last through all seasons.",
      icon: FaUserCheck,
    },
    {
      title: "Quality Materials",
      text: "We use only premium grade materials that offer durability, beauty, and low maintenance requirements.",
      icon: FaAward,
    },
    {
      title: "Warranty Protected",
      text: "Our deck construction comes with comprehensive warranties, giving you peace of mind for years to come.",
      icon: FaShieldAlt,
    },
  ];
  
  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center" maxW="800px" mx="auto">
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.700", "white")}
            >
              Why Choose Rochester Deck Pros?
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              We deliver exceptional outdoor living spaces through quality materials, 
              skilled craftsmanship, and designs tailored to Rochester's environment.
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} width="100%">
            {features.map((feature, index) => (
              <Box
                key={index}
                p={8}
                bg={useColorModeValue("gray.50", "rochester.gray")}
                borderRadius="lg"
                borderWidth="1px"
                borderColor={borderColor}
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "lg",
                  borderColor: "primary.500",
                }}
              >
                <Flex
                  w={12}
                  h={12}
                  align="center"
                  justify="center"
                  borderRadius="md"
                  bg="primary.500"
                  color="white"
                  mb={4}
                >
                  <Icon as={feature.icon} boxSize={6} />
                </Flex>
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="bold"
                  mb={3}
                  color={useColorModeValue("gray.700", "white")}
                >
                  {feature.title}
                </Heading>
                <Text
                  color={useColorModeValue("gray.600", "gray.300")}
                >
                  {feature.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}

function AboutSection() {
  return (
    <Box py={20} bg={useColorModeValue("gray.50", "gray.900")}>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 10, lg: 20 }}
          align="center"
        >
          <Box
            position="relative"
            boxSize={{ base: "100%", lg: "50%" }}
            maxW={{ base: "500px", lg: "none" }}
          >
            <Box
              position="absolute"
              top="-20px"
              left="-20px"
              right="20px"
              bottom="20px"
              bg="primary.500"
              borderRadius="lg"
              zIndex={0}
            />
            <Image
              src="https://images.unsplash.com/photo-1599619585752-c3edb42a414c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="Rochester Deck Pros team"
              borderRadius="lg"
              objectFit="cover"
              position="relative"
              zIndex={1}
              boxShadow="2xl"
            />
          </Box>
          
          <VStack
            align="flex-start"
            maxW={{ base: "100%", lg: "50%" }}
            spacing={6}
          >
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.700", "white")}
            >
              Rochester's Trusted Deck Builders
            </Heading>
            
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              With over 15 years of experience serving the Rochester area, we've built a reputation
              for quality craftsmanship and exceptional customer service. Our local team understands
              the unique challenges of building in Upstate New York's climate and we design decks
              that stand up to all four seasons.
            </Text>
            
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              We take pride in using sustainable materials and eco-friendly building practices
              whenever possible. From traditional wood decks to modern composite designs, we
              work closely with you to create the perfect outdoor living space for your home
              and lifestyle.
            </Text>
            
            <Button
              as={Link}
              href="/gallery"
              size="lg"
              fontSize="md"
              px={8}
              bg="primary.500"
              color="white"
              _hover={{
                bg: "primary.600",
              }}
              mt={4}
            >
              View Our Work
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

function ServicesPreview() {
  const services = [
    {
      title: "Custom Deck Design",
      description: "Personalized deck designs that complement your home's architecture and enhance your outdoor living space.",
      icon: MdDeck,
    },
    {
      title: "Deck Building",
      description: "Expert construction using premium materials, built to withstand Rochester's seasonal changes.",
      icon: FaTools,
    },
    {
      title: "Deck Repair & Restoration",
      description: "Revitalize your existing deck with our comprehensive repair and restoration services.",
      icon: FaUserCheck,
    },
  ];

  return (
    <Box py={20} bg={useColorModeValue("white", "rochester.black")}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center" maxW="800px" mx="auto">
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              color={useColorModeValue("gray.700", "white")}
            >
              Our Decking Services
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              From design to installation, we provide complete decking solutions
              tailored to your property and preferences.
            </Text>
          </VStack>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="100%">
            {services.map((service, index) => (
              <Box
                key={index}
                p={8}
                bg={useColorModeValue("gray.50", "rochester.gray")}
                borderRadius="lg"
                boxShadow="lg"
                textAlign="center"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl",
                }}
              >
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  borderRadius="full"
                  bg="primary.500"
                  color="white"
                  mb={5}
                  mx="auto"
                >
                  <Icon as={service.icon} boxSize={8} />
                </Flex>
                <Heading
                  as="h3"
                  size="md"
                  fontWeight="bold"
                  mb={4}
                  color={useColorModeValue("gray.700", "white")}
                >
                  {service.title}
                </Heading>
                <Text
                  color={useColorModeValue("gray.600", "gray.300")}
                  mb={5}
                >
                  {service.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
          
          <Button
            as={Link}
            href="/services"
            size="lg"
            fontSize="md"
            px={10}
            variant="outline"
            color={useColorModeValue("primary.500", "primary.300")}
            borderColor={useColorModeValue("primary.500", "primary.300")}
            _hover={{
              bg: useColorModeValue("primary.50", "whiteAlpha.100"),
            }}
          >
            View All Services
          </Button>
        </VStack>
      </Container>
    </Box>
  );
}
