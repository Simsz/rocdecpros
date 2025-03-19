import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
  Text,
  Image,
  Box,
  Tag,
  HStack,
  VStack,
  Divider,
  useColorModeValue,
  Flex,
  IconButton
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, ExternalLinkIcon } from "@chakra-ui/icons";

// Project details type
export interface ProjectDetails {
  id: number;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  // We'll add a few more fields for the modal details
  completionDate?: string;
  materials?: string[];
  features?: string[];
  projectDuration?: string;
  clientTestimonial?: string;
  // Add support for multiple images
  additionalImages?: string[];
}

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetails;
}

const MotionModalContent = motion(ModalContent);

const DetailModal = ({ isOpen, onClose, project }: DetailModalProps) => {
  const tagBgColor = useColorModeValue("gray.100", "rochester.gray");
  const tagTextColor = useColorModeValue("gray.700", "gray.200");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const bgColor = useColorModeValue("white", "rochester.black");
  const testimonialBgColor = useColorModeValue("gray.50", "gray.800");
  
  // State for image gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Combine main image with additional images (if any)
  const allImages = [project.imageUrl, ...(project.additionalImages || [])];
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  // Fullscreen image viewer
  if (isFullscreen) {
    return (
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.9)"
        zIndex="9999"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <IconButton
          aria-label="Close fullscreen"
          icon={<CloseIcon />}
          position="absolute"
          top={4}
          right={4}
          size="md"
          colorScheme="whiteAlpha"
          onClick={toggleFullscreen}
          zIndex="1"
          isRound
        />
        
        <Box position="relative" width="90%" height="90%">
          <Image
            src={allImages[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            maxH="90vh"
            maxW="90vw"
            objectFit="contain"
            margin="0 auto"
          />
          
          <IconButton
            aria-label="Previous image"
            icon={<ChevronLeftIcon boxSize={8} />}
            position="absolute"
            left={-20}
            top="50%"
            transform="translateY(-50%)"
            size="lg"
            colorScheme="whiteAlpha"
            onClick={prevImage}
            isRound
          />
          
          <IconButton
            aria-label="Next image"
            icon={<ChevronRightIcon boxSize={8} />}
            position="absolute"
            right={-20}
            top="50%"
            transform="translateY(-50%)"
            size="lg"
            colorScheme="whiteAlpha"
            onClick={nextImage}
            isRound
          />
          
          {/* Image counter */}
          <Text
            position="absolute"
            bottom={-10}
            left="50%"
            transform="translateX(-50%)"
            color="white"
            fontWeight="medium"
          >
            {currentImageIndex + 1} / {allImages.length}
          </Text>
        </Box>
      </Box>
    );
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay 
        bg="blackAlpha.300"
        backdropFilter="blur(10px)"
      />
      <MotionModalContent
        bg={bgColor}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        // @ts-ignore - Ignoring framer-motion transition type issues
        transition={{ duration: 0.3 }}
      >
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            // @ts-ignore - Ignoring framer-motion transition type issues
            transition={{ delay: 0.1, duration: 0.4 }}
            mb={4}
            borderRadius="md"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={allImages[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              w="100%"
              h="300px"
              objectFit="cover"
              borderRadius="md"
              cursor="zoom-in"
              onClick={toggleFullscreen}
            />
            
            {allImages.length > 1 && (
              <>
                <IconButton
                  aria-label="Previous image"
                  icon={<ChevronLeftIcon />}
                  position="absolute"
                  left={2}
                  top="50%"
                  transform="translateY(-50%)"
                  size="sm"
                  bg="whiteAlpha.700"
                  _dark={{ bg: "blackAlpha.700" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  isRound
                  _hover={{ bg: "whiteAlpha.900", _dark: { bg: "blackAlpha.900" } }}
                />
                <IconButton
                  aria-label="Next image"
                  icon={<ChevronRightIcon />}
                  position="absolute"
                  right={2}
                  top="50%"
                  transform="translateY(-50%)"
                  size="sm"
                  bg="whiteAlpha.700"
                  _dark={{ bg: "blackAlpha.700" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  isRound
                  _hover={{ bg: "whiteAlpha.900", _dark: { bg: "blackAlpha.900" } }}
                />
                
                {/* Fullscreen button */}
                <IconButton
                  aria-label="View fullscreen"
                  icon={<ExternalLinkIcon />}
                  position="absolute"
                  top={2}
                  right={2}
                  size="sm"
                  bg="whiteAlpha.700"
                  _dark={{ bg: "blackAlpha.700" }}
                  onClick={toggleFullscreen}
                  isRound
                  _hover={{ bg: "whiteAlpha.900", _dark: { bg: "blackAlpha.900" } }}
                />
                
                {/* Image indicators */}
                <HStack 
                  position="absolute" 
                  bottom={2} 
                  left="50%" 
                  transform="translateX(-50%)"
                  spacing={1}
                >
                  {allImages.map((_, index) => (
                    <Box
                      key={index}
                      w={2}
                      h={2}
                      borderRadius="full"
                      bg={currentImageIndex === index ? "red.500" : "whiteAlpha.700"}
                      cursor="pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                    />
                  ))}
                </HStack>
              </>
            )}
          </Box>

          <VStack align="start" spacing={4} divider={<Divider borderColor={borderColor} />}>
            <Box>
              <Text fontWeight="bold" fontSize="lg" mb={1}>Location</Text>
              <Text>{project.location}</Text>
            </Box>

            <Box>
              <Text fontWeight="bold" fontSize="lg" mb={1}>Description</Text>
              <Text>{project.description}</Text>
            </Box>

            {project.completionDate && (
              <Box>
                <Text fontWeight="bold" fontSize="lg" mb={1}>Completion Date</Text>
                <Text>{project.completionDate}</Text>
              </Box>
            )}

            {project.projectDuration && (
              <Box>
                <Text fontWeight="bold" fontSize="lg" mb={1}>Project Duration</Text>
                <Text>{project.projectDuration}</Text>
              </Box>
            )}

            {project.materials && project.materials.length > 0 && (
              <Box>
                <Text fontWeight="bold" fontSize="lg" mb={2}>Materials Used</Text>
                <HStack flexWrap="wrap">
                  {project.materials.map((material, index) => (
                    <Tag 
                      key={index} 
                      bg={tagBgColor} 
                      color={tagTextColor}
                      size="md"
                      my={1}
                    >
                      {material}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            )}

            {project.features && project.features.length > 0 && (
              <Box>
                <Text fontWeight="bold" fontSize="lg" mb={2}>Special Features</Text>
                <VStack align="start" spacing={1}>
                  {project.features.map((feature, index) => (
                    <Text key={index}>• {feature}</Text>
                  ))}
                </VStack>
              </Box>
            )}

            {project.clientTestimonial && (
              <Box p={4} bg={testimonialBgColor} borderRadius="md">
                <Text fontWeight="bold" fontSize="lg" mb={1}>Client Feedback</Text>
                <Text fontStyle="italic">&ldquo;{project.clientTestimonial}&rdquo;</Text>
              </Box>
            )}

            <Box>
              <Text fontWeight="bold" fontSize="lg" mb={2}>Tags</Text>
              <HStack flexWrap="wrap">
                {project.tags.map((tag, index) => (
                  <Tag 
                    key={index} 
                    bg={tagBgColor} 
                    color={tagTextColor}
                    size="md"
                    my={1}
                  >
                    {tag}
                  </Tag>
                ))}
              </HStack>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button 
            colorScheme="red" 
            onClick={onClose}
            as={motion.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Close
          </Button>
        </ModalFooter>
      </MotionModalContent>
    </Modal>
  );
};

export default DetailModal; 