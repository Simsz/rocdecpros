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

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const pathname = usePathname();
  
  const bgColor = useColorModeValue("white", "rochester.black");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("gray.200", "rochester.gray");

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
          <Flex
            flex={{ base: 1 }}
            justify={"flex-start"}
            align={"center"}
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
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
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
              display={{ base: "flex", md: "none" }}
            />
            
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <Stack direction={"row"} spacing={6}>
                {NAV_ITEMS.map((navItem) => (
                  <NextLink key={navItem.label} href={navItem.href} passHref>
                    <Link
                      p={2}
                      fontSize={"sm"}
                      fontWeight={600}
                      color={pathname === navItem.href ? "primary.500" : textColor}
                      _hover={{
                        textDecoration: "none",
                        color: "primary.500",
                      }}
                    >
                      {navItem.label}
                    </Link>
                  </NextLink>
                ))}
              </Stack>
            </Flex>
            
            <Button
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
            >
              Contact Us
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Stack
            bg={bgColor}
            p={4}
            display={{ md: "none" }}
            borderRadius="md"
            spacing={4}
          >
            {NAV_ITEMS.map((navItem) => (
              <NextLink key={navItem.label} href={navItem.href} passHref>
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
            ))}
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
          </Stack>
        </Collapse>
      </Container>
    </Box>
  );
} 