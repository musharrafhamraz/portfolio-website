import React from "react";
import { motion } from "framer-motion";

type Skill = {
  title: string;
  progress: number;
  imagePath: string;
};

const skills: Skill[] = [
  {
    title: "Python",
    progress: 80,
    imagePath: "/images/python.png",
  },
  {
    title: "TensorFlow",
    progress: 85,
    imagePath: "/images/tensorflow.png",
  },
  {
    title: "Pytorch",
    progress: 70,
    imagePath: "/images/pytorch.png",
  },
  {
    title: "Pandas",
    progress: 80,
    imagePath: "/images/pandas.png",
  },
  {
    title: "Streamlit",
    progress: 85,
    imagePath: "/images/Streamlit.png",
  },
  {
    title: "Dart",
    progress: 70,
    imagePath: "/images/dart.png",
  },
  {
    title: "Flutter",
    progress: 80,
    imagePath: "/images/flutter.png",
  },
  {
    title: "Langchain",
    progress: 85,
    imagePath: "/images/langchain.png",
  },
  {
    title: "Rust",
    progress: 70,
    imagePath: "/images/rust.png",
  },
  {
    title: "MongoDB",
    progress: 80,
    imagePath: "/images/mongodb.png",
  },
  {
    title: "Flask",
    progress: 85,
    imagePath: "/images/flask.png",
  },
  {
    title: "Firebase",
    progress: 70,
    imagePath: "/images/firebase.png",
  },
  // Add more skills here as needed
];

type SkillProps = {
  skill: Skill;
  directionLeft?: boolean;
};

const SkillCard = ({ skill, directionLeft }: SkillProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -80 : 80, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full border-2 border-darkGreen object-cover w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={skill.imagePath}
        alt={skill.title}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl md:text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Skill() {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-full">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} directionLeft={index % 2 === 0} />
      ))}
    </div>
  );
}
// export default function SkillsSection() {
//   return (
//     <div className=" justify-center items-center w-full h-screen">
//       <div className="flex gap-5 justify-center items-center w-full h-screen">
//         {skills.map((skill, index) => (
//           <SkillCard key={index} skill={skill} directionLeft={index % 2 === 0} />
//         ))}
//       </div>
//     </div>
//   );
// }