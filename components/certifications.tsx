"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { CertificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const growOnHover = {
  scale: 1.2,
};

export default function Certifications() {
  const { ref } = useSectionInView("Certifications");

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[58rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Certifications</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {CertificationsData.map((certification, index) => (
          <motion.li
            className="flex flex-col items-center px-4 py-3 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            whileHover={growOnHover}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <Image 
              src={certification.imageUrl} 
              alt="Certification I got" 
              quality={95} 
              className="object-cover h-48 w-48 hover:object-scale-up"/>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
