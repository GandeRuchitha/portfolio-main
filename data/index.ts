export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "WorkExperience", link: "#WorkExperience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Relevant Coursework",
    description:
      "Advanced Algorithms\nAutonomous Vehicles\nApp Development\nMachine Learning\nData Mining\nWeb Development\nComputer Networks\nOperating Systems\nDatabase Management\nHuman Computer Interaction",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start pt-5",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "University Clubs",
    description:
      "E-board Career Fair Chair member of WIT (Women in Tech).\nActive member of GDSC (Google Developer Student Clubs).",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building an Application",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's connect",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Medvista - Medical Application",
    des: "Developed a mobile application for medical record-keeping, calorie tracking, and sleep monitoring while integrating health articles from APIs, showcasing strong organizational skills and effective collaboration with stakeholders.",
    techStack: [
      "Kotlin",
      "Database",
      "Google Firebase",
      "Android Studio",
      "Firebase Authentication",
    ],
    link: "/ui.earth.comhttps://github.com/GandeRuchitha/Health_MediCare_Application",
  },
  {
    id: 2,
    title: "Fake News Detection using Machine Learning Algorithms",
    des: "Applied various machine learning algorithms to detect fake news and classify articles, demonstrating expertise in data management and supervised learning.",
    techStack: [
      "Python",
      "Machine Learning",
      "DataMining",
      "Numpy",
      "Pandas",
      "scikit-learn",
      "Matplotlib",
      "Jupyter",
    ],
    link: "https://colab.research.google.com/drive/1oBKNKwxymxdC8NCoJPJi_S-rkXvl84n_?usp=sharing",
  },
  {
    id: 3,
    title: "Smooth Interview – An interview Asst - In progress",
    des: "Developed a mobile application with Flutter and Dart, featuring an AI-powered mock interview tool that customizes questions based on user input for effective interview preparation.",
    techStack: ["Flutter", "Dart", "Andriod Studio", "Google Gemini"],
    link: "",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Analytics Intern",
    desc: "Conducted ETL and data analysis to identify marketing trends and customer behaviors using Excel and Python, leveraging NumPy and pandas for data visualization and modeling, and presented insights to stakeholders for informed decision-making..",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Application Development Associate",
    desc: "Collaborated with Henkel to develop and enhance Python backend applications, improving response time and performance, while also providing exceptional customer service by addressing user concerns. Streamlined incident management and support processes through automation, resulting in significant efficiency gains.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Research Assistant - Robotics",
    desc: "Collaborated with Henkel to develop and enhance Python backend applications, improving response time and performance, while also providing exceptional customer service by addressing user concerns. Streamlined incident management and support processes through automation, resulting in significant efficiency gains.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/GandeRuchitha?tab=repositories", // GitHub link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/gande2", // LinkedIn link
  },
];
