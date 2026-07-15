import { TimelineItem, Project, Skill } from './types';
import Project1 from "./assets/Project1.png";
import Project2 from "./assets/Project2.png";
import Project3 from "./assets/Project3.jpg";
import Project4 from "./assets/Project4.png";
import Project1new from "./assets/Project1new.png";
import Certificate1 from "./assets/Certificate1.png";
import certificate2 from "./assets/certificate2.png";
import certificate3 from "./assets/certificate3.png";
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
  {
    id: 2,
    title: "Pre-University Course (PUC)",
    role: "Government PU College, Kundapura",
    date: "2017 - 2019",
    description: "Built a strong foundation in database management, and computer networking.",
    skills: ["Programming with C", "Operating Systems", "Computer Networks"]
  }

];

export const projectsData: Project[] = [
  {
    id: 1,
    title: "TicketHub - End-to-End DevOps Implementation using GitHub Actions, AKS, & GitOps",
    description: "A cloud-native ticket management application deployed on Microsoft Azure using Docker, AKS, GitHub Actions, Argo CD, Helm, Prometheus, Grafana, Azure Monitor, and Log Analytics.",
    longDescription: "This project demonstrates a complete Azure DevOps workflow by containerizing a full-stack React and Node.js application, publishing Docker images to Azure Container Registry (ACR), automating CI with GitHub Actions, implementing GitOps-based deployments using Argo CD and Helm on Azure Kubernetes Service (AKS), and configuring Prometheus, Grafana, Azure Monitor, and Log Analytics for application and infrastructure monitoring.",
    tags: ["Azure", "Docker", "AKS", "ACR", "GitHub Actions", "Helm", "Argo CD", "GitOps", "Prometheus", "Grafana", "Azure Monitor", "Log Analytics", "React", "Node.js", "MongoDB Atlas",],
    imageUrl: Project1new,
    //demoLink: "#",
    githubLink: "https://github.com/akshayachar03/TicketHub"
  },
  {
    id: 2,
    title: "CI/CD Pipeline with Jenkins",
    description: "A Jenkins pipeline automating the CI/CD process for Java applications using Maven, SonarQube, Argo CD, and Kubernetes for efficient building, testing, and deployment.",
    longDescription: "This project implements a Jenkins pipeline for Java applications, integrating Maven for build management, SonarQube for code analysis, Docker for containerization, and Argo CD for GitOps-based deployment to Kubernetes, ensuring an automated, scalable, and reliable CI/CD workflow.",
    tags: ["Jenkins", "Git", "Maven", "SonarQube", "Docker", "Shell Script", "Argo CD", "Kubernetes",],
    imageUrl: Project1,
    //demoLink: "#",
    githubLink: "https://github.com/akshayachar03/CICD-Pipeline-Using-Jenkins/tree/main/java-maven-sonar-argocd-helm-k8s"
  },
  {
    id: 2,
    title: "Multi micro services application deployment using Azure DevOps",
    description: "Deploying containerized microservices to Azure Kubernetes Service using Azure DevOps CI/CD and GitOps with ArgoCD.",
    longDescription: "This project demonstrates the end-to-end automation of deploying a cloud-native microservices application using Azure DevOps for CI/CD pipelines, Azure Kubernetes Service (AKS) for orchestration, and ArgoCD for GitOps-driven continuous deployment. It includes setting up self-hosted agents, dynamically updating Kubernetes manifests, and implementing secure container image delivery through Azure Container Registry (ACR).",
    tags: ["Azure DevOps", "Kubernetes", "GitOps", "ArgoCD", "Docker", "AKS", "Azure Container Registry", "CI/CD"],
    imageUrl: Project2,
    //demoLink: "#",
    githubLink: "https://github.com/akshayachar03/multi-microservice-app"
  },
  {
    id: 3,
    title: "DevSecOps Pipeline with GitHub Actions",
    description: "A DevSecOps pipeline implementation for a Tic-Tac-Toe application using GitHub Actions, Docker, and Kubernetes to ensure automated security scanning and seamless deployment.",
    longDescription: "This project features a robust DevSecOps pipeline designed to automate the CI/CD process for a Tic-Tac-Toe application. Using GitHub Actions, the pipeline performs unit testing, static code analysis, and Docker image builds. Security is enforced through Trivy vulnerability scanning before pushing images to the GitHub Container Registry (GHCR). The application is then deployed to a Kubernetes cluster using ArgoCD, ensuring a secure and scalable deployment process. This setup follows DevSecOps best practices to enhance software security while maintaining development speed.",
    tags: ["GitHub Actions", "NPM", "Docker", "Trivy", "ArgoCD", "Kubernetes"],
    imageUrl: Project3,
    //demoLink: "#",
    githubLink: "https://github.com/akshayachar03/devsecops-pipeline"
  },
  {
    id: 4,
    title: "CI/CD with Azure DevOps for a three-tier application deployment",
    description: "A CI/CD-enabled three-tier slot booking system deployed to AKS using Azure DevOps and ArgoCD.",
    longDescription: "This Three-Tier Slot Booking Application is a full-stack web solution built with HTML frontend, Flask backend, and MySQL database. It implements a robust CI/CD pipeline using Azure DevOps for continuous integration and ArgoCD for GitOps-based continuous deployment to Azure Kubernetes Service (AKS). The application is containerized using Docker, with images pushed to Azure Container Registry (ACR), and is exposed to the internet via NodePort for external accessibility. ArgoCD monitors the Git repository and automatically deploys updated Kubernetes manifests, offering streamlined and automated deployment workflows.",
    tags: ["Azure DevOps", "AKS", "ArgoCD", "Docker", "Kubernetes", "Flask", "MySQL"],
    imageUrl: Project4,
    //demoLink: "#",
    githubLink: "https://github.com/akshayachar03/three-tier-slot-booking-app"
  },
];
export const certificatesData: Project[] = [
  {
    id: 1,
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    description: "Certified in Azure Solutions Architect Expert offered by Microsoft",
    longDescription: "Demonstrated expertise in designing and implementing cloud solutions on Azure, including architecture planning, security, and compliance.",
    tags: ["Azure Architecture", "Cloud Solutions", "Security", "Compliance"],
    imageUrl: Certificate1,
    //demoLink: "#",
    githubLink: "https://learn.microsoft.com/en-us/users/akshay-8294/credentials/3736cb7d90fff228"
  },
  {
    id: 2,
    title: "Microsoft Certified: Azure Administrator Associate",
    description: "Certified in Azure Administrator Associate offered by Microsoft",
    longDescription: "Demonstrated expertise in managing Azure identities and governance, implementing storage and compute solutions, configuring virtual networks, and monitoring cloud resources to maintain secure, scalable, and high-performing Azure environments.",
    tags: ["Azure Identity", "Azure Storage", "Azure Compute", "Virtual Networking", "Azure Monitoring"],
    imageUrl: Certificate1,
    //demoLink: "#",
    githubLink: "https://learn.microsoft.com/en-us/users/akshay-8294/credentials/9448bc6f1222c047"
  },
  {
    id: 3,
    title: "Microsoft Certified: Azure Fundamentals",
    description: "Certified in Azure fundamentals offered by Microsoft",
    longDescription: "Explored about cloud concepts, Azure architecture and services, Azure management and governance",
    tags: ["Cloud Basics","Azure"],
    imageUrl: Certificate1,
    //demoLink: "#",
    githubLink: "https://learn.microsoft.com/en-us/users/akshayachar-1764/credentials/401b1430256bbfc"
  },
  {
    id: 4,
    title: "KodeKloud Certified: Docker Training Course",
    description: "Certified in Docker Training Course for absolute beginners offered by KodeKloud",
    longDescription: "Explored about Docker architecture, images, containers, volumes, storage, networks, Docker registry, Container orchestration and Docker Compose",
    tags: ["Conntainers", "Docker Compose", "Orchestration","Docker"],
    imageUrl: certificate2,
    //demoLink: "#",
    githubLink: "https://learn.kodekloud.com/user/certificate/2DEF37BC8303-2DEF31B7FC07-2DEF3189725B"
  },
  {
    id: 5,
    title: "KodeKloud Certified: Kubernetes for the Absolute Beginners",
    description: "Certified in Kubernetes for the Absolute Beginners offered by KodeKloud",
    longDescription: "Explored about Kubernetes architecture, pods, replicasets, services, deployments, volumes, storage classes, namespaces, ConfigMaps, secrets, Helm charts, and monitoring",
    tags: ["YAML", "Microservices", "Pods", "Kubernetes"],
    imageUrl: certificate3,
    //demoLink: "#",
    githubLink: "https://learn.kodekloud.com/user/certificate/7d911fac-285f-4f39-9eae-376f1fba0025"
  },
];



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




