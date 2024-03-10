import {
    mobile,
    backend,
    creator,
    web,

    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    unity,
    blender,
    c_sharp,
    java,
    python,

    meta,
    starbucks,
    tesla,
    shopify,
    vrc,
    acti,
    xrbootcamp,
    
    shootinggame,
    wordsmash,
    voicelearning,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Unity Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Unity 3D",
      icon: unity,
    },
    {
      name: "c#",
      icon: c_sharp,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "blender",
      icon: blender,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ];
  
  const experiences = [
    {
      title: "Unity Developer",
      company_name: "VRC Calgary",
      icon: vrc,
      iconBg: "#383E56",
      date: "April 2019 - March 2020",
      points: [
        "Developed interactive and user visually appealing simulations using Unity3D.",
        "Collaborating with other developers to to implement project mechanics and features.",
        "Implemented and optimized project assets, ensuring smooth performance on various platforms.",
        "Debugged and resolved issues to enhance overall project stability and user experience.",
        "Demonstrated proficiency in C# and utilized Unity's scripting API for project logic implementation."
      ],
    },

    {
      title: "VR / AR Developer (Unity)",
      company_name: "Alberta Construction Training Institute",
      icon: acti,
      iconBg: "#E6DEDD",
      date: "March 2020 - Present",
      points: [
        "Led the development of augmented reality (AR) and virtual reality (VR) applications using Unity and AR/VR SDKs.",
        "Led and Created immersive and user-friendly AR/VR multiplayer projects",
        "Implemented real-time interactions, gestures, and 3D spatial mapping to enhance user engagement.",
        "Integrated third-party SDKs for analytics and monetization, contributing to a significant increase in revenue",
        "Stayed abreast of industry trends and emerging technologies to incorporate cutting-edge features into AR/VR projects."
      ],
    },
    
    /*
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    */
  ];
  
  const learns = [
    {
      title: "XR Bootcamp",
      company_name: "High Honors Certificate of XR Foundations and Prototyping ",
      icon: xrbootcamp,
      iconBg: "#383E56",
      date: "Sep 2022 - Dec 2022",
      points: [
        "Proficient in developing virtual reality (VR) and augmented reality (AR) applications with Unity and C#.",
        "Hands-on experience with XR development tools and platforms.",
        "Leveraged XR development skills to create an immersive and engaging experience within the virtual environment.",
        "Collaborated with Pearson's dedicated team to spearhead the development of an innovative VR language learning game.",
        "Demonstrated adaptability and problem-solving skills by addressing challenges unique to VR language learning game development."
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Shooting Game",
      description:
        "A third player shooting game that shows you diffenent features such as animations, inverse kinematices (IK) and weapon recoil.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "3d",
          color: "pink-text-gradient",
        },
      ],
      image: shootinggame,
      source_code_link: "https://github.com/",
    },
    {
      name: "Word Smash",
      description:
        "A game that lets you learn a language through interacting with the virtual space around you.",
        //"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "3d",
          color: "pink-text-gradient",
        },
      ],
      image: wordsmash,
      source_code_link: "https://github.com/",
    },
    {
      name: "Voice Learning",
      description:
        "A game that lets you learn a language through using your voice to change and interact with the environment around you.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "3d",
          color: "pink-text-gradient",
        },
      ],
      image: voicelearning,
      source_code_link: "https://github.com/",
    },
    /*
    {
      name: "Voice Learning",
      description:
        "A game that lets you learn a language through using your voice to change and interact with the environment around you.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
        {
          name: "3d",
          color: "pink-text-gradient",
        },
      ],
      image: voicelearning,
      source_code_link: "https://github.com/",
    },
    */
  ];
  
  export { services, technologies, experiences, learns, testimonials, projects };
  