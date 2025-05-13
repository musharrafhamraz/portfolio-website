import { motion } from "framer-motion";
import React from "react";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className=" -mb-24 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="/images/profile.jpg" // Make sure this image exists in your `public/images/` directory
        alt="Musharraf Hamraz"
      />

      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        {/* <h4 className="text-xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-darkGreen/50">little</span>{" "}
          background
        </h4> */}
        <p className="text-sm md:text-lg lg:text-lg text-justify">
          I'm <strong>Musharraf Hamraz</strong>, a passionate Machine Learning and Generative AI Engineer with a strong background in deep learning, computer vision, and natural language processing. I specialize in building intelligent systems that solve real-world problems using cutting-edge AI techniques. I’ve developed applications involving image classification, facial emotion recognition, and GenAI-powered text and audio generation. I'm continuously learning and love to explore the intersection of human creativity and machine intelligence to build scalable, ethical, and impactful AI solutions.
        </p>
      </div>
    </motion.div>
  );
}
