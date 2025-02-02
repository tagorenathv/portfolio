import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import mtomImg from "@/public/mtom.png";
import conveyImg from "@/public/convey_ai.png";
import telosairImg from "@/public/telosair.png";
import iotSaasImg from "@/public/iot-saas.png";
import shiftRosterImg from "@/public/shift-roster.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import lambtonImg from '@/public/lambton.png';
import ocj4uImg from "@/public/ocj4u.png";
import saa from "@/public/aws-saa.png";
import cda from "@/public/aws-cda.png";
import mcda from "@/public/mongodb-cda.png";
import scw from "@/public/scw.png";
import openlocalizationImg from "@/public/openlocalization.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contributions",
    hash: "#projects",
  },
  {
    name: "Certifications",
    hash: "#certifications",
  },  
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer",
    location: "Delivery Hero, Berlin",
    description:
      "As part of the Quick Commerce Catalog team, I played a crucial role in transforming the processing and synchronization of catalog information across DeliveryHero’s global network, encompassing 70 countries and multiple platforms.\nMy initiatives resulted in a 40% reduction in data processing times and an 80% decrease in data redundancy. By re-architecting critical systems, we improved the synchronization 99%le timeline from over hour(s) to 3-5 minutes.", 
      // \nAdditionally, I introduced a low-latency GraphQL API, enabling internal systems to directly access up-to-date catalog data. This eliminated the need for these systems to replicate data, streamlining operations and significantly enhancing data accessibility and efficiency.
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "skill-icons:gcp-dark", "devicon:redis", "devicon:postgresql", "mdi:apache-kafka"],
    date: "October 2023 - Till Date",
    urlLink: "https://www.deliveryhero.com/",
  },
  {
    title: "Senior Software Engineer",
    location: "Auto1, Berlin",
    description:
      "In the Merchant Experience team at Auto1, which operates across 30 countries, I worked on services integral to merchant onboarding and management. Additionally, I enhanced the infrastructure for critical services used organization-wide, including notification, email, and tracking systems.\nI re-engineered the email service to maintain continuity after interruptions, essential for efficiently managing the distribution of millions of messages. I also improved the notification service by implementing an archival process and refining queries, significantly boosting performance and reliability across the company's operations.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "skill-icons:aws-dark", "devicon:postgresql", "devicon:elasticsearch",],
    date: "September 2021 - September 2023",
    urlLink: "https://www.auto1.com/en/home",
  },
  {
    title: "Principal Engineer",
    location: "Imaginea, Remote",
    description:
      "I initiated and led the development of a 'Price per Usage' model proof of concept for Tamr's AI/ML SaaS solutions, significantly boosting the product’s adaptability and appeal in the marketplace. In parallel, I crafted a refined onboarding process that optimized user engagement and retention.\nThe architectural guidelines I developed promoted uniformity and efficiency, significantly speeding up project timelines and elevating the quality across various product offerings.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["vscode-icons:file-type-go", "skill-icons:aws-dark", "skill-icons:gcp-dark", "devicon:redis", "devicon:postgresql", "mdi:apache-kafka"],
    date: "May 2021 - August 2021",
    urlLink: "https://www.accenture.com/in-en/services/software-engineering/product-platform-engineering",
  },
  {
    title: "Software Engineer Specialist",
    location: "Telstra, Hyderabad",
    description:
      "I played a pivotal role in enhancing the EOV platform, which tracks customer orders and behaviors in real-time, handling over 100 million events per hour. I developed and open-sourced a custom NiFi processor for AWS KMS, significantly enhancing the platform's security and compliance frameworks. Additionally, I refined our HBase data storage strategy, optimizing from row-based to column-based storage, which significantly improved processing efficiency and resource utilization.\nOverall, our improvements across the platform led to a 40% reduction in operational costs, while also providing deeper insights into customer interactions and reinforcing Telstra’s commitment to exceptional service and cost-effectiveness.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "skill-icons:aws-dark", "devicon:apachespark", "logos:apache-flink-icon", "logos:hbase", "devicon:postgresql", "simple-icons:apachehive"],
    date: "March 2019 - May 2021",
    urlLink: "https://www.telstra.com.au/",
  },
  {
    title: "Data Engineer",
    location: "TMCL, Hyderabad",
    description:
      "As the first developer and lead for this startup, I oversaw the complete lifecycle of a SIEM product, from its initial concept and architecture design to its development and market introduction.\nMy leadership included recruiting and managing the development team, conducting client onboarding, and leading product demos which facilitated the onboarding of two major US clients.\nThis hands-on approach not only accelerated the company's entrance into the SaaS market but also established a strong market presence and robust client engagement through technical excellence and strategic client interactions.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "skill-icons:aws-dark", "mdi:apache-kafka", "devicon:postgresql", "vscode-icons:file-type-elastic", "simple-icons:apachehadoop"],
    date: "January 2018 - March 2019",
    urlLink: "https://www.linkedin.com/company/technominds-cyberlabsoz/",
  },
  {
    title: "Project Engineer",
    location: "Wipro Technologies, Hyderabad",
    description:
      "I was involved in customizing the Savvion BPM tool to meet the specific needs of varied Genpact's end clients, focusing on adapting software features, resolving bugs, and creating tailored reporting tools for unique client demands.\nAdditionally, I developed internal tools for streamline ad-hoc reporting and reconciliation processes of Support team, which significantly reduced redundancies and enhanced operational efficiency, directly improving productivity and service quality in client support operations.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "logos:python", "devicon:oracle", "gis:network"],
    date: "December 2015 - January 2018",
    urlLink: "https://www.wipro.com/",
  },
] as const;

