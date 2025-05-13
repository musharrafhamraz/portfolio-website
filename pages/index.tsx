import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import styles from "../styles/Home.module.css";
import { Experience, PageInfo, Skill, Project, Social } from "../typings";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";
import Script from "next/script";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div
      className="bg-lightBackground text-darkBlack h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkGreen/80"
    >
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{"Mitch's Portfolio"}</title>
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LV1LN9VBT0"
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-LV1LN9VBT0')`}
        ;
      </Script>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experiences */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section> 

      {/* Contact */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
              <HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-white animate-pulse" />
            </div>
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = {
    _type: 'pageInfo',
    _createdAt: '2023-01-01T00:00:00Z',
    _id: 'pageInfo-123',
    _rev: 'rev-123',
    _updatedAt: '2023-01-01T00:00:00Z',
    name: 'John Doe',
    role: 'Full Stack Developer',
    heroImage: { _type: 'image', asset: { _ref: 'image-123', _type: 'reference' } },
    backgroundInformation: 'I am a passionate developer with a love for coding.',
    profilePic: { _type: 'image', asset: { _ref: 'image-456', _type: 'reference' } },
    phoneNumber: '+1234567890',
    email: 'john.doe@example.com',
    address: '123 Developer St, Tech City'
  };

  const experiences: Experience[] = [
    {
      _type: 'experience',
      _createdAt: '2023-01-01T00:00:00Z',
      _id: 'exp-123',
      _rev: 'rev-123',
      _updatedAt: '2023-01-01T00:00:00Z',
      company: 'Tech Corp',
      companyImage: { _type: 'image', asset: { _ref: 'image-789', _type: 'reference' } },
      dateStarted: '2020-01-01',
      dateEnded: '2022-12-31',
      isCurrentlyWorkingHere: false,
      jobTitle: 'Senior Developer',
      points: ['Led a team of developers', 'Improved application performance'],
      technologies: []
    }
  ];

  const skills: Skill[] = [
    {
      _type: 'skill',
      _createdAt: '2023-01-01T00:00:00Z',
      _id: 'skill-123',
      _rev: 'rev-123',
      _updatedAt: '2023-01-01T00:00:00Z',
      image: { _type: 'image', asset: { _ref: 'image-202', _type: 'reference' } },
      progress: 90,
      title: 'JavaScript'
    }
  ];

  const projects: Project[] = [
    {
      _type: 'project',
      _createdAt: '2023-01-01T00:00:00Z',
      _id: 'proj-123',
      _rev: 'rev-123',
      _updatedAt: '2023-01-01T00:00:00Z',
      title: 'Portfolio Website',
      linkToBuild: 'https://example.com/portfolio',
      image: { _type: 'image', asset: { _ref: 'image-101', _type: 'reference' } },
      summary: 'A personal portfolio website built with Next.js and Tailwind CSS.',
      technologies: []
    }
  ];

  const socials: Social[] = [
    {
      _type: 'social',
      _createdAt: '2023-01-01T00:00:00Z',
      _id: 'social-123',
      _rev: 'rev-123',
      _updatedAt: '2023-01-01T00:00:00Z',
      title: 'GitHub',
      url: 'https://github.com/johndoe'
    }
  ];

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
