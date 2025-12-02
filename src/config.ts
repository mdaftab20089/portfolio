export const siteConfig = {
  name: "Md Aftab",
  title: "Computer Science Student",
  description: "Portfolio website of Md Aftab",
  accentColor: "#1d4ed8",
  social: {
    email: "aftabrahi20089@gmail.com",
    linkedin: "https://www.linkedin.com/in/md-aftab-aa78792a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    Leetcode: "https://leetcode.com/u/aftabrahi/",
    github: "https://github.com/mdaftab20089",
  },
  aboutMe:
    "!Hello Myself Md Aftab currently persuing my Btech in Computer Science And Engineering from National Institute Of Technology Arunachal Pradesh.I have a strong interest in software development and machine learning, and I enjoy building solutions that are both scalable and user-centric!",
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker","Machine Learning","Deep Learning","Transformer","LLM"],
  projects: [
    {
      name: "NIT AP Circle",
      description:
        "NITAP Circle, this is a website developed by me and my team for solving the problems faced by people living inside our campus. It provides features like complaints, buy & sell, lost & found, notices and events. We have used HTML, CSS, JavaScript, Node.js, Express.js, SQL and Postgres for the development and render for hosting.",
      link: "https://github.com/souravsharma22/NITAP_Circle.git",
      skills: ["React", "Node.js", "express" , "postgres SQL"],
    },
    {
      name: "Wanderlust Travel App",
      description:
        " a travel web app similar to Airbnb. It shows different types of stays in categories, uses Google Maps to display locations, has secure login with Passport.js, and is built using Node.js and MongoDB on the backend with React on the frontend.",
      link: "https://github.com/mdaftab20089/Wanderlust-Travel-App.git",
      skills: ["React", "Node.js", "passport" , "claudinary" , "mongoDB"],
    },
    {
      name: "Invoice Generator Web App",
      description:
        "This project is an Invoice Generator WebApp developed using React and TailwindCSS. The application allows users to add items, specify quantities, input prices, apply tax rates, and include discounts.",
      link: "https://github.com/mdaftab20089/InVoiceGenerator.git",
      skills: ["React", "Node.js", "tailwind" , "canva"],
    },
  ],
  experience: [
    {
      company: "Celebal Technologies",
      title: "Data Science Intern",
      dateRange: "Jun 2025 - Aug 2025",
      bullets: [
        "Performed extensive EDA and feature engineering on customer transaction data using Python (pandas, seaborn,matplotlib) to derive RFM-based behavioral insights.",
        "Applied probabilistic models such as BG/NBD, Gamma-Gamma, and Pareto NBD to estimate customer lifetime value and future purchase behavior with high reliability"
      ],
    },
    {
      company: "Indian Oil Corporation Ltd Guwahati",
      title: "Full Stack Developer",
      dateRange: "Jan 2025 - Feb 2025",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Tech Company",
      title: "NERERL (IIT Guwahati) Machine Learning Intern",
      dateRange: "DEC 2023 - Jan 2024",
      bullets: [
        "Collabroted with research team to work on Biodegradable Waste Classification using CNN to classify Organic and Recyclable Waste.",
        "Perform variious Classification Model including CNN,SVM,Random Forest And Gain 96% accuracy on training data and around 94% accuracy on testing data."
      ],
    },
  ],
  education: [
    {
      school: " National Institute of Technology Arunachal Pradesh",
      degree: "Bachelor of Technology in Computer Science",
      dateRange: "2022 - 2026",
      achievements: [
        "Currently CGPA Score is 8.20",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Jawahar Navodaya Vidyalaya Araria",
      degree: "Secondary Higher Education",
      dateRange: "2021",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
