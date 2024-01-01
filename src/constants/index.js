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
  teslaweb,
  grocery,
  blog,
  storeapi,
  taskmanager,
  jobsapi,
  unsw,
  windsor,
  buet,
  aws,
  dynamodb,
  lambda,
  ecs,
  s3,
  mysql,
  sass,
  webpack,
  aws_ride,
  webdev,
  mainIconsdark,
} from "../assets";

const firstPage = {
  photo: mainIconsdark,
}


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: mobile,
  },
  {
    title: "Back End Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Dynamo DB",
    icon: dynamodb,
  },
  {
    name: "Lambda",
    icon: lambda,
  },
  {
    name: "ECS",
    icon: ecs,
  },
  {
    name: "S3",
    icon: s3,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Webpack",
    icon: webpack,
  },
];

const experiences = [
  {
    title: "PhD Researcher",
    company_name: "Australian Centre for Space Engineering (ACSER), University of New South Wales (UNSW), Sydney",
    icon: unsw,
    iconBg: "#383E56",
    date: "October 2020 - January 2024",
    points: [
      "Electrical Engineering",
    ],
  },
  {
    title: "Master of Applied Science (M.App.Sc.)",
    company_name: "University of Windsor, Canada",
    icon: windsor,
    iconBg: "#E6DEDD",
    date: "September 2018 - October 2019",
    points: [
      "Electrical Engineering",
    ],
  },
  {
    title: "Bachelor of Science (BSc)",
    company_name: "Bangladesh University of Engineering and Technology (BUET), Bangladesh",
    icon: buet,
    iconBg: "#383E56",
    date: "January 2012 - February 2017",
    points: [
      "Electrical and Electronic Engineering",
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
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tesla Website Clone",
    description:
      "Tesla clone webpage that enables users to look into Tesla car info. It uses React Reveal to animate homepage components and uses useState to open and close Sidebar component. The data management is performed by using createSlice from React Redux.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reveal",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: teslaweb,
    source_code_link: "https://github.com/arifraihan188/tesla-web-clone",
  },
  {
    name: "Grocery List",
    description:
      "Listing application that enables users to add item, search for a item in the listed items, check items and delete items. The CRUD insruction is performed to operate the functionality of the app. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fetchapi",
        color: "green-text-gradient",
      },
      {
        name: "crud",
        color: "pink-text-gradient",
      },
    ],
    image: grocery,
    source_code_link: "https://github.com/arifraihan188/grocery-list",
  },
  {
    name: "Blog",
    description:
      "A blog posting platform that allows users to look into the homepage with feeds of different blog posts and allows user to post a new blog as well as search, update or delete an existing post. The app adopts react router to navigate multiple page components and uses custom hook to handle the window size.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "router",
        color: "green-text-gradient",
      },
      {
        name: "hooks",
        color: "pink-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/arifraihan188/blog-post-web",
  },
  {
    name: "Task Manager",
    description:
      "A task manager platform that allows users to enter new task by sending off the post request as well as delete or edit tasks. The app goal is to setup the api and communicate to the cloud database for persisting the data to the cloud and perform CRUD operation on the data.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloud",
        color: "blue-text-gradient",
      },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/arifraihan188/node-task-manager",
  },
  {
    name: "Store Api",
    description:
      "A store api platform that provides various search options for the users. The app performs advanced filtering, sorting and dynamically populating cloud database using nodejs",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "cloud",
        color: "blue-text-gradient",
      },
    ],
    image: storeapi,
    source_code_link: "https://github.com/arifraihan188/store-api",
  },
  {
    name: "Jobs Api",
    description:
      "A jobs api platform that enables user to log in or register and manage their job search using CRUD operations. The app sets up the api to communicate with cloud database. It uses json web token (jwt) to restrict user access. ",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: jobsapi,
    source_code_link: "https://github.com/arifraihan188/jobs-api",
  },
  {
    name: "Ride Share",
    description:
      "A serverless web application that enables users to request rides. The application will present users with an HTML-based user interface for indicating the location where they would like to be picked up and will interact with a RESTful web service on the backend to submit the request and dispatch a nearby unicorn. The application will also provide facilities for users to register with the service and log in before requesting rides. The application architecture uses AWS Lambda, Amazon API Gateway, Amazon DynamoDB, Amazon Cognito, and AWS Amplify Console. Amplify Console provides continuous deployment and hosting of the static web resources including HTML, CSS, JavaScript, and image files which are loaded in the user's browser. JavaScript executed in the browser sends and receives data from a public backend API built using Lambda and API Gateway. Amazon Cognito provides user management and authentication functions to secure the backend API. Finally, DynamoDB provides a persistence layer where data can be stored by the API's Lambda function.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "dynamodb",
        color: "blue-text-gradient",
      },
      {
        name: "lambda",
        color: "orange-text-gradient",
      },
      {
        name: "amplify",
        color: "orange-text-gradient",
      },
      {
        name: "gateway",
        color: "blue-text-gradient",
      },
    ],
    image: aws_ride,
    source_code_link: "https://aws.amazon.com/getting-started/hands-on/build-serverless-web-app-lambda-apigateway-s3-dynamodb-cognito/",
  },
];

export { services, technologies, experiences, testimonials, projects, firstPage };
