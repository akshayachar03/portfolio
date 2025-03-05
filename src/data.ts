import { TimelineItem, Project, Skill } from './types';
import Project1 from "./assets/flow1.png";
import Project2 from "./assets/Project2.webp";
import Project3 from "./assets/Project3.webp";
import urlShortener from "./assets/url.png"
import { ins } from 'framer-motion/client';

export const timelineExperienceData: TimelineItem[] = [
  {
    id: 1,
    title: "Software Engineer",
    role: "Poornam Infovision Pvt. Ltd.",
    date: "Aug 2023 - Present",
    description: "Providing system support for Linux and Windows environments, ensuring seamless operations and troubleshooting critical issues. Currently expanding expertise in DevOps by learning automation, CI/CD pipelines, and cloud infrastructure. Exploring tools like Docker, Kubernetes, Terraform, and Ansible to streamline deployments and improve system reliability. Passionate about bridging system administration with DevOps practices to enhance scalability and operational efficiency.",
    skills: ["Linux", "Windows", "Shell Scripting", "Docker", "Kubernetes", "Terraform", "Ansible", "CI/CD", "AWS", "Azure"]
  },
  // {
  //   id: 2,
  //   title: "Full Stack Developer Intern",
  //   role: "NGX Technologies",
  //   date: "March 2024 - Nov 2024",
  //   description: "Developed the XPOS Dashboard, optimizing billing for 1,000+ hotels, improving efficiency by 40%. Reduced page load times by 35% using React Router & lazy loading for seamless navigation. Built scalable UI components with React TypeScript & Mantine UI, enhancing consistency & development efficiency.",
  //   skills: ["ReactTS", "Mantine UI", "Flask", "PostgreSQL"]
  // }
];


export const timelineEducationData: TimelineItem[] = [
  {
    id: 1,
    title: "Bachelor of Engineering (BE)",
    role: "Visvesvaraya Technological University",
    date: "2019 - 2023",
    description: "Specialized in software engineering, and advanced algorithms.",
    skills: ["Software Engineering", "Database & Cloud Technologies"]
  },
  // {
  //   id: 2,
  //   title: "Bachelor of Computer Applications (BCA)",
  //   role: "Mangalore University",
  //   date: "2019 - 2022",
  //   description: "Built a strong foundation in programming, database management, and computer networking.",
  //   skills: ["Programming with C, C++, Java, and Python", "Database Management & SQL", "Full-Stack Technologies", "Operating Systems & Computer Networks"]
  // }
];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "CI/CD Pipeline with Jenkins",
    description: "A Jenkins pipeline automating the CI/CD process for Java applications using Maven, SonarQube, Argo CD, and Kubernetes for efficient building, testing, and deployment.",
    longDescription: "This project implements a Jenkins pipeline for Java applications, integrating Maven for build management, SonarQube for code analysis, Docker for containerization, and Argo CD for GitOps-based deployment to Kubernetes, ensuring an automated, scalable, and reliable CI/CD workflow.",
    tags: ["Jenkins", "Git", "Maven", "SonarQube", "Docker", "Shell Script", "Argo CD", "Kubernetes",],
    imageUrl: Project1,
    demoLink: "#",
    githubLink: "https://github.com/akshayachar03/CICD-Pipeline-Using-Jenkins/tree/main/java-maven-sonar-argocd-helm-k8s"
  },
  {
    id: 2,
    title: "Automating EC2 Instance Management",
    description: "Automating the provisioning, configuration, and management of EC2 instances using Ansible.",
    longDescription: "This project automates EC2 instance lifecycle management, including provisioning, configuration, scaling, and termination, using Ansible for orchestration and Boto3 for AWS API interactions, ensuring efficient and scalable cloud resource management.",
    tags: ["Ansible", "AWS", "Boto3"],
    imageUrl: Project2,
    demoLink: "#",
    githubLink: "https://github.com/akshayachar03/Ansible-Projects/tree/main/Resource-Creation"
  },
  {
    id: 3,
    title: "AWS Resource Tracker",
    description: "A beginner-friendly Bash script to list AWS resources using AWS CLI by specifying the region and service name.",
    longDescription: "AWS Resource Tracker is a simple yet powerful Bash script that helps users retrieve information about their AWS infrastructure. It checks if AWS CLI is installed before execution and allows users to list various AWS resources, including EC2 instances (with IDs and names). By passing the AWS region and service name as command-line arguments, users can quickly and efficiently access the details of their AWS environment.",
    tags: ["AWS", "Bash", "AWS CLI", "EC2"],
    imageUrl: Project3,
    demoLink: "#",
    githubLink: "https://github.com/akshayachar03/Shell-scripting-examples/tree/main/AWS-Resource_Tracker"
  },
  // {
  //   id: 4,
  //   title: "URL Shortener & Analytics",
  //   description: "A URL shortening service with comprehensive analytics and tracking capabilities.",
  //   longDescription: "This URL Shortener project is a web application that allows users to create shortened URLs for easier sharing. Beyond basic shortening functionality, it provides detailed analytics including click counts, geographic data of visitors, referral sources, and time-based activity charts. The application features user authentication, custom URL slugs, QR code generation for shortened URLs, and an intuitive dashboard to monitor and manage all shortened links. Built with modern web technologies, it offers a responsive design that works seamlessly across all devices.",
  //   tags: ["React", "Supabase (PostgreSQL)", "shadcn/ui"],
  //   imageUrl: urlShortener,
  //   demoLink: "https://url-shortener-rouge-alpha.vercel.app/",
  //   githubLink: "https://github.com/neeraj-bn/url-shortener"
  // }
];

