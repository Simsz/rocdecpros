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
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import MainLayout from "@/components/MainLayout";
import { useState } from "react";

// Sample gallery data - in a real implementation, you might fetch this from an API
const galleryProjects = [
  {
    id: 1,
    title: "Elevated Cedar Deck",
    location: "Pittsford, NY",
    description: "Custom elevated cedar deck with integrated seating and pergola",
    imageUrl: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "cedar",
    tags: ["Elevated", "Cedar", "Pergola"]
  },
  {
    id: 2,
    title: "Lakefront Composite Deck",
    location: "Irondequoit, NY",
    description: "Waterfront composite deck with glass railings for unobstructed lake views",
    imageUrl: "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "composite",
    tags: ["Waterfront", "Glass Railings", "Composite"]
  },
  {
    id: 3,
    title: "Multi-Level Backyard Retreat",
    location: "Brighton, NY",
    description: "Multiple level deck with built-in fire pit and outdoor kitchen area",
    imageUrl: "https://images.unsplash.com/photo-1588244677579-c411d86ffe52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "multi-level",
    tags: ["Multi-Level", "Fire Pit", "Outdoor Kitchen"]
  },
  {
    id: 4,
    title: "Classic Pressure-Treated Deck",
    location: "Greece, NY",
    description: "Traditional pressure-treated deck with white railings and lattice skirting",
    imageUrl: "https://images.unsplash.com/photo-1602860739945-9a61559a1ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
    tags: ["Modern", "IPE", "Cable Railings"]
  },
  {
    id: 6,
    title: "Screened Porch Addition",
    location: "Fairport, NY",
    description: "Combination deck with custom screened porch for three-season enjoyment",
    imageUrl: "https://images.unsplash.com/photo-1624307115141-63981dd2c8d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "screened",
    tags: ["Screened Porch", "Three-Season", "Combination"]
  },
  {
    id: 7,
    title: "Poolside Composite Deck",
    location: "Penfield, NY",
    description: "Slip-resistant composite decking surrounding an in-ground pool",
    imageUrl: "https://images.unsplash.com/photo-1505004620438-e3d6a1351c5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "pool",
    tags: ["Pool Deck", "Slip-Resistant", "Composite"]
  },
  {
    id: 8,
    title: "Redwood Entertaining Deck",
    location: "Webster, NY",
    description: "Large redwood deck designed for entertaining with built-in bar area",
    imageUrl: "https://images.unsplash.com/photo-1601156510135-1bc74dc8a85f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1573005099734-5256fce8271a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
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
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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

  const filteredProjects = activeCategory === "all" 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === activeCategory);

  return (
    <MainLayout>
      <PageHeader />
      <CategoryFilter 
        categories={categories} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      <GalleryGrid projects={filteredProjects} />
      <TestimonialSection />
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
}

function GalleryGrid({ projects }: GalleryGridProps) {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBgColor = useColorModeValue("white", "rochester.black");
  const headingColor = useColorModeValue("gray.800", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const tagBgColor = useColorModeValue("gray.100", "rochester.gray");
  const tagTextColor = useColorModeValue("gray.700", "gray.200");

  return (
    <Box py={12} bg={bgColor}>
      <Container maxW="container.xl">
        {projects.length === 0 ? (
          <Box textAlign="center" py={10}>
            <Heading as="h3" size="lg" mb={4}>
              No projects found
            </Heading>
            <Text>Please try a different category.</Text>
          </Box>
        ) : (
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={8}
          >
            {projects.map((project) => (
              <LinkBox
                key={project.id}
                borderRadius="lg"
                overflow="hidden"
                bg={cardBgColor}
                boxShadow="md"
                transition="all 0.3s"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "xl",
                }}
              >
                <AspectRatio ratio={4/3}>
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    objectFit="cover"
                  />
                </AspectRatio>
                <Box p={6}>
                  <Heading
                    as="h3"
                    size="md"
                    mb={2}
                    color={headingColor}
                  >
                    <LinkOverlay href="#">
                      {project.title}
                    </LinkOverlay>
                  </Heading>
                  
                  <Text fontSize="sm" color="primary.500" fontWeight="bold" mb={3}>
                    {project.location}
                  </Text>
                  
                  <Text
                    color={textColor}
                    mb={4}
                    noOfLines={2}
                  >
                    {project.description}
                  </Text>
                  
                  <Flex wrap="wrap" gap={2}>
                    {project.tags.map((tag) => (
                      <Tag
                        key={tag}
                        size="sm"
                        bg={tagBgColor}
                        color={tagTextColor}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                </Box>
              </LinkBox>
            ))}
          </SimpleGrid>
        )}
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