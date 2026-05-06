'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ScrollExpandImage() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.6', 'start 0.05'],
  });

  // px-8 container padding is 2rem (32px) — negative margins break out to full bleed
  const marginHorizontal = useTransform(scrollYProgress, [0, 1], ['0.5rem', '-2rem']);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ['2rem', '0rem']);

  return (
    <motion.div
      ref={ref}
      style={{
        marginLeft: marginHorizontal,
        marginRight: marginHorizontal,
        borderRadius,
      }}
      className="aspect-[4/5] relative bg-parchment-muted overflow-hidden"
    >
      <Image
        src="/images/profile2.png"
        alt="Blake Baird"
        fill
        className="object-cover object-[center_25%]"
        sizes="100vw"
        priority
      />
    </motion.div>
  );
}