// export const skillsData: Skill[] = [
//   { id: 1, name: "React", icon: "react", category: "Frontend" },
//   { id: 2, name: "TypeScript", icon: "code", category: "Languages" },
//   { id: 3, name: "JavaScript", icon: "code-2", category: "Languages" },
//   { id: 4, name: "HTML/CSS", icon: "code-square", category: "Frontend" },
//   { id: 5, name: "Node.js", icon: "server", category: "Backend" },
//   { id: 6, name: "Next.js", icon: "frame", category: "Frontend" },
//   { id: 7, name: "Tailwind CSS", icon: "palette", category: "Frontend" },
//   { id: 8, name: "Git", icon: "git-branch", category: "Tools" },
//   { id: 9, name: "MongoDB", icon: "database", category: "Backend" },
//   { id: 10, name: "Express", icon: "webhook", category: "Backend" },
//   { id: 11, name: "Docker", icon: "container", category: "DevOps" },
//   { id: 12, name: "AWS", icon: "cloud", category: "DevOps" },
//   { id: 13, name: "Redux", icon: "layers", category: "Frontend" },
//   { id: 14, name: "PostgreSQL", icon: "database", category: "Backend" },
//   { id: 15, name: "REST API", icon: "network", category: "Backend" },
//   { id: 16, name: "GraphQL", icon: "webhook", category: "Backend" }
// ];


// export const skillsData: Skill[] = [
//   { id: 1, name: "C/C++", icon: "terminal", category: "Languages" },
//   { id: 2, name: "JavaScript", icon: "code", category: "Languages" },
//   { id: 3, name: "Python", icon: "code", category: "Languages" },
//   { id: 4, name: "Java", icon: "file-code", category: "Languages" },
//   { id: 5, name: "SQL", icon: "database", category: "Languages" },
//   { id: 6, name: "HTML/CSS", icon: "brackets", category: "Frontend" },
//   { id: 7, name: "ReactJS", icon: "react", category: "Frontend" },
//   { id: 8, name: "Redux", icon: "layers", category: "Frontend" },
//   { id: 9, name: "Node.js", icon: "server", category: "Backend" },
//   { id: 10, name: "Express.js", icon: "webhook", category: "Backend" },
//   { id: 11, name: "Tailwind CSS", icon: "palette", category: "Frontend" },
//   { id: 12, name: "Bootstrap", icon: "layout-grid", category: "Frontend" },
//   { id: 13, name: "Material UI", icon: "component", category: "Frontend" },
//   { id: 14, name: "MongoDB", icon: "database", category: "Backend" },
//   { id: 15, name: "MySQL", icon: "database", category: "Backend" },
//   { id: 16, name: "PostgreSQL", icon: "server-cog", category: "Backend" },
//   { id: 17, name: "Firebase", icon: "flame", category: "Cloud" },
//   { id: 18, name: "Git", icon: "git-branch", category: "Tools" }
// ];


