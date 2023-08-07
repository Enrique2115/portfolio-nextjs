"use client";
import { motion } from "framer-motion";

type Components = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
};

type MotionComponent = keyof JSX.IntrinsicElements;

type CustonMotionProps = {
  items: Components[];
  as: MotionComponent;
};

const MotionIcons = ({ items, as }: CustonMotionProps) => {
  const MotionIcon = motion[as] || motion.div;

  return items.map((item, index) => (
    <MotionIcon
      className={item.className}
      key={index}
      href={item.href}
      target={item.target}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
    >
      {item.children}
    </MotionIcon>
  ));
};

export default MotionIcons;
