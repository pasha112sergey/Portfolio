import project1 from "../assets/projects/django.jpg";
import myVideo from "../assets/projects/VideoGame.mp4";
import project2 from "../assets/projects/tkinter.jpg";
import project3 from "../assets/projects/ascii.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, Java, and Python. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences!`;

export const ABOUT_TEXT = `As a sophomore pursuing a B.S. in Computer Science at Stony Brook University with a 4.0 GPA, I have honed strong skills in Java, Python, JavaScript, and frameworks such as Node.js, Pandas and Git. My academic, professional, and project experiences highlight my passion for problem-solving and my ability to quickly learn and adapt to new challenges.

In the Tech Business and Development Vertically Integrated Project, I collaborated with an interdisciplinary team of 5 to develop web and cloud-based applications. Currently, we are designing data backup software projected to improve University IT Client Support efficiency by 40%. This experience strengthened my technical expertise and teamwork skills in a dynamic, fast-paced environment.

Additionally, my 1.5 years with Stony Brook’s IT Client Support sharpened my communication, organizational, and problem-solving abilities—key qualities for success in collaborative roles. Beyond professional work, I have undertaken personal projects that showcase my ability to learn independently and solve real-world problems. These include a Full-Stack Image-to-ASCII Art Generator built with JavaScript and Node.js, and a Python-based Computer Vision tool for my father’s business, both of which taught me to design robust systems and optimize user interactions.

In my free time, I enjoy working on various progamming projects, playing music, visual arts, and spending time with friends and family. Check out the personal tab for non-professional related projects!`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Team Leader",
    company: "Tech Business and Development Vertically Integrated Project",
    description: `Delivered weekly progress updates and coordinated team efforts in a fast-paced development setting, while facilitating meetings with university administrators and pitching project ideas to align with project goals and gather feedback. 
Designed a Python-based data backup script that improved workflow efficiency for IT Client Support, saving an average of 20 hours per week on manual tasks while enhancing system reliability across the campus network. 
Collaborated and communicated extensively with a diverse, cross-functional 5-member team to design and develop web and cloud-based applications that address the needs of the Stony Brook University and Long Island communities, with a focus on college-aged users.`,
    technologies: ["Python", "Communication", "Teamwork"],
    link: "https://www.stonybrook.edu/commcms/vertically-integrated-projects/teams/_team_page/team_page.php?team=TBD%3A%20Tech%20Businesses%20in%20Development",
  },
  {
    year: "2023 - Present",
    role: "Client Support Technician",
    company: "Stony Brook University Division of Information Technology ",
    description: `Demonstrated expertise in providing hands-on technical assistance and excellent customer service to individuals accessing the Walk-in Center, ensuring prompt issue resolution and client satisfaction with a 95% success rate. 
Provided swift, effective technical support by receiving client calls through Cisco WebEx with an average call time of 8 minutes and collaborating with teams to troubleshoot hardware, software via Google Chat. 
Collaborated with professional technicians to resolve intricate IT challenges, achieving an average resolution time under 30 minutes per ticket, while documenting troubleshooting procedures in TeamDynamix for optimal tracking.
`,
    technologies: ["Communication", "Leadership", "Teamwork", "IT Operations"],
    link: "https://it.stonybrook.edu/",
  },
];

