"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Button,
  Flex,
  Tag,
  useColorModeValue,
  AspectRatio,
  useDisclosure,
} from "@chakra-ui/react";
import MainLayout from "@/components/MainLayout";
import { useState } from "react";
import AnimatedBox from "@/components/ui/AnimatedBox";
import DetailModal, { ProjectDetails } from "@/components/ui/DetailModal";
import { motion } from "framer-motion";

// Sample gallery data - in a real implementation, you might fetch this from an API
const galleryProjects = [
  {
    id: 1,
    title: "Elevated Cedar Deck",
    location: "Pittsford, NY",
    description: "Custom elevated cedar deck with integrated seating and pergola",
    imageUrl: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "cedar",
    tags: ["Elevated", "Cedar", "Pergola"],
    completionDate: "July 2023",
    materials: ["Western Red Cedar", "Stainless Steel Hardware", "Concrete Footings"],
    features: ["Integrated Bench Seating", "Pergola with Shade Cloth", "Solar Post Cap Lights"],
    projectDuration: "3 weeks",
    clientTestimonial: "The team at Rochester Deck Pros exceeded our expectations. The cedar deck they built transformed our backyard into a beautiful outdoor living space.",
    additionalImages: [
      "https://images.unsplash.com/photo-1567164457172-a2a99a834bd5?q=80&w=2074",
      "https://images.unsplash.com/photo-1580922110301-a666f6689be2?q=80&w=2070",
      "https://images.unsplash.com/photo-1580894894827-76694c98acba?q=80&w=2071"
    ]
  },
  {
    id: 2,
    title: "Lakefront Composite Deck",
    location: "Irondequoit, NY",
    description: "Waterfront composite deck with glass railings for unobstructed lake views",
    imageUrl: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "composite",
    tags: ["Waterfront", "Glass Railings", "Composite"],
    completionDate: "August 2023",
    materials: ["Trex Transcend Composite", "Tempered Glass Panels", "Marine-Grade Hardware"],
    features: ["Waterproof Electrical Outlets", "Built-in LED Lighting", "Hidden Fasteners"],
    projectDuration: "4 weeks",
    clientTestimonial: "We wanted something durable that would withstand the lake conditions while maintaining the view. Rochester Deck Pros delivered exactly that!"
  },
  {
    id: 3,
    title: "Multi-Level Backyard Retreat",
    location: "Brighton, NY",
    description: "Multiple level deck with built-in fire pit and outdoor kitchen area",
    imageUrl: "https://images.unsplash.com/photo-1574120583586-de8847ae992c?q=80&w=2070=2074&q=80",
    category: "multi-level",
    tags: ["Multi-Level", "Fire Pit", "Outdoor Kitchen"]
  },
  {
    id: 4,
    title: "Classic Pressure-Treated Deck",
    location: "Greece, NY",
    description: "Traditional pressure-treated deck with white railings and lattice skirting",
    imageUrl: "https://images.unsplash.com/photo-1613544723412-b331bda01e87?q=80&w=2070",
    category: "pressure-treated",
    tags: ["Traditional", "White Railings", "Lattice"]
  },
  {
    id: 5,
    title: "Contemporary IPE Hardwood Deck",
    location: "Victor, NY",
    description: "Modern design with IPE hardwood and horizontal cable railings",
    imageUrl: "https://images.unsplash.com/photo-1595430740785-b4c57902f25e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "hardwood",
    tags: ["Modern", "IPE", "Cable Railings"],
    completionDate: "June 2023",
    materials: ["IPE Hardwood", "316 Stainless Steel Cable", "Hidden Fastening System"],
    features: ["Horizontal Cable Railings", "Integrated LED Lighting", "Built-in Planter Boxes"],
    projectDuration: "5 weeks",
    clientTestimonial: "The IPE hardwood deck is absolutely stunning. The craftsmanship is exceptional and the design is exactly what we wanted - modern, clean, and functional.",
    additionalImages: [
      "https://images.unsplash.com/photo-1656646549647-a769116bc06b?q=80&w=2071",
      "https://images.unsplash.com/photo-1656646549734-6e5f90a1a68a?q=80&w=2071",
      "https://images.unsplash.com/photo-1656646549863-fdea73acf3df?q=80&w=2071",
      "https://images.unsplash.com/photo-1656646549779-1c684e0d38a0?q=80&w=2071"
    ]
  },
  {
    id: 6,
    title: "Screened Porch Addition",
    location: "Fairport, NY",
    description: "Combination deck with custom screened porch for three-season enjoyment",
    imageUrl: "https://images.unsplash.com/photo-1722248217940-7c9620b3d850?q=80&w=2070",
    category: "screened",
    tags: ["Screened Porch", "Three-Season", "Combination"]
  },
  {
    id: 7,
    title: "Poolside Composite Deck",
    location: "Penfield, NY",
    description: "Slip-resistant composite decking surrounding an in-ground pool",
    imageUrl: "https://images.unsplash.com/photo-1596641708979-42fafb8a019b?q=80&w=2076",
    category: "pool",
    tags: ["Pool Deck", "Slip-Resistant", "Composite"],
    completionDate: "May 2023",
    materials: ["Trex Transcend® Composite", "Marine-Grade Hardware", "Hidden Fastener System"],
    features: ["Built-in LED Lighting", "Slip-Resistant Surface", "Integrated Seating", "Hidden Fasteners"],
    projectDuration: "3 weeks",
    clientTestimonial: "Our poolside deck is not only beautiful but extremely practical. The slip-resistant surface gives us peace of mind, especially with children running around. The team was professional and completed the project on schedule.",
    additionalImages: [
      "https://images.unsplash.com/photo-1622083754704-f548b572fcfb?q=80&w=2070",
      "https://images.unsplash.com/photo-1622083848244-9aedb9c4a86b?q=80&w=2070",
      "https://images.unsplash.com/photo-1529290130-4ca3753253ae?q=80&w=2069"
    ]
  },
  {
    id: 8,
    title: "Redwood Entertaining Deck",
    location: "Webster, NY",
    description: "Large redwood deck designed for entertaining with built-in bar area",
    imageUrl: "https://images.unsplash.com/photo-1722764376562-6a78c5c06f6f?q=80&w=2070",
    category: "redwood",
    tags: ["Redwood", "Entertainment Area", "Built-in Bar"]
  },
  {
    id: 9,
    title: "Small Space Urban Deck",
    location: "Downtown Rochester, NY",
    description: "Compact deck designed for urban living with vertical garden elements",
    imageUrl: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    category: "urban",
    tags: ["Urban", "Space-Saving", "Vertical Garden"]
  },
  {
    id: 10,
    title: "Wrap-Around Farm Deck",
    location: "Henrietta, NY",
    description: "Wrap-around deck for a farmhouse with integrated ramp access",
    imageUrl: "https://images.unsplash.com/photo-1574120583586-de8847ae992c?q=80&w=2070",
    category: "wrap-around",
    tags: ["Farmhouse", "Wrap-Around", "Accessibility"]
  },
  {
    id: 11,
    title: "Tiered Hillside Deck",
    location: "Mendon, NY",
    description: "Multi-tiered deck built on a hillside with scenic overlooks",
    imageUrl: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "tiered",
    tags: ["Hillside", "Tiered", "Scenic View"]
  },
  {
    id: 12,
    title: "Commercial Restaurant Deck",
    location: "Pittsford, NY",
    description: "Large commercial deck for restaurant outdoor seating",
    imageUrl: "https://images.unsplash.com/photo-1653866113634-28fb3bed4f30?q=80&w=2071",
    category: "commercial",
    tags: ["Commercial", "Restaurant", "High-Traffic"]
  }
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "cedar", label: "Cedar Decks" },
  { value: "composite", label: "Composite Decks" },
  { value: "multi-level", label: "Multi-Level Decks" },
  { value: "pool", label: "Pool Decks" },
  { value: "screened", label: "Screened Porches" },
  { value: "commercial", label: "Commercial Projects" }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const filteredProjects = activeCategory === "all" 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === activeCategory);
    
  const handleProjectClick = (project: ProjectDetails) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <MainLayout>
      <AnimatedBox variant="fadeIn" duration={0.8}>
        <PageHeader />
      </AnimatedBox>
      
      <AnimatedBox variant="fadeInUp" delay={0.2} duration={0.6}>
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
      </AnimatedBox>
      
      <GalleryGrid 
        projects={filteredProjects} 
        onProjectClick={handleProjectClick} 
      />
      
      <AnimatedBox variant="fadeInUp" delay={0.4} duration={0.7}>
        <TestimonialSection />
      </AnimatedBox>
      
      {selectedProject && (
        <DetailModal 
          isOpen={isOpen} 
          onClose={onClose} 
          project={selectedProject} 
        />
      )}
    </MainLayout>
  );
}

