// import { motion } from "framer-motion";
// import React from "react";
// // import { urlFor } from "../sanity";
// import { Project } from "../typings";

// type Props = { projects: Project[] };

// export default function Projects({ projects }: Props) {
//   {console.log("All projects:", projects)}
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
//     >
//       <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
//         Projects
//       </h3>

//       <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
//         {projects?.map((project, i) => (
//           <div
//             key={project._id}
//             className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
//           >
//             <motion.img
//               initial={{ y: -100, opacity: 0 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1.2 }}
//               viewport={{ once: true }}
//               className=" h-28 xl:h-80 md:h-72 object-contain"
//               src="https://example.com/project.jpg"
//               alt=""
//             />

//             <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
//               <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
//                 <span className="underline decoration-darkGreen/50">
//                   Project {i + 1}:
//                 </span>{" "}
//                 {project?.title}
//               </h4>
//               <div className="flex items-center space-x-2 justify-center ">
//                 {project?.technologies.map((technology) => (
//                   <img
//                     key={technology._id}
//                     className="h-10 w-10 rounded-full object-cover"
//                     src="https://example.com/technology.jpg"
//                     alt=""
//                   />
//                 ))}
//               </div>

//               <p className="text-sm md:text-md lg:text-lg text-justify ">
//                 {project?.summary}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"></div>
//     </motion.div>
//   );
// }
import { motion } from "framer-motion";
import React from "react";

type Project = {
  _id: string;
  title: string;
  summary: string;
  thumbnail: string;
  technologies: { _id: string, image: string }[];
};

const hardcodedProjects: Project[] = [
  {
    _id: "1",
    title: "Dtreaty - Farmer's Assistant",
    summary: "DTREATY is a disease tracking and treatment advisory mobile application developed using Flutter. The app allows users to predict plant diseases through a camera-based image classifier powered by TensorFlow Lite. Based on the prediction, it provides treatment and symptom information by searching a local JSON file. It also stores data such as disease name, latitude, longitude, and timestamp either in Firebase Firestore (when online) or local storage (when offline). DTREATY includes visual analytics features like bar charts and line graphs to help analyze disease trends over time and geography.",
    thumbnail: "/images/dtreaty.jpg",
    technologies: [
      { _id: "t1", image: "/images/flutter.png" },
      { _id: "t2", image: "/images/tensorflow.png" },
      { _id: "t4", image: "/images/git.png" },
      { _id: "t3", image: "/images/firebase.png" },
    ],
  },
  {
    _id: "2",
    title: "VidWise",
    summary: "VidWise is an intelligent YouTube video agent built using LangChain that allows users to interact with YouTube videos through natural language. The system extracts video transcripts, summarizes key points, answers questions, and enables conversational exploration of video content. It leverages LLMs and LangChain's agent capabilities to provide a smart assistant for consuming and understanding long-form video content.",
    thumbnail: "/images/youtube-agent.png",
    technologies: [
      { _id: "t1", image: "/images/python.png" },
      { _id: "t2", image: "/images/Streamlit.png" },
      { _id: "t4", image: "/images/git.png" },
      { _id: "t3", image: "/images/langchain.png" },
    ],
  },
  {
    _id: "3",
    title: "SiteSage: RAG-Powered Web Assistant",
    summary: "SiteSage is a Retrieval-Augmented Generation (RAG) web agent built with Flask and LangChain that enables intelligent question answering over website content. It scrapes and indexes web pages, embeds their content using vector stores, and responds to user queries with context-aware, natural language answers. This agent combines semantic retrieval with LLM-powered reasoning to provide precise and context-rich responses directly from your site data, making it ideal for customer support, documentation bots, and interactive FAQ systems.",
    thumbnail: "/images/sitesage.png",
    technologies: [
      { _id: "t1", image: "/images/python.png" },
      { _id: "t2", image: "/images/Flask.png" },
      { _id: "t3", image: "/images/langchain.png" },
      { _id: "t4", image: "/images/git.png" },
      { _id: "t5", image: "/images/HTML5.png" },
      { _id: "t6", image: "/images/CSS3.png" },
    ],
  },
  {
    _id: "4",
    title: "🎵 Musify – Emotion-Based Music Recommender",
    summary: "Musify is an AI-powered mobile application that enhances music listening experiences by analyzing the user's facial expressions in real time using the device's camera. Leveraging emotion recognition through computer vision, Musify predicts the user's mood and plays songs that match their emotional state. Whether you're happy, sad, or relaxed, Musify curates the perfect playlist to suit your vibe.",
    thumbnail: "/images/chat_app.jpg",
    technologies: [
      { _id: "t1", image: "/images/flutter.png" },
      { _id: "t2", image: "/images/git.png" },
      { _id: "t3", image: "/images/firebase.png" },
      { _id: "t4", image: "/images/dart.png" },
      { _id: "t5", image: "/images/tensorflow.png" },
    ],
  },
  {
    _id: "5",
    title: "CSV Analyst",
    summary: "CSV Analyst is an intelligent CSV data analysis tool powered by Retrieval-Augmented Generation (RAG) using LangChain. This project enables users to upload CSV files and ask natural language questions about their data. The backend uses LangChain to process and analyze data by combining large language models with retrieval techniques for accurate and context-aware responses. A simple and interactive Flask-based web interface allows users to interact with the system easily, making data analysis accessible without requiring coding skills.",
    thumbnail: "/images/csv.png",
    technologies: [
      { _id: "t1", image: "/images/flask.png" },
      { _id: "t2", image: "/images/langchain.png" },
      { _id: "t3", image: "/images/python.png" },
      { _id: "t4", image: "/images/pandas.png" },
      { _id: "t5", image: "/images/sql.png" },
    ],
  },
];

type Props = {};

export default function Projects({}: Props) {
  const projects = hardcodedProjects;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
          >
            <motion.img
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className=" h-28 xl:h-80 md:h-72 object-contain"
              src=""
              // src={project.thumbnail}
              alt=""
            />

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="">
                  Project {i + 1}:
                </span>{" "}
                {project.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center">
              {project.technologies.map((technology) => (
  <img
    key={technology._id}
    className="h-10 w-10 rounded-full object-cover"
    src={technology.image}
    alt=""
  />
))}
              </div>

              <p className="text-sm md:text-md lg:text-lg text-justify">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-darkGreen/40 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
