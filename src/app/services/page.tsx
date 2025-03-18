"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import MainLayout from "@/components/MainLayout";
import { MdDesignServices, MdConstruction } from "react-icons/md";
import { 
  FaTools, 
  FaRegCheckCircle, 
  FaRegLightbulb, 
  FaWrench, 
  FaLeaf,
  FaPaintRoller,
  FaSwimmingPool,
  FaFire,
  FaUmbrella,
  FaChair
} from "react-icons/fa";

export default function ServicesPage() {
  return (
    <MainLayout>
      <PageHeader />
      <MainServices />
      <ProcessSection />
      <FAQSection />
    </MainLayout>
  );
}

function PageHeader() {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const headerGradient = useColorModeValue(
    "linear(to-b, white, gray.100)",
    "linear(to-b, gray.800, rochester.black)"
  );
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      bg={bgColor}
      py={20}
      bgGradient={headerGradient}
    >
      <Container maxW="container.xl">
        <VStack spacing={6} textAlign="center" maxW="800px" mx="auto">
          <Heading 
            as="h1" 
            size="2xl" 
            fontWeight="bold"
            color={headingColor}
          >
            Our Decking Services
          </Heading>
          <Text
            fontSize="xl"
            color={textColor}
          >
            From custom design to expert installation, we provide comprehensive deck building 
            services tailored to Rochester&apos;s unique climate and your specific needs.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

function MainServices() {
  const services = [
    {
      id: "design",
      title: "Custom Deck Design",
      description: "We create personalized deck designs that complement your home's architecture and enhance your outdoor living space.",
      icon: MdDesignServices,
      features: [
        "Free initial design consultation",
        "3D rendering of your custom deck design",
        "Material selection guidance",
        "Budget-friendly options",
        "Design adaptations for Rochester's climate"
      ]
    },
    {
      id: "build",
      title: "Professional Deck Construction",
      description: "Our skilled team builds your deck with precision and high-quality materials, ensuring durability through all seasons.",
      icon: MdConstruction,
      features: [
        "Expert installation by licensed professionals",
        "Premium grade lumber and composite options",
        "Proper footings and foundations",
        "Weather-resistant construction techniques",
        "Built to local building codes and standards"
      ]
    },
    {
      id: "repair",
      title: "Deck Repair & Restoration",
      description: "Revitalize your existing deck with our comprehensive repair and restoration services.",
      icon: FaWrench,
      features: [
        "Deck inspections and assessments",
        "Board replacement and structural repairs",
        "Railing and stair rebuilding",
        "Power washing and cleaning",
        "Staining and waterproofing services"
      ]
    },
    {
      id: "maintain",
      title: "Maintenance & Preservation",
      description: "Keep your deck looking beautiful and functioning properly with our ongoing maintenance programs.",
      icon: FaTools,
      features: [
        "Seasonal inspections",
        "Professional cleaning and treatments",
        "Weather protection applications",
        "Minor repair services",
        "Preventative care recommendations"
      ]
    },
    {
      id: "features",
      title: "Deck Features & Add-ons",
      description: "Enhance your outdoor living space with custom features that add functionality and style.",
      icon: FaRegLightbulb,
      features: [
        "Built-in seating and storage",
        "Pergolas and shade structures",
        "Outdoor lighting systems",
        "Privacy screens and wind barriers",
        "Integrated planters and garden boxes"
      ]
    },
    {
      id: "green",
      title: "Eco-Friendly Decking",
      description: "Sustainable deck options that are environmentally responsible without sacrificing quality or beauty.",
      icon: FaLeaf,
      features: [
        "Sustainably sourced lumber options",
        "Recycled composite materials",
        "Eco-friendly stains and sealers",
        "Energy-efficient lighting integration",
        "Rainwater collection systems"
      ]
    }
  ];

  const additionalFeatures = [
    { icon: FaPaintRoller, title: "Staining & Finishing", text: "Professional application of stains, paints, and sealers that protect your deck and enhance its appearance." },
    { icon: FaSwimmingPool, title: "Pool Decks", text: "Specialized design and construction for decks surrounding pools, with slip-resistant materials and proper drainage." },
    { icon: FaFire, title: "Fire Pit Areas", text: "Custom design of safe, code-compliant deck areas that incorporate fire features for year-round enjoyment." },
    { icon: FaUmbrella, title: "Shade Solutions", text: "Integration of pergolas, awnings, and other shade structures to make your deck comfortable on hot summer days." },
    { icon: FaChair, title: "Outdoor Living Spaces", text: "Complete outdoor room concepts that blend your deck with furniture, lighting, and other amenities." },
  ];

  const borderColor = useColorModeValue("gray.200", "rochester.gray");
  const boxBg = useColorModeValue("white", "rochester.black");
  const accentBg = useColorModeValue("gray.50", "rochester.gray");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const listItemColor = useColorModeValue("gray.700", "gray.200");
  const additionalHeadingColor = useColorModeValue("gray.700", "white");

  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {services.map((service) => (
            <Box
              key={service.id}
              p={8}
              borderWidth="1px"
              borderRadius="lg"
              borderColor={borderColor}
              bg={boxBg}
              boxShadow="md"
              transition="all 0.3s"
              _hover={{
                boxShadow: "lg",
                transform: "translateY(-5px)",
                borderColor: "primary.500",
              }}
            >
              <Flex mb={6} align="flex-start">
                <Flex
                  mr={4}
                  w={14}
                  h={14}
                  align="center"
                  justify="center"
                  rounded="full"
                  bg="primary.500"
                  color="white"
                >
                  <Icon as={service.icon} w={7} h={7} />
                </Flex>
                <Box>
                  <Heading
                    as="h3"
                    size="lg"
                    mb={2}
                    color={headingColor}
                  >
                    {service.title}
                  </Heading>
                  <Text color={textColor}>
                    {service.description}
                  </Text>
                </Box>
              </Flex>

              <Divider my={6} borderColor={borderColor} />

              <VStack align="stretch" spacing={3}>
                {service.features.map((feature, index) => (
                  <HStack key={index} align="center" spacing={3}>
                    <Icon as={FaRegCheckCircle} color="primary.500" />
                    <Text color={listItemColor}>
                      {feature}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box mt={20}>
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            mb={12}
            color={additionalHeadingColor}
          >
            Additional Services
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={8}>
            {additionalFeatures.map((feature, index) => (
              <Box
                key={index}
                p={6}
                bg={accentBg}
                borderRadius="md"
                textAlign="center"
                boxShadow="sm"
                transition="all 0.3s"
                _hover={{
                  boxShadow: "md",
                  transform: "translateY(-3px)",
                }}
              >
                <Flex
                  mx="auto"
                  mb={4}
                  w={12}
                  h={12}
                  align="center"
                  justify="center"
                  rounded="full"
                  bg="primary.500"
                  color="white"
                >
                  <Icon as={feature.icon} w={6} h={6} />
                </Flex>
                <Heading
                  as="h3"
                  size="md"
                  mb={3}
                  color={headingColor}
                >
                  {feature.title}
                </Heading>
                <Text color={textColor}>
                  {feature.text}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

function ProcessSection() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We start with a free on-site consultation to understand your vision, assess your space, and discuss your needs and budget."
    },
    {
      title: "Custom Design",
      description: "Our designers create a personalized deck plan tailored to your preferences, property, and Rochester's climate considerations."
    },
    {
      title: "Proposal & Contract",
      description: "We provide a detailed proposal outlining the scope of work, materials, timeline, and pricing for your review and approval."
    },
    {
      title: "Permits & Preparation",
      description: "We handle all necessary permits and prepare your property for construction, ensuring everything meets local building codes."
    },
    {
      title: "Expert Construction",
      description: "Our skilled craftsmen build your deck with precision, using quality materials and attention to detail at every step."
    },
    {
      title: "Final Inspection",
      description: "We conduct a thorough inspection with you to ensure every aspect of your new deck meets our high standards and your expectations."
    }
  ];

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const boxBg = useColorModeValue("white", "rochester.black");
  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const stepHeadingColor = useColorModeValue("gray.700", "white");
  const stepTextColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box py={16} bg={bgColor}>
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <VStack spacing={4} textAlign="center" maxW="800px">
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              color={headingColor}
            >
              Our Process
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
            >
              We follow a comprehensive, step-by-step approach to ensure your deck project
              is completed efficiently, beautifully, and to the highest standards.
            </Text>
          </VStack>

          <Box w="100%">
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {steps.map((step, index) => (
                <Box
                  key={index}
                  p={6}
                  bg={boxBg}
                  borderRadius="lg"
                  boxShadow="md"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    height="4px"
                    bg="primary.500"
                    width="100%"
                  />
                  <Flex align="center" mb={4}>
                    <Flex
                      w={10}
                      h={10}
                      align="center"
                      justify="center"
                      rounded="full"
                      bg="primary.500"
                      color="white"
                      mr={4}
                      fontWeight="bold"
                    >
                      {index + 1}
                    </Flex>
                    <Heading
                      as="h3"
                      size="md"
                      color={stepHeadingColor}
                    >
                      {step.title}
                    </Heading>
                  </Flex>
                  <Text color={stepTextColor}>
                    {step.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to build a typical deck?",
      answer: "The timeframe varies based on the size and complexity of your project. A standard deck typically takes 1-2 weeks for construction once materials are delivered. Custom designs with special features may take longer. We'll provide a detailed timeline during the proposal stage."
    },
    {
      question: "Do I need a permit to build a deck in Rochester?",
      answer: "Yes, most deck projects in Rochester require a building permit. We handle the entire permitting process for you, including preparing and submitting all necessary documentation to ensure your deck is built to code and legally approved."
    },
    {
      question: "What types of decking materials do you offer?",
      answer: "We offer a wide range of materials including pressure-treated lumber, cedar, redwood, tropical hardwoods, and various composite decking options like Trex, TimberTech, and Azek. During our consultation, we'll discuss the pros and cons of each option based on your needs, budget, and Rochester's climate."
    },
    {
      question: "How much does a new deck cost?",
      answer: "Deck costs vary widely depending on size, materials, design complexity, and site conditions. As a general guideline, pressure-treated wood decks typically start around $30-40 per square foot, while composite decks start around $50-60 per square foot. We provide detailed, transparent pricing during the proposal stage."
    },
    {
      question: "How do you prepare decks for Rochester's harsh winters?",
      answer: "We build decks specifically engineered to withstand Rochester's freeze-thaw cycles and heavy snow loads. This includes using proper footings that extend below the frost line, weather-resistant hardware, appropriate joist spacing, and materials selected for durability in our climate. We also apply appropriate water-resistant treatments."
    },
    {
      question: "Do you offer warranties on your decks?",
      answer: "Yes, we provide a 5-year workmanship warranty on all our deck construction. Additionally, the materials we use come with manufacturer warranties that range from 10-50 years depending on the product. We'll explain all warranty details during the proposal process."
    }
  ];

  const headingColor = useColorModeValue("gray.700", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const itemBgColor = useColorModeValue("white", "rochester.black");
  const itemBorderColor = useColorModeValue("gray.200", "rochester.gray");
  const expandedBgColor = useColorModeValue("gray.50", "rochester.gray");
  const answerColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box py={16}>
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <VStack spacing={4} textAlign="center" maxW="800px">
            <Heading
              as="h2"
              size="xl"
              fontWeight="bold"
              color={headingColor}
            >
              Frequently Asked Questions
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
            >
              Get answers to common questions about our deck building services and process.
            </Text>
          </VStack>

          <Accordion allowMultiple width="100%">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                border="1px solid"
                borderColor={itemBorderColor}
                borderRadius="md"
                mb={4}
                bg={itemBgColor}
              >
                <h2>
                  <AccordionButton
                    py={4}
                    _expanded={{
                      bg: expandedBgColor,
                    }}
                  >
                    <Box flex="1" textAlign="left" fontWeight="semibold">
                      {faq.question}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} color={answerColor}>
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box>
  );
} 