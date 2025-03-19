import { Box, BoxProps } from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

// Create a motion-enabled version of Chakra's Box
const MotionBox = motion(Box);

export type AnimationVariant = 
  | "fadeIn" 
  | "fadeInUp" 
  | "fadeInDown" 
  | "fadeInLeft" 
  | "fadeInRight" 
  | "zoomIn" 
  | "slideIn";

interface AnimatedBoxProps extends BoxProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  // Additional framer-motion props can be passed through
  motionProps?: MotionProps;
}

// Animation variants
const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  slideIn: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
};

const AnimatedBox = ({ 
  children, 
  variant = "fadeIn", 
  delay = 0, 
  duration = 0.5, 
  motionProps,
  ...rest 
}: AnimatedBoxProps) => {
  const animation = animations[variant];
  
  return (
    <MotionBox
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animation}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
      {...motionProps}
      {...rest}
    >
      {children}
    </MotionBox>
  );
};

export default AnimatedBox; 