export const projectsData = [
  {
    title: "ConveyAI",
    tags: [],
    description:
      "I transformed the startup’s vision into reality by architecting and developing Convey.ai, a competitive lead management platform inspired by industry leaders like Convertr.io. My end-to-end involvement in designing and building the system ensured a robust, scalable solution that streamlines lead capture, validation, and distribution, delivering measurable value to businesses.",
    icons: [
      "logos:java",
      "mdi:apache-kafka",
      "logos:react",
      "devicon:postgresql",
      "devicon:redis",
    ],
    imageUrl: conveyImg,
    urlLink: "https://www.convey.ai",
  },
  
  {
    title: "TelosAir",
    tags: [],
    description:
      "I undertook a major revamp of their existing architecture to transition it into a scalable SaaS model, significantly broadening its market potential. I also spearheaded the migration of their services to AWS IoT and EKS, enhancing the platform's reliability and performance. My efforts not only modernized TelosAir's infrastructure but also optimized operational efficiency and expanded its service capabilities, setting a new standard for future developments.",
    icons: [
      "logos:java",
      "skill-icons:aws-dark",
      "eos-icons:iot",
      "devicon:postgresql",
    ],
    imageUrl: telosairImg,
    urlLink: "https://www.telosair.com",
  },
  {
    title: "OCJ4U App",
    description:
      "I proposed and developed a mobile application to enhance access to India's prominent portal for freshers seeking off-campus job opportunities. I handled the design, development, and launch of the app, integrating it with the existing site data to ensure a smooth and accessible mobile user experience. This initiative significantly broadened the platform's accessibility and improved user engagement by simplifying the job search process on mobile devices.",
    icons: ["logos:flutter",],
    imageUrl: ocj4uImg,
    demoLink: "https://play.google.com/store/apps/details?id=com.offcampusjobs4u.offcampusjobs4u&hl=en&gl=US",
    urlLink: "https://offcampusjobs4u.com",
  },
  {
    title: "MtoM",
    tags: [],
    description:
      "I guided the startup from vision to reality, designing and leading the development of a comprehensive society management platform. My technical and design expertise not only brought their product to market but also created a robust and scalable system that seamlessly integrates essential services, significantly boosting community efficiency and convenience.",
    icons: [
      "logos:java",
      "skill-icons:aws-dark",
      "logos:react",
      "devicon:flutter",
      "devicon:postgresql",
    ],
    imageUrl: mtomImg,
    urlLink: "https://mtommart.com",
  },
  {
    title: "IoT SaaS",
    description:
      "For the MongoDB hackathon, I developed a prototype that leverages MongoDB Atlas and Realm to offer IoT device management as a subscription-based SaaS model. Users can subscribe to devices, monitor data, and receive real-time alerts. This application showcases MongoDB's robust capabilities, including time-series data management, advanced search functionalities, and automated triggers, providing a comprehensive demonstration of modern database technologies applied to IoT services.",
    icons: ["vscode-icons:file-type-mongo", "devicon-plain:realm-wordmark", "logos:react",],
    imageUrl: iotSaasImg,
    githubLink: "https://github.com/tagorenathv/iot-saas",
    demoLink: "https://drive.google.com/file/d/1BQeS1Lk1g_3Mn-lEJDrh5oxGd6RKVUr8/view",
  },
  {
    title: "Slack Shift Roster",
    description:
      "This open-source application simplifies shift roster management within Slack using serverless architecture, offering plug-and-play ease and maintaining data privacy without operational overhead. Built with Python and AWS SAM, it's designed for pay-per-use efficiency, avoiding heavy infrastructure costs. The system provides scalable, transparent scheduling that seamlessly integrates with Slack, enhancing fairness and communication while effortlessly adapting to diverse team needs.",
    icons: ["logos:python", "devicon:slack", ],
    imageUrl: shiftRosterImg,
    githubLink: "https://github.com/tagorenathv/slack-shift-roster",
  },
  {
    title: "Lambton College Program Advisory",
    description:
      "I have served as a member of the Program Advisory Committee for Lambton College's Big Data with AI/ML specialization course, a program offered by a well-regarded institution known for its emphasis on innovation and industry-aligned education. In this role, I provided crucial insights to the curriculum, ensuring it stays at the forefront of technological advancements and meets the complex demands of today's data-driven industries. My contributions help prepare students to excel in the dynamic fields of big data, artificial intelligence, and machine learning, equipping them with the necessary skills to succeed.",
    icons: ["devicon:hadoop", "carbon:ai", "gravity-ui:abbr-ml", ],
    imageUrl: lambtonImg,
    urlLink: "https://www.lambtoncollege.ca",
  },
  {
    title: "Open Localization (In Progress)",
    description:
      "This serverless project, akin to PhraseApp, offers a streamlined and cost-effective localization solution built with Python, ReactJS, and AWS. Deploying directly within a user's AWS account ensures privacy and reduces infrastructure complexity. With its scalability and ease of integration, it is an optimal tool for companies looking to enhance global accessibility efficiently, without the operational overhead typically associated with traditional localization tools.",
    icons: ["logos:python", "skill-icons:aws-dark", "logos:react", ],
    imageUrl: openlocalizationImg,
    githubLink: "https://github.com/tagorenathv/open-localization-serverless",
  },
] as const;

