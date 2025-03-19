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
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);
const MotionLink = motion(Link);

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const pathname = usePathname();
  
  const bgColor = useColorModeValue("white", "rochester.black");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "rochester.gray");

  // Staggered animation for nav items
  const navItemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.3,
      },
    }),
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
          >
            <MotionIconButton
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
              display={{ base: "flex", md: "none" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            />
            
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <Stack direction={"row"} spacing={6}>
                {NAV_ITEMS.map((navItem, index) => (
                  <NextLink key={navItem.label} href={navItem.href} passHref>
                    <MotionLink
                      p={2}
                      fontSize={"sm"}
                      fontWeight={600}
                      color={pathname === navItem.href ? "primary.500" : textColor}
                      _hover={{
                        textDecoration: "none",
                        color: "primary.500",
                      }}
                      custom={index}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.1 }}
                    >
                      {navItem.label}
                    </MotionLink>
                  </NextLink>
                ))}
              </Stack>
            </Flex>
            
            <MotionButton
              as={NextLink}
              href="/#contact"
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"primary.500"}
              _hover={{
                bg: "primary.600",
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </MotionButton>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <AnimatedBox variant="fadeInDown" duration={0.3}>
            <Stack
              bg={bgColor}
              p={4}
              display={{ md: "none" }}
              borderRadius="md"
              spacing={4}
            >
              {NAV_ITEMS.map((navItem, index) => (
                <AnimatedBox key={navItem.label} variant="fadeInLeft" delay={0.1 * index} duration={0.3}>
                  <NextLink href={navItem.href} passHref>
                    <Link
                      py={2}
                      onClick={onToggle}
                      color={pathname === navItem.href ? "primary.500" : textColor}
                      _hover={{
                        textDecoration: "none",
                        color: "primary.500",
                      }}
                      fontWeight={600}
                    >
                      {navItem.label}
                    </Link>
                  </NextLink>
                </AnimatedBox>
              ))}
              <AnimatedBox variant="fadeInUp" delay={0.3} duration={0.3}>
                <NextLink href="/#contact" passHref>
                  <Button
                    onClick={onToggle}
                    w="full"
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
                </NextLink>
              </AnimatedBox>
            </Stack>
          </AnimatedBox>
        </Collapse>
      </Container>
    </Box>
  );
} 