export const PROJECTS = [
  {
    id: "django-ims",
    title: "Django Inventory Management System",
    description: `I’m thrilled to share my latest development journey—an inventory management system built using Django, deployed on Heroku, and powered by a PostgreSQL database hosted on Railway!
    While the project’s front-end is intentionally simple, the system has proven its scalability—successfully handling over 500 inventory items during testing! Currently, it supports 15 user accounts, each with their own dedicated database records, ensuring personalized data management. I used Django for backend development and user authentication. PostgreSQL on Railway for robust and scalable data storage, Heroku for seamless deployment and scalability, Git for version control and collaboratiom and I learned SendGrid for secure email password resets!`,
    mediaType: "image",
    mediaSrc: project1,
    technologies: ["Django", "PostgreSQL", "HTML", "CSS", "Heroku"],
    link: "https://django-inventory-sys-2b0592905f9a.herokuapp.com/",
  },
  {
    id: "python-tkinter",
    title: "Python Tkinter Application with Computer Vision Processing",
    description: `
    I developed a Python-based Tkinter application leveraging OpenCV to assist my father's personalization business by improving item alignment for custom laser engraving, boosting efficiency by 30%.

    The challenge was ensuring precise alignment, as misalignment led to product waste and reduced customer satisfaction. With no existing solutions for this niche, I built a tailored application.

    I implemented real-time video processing with overlayed alignment grids and custom silhouette cutouts, offering visual guides that streamlined operations and reduced manual adjustments.

    Using OpenCV, I developed algorithms to assess positioning accuracy and provide immediate feedback, achieving a 75% reduction in misalignment errors.

    I focused on usability and performance, ensuring the application remained responsive and user-friendly for operators. An iterative approach allowed for continuous improvements based on real-world feedback.

    The final product received positive feedback for its ease of use and impact on accuracy. This project strengthened my skills in Python, Tkinter, and OpenCV while enhancing my ability to develop practical solutions.
`,
    mediaType: "image",
    mediaSrc: project2,
    technologies: ["React", "Django", "PostgreSQL", "HTML", "CSS"],
    link: "https://github.com/pasha112sergey/EzCad_Helper",
  },
  {
    id: "ascii",
    title: "Image URL to ASCII Art Generator",
    description: `I created an innovative web application that translates image web URLs into ASCII art, accessed by over 100 users! This project showcased my ability to self-learn programming skills and engage users effectively. I integrated multiple APIs for image and input processing, demonstrating my adaptability in learning and applying new frameworks. The full-stack architecture efficiently processed over 100 image requests without disruptions, highlighting robust server interactions.`,
    mediaType: "image",
    mediaSrc: project3,
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/pasha112sergey/Image-to-ASCII",
  },
  {
    id: "game",
    title: "Video Game Project",
    description: `Back in 2022, I took on a project that turned out to be one of the most challenging yet rewarding endeavors: creating a fully functional video game level from scratch as part of my supplemental applications to colleges. On my LinkedIn page, I share a video showcasing this project, which remains close to my heart. This game, built in the Unity Game Engine, represents over 300 hours of effort over 9 months and a deep dive into C# programming and object-oriented principles—both of which I learned from scratch before attending college.`,
    mediaType: "video",
    mediaSrc: myVideo,
    technologies: [
      "Unity",
      "C#",
      "2D Animations",
      "Object-Oriented Programming",
    ],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7279716305186820097/",
  },
];

export const CONTACT = {
  phoneNo: "+1 (646) 714-1388",
  email: "sergey.safronov268@gmail.com",
};

export const EDUCATION = {
  gpa: `GPA: 4.0`,
  date: `September 2023 - Present`,
  about: `I'm a current Sophomore student at Stony Brook University in Long Island, New York, pursuing a B.S. in Computer Science. My academic background is centered around Java, Python, JavaScript. With a 4.0 GPA, I've developed strong academic and practical skills in Data Structures and Algorithms and Functional and Object-Oriented programming paradigms. I also gained valuable leadership experience during my work with the Department of Information Technology and as the Treasurer of Skateboarding Club at Stony Brook University. Check out more information and details about my involvements below!`,
};

export const CLUB = {
  name: "Skateboarding Club at Stony Brook University",
  description: `I've been a member of the Skateboarding Club at Stony Brook University for almost 2 years now, and throughout my particiaption, I've gained valuable leadership and community experience. During my first semester at Stony Brook, I quickly joined the executive board as the Treasurer, where I helped the skateboarding community grow on campus. In that first semester, we gained official club status after extensive deliberation and negotiations with university administrators. In my role as the Treasurer, I managed a $8,000 budget and helped organize 2 musical community event with over 500 total attendees within the span of 2 weeks. I also helped market the events through numerous social media campaigns, creating thoughtful advertisements and leveraging university resources and connections. Today, we have a growing community of 150+ members and a consistent turnout of around 30 members per meeting!`,
  hook: `Check out some of my promotions for our events! With these edits, we were able to reach over 30,000 combined views!`,
  urls: [
    `https://www.instagram.com/p/C5q-Dr9Jk8I/`,
    `https://www.instagram.com/p/C3VjoWgJkJX/`,
  ],
};
