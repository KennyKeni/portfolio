import type { PortfolioData, FileNode, FileExtension } from '@/types/portfolio';
import { AboutPreview, SkillsPreview, ExperiencePreview, ReadmePreview, ProjectsIndexPreview } from '@/components/preview';
import { createProjectPreviewComponent } from '@/components/preview/ProjectPreviewWrapper';

export const portfolioData: PortfolioData = {
  about: {
    name: 'Kenny Lin',
    title: 'Full Stack Developer & ML Researcher',
    bio: 'Computer Science student at Georgia Institute of Technology with a 4.0 GPA, pursuing a concurrent B.S./M.S. program. Passionate about building scalable systems, machine learning applications, and creating impactful software solutions.',
    location: 'New York, NY',
    email: 'linkenny777@gmail.com',
    github: 'kennykeni',
    linkedin: 'kennylin344',
    website: 'https://yourwebsite.com'
  },

  projects: [
    {
      name: 'Agentic RAG System',
      description: 'A near real-time agentic RAG FastAPI backend with advanced retrieval techniques for accurate question answering.',
      technologies: ['Python', 'GoLang', 'FastAPI', 'Llamaindex', 'Qdrant', 'SqlAlchemy', 'Docker'],
      github: 'https://github.com/keni344/agentic-rag',
      highlights: [
        'Developed agentic RAG system with semantic search, hybrid search, and reranking capabilities',
        'Implemented vector search using Qdrant for improved retrieval accuracy',
        'Deployed dockerized FastAPI backend on VPS, reducing operating costs by 60%'
      ],
      fileExtension: '.py',
      language: 'python'
    },
    {
      name: 'Pokemon Wiki Website',
      description: 'Fully responsive Pokedex web application with scalable backend architecture and optimized caching.',
      technologies: ['TypeScript', 'React', 'NestJS', 'PostgreSQL', 'Node.js', 'Tailwind CSS', 'Redis'],
      github: 'https://github.com/keni344/pokemon-wiki',
      highlights: [
        'Created responsive UI using React and TypeScript for mobile and desktop devices',
        'Developed scalable backend with NestJS, implementing Redis caching for API requests',
        'Enhanced performance with incremental site regeneration and Cloudflare caching, improving load times by 50%'
      ]
    },
    {
      name: 'Breast Cancer CNN',
      description: 'Deep learning model for medical image analysis using CNNs to detect breast cancer from mammograms.',
      technologies: ['Python', 'PyTorch', 'Pandas', 'scikit-learn', 'OpenCV'],
      github: 'https://github.com/keni344/breast-cancer-detection',
      highlights: [
        'Achieved 82% accuracy in breast cancer detection using CNN and PyTorch',
        'Implemented transfer learning with EfficientNet and Inception-ResNet-v2, improving performance by 20%',
        'Preprocessed mammograms with CLAHE and Canny Edge Detection, enhancing model accuracy by 20%'
      ],
      fileExtension: '.py',
      language: 'python'
    },
    {
      name: 'iCAN',
      description: 'Gamified web application to improve medication adherence in children participating in clinical trials through virtual pet care mechanics.',
      technologies: ['TypeScript', 'Next.js', 'React', 'MongoDB', 'Tailwind CSS', 'Docker'],
      github: 'https://github.com/GTBitsOfGood/ican',
      link: 'https://main--bog-ican.netlify.app',
      highlights: [
        'Built web-based application in collaboration with iCAN nonprofit and team of seven developers',
        'Implemented gamification system with virtual pet care tied to medication adherence tracking',
        'Created RESTful API integration layer and service abstraction patterns for seamless frontend-backend communication',
        'Developed complex UI components using Tailwind CSS and React to enhance user experience and maintainability'
      ]
    }
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Kotlin', 'Go', 'C', 'C++', 'C#', 'SQL', 'HTML/CSS', 'Assembly']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['React', 'Next.js', 'Express.js', 'NestJS', 'FastAPI', 'PyTorch', 'TensorFlow', 'LlamaIndex', 'NumPy', 'Tailwind CSS']
    },
    {
      category: 'Databases & Cloud',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'NoSQL', 'AWS', 'SQS', 'S3', 'CloudWatch', 'Vector Databases', 'Qdrant']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Docker', 'Linux', 'Unix', 'Bash', 'RESTful APIs', 'GraphQL', 'Microservices', 'CI/CD']
    },
    {
      category: 'Machine Learning',
      items: ['PyTorch', 'TensorFlow', 'Transfer Learning', 'CNN', 'Object Detection', 'Co-DETR', 'LlamaIndex', 'RAG Systems']
    }
  ],

  experience: [
    {
      title: 'Software Engineering Intern',
      company: 'Viasat',
      period: 'May 2025 - Aug 2025',
      description: 'Automated customer order validation and fulfillment using cloud-native architecture and AWS services.',
      achievements: [
        'Automated customer order validation with AWS SQS and parallel processing, increasing processing speed by 300%',
        'Implemented distributed system with concurrent worker processes, reducing processing time from 4 hours to 10 minutes',
        'Designed GraphQL API endpoints and integrated AWS services (SQS, S3, CloudWatch) for real-time batch monitoring',
        'Replaced manual workflows with Python batch processing tool leveraging cloud-native architecture'
      ],
      technologies: ['Python', 'AWS', 'SQS', 'S3', 'CloudWatch', 'GraphQL']
    },
    {
      title: 'Full Stack Developer',
      company: 'Bits of Good',
      period: 'Jan 2024 - Present',
      description: 'Developed web application for non-profit iCAN to gamify medication adherence for children in clinical trials.',
      achievements: [
        'Built web-based application in collaboration with iCAN and team of seven to improve engagement and habit formation',
        'Implemented complex UI elements using Tailwind CSS and React to enhance user experience and maintainability',
        'Created RESTful API integration layer and service abstraction patterns for seamless frontend-backend communication',
        'Implemented HTTP client services and state management for efficient data flow'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'RESTful APIs', 'State Management']
    },
    {
      title: 'Machine Learning Undergraduate Researcher',
      company: 'Intelligent Digital Communications',
      period: 'Aug 2024 - Present',
      description: 'Developed near real-time system for identifying and triangulating wireless users in signal-dense environments.',
      achievements: [
        'Collaborated with professor and peers to develop wireless user identification and triangulation system',
        'Applied transfer learning to state-of-the-art Co-DETR models for wireless signal detection',
        'Achieved 85% accuracy on wireless signal detection in signal-dense environments',
        'Worked on near real-time processing for drone and wireless device identification'
      ],
      technologies: ['Python', 'PyTorch', 'Co-DETR', 'Transfer Learning', 'Signal Processing']
    }
  ]
};

