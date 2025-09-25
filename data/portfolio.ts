import type { Skill, Education, Project, Experience } from "@/types"

export const skills: Skill[] = [
  {
    name: "Python",
    icon: "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
  },
  {
    name: "Numpy",
    icon: "https://img.icons8.com/?size=100&id=aR9CXyMagKIS&format=png&color=000000",
  },
  {
    name: "Pandas",
    icon: "https://img.icons8.com/?size=100&id=xSkewUSqtErH&format=png&color=000000",
  },
  {
    name: "Matplotlib",
    icon: "https://img.icons8.com/?size=100&id=TkX1totjFmAD&format=png&color=000000",
  }, 
  {
    name: "django",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "My SQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Boostrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Anaconda",
    icon: "https://img.icons8.com/?size=100&id=F4uMFPZgS0gt&format=png&color=000000",
  },
  {
    name: "Jupyter",
    icon: "https://img.icons8.com/?size=100&id=J0SgMWzAxqFj&format=png&color=000000",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  }, 
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  }, 
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Netlify",
    icon: "https://img.icons8.com/?size=100&id=sBo1RJ3rjbje&format=png&color=000000",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Github",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  }, 
   
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },  
  {
    name: "IntelliJ IDEA",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
  },    
  
]

export const education: Education[] = [
  {
    degree: "Master of Computer Application",
    institution: "Ballarpur Institute of Technology, Ballarpur",
    year: " Year - 2023",
     gpa: "CGPA - 7.59",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Sardar Patel Mahavidyalaya, Chandrapur",
    year: "Year - 2021",
      gpa: "CGPA - 7.05",
  },
]

export const projects: Project[] = [
    {
    title: "Car Price Prediction App",
    description:
      "This project predicts the selling price of a used car based on various features such as the car's age, present price, kilometers driven, fuel type, and seller type. It is a web-based application developed using Flask for the backend and deployed on Render. The machine learning models were built using different algorithms such as Linear Regression, Random Forest, and Artificial Neural Networks (ANN), and the best-performing model was selected for prediction.",
    technologies: ["Linear Regression", "Random Forest", "ANN", "Pandas", "NumPy", "Scikit-learn", "Joblib", "Render", "HTML", "CSS"],
    github: "https://github.com/arpitdurge37/Car_Price_Prediction_App.git",
    live: "https://car-price-prediction-project.onrender.com/",
    image: "/home.png",
  },
  {
    title: "Spam Email Classifier App",
    description:
      "This project is a Streamlit web application that predicts whether a given email is Spam or Non-Spam using a machine learning model. The app provides an easy-to-use interface where users can input the text of an email and receive a prediction.",
    technologies: ["NLP", "Streamlit", "Python", "Scikit-learn", "Pandas", "NumPy", "Render", "HTML", "CSS"],
    github: "https://github.com/arpitdurge37/Spam_Email_Classifier_App.git",
    live: "https://email-classifier-model.onrender.com/",
    image: "/website_image.jpg",
  },
  {
    title: "Video Library",
    description:
      "Developed a dynamic video library using React for front-end, Express.js for back-end API, and MongoDB for database management, ensuring smooth user experience and efficient.",
    technologies: ["React", "React DOM", "React Router DOM 7", "React Cookie", "React Testing Library + Jest DOM", "Axios", "Formik", "Yup", "CORS", "JavaScript", "Node.js", "MongoDB", "Express", "HTML", "CSS", "Bootstrap", "Bootstrap Icons"],
    github: "https://github.com/arpitdurge37/Video-Library-Project.git",
    live: "https://video-library-using-reac-1c853.web.app/",
    image: "/video-library.png",
  },
  {
    title: "To-Do App",
    description:
      "Developed a fully functional To-Do application using React.js for the front-end and Node.js with Express.js for the back-end, ensuring a smooth and responsive user experience.",
    technologies: ["React", "React DOM", "React Router DOM", "React Scripts", "React Cookie", "Axios", "Formik", "Yup", "TypeScript", "Node.js", "MongoDb", "Express", "CORS", "Material UI", "Emotion", "Day.js", "Moment.js", "MUI Date Pickers", "React Testing Library + Jest DOM", "HTML", "CSS", "Bootstrap", "Bootstrap Icons"],
    github: "https://github.com/arpitdurge37/To-Do-App.git",
    live: "https://to-do-app-6d4e6.web.app/",
    image: "/to-do-app.png",
  },
  {
    title: "Netflix Clone",
    description:
      "A React-based Netflix clone with a clean UI, showcasing movies by category. Fully responsive and built with reusable components.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Bootstrap", "Bootstrap Icons"],
    github: "https://github.com/arpitdurge37/Netflix-Template.git",
    live: "https://netflix-template-6426f.web.app/",
    image: "/netflix-clone.png",
  },
  {
    title: "Shoppers App",
    description:
      "Shopper App is a responsive single-page e-commerce app built with React, featuring smooth navigation with React Router and user session management using React Cookie.",
    technologies: ["React", "React Router DOM", "React-cookie", "React Testing Library + Jest DOM", "Axios", "HTML", "CSS3", "Bootstrap", "Bootstrap Icons"],
    github: "https://github.com/arpitdurge37/Shoppers_app.git",
    live: "https://shoppers-app-35155.web.app",
    image: "/shoppers-app.png",
  },
   {
    title: "KFC Clone",
    description:
      "KFC Online Order Clone is a responsive web app built with HTML, CSS, JavaScript, and Bootstrap. It mimics KFC’s online ordering system with an interactive menu, add-to-cart feature, and a clean, mobile-friendly design.",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap 5", "Bootstrap Icons"],
    github: "https://github.com/arpitdurge37/KFC-Clone.git",
    live: "https://kfc-clone-e3e5c.web.app",
    image: "/kfc-clone.png",
  },
  
]

export const experience: Experience[] = [
  {
    title: "Python Developer Intern",
    company: "Code Infosystem Pvt. Ltd",
    period: "Feb 2024 - April 2024",
    responsibilities: [
      "Completed a learning-oriented internship, gaining hands-on experience with Python and machine learning concepts.",
      "Built small Python automation scripts for file handling, data cleaning, and repetitive task automation.",
      "Applied Pandas and NumPy for dataset analysis and preprocessing.",
      "Worked under mentor guidance on guided ML projects, learning the end-to-end pipeline from preprocessing to model evaluation.",
    ],
  },
  
]

export const personalInfo = {
  name: "Arpit Durge",
  title: "Python Developer",
  description: [
    "I'm a passionate and detail-oriented Python Developer with hands-on experience in building efficient, scalable, and reliable applications. During my 3-month internship as a Developer, I worked on real-world projects that strengthened my technical foundation in Python programming and enhanced my ability to collaborate effectively in fast-paced, team-driven environments.","As a recent graduate entering the tech industry, I bring a fresh outlook, a strong eagerness to learn, and the flexibility to adapt quickly to new technologies and challenges. I take pride in my problem-solving mindset, writing clean and maintainable Python code, and delivering high-quality solutions that meet both user needs and business goals."
  ],
  email: "arpitdurge14@gmail.com",
  phone: "+91 8999211070",
  location: "Hyderabad, Telangana",
  social: {
    github: "https://github.com/arpitdurge37",
    linkedin: "https://www.linkedin.com/in/arpit-durge",
    instagram: "https://instagram.com/arrpit_03",
  },
}