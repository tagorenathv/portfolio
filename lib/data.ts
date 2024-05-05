import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs-two.png";
import assetTradingImg from "@/public/asset-trading.jpg";
import euphorusImg from "@/public/euphorus-two.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl-two.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import saa from "@/public/aws-saa.png";
import cda from "@/public/aws-cda.png";
import mcda from "@/public/mongodb-cda.png";
import scw from "@/public/scw.png";

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
      "As part of the Quick Commerce Catalog team, I played a crucial role in transforming the processing and synchronization of catalog information across DeliveryHero’s global network, encompassing 70 countries and multiple platforms.\nMy initiatives resulted in a 40% reduction in data processing times and an 80% decrease in data redundancy. By re-architecting critical systems, we improved the synchronization timeline from 30 minutes to 25 minutes.\nAdditionally, I introduced a low-latency GraphQL API, enabling internal systems to directly access up-to-date catalog data. This eliminated the need for these systems to replicate data, streamlining operations and significantly enhancing data accessibility and efficiency.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "skill-icons:gcp-dark", "devicon:redis", "devicon:postgresql", "mdi:apache-kafka"],
    date: "October 2023 - Till Date",
  },
  {
    title: "Senior Software Engineer",
    location: "Auto1, Berlin",
    description:
      "In the Merchant Experience team at Auto1, which operates across 30 countries, I worked on services integral to merchant onboarding and management. Additionally, I enhanced the infrastructure for critical services used organization-wide, including notification, email, and tracking systems.\nI re-engineered the email service to maintain continuity after interruptions, essential for efficiently managing the distribution of millions of messages. I also improved the notification service by implementing an archival process and refining queries, significantly boosting performance and reliability across the company's operations.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "skill-icons:aws-dark", "devicon:postgresql", "devicon:elasticsearch",],
    date: "September 2021 - September 2023",
  },
  {
    title: "Principal Engineer",
    location: "Imaginea, Remote",
    description:
      "I initiated and led the development of a 'Price per Usage' model proof of concept for Tamr's AI/ML SaaS solutions, significantly boosting the product’s adaptability and appeal in the marketplace. In parallel, I crafted a refined onboarding process that optimized user engagement and retention.\nThe architectural guidelines I developed promoted uniformity and efficiency, significantly speeding up project timelines and elevating the quality across various product offerings.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["vscode-icons:file-type-go", "skill-icons:aws-dark", "skill-icons:gcp-dark", "devicon:redis", "devicon:postgresql", "mdi:apache-kafka"],
    date: "May 2021 - August 2021",
  },
  {
    title: "Software Engineer Specialist",
    location: "Telstra, Hyderabad",
    description:
      "I played a pivotal role in enhancing the EOV platform, which tracks customer orders and behaviors in real-time, handling over 100 million events per hour. I developed and open-sourced a custom NiFi processor for AWS KMS, significantly enhancing the platform's security and compliance frameworks. Additionally, I refined our HBase data storage strategy, optimizing from row-based to column-based storage, which significantly improved processing efficiency and resource utilization.\nOverall, our improvements across the platform led to a 40% reduction in operational costs, while also providing deeper insights into customer interactions and reinforcing Telstra’s commitment to exceptional service and cost-effectiveness.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "skill-icons:aws-dark", "devicon:apachespark", "logos:apache-flink-icon", "logos:hbase", "devicon:postgresql", "simple-icons:apachehive"],
    date: "March 2019 - May 2021",
  },
  {
    title: "Data Engineer",
    location: "TMCL, Hyderabad",
    description:
      "As the first developer and lead for this startup, I oversaw the complete lifecycle of a SIEM product, from its initial concept and architecture design to its development and market introduction.\nMy leadership included recruiting and managing the development team, conducting client onboarding, and leading product demos which facilitated the onboarding of two major US clients.\nThis hands-on approach not only accelerated the company's entrance into the SaaS market but also established a strong market presence and robust client engagement through technical excellence and strategic client interactions.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "skill-icons:aws-dark", "mdi:apache-kafka", "devicon:postgresql", "vscode-icons:file-type-elastic", "simple-icons:apachehadoop"],
    date: "January 2018 - March 2019",
  },
  {
    title: "Project Engineer",
    location: "Wipro Technologies, Hyderabad",
    description:
      "I was involved in customizing the Savvion BPM tool to meet the specific needs of varied Genpact's end clients, focusing on adapting software features, resolving bugs, and creating tailored reporting tools for unique client demands.\nAdditionally, I developed internal tools for streamline ad-hoc reporting and reconciliation processes of Support team, which significantly reduced redundancies and enhanced operational efficiency, directly improving productivity and service quality in client support operations.",
    icon: React.createElement(CgWorkAlt),
    skillIcons: ["logos:java", "logos:python", "devicon:oracle", "gis:network"],
    date: "December 2015 - January 2018",
  },
] as const;