function PageHeader() {
  const headerBgGradient = useColorModeValue(
    "linear(to-b, white, gray.100)",
    "linear(to-b, gray.800, rochester.black)"
  );
  const textColor = useColorModeValue("gray.800", "white");
  const subtitleColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      py={20}
      bgGradient={headerBgGradient}
    >
      <Container maxW="container.xl">
        <VStack spacing={6} textAlign="center" maxW="800px" mx="auto">
          <Heading 
            as="h1" 
            size="2xl" 
            fontWeight="bold"
            color={textColor}
          >
            Our Project Gallery
          </Heading>
          <Text
            fontSize="xl"
            color={subtitleColor}
          >
            Browse our portfolio of beautiful custom decks designed and built for homeowners
            throughout the Rochester, NY area.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

interface CategoryFilterProps {
  categories: { value: string; label: string }[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

function CategoryFilter({ categories, activeCategory, setActiveCategory }: CategoryFilterProps) {
  const bgColor = useColorModeValue("white", "rochester.black");
  
  return (
    <Box py={8} bg={bgColor}>
      <Container maxW="container.xl">
        <Flex 
          justify="center" 
          wrap="wrap" 
          gap={3}
        >
          {categories.map((category) => (
            <Button
              key={category.value}
              size={{ base: "sm", md: "md" }}
              variant={activeCategory === category.value ? "solid" : "outline"}
              colorScheme={activeCategory === category.value ? "red" : "gray"}
              bg={activeCategory === category.value ? "primary.500" : "transparent"}
              onClick={() => setActiveCategory(category.value)}
              mb={{ base: 2, md: 0 }}
            >
              {category.label}
            </Button>
          ))}
        </Flex>
      </Container>
    </Box>
  );
}

interface GalleryGridProps {
  projects: typeof galleryProjects;
  onProjectClick: (project: ProjectDetails) => void;
}

function GalleryGrid({ projects, onProjectClick }: GalleryGridProps) {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBgColor = useColorModeValue("white", "rochester.black");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const tagBgColor = useColorModeValue("gray.100", "rochester.gray");
  const tagTextColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box py={12} bg={bgColor}>
      <Container maxW="container.xl">
        <SimpleGrid 
          columns={{ base: 1, sm: 2, md: 3 }} 
          spacing={8}
        >
          {projects.map((project, index) => (
            <AnimatedBox 
              key={project.id}
              variant="fadeInUp"
              delay={0.1 * index}
              duration={0.5}
            >
              <motion.div
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)" }}
                // @ts-ignore - Ignoring framer-motion transition type issues
                transition={{ duration: 0.3 }}
                style={{
                  background: cardBgColor,
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  boxShadow: "var(--chakra-shadows-md)",
                  cursor: "pointer"
                }}
                onClick={() => onProjectClick(project)}
                role="group"
              >
                <AspectRatio ratio={16 / 9}>
                  <Image 
                    src={project.imageUrl} 
                    alt={project.title}
                    objectFit="cover"
                    transition="transform 0.3s ease"
                    _groupHover={{ transform: "scale(1.05)" }}
                  />
                </AspectRatio>
                
                <Box p={6}>
                  <VStack align="start" spacing={3}>
                    <Heading 
                      as="h3" 
                      size="md"
                      color={headingColor}
                    >
                      {project.title}
                    </Heading>
                    
                    <Text
                      fontSize="sm"
                      color={textColor}
                    >
                      {project.location}
                    </Text>
                    
                    <Text
                      fontSize="md"
                      color={textColor}
                      noOfLines={2}
                    >
                      {project.description}
                    </Text>
                    
                    <Flex flexWrap="wrap" gap={2} mt={2}>
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <Tag
                          key={index}
                          size="sm"
                          bg={tagBgColor}
                          color={tagTextColor}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Flex>
                    
                    <Button 
                      mt={2} 
                      size="sm" 
                      variant="outline"
                      colorScheme="red"
                      as={motion.button}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      // @ts-ignore - Ignoring framer-motion transition type issues
                      transition={{ duration: 0.2 }}
                    >
                      View Details
                    </Button>
                  </VStack>
                </Box>
              </motion.div>
            </AnimatedBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function TestimonialSection() {
  const bgColor = useColorModeValue("white", "rochester.black");
  const headingColor = useColorModeValue("gray.800", "white");
  const cardBgColor = useColorModeValue("gray.50", "rochester.gray");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const quoteSymbolBgColor = useColorModeValue("white", "rochester.black");
  const authorColor = useColorModeValue("gray.800", "white");
  const locationColor = useColorModeValue("gray.600", "gray.400");

  const testimonials = [
    {
      quote: "Rochester Deck Pros transformed our backyard with a beautiful cedar deck that perfectly complements our home. Their attention to detail and craftsmanship exceeded our expectations.",
      author: "Michael & Sarah Johnson",
      location: "Brighton, NY"
    },
    {
      quote: "We couldn't be happier with our new multi-level deck. The team was professional, reliable, and completed the project on time and on budget. It's become our favorite part of our home!",
      author: "David Williams",
      location: "Pittsford, NY"
    },
    {
      quote: "Working with Rochester Deck Pros was a pleasure from start to finish. They were responsive to our needs, offered creative solutions for our challenging space, and delivered exceptional quality.",
      author: "Jennifer Martinez",
      location: "Irondequoit, NY"
    }
  ];

  return (
    <Box 
      py={16} 
      bg={bgColor}
    >
      <Container maxW="container.xl">
        <VStack spacing={10}>
          <Heading
            as="h2"
            size="xl"
            textAlign="center"
            color={headingColor}
          >
            What Our Clients Say
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {testimonials.map((testimonial, index) => (
              <Box
                key={index}
                p={8}
                borderRadius="lg"
                boxShadow="md"
                bg={cardBgColor}
                position="relative"
                borderTopWidth="4px"
                borderTopColor="primary.500"
              >
                <Text
                  fontSize="xl"
                  position="absolute"
                  top={-4}
                  left={8}
                  color="primary.500"
                  bg={quoteSymbolBgColor}
                  p={2}
                  borderRadius="full"
                  fontWeight="bold"
                >
                  &quot;
                </Text>
                <Text mb={6} color={textColor}>
                  {testimonial.quote}
                </Text>
                <Box>
                  <Text fontWeight="bold" color={authorColor}>
                    {testimonial.author}
                  </Text>
                  <Text fontSize="sm" color={locationColor}>
                    {testimonial.location}
                  </Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
} 