// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import hashedbitLogo from './assets/education_logo/hashedbit_logo.png';

// Education Section Logo's
import ditLogo from './assets/education_logo/dit_logo.png';
import sriLogo from './assets/education_logo/sri_logo.jpeg';
import cbsLogo from './assets/education_logo/cbs_logo.png';


// Project Section Logo's
import farmaidlogo from './assets/work_logo/farmaid_logo.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: hashedbitLogo,
      role: "Intern - MERN",
      company: "HashedBit Inovations",
      date: "",
      desc: "",
      skills: [
        "",
        
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: ditLogo,
      school: "DIT University, Dehradun",
      date: "2026",
      grade: "6.83 CGPA",
      desc: "I am pursuing my B.Tech in Computer Science and Engineering with a specialization in Artificial Intelligence, Machine Learning, and Robotics from DIT University, Dehradun. My academic journey has provided me with a strong foundation in programming, software development, and core computer science principles. I have studied subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Artificial Intelligence, Machine Learning, and Robotics. Along with theoretical knowledge, I have gained hands-on experience through projects, workshops, hackathons, and technical events, which have enhanced my problem-solving, research, and technical skills. My experience at DIT University has been instrumental in shaping my expertise and professional growth in the field of emerging technologies.",
      degree: "B.Tech in Computer Science and Engineering",
    },
    {
      id: 1,
      img: sriLogo,
      school: "Sri Chaitanya Junior College, Bowrampet, Hyderabad",
      date: "Apr 2020 - March 2021",
      grade: "91.4%",
      desc: "I completed my Class 12 education from Sri Chaitanya Junior College, Bowrampet, Hyderabad, under the Telangana State Board of Intermediate Education (TSBIE), where I studied Physics, Chemistry, Mathematics, and English, with Sanskrit as an additional language.",
      degree: "TSBIE (XII) - PCM",
    },
    {
      id: 2,
      img: cbsLogo,
      school: "Caster Bridge School, Ballia, Uttar Pradesh",
      date: "Apr 2018 - March 2019",
      grade: "78.6%",
      desc: "I completed my Class 10 education from Caster Bridge School, Ballia, Uttar Pradesh, under the CISCE board, where I studied Science with Computer.",
      degree: "CISCE (X) - Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "FarmAid",
      description:
        "Developed and deployed a web platform that assists farmers through an interactive chatbot and AI-powered plant disease or pest detection. Built using React.js and integrated with ML models to provide real-time, accurate responses and crop health verification.",
      image: farmaidlogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Python"],
      github: "https://github.com/AkshatSharma2112/FarmAid-Web",
      webapp: "https://farm-aid-web.vercel.app/",
    },
    // {
    //   id: 1,
    //   title: "CS Prep",
    //   description:
    //     "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    //   image: csprepLogo,
    //   tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
    //   github: "https://github.com/codingmastr/CSPrep",
    //   webapp: "https://csprep.netlify.app/",
    // },
  ]