export const projectsData = [
  {
    title: "CryptoCrowd",
    description:
      "Cryptocurrency sentiment analysis on tweets. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently tweeting. Users can also see keywords and an average sentiment score. Stateless application that uses Elasticache and S3 on AWS. It also used EC2 and auto-scaling to manage demand.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    icons: [
      "logos:aws",
      "logos:javascript",
      "logos:react",
      "logos:bootstrap",
      "logos:express",
    ],
    imageUrl: cryptoCrowdImg,
    githubLink: "https://github.com/ben04rogers/cab432-assignment-2",
    demoLink: "https://www.youtube.com/watch?v=uhyC0M4WIl4",
  },
  {
    title: "OzDevs",
    description:
      "Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    icons: [
      "logos:laravel",
      "logos:php",
      "logos:javascript",
      "devicon:tailwindcss",
      "logos:mysql",
    ],
    imageUrl: ozdevsImg,
    urlLink: "https://clownfish-app-48u2r.ondigitalocean.app/",
    githubLink: "https://github.com/ben04rogers/ozdevs-v2",
  },
  {
    title: "Company Asset Trading",
    description:
      "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
    tags: ["Java", "MariaDB", "Swing"],
    icons: ["logos:java", "logos:mariadb-icon"],
    imageUrl: assetTradingImg,
    githubLink: "https://github.com/ben04rogers/organisation-asset-trading",
  },
  {
    title: "Euphorus",
    description:
      "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit. AG Grid and Chart.js were used to present the data.",
    tags: ["JavaScript", "React", "Bootstrap"],
    icons: ["logos:javascript", "logos:react", "logos:bootstrap"],
    imageUrl: euphorusImg,
    githubLink: "https://github.com/ben04rogers/cab230assignment1",
  },
  {
    title: "Country Happiness API",
    description:
      "Developed and deployed an Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.      ",
    tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL"],
    icons: ["logos:javascript", "logos:express", "logos:swagger", "cib:mysql"],
    imageUrl: euphorusBackendImg,
    githubLink: "https://github.com/ben04rogers/cab230assignment2",
  },
  {
    title: "Techprowl Computer Auction",
    description:
      "Computer auction application built with Flask. The site allows users to register, bid on items, leave reviews, post new listings, manage listings, search by keyword, and keep a watch list. ",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    icons: ["logos:python", "logos:bootstrap", "logos:sqlite"],
    imageUrl: techprowlImg,
    githubLink: "https://github.com/ben04rogers/computer-auction",
    urlLink: "https://techprowl.herokuapp.com",
  },
  {
    title: "Task Manager Console App",
    description:
      "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
    tags: ["C#"],
    icons: ["devicon:csharp"],
    imageUrl: taskManagerImg,
    githubLink: "https://github.com/ben04rogers/task-manager",
  },
  {
    title: "Family Tree Shortest Path",
    description:
      "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
    tags: ["Python"],
    icons: ["logos:python"],
    imageUrl: familyTreeImg,
    githubLink: "https://github.com/ben04rogers/breadth-first-search",
    demoLink: "https://www.youtube.com/watch?v=VXCZKsqupxA",
  },
  {
    title: "Arduino Binary Game",
    description:
      "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
    tags: ["C"],
    icons: ["devicon:c"],
    imageUrl: binaryGameImg,
    githubLink: "https://github.com/ben04rogers/binary-game-microcontroller",
    demoLink: "https://www.youtube.com/watch?v=A6n6XDk4Unw&feature=youtu.be",
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
