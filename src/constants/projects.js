import images from "./images";

const projects = [
  {
    title: "Solenne E-commerce Website",
    description:
      "A comprehensive online shopping platform providing a seamless and intuitive shopping experience.",
    image: images.solenne, 
    technologies: [
      "React",
      "Javascript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind",
      "Sequelize",
      "Stripe",
    ],
    github: "https://github.com/Sumana-Madhireddy/solenne",
    duration: {
      start: "August 2024",
      end: "Ongoing",
    },
    details: `
        A comprehensive online shopping platform offering a diverse range of products. 
        The platform features user-friendly navigation, secure authentication, and a fully responsive design 
        for mobile, tablet, and desktop users. 
  
        ▪ Designed and implemented the entire frontend using React and Tailwind CSS, ensuring a responsive, dynamic user 
        interface for optimized user experience across all devices. 
        
        ▪ Developed a secure authentication system using Node.js, Express, and PostgreSQL, enabling seamless user 
        registration, login, and session management focusing on security and user data privacy. 
  
        ▪ Integrated payment processing using Stripe with industry-standard encryption and fraud detection, ensuring secure 
        and efficient transactions for customers purchasing products. 
  
        ▪ Built a robust order management system using Sequelize ORM and PostgreSQL, providing users with real-time 
        order tracking, inventory management, and seamless checkout flow.
      `,
  },
  {
    title: "Dense Crowd Counting using Swin-UNet",
    description: "Developed a Swin-UNet model for crowd counting.",
    image: images.swinunet,
    technologies: ["Python", "PyTorch", "OpenCV", "Swin-Transformers", "U-Net"],
    github: "https://github.com/ubcse573-vs/project-groups-project_keshavku_sumanama",
    duration: {
      start: "May 2024",
      end: "August 2024",
    },
    details: `
        Developed a Swin-WNet model combining Swin Transformers and W-Net, achieving an MAE of 260.48 on the UCF-QNRF dataset. 
        Implemented a custom loss function (MAE + BCE) to improve head localization and crowd count accuracy.
      `,
  },
  {
    title: "Convergence of Senses: A Multimodal Approach for Translation",
    description:
      "Developed a Seq2seq language translation model using transformers, integrating speech recognition and text input to enhance accessibility.",
    image: images.language_translation, 
    technologies: [
      "Python",
      "PyTorch",
      // "NumPy",
      // "Matplotlib",
      // "Keras",
      // "TensorFlow",
      "Spacy",
      "Torchtext",
      "Time-series analysis",
      "Pattern recognition",
    ],
    github: "https://github.com/your-repo",
    duration: {
      start: "January 2024",
      end: "June 2024",
    },
    details: `
        Developed a Seq2seq language translation model using transformers, integrating speech recognition and text input to 
        enhance accessibility. 
        
        ▪ Trained the model on a dataset of 100,000+ text and audio pairs, using PyTorch, TensorFlow, and Keras to handle 
        large-scale data processing and improve performance by 30%. 
        
        ▪ Optimized the model through time-series analysis and pattern recognition, reducing translation errors by 15%, 
        and visualized results using Matplotlib to fine-tune parameters. 
        
        ▪ Conducted extensive training and testing using Torchtext and Spacy for natural language processing (NLP) tasks, 
        improving the system’s ability to understand and generate coherent translations. 
        
        ▪ Visualized and optimized model performance using Matplotlib, resulting in a 30% reduction in errors for complex 
        sentence structures across multiple languages.
      `,
  },
  {
    title: "Anime Film Pulse Database System",
    description:
      "Designed a centralized SQL-based database for comprehensive anime film information, improving industry data accessibility.",
    image: images.animefilmpulse,
    technologies: ["SQL", "PostgreSQL", "DBMS", "Python", "Pandas", "NumPy"],
    github: "https://github.com/your-repo",
    duration: {
      start: "January 2024",
      end: "June 2024",
    },
    details: `
        Designed a centralized SQL-based database for comprehensive anime film information, improving industry data 
        accessibility and competitiveness. 
        
        ▪ Implemented the database using PostgreSQL, managing 5,000+ anime films and improving data accessibility for industry 
        analysts by 40%. 
        
        ▪ Optimized data retrieval using advanced SQL queries, reducing query response times by 25%, and enhancing the 
        efficiency of data analysis for film metadata and reviews. 
        
        ▪ Integrated Python, Pandas, and NumPy to automate data cleaning and preprocessing, reducing manual data handling 
        time by 30% and ensuring data consistency across the platform.
      `,
  },
  {
    // title: "Forecasting Telecom Customer Churn for Proactive Retention and Business Success",
    title: "Telecom Churn Forecasting for Proactive Retention",
    description:
      "Implemented and evaluated various machine learning classifiers for telecom customer churn prediction.",
    image: images.churnprediction,
    technologies: ["Python", "Pandas", "Matplotlib", "Scikit-Learn", "UB(CCR)"],
    github: "https://github.com/Sumana-Madhireddy/CustomerChurnRetention",
    duration: {
      start: "Ongoing",
      end: "Ongoing",
    },
    details: `
        Implemented and evaluated various machine learning classifiers for telecom customer churn prediction, with the goal 
        of enabling proactive retention measures for profitability. After thorough evaluation, the Random Forest classifier 
        was chosen for its higher performance.
      `,
  },
];

export default projects;
