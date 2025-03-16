import images from "./images";

const projects = [
  {
    title: "Solenne E-commerce Website",
    // description: "Solenne is a dynamic e-commerce platform designed for both customers and admins, featuring a comprehensive admin dashboard, efficient order and cart management, and secure payment integration. It offers a seamless shopping experience with a fully responsive UI, ensuring smooth user interaction across devices. Built with modern technologies like React, Node.js, and PostgreSQL, Solenne focuses on performance, security, and scalability.",
    description: [
      "Solenne is a dynamic e-commerce platform designed for both customers and admins, featuring a comprehensive admin dashboard, efficient order and cart management, and secure payment integration.",
      "It offers a seamless shopping experience with a fully responsive UI, ensuring smooth user interaction across devices.",
      "Built with modern technologies like React, Node.js, and PostgreSQL, Solenne focuses on performance, security, and scalability."
    ],
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
        Designed a user-friendly admin dashboard for managing products, users, and orders, allowing admins to efficiently handle store operations and monitor sales.
        
        Developed secure authentication using Node.js, Express, and PostgreSQL, ensuring safe login, registration, and session management for users.
        
        Integrated Stripe for secure payment processing, enabling seamless and encrypted transactions for customers.
        
        Implemented a robust order and cart management system with real-time tracking, inventory management, and streamlined checkout using Sequelize ORM and PostgreSQL.
        
        Focused on creating a responsive, mobile-first design with React and Tailwind CSS for an optimized experience across all devices.
      `,
    team: [
    ],
  },
  {
    title: "Snake Game using C#",
    description:
      ["Developed a console-based Snake game in C#, implementing dynamic grid rendering, collision detection, and user input handling to control the snake’s movement and game logic.",
      "Optimized gameplay mechanics by introducing adaptive speed increments based on player progress, enhancing user experience and demonstrating proficiency in object-oriented programming and C# development."],
    image: images.snakegame,
    technologies: ["C#", "Visual Studio"],
    github: "https://github.com/Sumana-Madhireddy/SnakeGame",
    duration: {
      start: "Ongoing",
      end: "Ongoing",
    },
    details: `
        Developed a console-based Snake game in C#, implementing dynamic grid rendering, collision detection, and user
        input handling to control the snake’s movement and game logic.
      `,
    team: [
    ],
  },
  {
    title: "Convergence of Senses: A Multimodal Approach for Translation",
    // description:
    //   "Developed a Seq2seq language translation model using transformers, integrating speech recognition and text input to enhance accessibility.",
    description: [
      "Developed a Seq2seq language translation model using transformers, combining speech recognition and text input to improve accessibility.",
      "Enhanced model performance by integrating time-series analysis, pattern recognition, and NLP techniques, reducing translation errors and improving accuracy."
    ],
    image: images.language_translation, 
    technologies: [
      "Python",
      "PyTorch",
      "NumPy",
      "Matplotlib",
      "TensorFlow",
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
    team: [
      { name: "Revathi", image: images.Revathi, linkedin: "https://www.linkedin.com/in/revathi-gollapudi-a60894187/" },
    ],
  },
  {
    title: "Anime Film Pulse Database System",
    description: [
      "Developed a centralized SQL-based database system to manage and provide comprehensive information on over 5,000 anime films, enhancing data accessibility in the anime industry.",
      "Utilized PostgreSQL, Python, Pandas, and NumPy to automate data processing, optimize queries, and improve efficiency for industry analysts."
    ],
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
    team: [
      { name: "Revathi", image: images.Revathi, linkedin: "https://www.linkedin.com/in/revathi-gollapudi-a60894187/" },
      { name: "Lahari", image: images.Lahari, linkedin: "https://www.linkedin.com/in/lahari-jagarlamudi/" },
    ],
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
    team: [
      { name: "Revathi", image: images.Revathi, linkedin: "https://www.linkedin.com/in/revathi-gollapudi-a60894187/"  },
      { name: "Srikar", image: images.Srikar, linkedin: "https://www.linkedin.com/in/srikarchintha/" },
    ],
  },
];

export default projects;
