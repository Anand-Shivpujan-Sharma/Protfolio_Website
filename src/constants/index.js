import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  portfolio,
  tripguide,
  threejs,
  despathealthcare,
  web_design,
  mobile_app,
  marketing,
  UI3
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Website Development and Hosting",
    icon: web_design,
    iconBg: "#383E56",
    date: "",
    points: [
      "At Aero Innovation, we excel in crafting captivating and user-friendly websites. Our skilled designers and developers collaborate closely with clients to create tailored web solutions that make a lasting impact. Whether it's an informative site or an e-commerce platform, we ensure responsiveness and search engine optimization. We also offer reliable web hosting with secure servers, backups, and 24/7 tech support, allowing clients to focus on their core business while we handle the technical details..",
    ],
  },
  {
    title: "Mobile App Development",
    icon: mobile_app,
    iconBg: "#383E56",
    date: "",
    points: [
      "In this dynamic mobile landscape, having a presence across multiple platforms is essential. At Aero Innovation, we excel in cross-platform app development. Our skilled developers utilize frameworks like React Native or Flutter to create high-quality mobile applications that work seamlessly on both iOS and Android platforms. We ensure that our apps are efficient, cost-effective, and provide a consistent and engaging user experience.",
    ],
  },
  {
    title: "UI/UX and Graphic Designer",
    icon:UI3,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "At Aero Innovation, we take pride in our talented team of UI/UX designers and graphic designers. We are passionate about creating visually appealing interfaces that prioritize an exceptional user experience. We ensure that every digital asset we create is visually stunning and easy to navigate. Additionally, our graphic designers can craft eye-catching visuals, logos, and branding materials that resonate with our clients' target audience",
    ],
  },
  {
    title: "Social Media Handing and Marketing",
    icon: marketing,
    iconBg: "#E6DEDD",
    date: "",
    points: [
     "In today's digital landscape, a strong social media presence is vital for success. We offer comprehensive social media handling and marketing services at Aero Innovation. Our experienced team develops effective social media strategies, manages client accounts across various platforms, curates engaging content and provides in-depth performance analysis. We aim to build brand awareness, engage with their audience.",
    ],
  },
 /* {
    title: "UI/UX Designer and Graphic Designer",
    icon: UI3,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "At Aero Innovation, we take pride in our talented team of UI/UX designers and graphic designers. We are passionate about creating visually appealing interfaces that prioritize an exceptional user experience. We ensure that every digital asset we create is visually stunning and easy to navigate. Additionally, our graphic designers can craft eye-catching visuals, logos, and branding materials that resonate with our clients' target audience",
    ],
  },
 {
    title: "Social Media Handling and Marketing",
    icon: marketing1,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "In today's digital landscape, a strong social media presence is vital for success. We offer comprehensive social media handling and marketing services at Aero Innovation. Our experienced team develops effective social media strategies, manages client accounts across various platforms, curates engaging content and provides in-depth performance analysis. We aim to build brand awareness, engage with their audience.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Created a personal portfolio website showcasing skills and projects with a responsive design.Customized the website's layout and content for a unique personal brand. Implemented SEO strategies for enhanced online visibility.Proficiently used Git for version control",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://chaitali41portfolio.pages.dev/",
  },
  {
    name: "Despat HealthCare Website",
    description:
      "Collaborated on a healthcare website, ensuring user-friendly design and security measures.Assisted in content management and updates for accurate healthcare information.Contributed to the deployment of the website for public access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: despathealthcare,
    source_code_link: "hhttps://despathealthcare.com",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
