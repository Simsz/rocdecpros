"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import NextLink from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      bg={useColorModeValue("gray.50", "rochester.black")}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "rochester.gray")}
    >
      <Container
        as={Stack}
        maxW={"7xl"}
        py={10}
        spacing={8}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Flex align="center" mb={{ base: 4, md: 0 }}>
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
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"LinkedIn"} href={"#"}>
              <FaLinkedin />
            </SocialButton>
          </Stack>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 6, md: 8 }}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <NextLink href="/" passHref>
              <Link
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: "primary.500",
                }}
              >
                Home
              </Link>
            </NextLink>
            <NextLink href="/services" passHref>
              <Link
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: "primary.500",
                }}
              >
                Services
              </Link>
            </NextLink>
            <NextLink href="/gallery" passHref>
              <Link
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: "primary.500",
                }}
              >
                Gallery
              </Link>
            </NextLink>
            <NextLink href="/#contact" passHref>
              <Link
                fontSize={"sm"}
                fontWeight={500}
                _hover={{
                  textDecoration: "none",
                  color: "primary.500",
                }}
              >
                Contact
              </Link>
            </NextLink>
          </Stack>
          <Text fontSize={"sm"}>
            © {currentYear} Rochester Deck Pros. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

interface SocialButtonProps {
  children: React.ReactNode;
  label: string;
  href: string;
}

const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <Link
      href={href}
      isExternal
      _hover={{
        textDecoration: "none",
      }}
    >
      <Flex
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        w={8}
        h={8}
        color={useColorModeValue("gray.700", "white")}
        _hover={{
          bg: "primary.500",
          color: "white",
        }}
        transition="all 0.3s ease"
      >
        <Icon as={children as any} />
      </Flex>
    </Link>
  );
}; 