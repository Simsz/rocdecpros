"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Container,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import AnimatedBox from "./ui/AnimatedBox";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
];

// Create motion-enabled components
const MotionFlex = motion(Flex);

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const pathname = usePathname();
  
  const bgColor = useColorModeValue("white", "rochester.black");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "rochester.gray");

  // Staggered animation for nav items
  const navItemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.3,
      },
    }),
  };

  // Building hover animation
  const buildingHoverVariants = {
    initial: { 
      height: "2px", 
      width: 0,
      backgroundColor: "var(--chakra-colors-primary-500)",
      bottom: 0,
      left: "50%",
      position: "absolute",
    },
    hover: { 
      width: "100%", 
      left: 0,
      transition: {
        duration: 0.3,
      }
    },
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="999"
      bg={bgColor}
      color={textColor}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={borderColor}
      boxShadow="sm"
    >
      <Container maxW={"7xl"}>
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          justify={"space-between"}
        >
          <MotionFlex
            flex={{ base: 1 }}
            justify={"flex-start"}
            align={"center"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <NextLink href="/" passHref>
              <Flex align="center" cursor="pointer">
                <Text
                  fontFamily={"heading"}
                  fontWeight={700}
                  fontSize={"xl"}
                  color="primary.500"
                >
                  ROCHESTER
                </Text>
                <Text
                  fontFamily={"heading"}
                  fontWeight={600}
                  fontSize={"xl"}
                  ml={1}
                >
                  DECK PROS
                </Text>
              </Flex>
            </NextLink>
          </MotionFlex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            align="center"
          >
            <Box display={{ base: "flex", md: "none" }}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
              >
                <IconButton
                  onClick={onToggle}
                  icon={
                    isOpen ? (
                      <Icon as={HiOutlineX} w={5} h={5} />
                    ) : (
                      <Icon as={HiOutlineMenu} w={5} h={5} />
                    )
                  }
                  variant={"ghost"}
                  aria-label={"Toggle Navigation"}
                />
              </motion.div>
            </Box>
            
            <Flex display={{ base: "none", md: "flex" }} ml={10} align="center" height="100%">
              <Stack direction={"row"} spacing={6} align="center">
                {NAV_ITEMS.map((navItem, index) => (
                  <NextLink key={navItem.label} href={navItem.href} passHref>
                    <motion.div
                      custom={index}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      style={{ position: "relative" }}
                    >
                      <Link
                        p={2}
                        fontSize={"sm"}
                        fontWeight={600}
                        color={pathname === navItem.href ? "primary.500" : textColor}
                        position="relative"
                        _hover={{
                          textDecoration: "none",
                          color: "primary.500",
                        }}
                      >
                        {navItem.label}
                        <motion.div
                          initial="initial"
                          whileHover="hover"
                          variants={buildingHoverVariants}
                        />
                      </Link>
                    </motion.div>
                  </NextLink>
                ))}
              </Stack>
            </Flex>
            
            <NextLink href="/#contact" passHref>
              <Box display={{ base: "none", md: "inline-flex" }}>
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  whileHover={{
                    boxShadow: "0 4px 8px rgba(237, 50, 55, 0.3)",
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"white"}
                    bg={"primary.500"}
                    _hover={{
                      bg: "primary.600",
                    }}
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </Box>
            </NextLink>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <AnimatedBox variant="fadeInDown" duration={0.3}>
            <Stack
              bg={bgColor}
              p={6}
              display={{ md: "none" }}
              borderRadius="md"
              spacing={6}
              shadow="md"
            >
              {NAV_ITEMS.map((navItem, index) => (
                <AnimatedBox key={navItem.label} variant="fadeInLeft" delay={0.1 * index} duration={0.3}>
                  <NextLink href={navItem.href} passHref>
                    <Box
                      py={4}
                      px={3}
                      borderRadius="md"
                      bg={pathname === navItem.href ? "rgba(237, 50, 55, 0.1)" : "transparent"}
                      _hover={{
                        bg: "rgba(237, 50, 55, 0.05)",
                      }}
                      onClick={onToggle}
                      cursor="pointer"
                    >
                      <Text
                        fontSize="lg"
                        fontWeight={700}
                        color={pathname === navItem.href ? "primary.500" : textColor}
                      >
                        {navItem.label}
                      </Text>
                    </Box>
                  </NextLink>
                </AnimatedBox>
              ))}
              <AnimatedBox variant="fadeInUp" delay={0.3} duration={0.3}>
                <NextLink href="/#contact" passHref>
                  <Button
                    onClick={onToggle}
                    w="full"
                    fontSize={"md"}
                    fontWeight={700}
                    color={"white"}
                    bg={"primary.500"}
                    size="lg"
                    py={6}
                    _hover={{
                      bg: "primary.600",
                    }}
                  >
                    Contact Us
                  </Button>
                </NextLink>
              </AnimatedBox>
            </Stack>
          </AnimatedBox>
        </Collapse>
      </Container>
    </Box>
  );
} 