export const CertificationsData = [
  {
    imageUrl: cda,
  },
  {
    imageUrl: mcda,
  },
  {
    imageUrl: saa,
  },
  {
    imageUrl: scw,
  },
] as const;

export const skillsData = [
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "Python",
    icon: "logos:python",
  }, 
  {
    name: "AWS",
    icon: "skill-icons:aws-dark",
  },
  {
    name: "GCP",
    icon: "skill-icons:gcp-dark"
  },
  {
    name: "Spring Boot",
    icon: "devicon:spring"
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Flutter",
    icon: "devicon:flutter"
  },
  {
    name: "PostgreSQL",
    icon: "devicon:postgresql"
  },
  {
    name: "MongoDB",
    icon: "vscode-icons:file-type-mongo",
  },
  {
    name: "Elasticsearch",
    icon: "devicon:elasticsearch"
  },
  {
    name: "Redis",
    icon: "devicon:redis"
  },
  {
    name: "Kafka",
    icon: "mdi:apache-kafka",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "CI / CD",
    icon: "clarity:ci-cd-line"
  },
  {
    name: "Apache Spark",
    icon: "devicon:apachespark"
  },
  {
    name: "Terraform",
    icon: "vscode-icons:file-type-terraform",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
  },
  {
    name: "Kubernetes",
    icon: "devicon:kubernetes"
  },
] as const;