export const skillsData: Skill[] = [
  { id: 1, name: "Linux", icon: "devicon-linux-plain", category: "Operating System" },
  { id: 2, name: "Golang", icon: "devicon-go-plain", category: "Languages" },
  { id: 3, name: "Git", icon: "devicon-git-plain", category: "Tools" },
  { id: 4, name: "GitHub", icon: "devicon-github-original", category: "Tools" },
  { id: 5, name: "AWS", icon: "devicon-amazonwebservices-plain", category: "Cloud" },
  { id: 6, name: "Azure", icon: "devicon-azure-plain", category: "Cloud" },
  { id: 7, name: "Docker", icon: "devicon-docker-plain", category: "Containerization" },
  { id: 8, name: "Jenkins", icon: "devicon-jenkins-plain", category: "CI/CD" },
  { id: 9, name: "Kubernetes", icon: "devicon-kubernetes-plain", category: "Containerization" },
  { id: 10, name: "Terraform", icon: "devicon-terraform-plain", category: "Infrastructure as Code" },
  { id: 11, name: "Ansible", icon: "devicon-ansible-plain", category: "Configuration Management" },
  { id: 12, name: "Prometheus", icon: "devicon-prometheus-plain", category: "Monitoring" },
  { id: 13, name: "Grafana", icon: "devicon-grafana-plain", category: "Monitoring" },
  { id: 14, name: "Bash", icon: "devicon-bash-plain", category: "Scripting" },
  { id: 15, name: "Python", icon: "devicon-python-plain", category: "Languages" },
  { id: 16, name: "GitHub Actions", icon: "devicon-githubactions-plain", category: "CI/CD" },
  { id: 17, name: "ArgoCD", icon: "devicon-argocd-plain", category: "CI/CD" }
  
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