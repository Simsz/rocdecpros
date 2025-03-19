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
  Flex,
  Tag,
  HStack,
  VStack,
  Divider,
  useColorModeValue
} from "@chakra-ui/react";
import { motion } from "framer-motion";

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
        transition={{ duration: 0.3 }}
      >
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            as={motion.div}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            mb={4}
            borderRadius="md"
            overflow="hidden"
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              w="100%"
              h="300px"
              objectFit="cover"
              borderRadius="md"
            />
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
              <Box p={4} bg={useColorModeValue("gray.50", "gray.800")} borderRadius="md">
                <Text fontWeight="bold" fontSize="lg" mb={1}>Client Feedback</Text>
                <Text fontStyle="italic">"{project.clientTestimonial}"</Text>
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