export const portfolioData = {
  personal: {
    name: "Rakesh Telang",
    role: "AI Engineer & Software Developer",
    tagline: "Building intelligent systems and scalable software.",
    email: "work.rakesh2971@gmail.com",
    phone: "+91 9075805070",
    location: "Maharashtra, India",
    linkedin: "https://www.linkedin.com/in/rakesh-telang-9155bb322",
    github: "https://github.com/rakesh2971",
    about: "I am an AI/ML Engineer focused on building robust, scalable applications powered by Generative AI and deep learning. I specialize in Python, Multi-Agent Systems, and Retrieval-Augmented Generation (RAG). My engineering philosophy centers on clean architecture, measurable impact, and solving real-world problems with data-driven solutions."
  },
  skills: {
    core: ["Python", "SQL", "Java", "JavaScript"],
    ai_ml: ["TensorFlow", "Pandas", "NumPy", "OpenCV", "Hugging Face Transformers", "LangChain", "RAG", "LLMs (Gemini, Llama)"],
    web_tools: ["Flask", "React.js", "Git/GitHub", "Docker", "VS Code", "Google Colab", "ChromaDB"],
    soft: ["System Architecture", "Problem Solving", "Leadership", "Cross-functional Collaboration"]
  },
  experience: [
    {
      role: "Data Science Intern",
      company: "Lihatech",
      location: "Onsite",
      duration: "Feb 2026 – Present",
      achievements: [
        "Architecting an automated CRM system for marketing and campaign management, integrating AI models with the Meta WhatsApp Business API.",
        "Developing context-aware AI chatbots for customer support utilizing Retrieval-Augmented Generation (RAG), significantly improving response accuracy and relevance."
      ],
      tech: ["Python", "RAG", "LLMs", "WhatsApp API"],
      offerLetterUrl: "/LIHATECH-offer letter.pdf"
    },
    {
      role: "AI & Generative AI Intern",
      company: "IBM SkillBuild - AICTE",
      location: "Remote",
      duration: "Jan 2026 – Feb 2026",
      achievements: [
        "Mastered advanced Prompt Engineering techniques to optimize Large Language Model (LLM) performance and token efficiency.",
        "Developed a specialized chatbot for mental health support, applying generative AI and deep learning fundamentals under industry mentorship."
      ],
      tech: ["Generative AI", "Deep Learning", "Prompt Engineering"],
      certificateUrl: "/IBM-certificate.pdf.pdf"
    },
    {
      role: "Artificial Intelligence Intern",
      company: "Microsoft - AICTE",
      location: "Remote",
      duration: "Apr 2025 – May 2025",
      achievements: [
        "Built and fine-tuned a Sentiment Analysis Model using Python and Hugging Face Transformers to automatically classify customer feedback.",
        "Leveraged cloud-based workflows, Google Colab, and Kaggle datasets for rigorous model training, evaluation, and inference deployment."
      ],
      tech: ["Python", "Hugging Face", "Transformers", "Cloud Workflows"],
      certificateUrl: "/microsoft-certificate.pdf"
    }
  ],
  projects: [
    {
      title: "Ashta Pradhan AI",
      subtitle: "Multi-Agent Historical Advisory System",
      description: "Orchestrated an eight-agent system with LangGraph and Gemini 1.5 to produce structured responses through adversarial debate.",
      results: [
        "Implemented ChromaDB-based RAG over Adnyapatra, reducing hallucinations by approximately 40%.",
        "Achieved sub-5-second response time by parallelizing agents with Gemini 1.5 Flash."
      ],
      tech: ["Python", "LangGraph", "Google Gemini", "RAG", "ChromaDB"],
      github: "https://github.com/rakesh2971/Ashta-Pradhan-AI",
      demo: "#", // Missing
      repo: "rakesh2971/Ashta-Pradhan-AI"
    },
    {
      title: "TWIN AI",
      subtitle: "n8n, WhatsApp API, OpenAI GPT-4o, PostgreSQL, pgvector, RAG",
      description: "Engineered n8n workflows for scheduled WhatsApp broadcasts and a bilingual RAG assistant for product queries.",
      results: [
        "Engineered n8n workflows for personalized, scheduled WhatsApp broadcasts with CSV uploads, rate limits, retries, and delivery tracking.",
        "Built a bilingual RAG assistant using GPT-4o, PostgreSQL, and pgvector to answer English and Hindi product queries and exclude expired offers.",
        "Secured real-time webhooks with instant opt-outs, spam rate limits, and input sanitization against prompt injection.",
        "Unified workflow state and analytics in PostgreSQL, automated service alerts, and achieved sub-3-second end-to-end responses."
      ],
      tech: ["n8n", "WhatsApp API", "GPT-4o", "PostgreSQL", "pgvector", "RAG"],
      github: "https://github.com/rakesh2971",
      demo: "#",
      repo: ""
    }
  ],
  techStack: [
    {
      category: "Languages",
      items: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", url: "https://www.python.org/" },
        { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", url: "https://en.wikipedia.org/wiki/SQL" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", url: "https://www.java.com/" },
        { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
      ]
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", url: "https://www.tensorflow.org/" },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg", url: "https://pandas.pydata.org/" },
        { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg", url: "https://numpy.org/" },
        { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg", url: "https://opencv.org/" },
        { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co/" },
        { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", url: "https://pytorch.org/" }
      ]
    },
    {
      category: "Frameworks & Databases",
      items: [
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", url: "https://react.dev/" },
        { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg", url: "https://flask.palletsprojects.com/" },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg", url: "https://fastapi.tiangolo.com/" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", url: "https://www.mongodb.com/" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", url: "https://www.postgresql.org/" },
        { name: "ChromaDB", icon: "https://github.com/chroma-core.png", url: "https://www.trychroma.com/" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", url: "https://git-scm.com/" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", url: "https://github.com/" },
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", url: "https://www.docker.com/" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", url: "https://www.postman.com/" },
        { name: "Google Colab", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg", url: "https://colab.research.google.com/" },
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", url: "https://code.visualstudio.com/" }
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science (AI-ML)",
      institution: "Bharati Vidyapeeth’s College of Engineering",
      location: "Kolhapur, Maharashtra",
      duration: "Nov 2022 – July 2026",
      details: "CGPA: 7.7/10 | Coursework: Machine Learning, Data Structures, Neural Networks, DBMS"
    }
  ],
  leadership: [
    "Student Head, Techno Bharati 2024: Led a 20+ member team to organize a national technical event.",
    "Vice Head, Artificial Creativity Club: Organized AI/ML workshops and guest lectures.",
    "State Level Athlete: Represented college Volleyball team at the state level."
  ]
};
