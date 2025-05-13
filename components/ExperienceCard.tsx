import React from "react";
import { motion } from "framer-motion";
import { Experience, Technology } from "../typings";

// Sample hardcoded data
const experiences: Experience[] = [
  {
    _type: "experience",
    _createdAt: "2023-01-01T00:00:00Z",
    _id: "exp-1",
    _rev: "rev-1",
    _updatedAt: "2023-01-01T00:00:00Z",
    company: "SmartFields Pvt Ltd.",
    companyImage: { _type: "image", asset: { _ref: "/images/logo-smart.png", _type: "reference" } },
    dateStarted: "2024-02-05",
    dateEnded: "2024-08-01",
    isCurrentlyWorkingHere: false,
    jobTitle: "AI Engineer",
    points: [
      "Developed and deployed real-time ML models.",
      "Fine-tuned transformer models for text generation.",
      "Integrated AI services into client apps.",
    ],
    technologies: [
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/python.png", _type: "reference" } }, progress: 90, title: "Python" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/dart.png", _type: "reference" } }, progress: 90, title: "DART" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/flutter.png", _type: "reference" } }, progress: 90, title: "Flutter" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/tensorflow.png", _type: "reference" } }, progress: 80, title: "TensorFlow" },
    ],
  },
  {
    _type: "experience",
    _createdAt: "2021-06-01T00:00:00Z",
    _id: "exp-2",
    _rev: "rev-2",
    _updatedAt: "2022-12-31T00:00:00Z",
    company: "AI Association Gilgit Baltistan",
    companyImage: { _type: "image", asset: { _ref: "/images/logo-AI.jpg", _type: "reference" } },
    dateStarted: "2024-03-01",
    dateEnded: "2022-12-31",
    isCurrentlyWorkingHere: true,
    jobTitle: "Prompt Engineer | Trainer",
    points: [
      "Researched and published papers on object detection.",
      "Built an image anomaly detection system using PyTorch.",
      "Worked on optimizing edge deployments of CV models.",
    ],
    technologies: [
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/chatgpt.png", _type: "reference" } }, progress: 80, title: "PyTorch" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/claude.png", _type: "reference" } }, progress: 80, title: "PyTorch" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/grok.png", _type: "reference" } }, progress: 80, title: "PyTorch" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/google.png", _type: "reference" } }, progress: 80, title: "PyTorch" },
    ],
  },
  {
    _type: "experience",
    _createdAt: "2020-05-01T00:00:00Z",
    _id: "exp-3",
    _rev: "rev-3",
    _updatedAt: "2021-05-01T00:00:00Z",
    company: "BeeNeural Pvt Ltd.",
    companyImage: { _type: "image", asset: { _ref: "/images/logo-bee.png", _type: "reference" } },
    dateStarted: "2024-12-09",
    dateEnded: "2021-05-01",
    isCurrentlyWorkingHere: true,
    jobTitle: "ML Engineer | GenAI",
    points: [
      "Trained LLMs on domain-specific data.",
      "Built chatbots using LangChain and RAG pipelines.",
      "Presented demos using Streamlit dashboards.",
    ],
    technologies: [
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/flask.png", _type: "reference" } }, progress: 70, title: "JavaScript" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/pytorch.png", _type: "reference" } }, progress: 70, title: "JavaScript" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/Docker.png", _type: "reference" } }, progress: 70, title: "JavaScript" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/langchain.png", _type: "reference" } }, progress: 70, title: "JavaScript" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/Google-Cloud.png", _type: "reference" } }, progress: 70, title: "JavaScript" },
      { _type: "technology", _createdAt: "", _id: "", _rev: "", _updatedAt: "", image: { _type: "image", asset: { _ref: "/images/Redis.png", _type: "reference" } }, progress: 70, title: "JavaScript" },
    ],
  },
];

type CardProps = {
  experience: Experience;
};

function ExperienceCard({ experience }: CardProps) {
  return (
    <article className="flex drop-shadow-xl flex-col rounded-3xl items-center space-y-0 flex-shrink-0 w-72 md:w-[600px] xl:w-[700px] snap-center bg-[#FFFFFF] bg-gradient-to-tr from-white to-darkGreen/20 p-5 md:p-10 hover:opacity-100 opacity-100 cursor-pointer transition-opacity duration-200">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="md:invisible xl:visible md:h-0 w-20 h-20 md:w-0 rounded-full xl:w-[110px] xl:h-[110px] mb-2 object-cover object-center"
        src={experience.companyImage.asset._ref}
        alt={experience.company}
      />
      <div className="w-full px-0 md:px-10">
        <div className="md:flex md:justify-between items-center">
          <div>
            <h4 className="text-lg md:text-3xl font-light text-black">{experience.jobTitle}</h4>
            <p className="font-bold text-md md:text-2xl mt-1 text-lightGreen">{experience.company}</p>
            <div className="flex space-x-2 my-2">
              {experience.technologies.map((tech, index) => (
                <img
                  key={index}
                  className="h-10 w-10 rounded-full object-cover"
                  src={tech.image.asset._ref}
                  alt={tech.title}
                />
              ))}
            </div>
          </div>
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="invisible md:visible xl:invisible xl:h-0 xl:w-0 h-0 w-0 md:h-28 md:w-28 rounded-full mb-0 object-cover object-center"
            src={experience.companyImage.asset._ref}
            alt={experience.company}
          />
        </div>
        <p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
          {new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
        </p>
      </div>
      {/* <ul className="px-0 md:px-10 list-disc text-black space-y-2 pr-5 text-justify ml-0 text-sm md:text-lg pl-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80">
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul> */}
    </article>
  );
}

// Main export: renders all cards horizontally
export default function ExperienceSection() {
  return (
    <div className="flex space-x-5 overflow-x-auto md:overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-darkGreen/80 w-full">
      {experiences.map((exp, index) => (
        <ExperienceCard key={exp._id} experience={exp} />
      ))}
    </div>
  );
}

export { experiences };