// export const skillsData: Skill[] = [
//   { id: 1, name: "C/C++", icon: "devicon-cplusplus-plain", category: "Languages" },
//   { id: 2, name: "JavaScript", icon: "devicon-javascript-plain", category: "Languages" },
//   { id: 3, name: "Python", icon: "devicon-python-plain", category: "Languages" },
//   { id: 4, name: "Java", icon: "devicon-java-plain", category: "Languages" },
//   { id: 5, name: "SQL", icon: "devicon-mysql-plain", category: "Languages" },
//   { id: 6, name: "HTML/CSS", icon: "devicon-html5-plain", category: "Frontend" },
//   { id: 7, name: "ReactJS", icon: "devicon-react-original", category: "Frontend" },
//   { id: 8, name: "Redux", icon: "devicon-redux-original", category: "Frontend" },
//   { id: 9, name: "Node.js", icon: "devicon-nodejs-plain", category: "Backend" },
//   { id: 10, name: "Express.js", icon: "devicon-express-original", category: "Backend" },
//   { id: 11, name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", category: "Frontend" },
//   { id: 12, name: "Bootstrap", icon: "devicon-bootstrap-plain", category: "Frontend" },
//   { id: 13, name: "Material UI", icon: "devicon-materialui-plain", category: "Frontend" },
//   { id: 14, name: "MongoDB", icon: "devicon-mongodb-plain", category: "Backend" },
//   { id: 15, name: "MySQL", icon: "devicon-mysql-plain", category: "Backend" },
//   { id: 16, name: "PostgreSQL", icon: "devicon-postgresql-plain", category: "Backend" },
//   { id: 17, name: "Firebase", icon: "devicon-firebase-plain", category: "Cloud" },
//   { id: 18, name: "Git", icon: "devicon-git-plain", category: "Tools" }
// ];

export const skillsData: Skill[] = [
  { id: 1, name: "Linux", icon: "devicon-linux-plain", category: "Operating System" },
  { id: 2, name: "Golang", icon: "devicon-go-plain", category: "Languages" },
  { id: 3, name: "Git", icon: "devicon-git-plain", category: "Tools" },
  { id: 4, name: "AWS", icon: "devicon-amazonwebservices-plain", category: "Cloud" },
  { id: 5, name: "Azure", icon: "devicon-azure-plain", category: "Cloud" },
  { id: 6, name: "Docker", icon: "devicon-docker-plain", category: "Containers" },
  { id: 7, name: "Jenkins", icon: "devicon-jenkins-plain", category: "CI/CD" },
  { id: 8, name: "Kubernetes", icon: "devicon-kubernetes-plain", category: "Containers" },
  { id: 9, name: "Terraform", icon: "devicon-terraform-plain", category: "Infrastructure as Code" },
  { id: 10, name: "Ansible", icon: "devicon-ansible-plain", category: "Configuration Management" },
  { id: 11, name: "Prometheus", icon: "devicon-prometheus-plain", category: "Monitoring" },
  { id: 12, name: "Grafana", icon: "devicon-grafana-plain", category: "Monitoring" },
  { id: 13, name: "Bash", icon: "devicon-bash-plain", category: "Scripting" },
  { id: 14, name: "Python", icon: "devicon-python-plain", category: "Languages" }
];



export const personalInfo = {
  name: "Akshay",
  phone: "9741874261",
  location: "Kochi, Kerala",
  email: "akshayachar03@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshayachar/",
  github: "https://github.com/akshayachar03",
  instagram: "https://www.instagram.com/akshay_achar_03/",
};