export const fileTree: FileNode = {
  id: 'root',
  name: 'portfolio',
  type: 'folder',
  children: [
    {
      id: 'about',
      name: 'about.md',
      type: 'file',
      extension: '.md',
      language: 'markdown',
      content: `# ${portfolioData.about.name}

## ${portfolioData.about.title}

${portfolioData.about.bio}

### Contact Information
- **Location:** ${portfolioData.about.location}
- **Email:** ${portfolioData.about.email}
- **GitHub:** [@${portfolioData.about.github}](https://github.com/${portfolioData.about.github})
- **LinkedIn:** [linkedin.com/in/${portfolioData.about.linkedin}](https://linkedin.com/in/${portfolioData.about.linkedin})
- **Website:** [${portfolioData.about.website}](${portfolioData.about.website})

### What I Do
I specialize in building modern, scalable web applications using cutting-edge technologies. My approach combines clean code principles with pragmatic problem-solving to deliver high-quality software that makes a difference.

### Currently
- Building distributed systems at scale
- Exploring AI/ML integration in web applications
- Contributing to open-source projects
- Mentoring aspiring developers
`,
      previewComponent: AboutPreview
    },
    {
      id: 'projects-folder',
      name: 'projects',
      type: 'folder',
      children: [
        {
          id: 'projects-index',
          name: 'index.ts',
          type: 'file' as const,
          extension: '.ts' as const,
          language: 'typescript',
          content: `// Projects Index
// Click on any project file to view details

export const projects = [
${portfolioData.projects.map((project, index) => `  {
    id: ${index},
    name: "${project.name}",
    description: "${project.description}",
    file: "./${project.name.toLowerCase().replace(/\s+/g, '-')}${project.fileExtension || '.tsx'}"
  }`).join(',\n')}
];

export { ${portfolioData.projects.map(p => `${p.name.replace(/\s+/g, '')}Project`).join(', ')} } from './exports';
`,
          previewComponent: ProjectsIndexPreview
        },
        ...portfolioData.projects.map((project, index) => ({
          id: `project-${index}`,
          name: `${project.name.toLowerCase().replace(/\s+/g, '-')}${project.fileExtension || '.tsx'}`,
          type: 'file' as const,
          extension: (project.fileExtension || '.tsx') as FileExtension,
          language: project.language || 'typescript',
          content: `export const ${project.name.replace(/\s+/g, '')}Project = {
  name: "${project.name}",
  description: "${project.description}",

  technologies: [
    ${project.technologies.map(tech => `"${tech}"`).join(',\n    ')}
  ],

  links: {
    ${project.github ? `github: "${project.github}",` : ''}
    ${project.link ? `demo: "${project.link}"` : ''}
  },

  highlights: [
    ${project.highlights.map(h => `"${h}"`).join(',\n    ')}
  ]
};

// Project README
/*
# ${project.name}

${project.description}

## Key Features
${project.highlights.map(h => `- ${h}`).join('\n')}

## Tech Stack
${project.technologies.join(' • ')}

${project.github ? `## Links\n- [GitHub Repository](${project.github})` : ''}
${project.link ? `- [Live Demo](${project.link})` : ''}
*/
`,
          previewComponent: createProjectPreviewComponent(project)
        }))
      ]
    },
    {
      id: 'skills',
      name: 'skills.ts',
      type: 'file',
      extension: '.ts',
      language: 'typescript',
      content: `export interface SkillSet {
  category: string;
  items: string[];
  proficiency?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export const skills: SkillSet[] = [
${portfolioData.skills.map(skill => `  {
    category: "${skill.category}",
    items: [${skill.items.map(item => `"${item}"`).join(', ')}],
    proficiency: "advanced"
  }`).join(',\n')}
];

export const getSkillsByCategory = (category: string): string[] => {
  const skillSet = skills.find(s => s.category === category);
  return skillSet?.items || [];
};

export const getAllSkills = (): string[] => {
  return skills.flatMap(s => s.items);
};
`,
      previewComponent: SkillsPreview
    },
    {
      id: 'experience',
      name: 'experience.json',
      type: 'file',
      extension: '.json',
      language: 'json',
      content: JSON.stringify({
        experience: portfolioData.experience.map(exp => ({
          title: exp.title,
          company: exp.company,
          period: exp.period,
          description: exp.description,
          achievements: exp.achievements,
          technologies: exp.technologies
        }))
      }, null, 2),
      previewComponent: ExperiencePreview
    },
    {
      id: 'readme',
      name: 'README.md',
      type: 'file',
      extension: '.md',
      language: 'markdown',
      content: `# Portfolio

Welcome to my portfolio! This is an IDE-themed portfolio website built with React, TypeScript, and Tailwind CSS.

## Navigation

Use the file tree on the left to explore different sections:
- [**about.md**](file://about) - Learn more about me
- [**projects/**](file://projects-folder) - View my projects
- [**skills.ts**](file://skills) - Check out my technical skills
- [**experience.json**](file://experience) - See my work history

## Terminal Commands

Try these commands in the terminal below:
- \`help\` - Show available commands
- \`about\` - Display about information
- \`projects\` - List all projects
- \`skills\` - Show skills
- \`experience\` - View work experience
- \`clear\` - Clear terminal
- \`ls\` - List files

## Toggle Views

Use the **Code/Raw** toggle in the editor to switch between:
- **Code view**: Syntax-highlighted source code
- **Raw view**: Rendered/formatted content

---

Built with React + TypeScript + Tailwind CSS + Tokyo Night theme
`,
      previewComponent: ReadmePreview
    }
  ]
};
