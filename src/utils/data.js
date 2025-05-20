import {
  facebook,
  twitter,
  insta,
  linkedin,
  google,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  nodeIcon,
  expressIcon,
  mongodbIcon,
  figmaIcon,
  wordpressIcon,
  youtubeFeature,
  menteraFeature,
  netflixgptFeature,
} from "../assets/images";




export const ExperienceData = [
  {
    id: 1,
    startYear: "Nov-2023",
    endYear: "",
    JobProfile: "Associate - Front End Developer",
    companyName: "The Minimalist",
    education: "",
    institute: "",
  },
  {
    id: 2,
    startYear: "Nov-2022",
    endYear: "Dec-2022",
    JobProfile: "Junior Software Developer (Intern)",
    companyName: "Ninepointer (DegreeMaster Technologies Pvt. Ltd.)",
    education: "",
    institute: "",
  },
  {
    id: 3,
    startYear: "June-2022",
    endYear: "June-2023",
    JobProfile: "Full Stack Trainee",
    companyName: "Newton School",
    education: "",
    institute: "",
  },
  {
    id: 4,
    startYear: "2019",
    endYear: "2020",
    JobProfile: "",
    companyName: "",
    education: "Integrated MCA (Computer Applications)",
    institute: "Jaipur National University, Jaipur, Rajasthan",
  },
  {
    id: 4,
    startYear: "2013",
    endYear: "2014",
    JobProfile: "",
    companyName: "",
    education: "Postgraduate Diploma (Computer Applications)",
    institute: "Makanlal Chaturvedi National University , Bhopal, Rajasthan",
  },
];

export const skillData = [
  {
    id: 1,
    stackName: "HTML",
    percent: 90,
    stackIcon: htmlIcon,
  },
  {
    id: 2,
    stackName: "CSS",
    percent: 85,
    stackIcon: cssIcon,
  },
  {
    id: 3,
    stackName: "JavaScript",
    percent: 80,
    stackIcon: jsIcon,
  },
  {
    id: 4,
    stackName: "ReactJs",
    percent: 75,
    stackIcon: reactIcon,
  },
  {
    id: 5,
    stackName: "NodeJs",
    percent: 70,
    stackIcon: nodeIcon,
  },
  {
    id: 6,
    stackName: "ExpressJs",
    percent: 70,
    stackIcon: expressIcon,
  },
  {
    id: 7,
    stackName: "MongoDB",
    percent: 65,
    stackIcon: mongodbIcon,
  },
  {
    id: 8,
    stackName: "Figma",
    percent: 60,
    stackIcon: figmaIcon,
  },
  {
    id: 9,
    stackName: "Wordpress",
    percent: 70,
    stackIcon: wordpressIcon,
  },
];

export const projectData = [
  {
    id: 1,
    title: "NetflixGPT",
    featureImage: netflixgptFeature,
    liveLink: "https://netflixgpt-125a4.web.app/",
    startDate: "December 2024",
    endDate: "December 2024",
    description:
      "A movie exploration platform showcasing the latest films organized by categories, offering detailed movie pages and a responsive design.",
    techStack: ["ReactJS", "Redux", "JavaScript", "SCSS", "Firebase"],
    features: [
      {
        heading: "Categories",
        details: "Top Most, Popular, Top Rated",
      },
      {
        heading: "Movie Details",
        details:
          "Runtime, Ratings, Trailers, Posters, Summary, Genres, Recommended Movies",
      },
      {
        heading: "Responsive Design",
        details: "Optimized for various screen sizes and devices.",
      },
    ],
  },
  {
    id: 2,
    title: "Menterra Project",
    featureImage: menteraFeature,
    liveLink: "https://menterra-project.netlify.app/",
    startDate: "August 2024",
    endDate: "August 2024",
    description:
      "Developed a responsive and dynamic website, focusing on delivering user-friendly content and an intuitive interface. Implemented efficient UI rendering with a component-based architecture for scalability.",
    techStack: ["React", "SCSS"],
    features: [
      {
        heading: "Component-Based Architecture",
        details:
          "Ensuring scalability and maintainability for future enhancements.",
      },
      {
        heading: "Optimized Performance",
        details:
          "Utilized SCSS features like variables and mixins for better maintainability.",
      },
    ],
  },
  {
    id: 3,
    title: "Video Streaming App",
    description:
      "A web application allowing users to watch and stream videos online, overing convenient access to a wide range of content.",
    featureImage: youtubeFeature,
    liveLink: "https://magical-alpaca-b072d5.netlify.app/",
    startDate: "February 2023",
    endDate: "February 2023",
    techStack: ["ReactJS", "Rapid API"],
    features: [
      {
        heading: "High-Quality Video Player",
        details:
          "Provides an immersive and enjoyable viewing experience through a high-quality video player.",
      },
      {
        heading: "Video Library",
        details:
          "Maintains a comprehensive video library with search and browse features, enhancing content discovery for users.",
      },
      {
        heading: "User-Friendly Interface",
        details:
          "Designed with an intuitive and user-friendly interface for effortless navigation and video playback.",
      },
      {
        heading: "Latest Web Technologies",
        details:
          "Leverages cutting-edge web development technologies for responsive design and efficient video streaming, ensuring a modern and seamless experience for users.",
      },
    ],
  },
];
