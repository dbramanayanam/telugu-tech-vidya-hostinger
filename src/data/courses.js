export const courses = [
  {
    id: 1,
    title: "Complete DevOps Mastery",
    description: "Master DevOps practices with hands-on experience in CI/CD, Docker, Kubernetes, and cloud deployment strategies.",
    category: "DevOps",
    duration: "12 weeks",
    students: "2,500+",
    rating: "4.9",
    price: "₹4,999",
    originalPrice: "₹9,999",
    level: "Intermediate",
    imageDescription: "DevOps engineer working with multiple monitors showing CI/CD pipelines, Docker containers, and Kubernetes dashboards",
    learningOutcomes: [
      "Master CI/CD pipeline creation and management",
      "Deploy applications using Docker and Kubernetes",
      "Implement Infrastructure as Code with Terraform",
      "Monitor and troubleshoot production systems",
      "Automate deployment processes",
      "Understand cloud-native architectures"
    ],
    chapters: [
      { title: "Introduction to DevOps Culture", duration: "45 min" },
      { title: "Version Control with Git", duration: "60 min" },
      { title: "CI/CD Pipeline Fundamentals", duration: "90 min" },
      { title: "Docker Containerization", duration: "120 min" },
      { title: "Kubernetes Orchestration", duration: "150 min" },
      { title: "Infrastructure as Code", duration: "90 min" },
      { title: "Monitoring and Logging", duration: "75 min" },
      { title: "Security in DevOps", duration: "60 min" }
    ]
  },
  {
    id: 2,
    title: "AWS Cloud Solutions Architect",
    description: "Become an AWS certified solutions architect with comprehensive training on cloud services, architecture design, and best practices.",
    category: "Cloud Computing",
    duration: "16 weeks",
    students: "3,200+",
    rating: "4.8",
    price: "₹6,999",
    originalPrice: "₹12,999",
    level: "Advanced",
    imageDescription: "AWS cloud architecture diagram with various services like EC2, S3, RDS, and Lambda interconnected",
    learningOutcomes: [
      "Design scalable AWS cloud architectures",
      "Implement security best practices",
      "Optimize costs and performance",
      "Master core AWS services",
      "Prepare for AWS certification exams",
      "Build fault-tolerant systems"
    ],
    chapters: [
      { title: "AWS Fundamentals", duration: "60 min" },
      { title: "EC2 and Compute Services", duration: "90 min" },
      { title: "Storage Solutions (S3, EBS)", duration: "75 min" },
      { title: "Networking and VPC", duration: "120 min" },
      { title: "Database Services", duration: "90 min" },
      { title: "Security and IAM", duration: "105 min" },
      { title: "Serverless Architecture", duration: "90 min" },
      { title: "Monitoring and CloudWatch", duration: "60 min" }
    ]
  },
  {
    id: 3,
    title: "AI & Machine Learning Fundamentals",
    description: "Dive into artificial intelligence and machine learning with Python, TensorFlow, and real-world project implementations.",
    category: "AI & Machine Learning",
    duration: "14 weeks",
    students: "1,800+",
    rating: "4.9",
    price: "₹7,999",
    originalPrice: "₹14,999",
    level: "Beginner to Intermediate",
    imageDescription: "AI neural network visualization with data flowing through nodes, Python code on screen, and machine learning models",
    learningOutcomes: [
      "Understand AI and ML fundamentals",
      "Build neural networks with TensorFlow",
      "Implement supervised and unsupervised learning",
      "Work with real datasets",
      "Deploy ML models to production",
      "Apply deep learning techniques"
    ],
    chapters: [
      { title: "Introduction to AI/ML", duration: "45 min" },
      { title: "Python for Data Science", duration: "90 min" },
      { title: "Data Preprocessing", duration: "75 min" },
      { title: "Supervised Learning", duration: "120 min" },
      { title: "Unsupervised Learning", duration: "90 min" },
      { title: "Neural Networks", duration: "135 min" },
      { title: "Deep Learning with TensorFlow", duration: "150 min" },
      { title: "Model Deployment", duration: "90 min" }
    ]
  },
  {
    id: 4,
    title: "Linux System Administration",
    description: "Master Linux system administration from basics to advanced topics including shell scripting, networking, and security.",
    category: "Linux",
    duration: "10 weeks",
    students: "2,100+",
    rating: "4.7",
    price: "₹3,999",
    originalPrice: "₹7,999",
    level: "Beginner to Advanced",
    imageDescription: "Linux terminal with system monitoring commands, server racks in background, and network configuration files",
    learningOutcomes: [
      "Master Linux command line interface",
      "Configure and manage Linux servers",
      "Write powerful shell scripts",
      "Implement security best practices",
      "Manage users and permissions",
      "Troubleshoot system issues"
    ],
    chapters: [
      { title: "Linux Basics and Installation", duration: "60 min" },
      { title: "Command Line Mastery", duration: "90 min" },
      { title: "File System and Permissions", duration: "75 min" },
      { title: "Process Management", duration: "60 min" },
      { title: "Shell Scripting", duration: "120 min" },
      { title: "Network Configuration", duration: "90 min" },
      { title: "System Security", duration: "105 min" },
      { title: "Performance Monitoring", duration: "75 min" }
    ]
  },
  {
    id: 5,
    title: "Terraform Infrastructure as Code",
    description: "Learn to manage infrastructure as code using Terraform across multiple cloud providers with best practices and automation.",
    category: "Infrastructure",
    duration: "8 weeks",
    students: "1,500+",
    rating: "4.8",
    price: "₹4,499",
    originalPrice: "₹8,999",
    level: "Intermediate",
    imageDescription: "Terraform configuration files on screen with cloud infrastructure diagrams showing automated provisioning",
    learningOutcomes: [
      "Write Terraform configurations",
      "Manage multi-cloud infrastructure",
      "Implement state management",
      "Create reusable modules",
      "Automate infrastructure deployment",
      "Follow Terraform best practices"
    ],
    chapters: [
      { title: "Infrastructure as Code Concepts", duration: "45 min" },
      { title: "Terraform Basics", duration: "75 min" },
      { title: "Providers and Resources", duration: "90 min" },
      { title: "State Management", duration: "60 min" },
      { title: "Modules and Workspaces", duration: "105 min" },
      { title: "Advanced Terraform Features", duration: "90 min" },
      { title: "CI/CD with Terraform", duration: "75 min" },
      { title: "Best Practices and Security", duration: "60 min" }
    ]
  },
  {
    id: 6,
    title: "Kubernetes Container Orchestration",
    description: "Master Kubernetes for container orchestration, scaling, and management in production environments.",
    category: "DevOps",
    duration: "12 weeks",
    students: "2,000+",
    rating: "4.9",
    price: "₹5,999",
    originalPrice: "₹11,999",
    level: "Intermediate to Advanced",
    imageDescription: "Kubernetes cluster dashboard showing pods, services, and deployments with container orchestration visualization",
    learningOutcomes: [
      "Deploy applications on Kubernetes",
      "Manage pods, services, and deployments",
      "Implement scaling and load balancing",
      "Configure networking and storage",
      "Monitor cluster health",
      "Implement security policies"
    ],
    chapters: [
      { title: "Kubernetes Architecture", duration: "60 min" },
      { title: "Pods and Containers", duration: "75 min" },
      { title: "Services and Networking", duration: "90 min" },
      { title: "Deployments and ReplicaSets", duration: "75 min" },
      { title: "ConfigMaps and Secrets", duration: "60 min" },
      { title: "Persistent Volumes", duration: "90 min" },
      { title: "Monitoring and Logging", duration: "75 min" },
      { title: "Security and RBAC", duration: "90 min" }
    ]
  },
  {
    id: 7,
    title: "Python for DevOps Automation",
    description: "Learn Python programming specifically for DevOps automation, scripting, and infrastructure management.",
    category: "DevOps",
    duration: "10 weeks",
    students: "1,700+",
    rating: "4.7",
    price: "₹3,499",
    originalPrice: "₹6,999",
    level: "Beginner to Intermediate",
    imageDescription: "Python code editor with automation scripts, API integrations, and DevOps tools integration",
    learningOutcomes: [
      "Master Python fundamentals",
      "Automate infrastructure tasks",
      "Work with APIs and web services",
      "Create deployment scripts",
      "Integrate with DevOps tools",
      "Build monitoring solutions"
    ],
    chapters: [
      { title: "Python Fundamentals", duration: "90 min" },
      { title: "File and System Operations", duration: "75 min" },
      { title: "Working with APIs", duration: "90 min" },
      { title: "Database Interactions", duration: "75 min" },
      { title: "Automation Scripts", duration: "105 min" },
      { title: "Testing and Debugging", duration: "60 min" },
      { title: "Integration with DevOps Tools", duration: "90 min" },
      { title: "Building CLI Applications", duration: "75 min" }
    ]
  },
  {
    id: 8,
    title: "Cloud Security Fundamentals",
    description: "Comprehensive cloud security training covering AWS, Azure, and GCP security best practices and compliance.",
    category: "Cloud Computing",
    duration: "12 weeks",
    students: "1,300+",
    rating: "4.8",
    price: "₹6,499",
    originalPrice: "₹12,999",
    level: "Intermediate to Advanced",
    imageDescription: "Cloud security dashboard with threat detection, compliance reports, and security monitoring tools",
    learningOutcomes: [
      "Implement cloud security frameworks",
      "Configure identity and access management",
      "Monitor and detect threats",
      "Ensure compliance requirements",
      "Secure cloud workloads",
      "Incident response procedures"
    ],
    chapters: [
      { title: "Cloud Security Fundamentals", duration: "60 min" },
      { title: "Identity and Access Management", duration: "90 min" },
      { title: "Network Security", duration: "75 min" },
      { title: "Data Protection", duration: "90 min" },
      { title: "Threat Detection", duration: "105 min" },
      { title: "Compliance and Governance", duration: "75 min" },
      { title: "Incident Response", duration: "90 min" },
      { title: "Security Automation", duration: "75 min" }
    ]
  }
];
