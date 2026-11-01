import { Variants, Transition } from "framer-motion";

export const defaultEase = [0.22, 1, 0.36, 1] as const;

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: defaultEase,
};

// Scroll reveal: fade + slide up (y: 24 to 0), 0.6s, easing [0.22, 1, 0.36, 1]
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

// Simple fade
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

// Scale in animation (e.g. for badges, icons, modals)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

// Staggered children for card grids and lists (0.08s to 0.12s delay)
export const staggerContainer = (
  staggerChildren = 0.09,
  delayChildren = 0.04
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Headline text reveal (word by word / line by line)
export const headlineContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 * i },
  }),
};

export const headlineWord: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: defaultEase,
    },
  },
};

// Hover card lift with soft shadow
export const cardLiftProps = {
  whileHover: {
    y: -6,
    transition: { duration: 0.25, ease: defaultEase },
  },
};

// Subtle button press / scale
export const buttonHoverProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.15, ease: defaultEase },
};

// Page transition
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: defaultEase },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: defaultEase },
  },
};

// Viewport settings for scroll-triggered animations (once: true for performance)
export const viewportOnce = {
  once: true,
  amount: 0.15,
};
