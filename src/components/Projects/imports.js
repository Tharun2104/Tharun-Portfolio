// PROJECTS
import AdviceGenerator from "../../assets/images/projects/advice-generator.jpg";
import Cocktails from "../../assets/images/projects/cocktails.jpg";
import Countries from "../../assets/images/projects/countries.jpg";
import EasyBank from "../../assets/images/projects/easybank.jpg";
import EdieHomepage from "../../assets/images/projects/edie-page.jpg";
import GithubGeneratorApp from "../../assets/images/projects/github-generator-app.jpg";
import GPT3 from "../../assets/images/projects/gpt3.jpg";
import Hulu from "../../assets/images/projects/hulu.jpg";
import MovieStar from "../../assets/images/projects/movie-star.png";
import Realtor from "../../assets/images/projects/realtor.jpg";
import Royals from "../../assets/images/projects/royals.jpg";
import Toyota from "../../assets/images/projects/toyota.jpg";

// CERTICIFICATES
import AWS from "../../assets/images/certificate/AWS.png";
import FCC from "../../assets/images/certificate/fcc.jpg";
import Java from "../../assets/images/certificate/Java.png";
import PHP from "../../assets/images/certificate/PHP.jpg";
import Python from "../../assets/images/certificate/Python.png";
import ResponsiveWeb from "../../assets/images/certificate/responsive-webdesign.jpg";
import CryptoInc from "../../assets/images/projects/crypto.jpg";
import FBV2 from "../../assets/images/projects/fb-v2.jpg";
import PGD from "../../assets/images/projects/pgd.jpg";
import PRS from "../../assets/images/projects/PRS.png";
import TCBS from "../../assets/images/projects/TCBS.png";
import SEMA from "../../assets/images/projects/SEMA.png";
import RCA from "../../assets/images/projects/RCA.png";
import AITP from "../../assets/images/projects/AITP.png";
import TN from "../../assets/images/projects/TN.png";
import DPS from "../../assets/images/projects/DPS.png";
import SIM from "../../assets/images/projects/SIM.png";
import CDBS from "../../assets/images/projects/CDBS.png";
import Weatheria from "../../assets/images/projects/weatheria.jpg";

export { AWS, FCC, Java, PHP, Python, ResponsiveWeb };

const ProjectDetails = [
  {
    image: PRS,
    title: "Visual Product Recommendation System",
    text: "An AI-driven product recommendation engine using a fine-tuned ResNet50 and FAISS for real-time visual similarity search, deployed as Flask APIs in Docker on AWS, increasing discovery accuracy by 92% and reducing latency to 500 ms.",
    // site: "https://pokemon-go-dex-pwa4.vercel.app/",
    code: "https://github.com/Tharun2104/Product-Recommendation-Engine-Based-on-Visual-Similarity",
  },
  {
    image: TCBS,
    title: "Ticket Booking System",
    text: "High-throughput Spring Boot booking platform with React/Angular UIs, supporting 10K+ concurrent users, 99.9% uptime, and 40% faster load times through optimized REST APIs and SQL.",
    // site: "https://pokemon-go-dex-pwa4.vercel.app/",
    // code: "https://github.com/Tharun2104/Product-Recommendation-Engine-Based-on-Visual-Similarity",
  },
  {
    image: SEMA,
    title: "Scalable E-Commerce Microservices Platform",
    text: "Spring Boot microservices for product, order, inventory, and notification with MongoDB/MySQL and Keycloak security, Kafka-driven events, Dockerized containers, Kubernetes rolling updates, sub-2-minute CI/CD pipelines, and real-time Prometheus/Grafana monitoring.",
        // site: "https://pokemon-go-dex-pwa4.vercel.app/",
        code: "https://github.com/Tharun2104/ecommerce-microservices-architecture?tab=readme-ov-file",
  },
  {
    image: RCA,
    title: "Real-Time Full Stack Chat Application",
    text: "Secure full-stack chat app with JWT authentication, media sharing, and Socket.IO for sub-500ms real-time messaging at 500+ user scale, containerized with Docker and deployed on AWS EC2/S3, reducing server response times by 40%.",
    site: "https://full-stack-realtime-chat-app-ovyd.onrender.com/",
    code: "https://github.com/Tharun2104/Full-Stack-Realtime-Chat-App",
  },
  {
    image: AITP,
    title: "AI-Powered Travel Planner",
    text: "Built a SaaS AI travel planner with Next.js, Express.js, MongoDB, and OpenAI APIs to auto-generate personalized itineraries—reducing manual planning by 80%—and added expense tracking, email collaboration, and weather-aware suggestions to serve 1K+ users.",
    site: "https://ai-travel-planner.example.com",
    code: "https://github.com/Tharun2104/AI-Powered-Travel-Planner",
  },
  {
    image: TN,
    title: "Transparent Notes App",
    text: "A minimal desktop notes app built with Electron, featuring a semi-transparent window, dark/light theme toggle, live transparency slider, frameless draggable UI, and float-on-top mode inspired by Mac Notes.",
    code: "https://github.com/Tharun2104/transparent-notes-app"
  },
  {
    image: DPS,
    title: "Distributed Pub-Sub System for Ubisoft Game Updates",
    text: "Designed a distributed Pub-Sub system using Python, Kafka, and Docker for real-time Ubisoft game updates, and revamped subscriber management with Flask, MySQL, and rendezvous-based routing to ensure low-latency, high-throughput messaging and scalable delivery.",
    code: "https://github.com/Tharun2104/PUB-SUB-System-with-Apache-Kafka-and-Docker-v1"
  },
  {
    image: SIM,
    title: "Simon Memory Game",
    text: "An interactive memory challenge built with vanilla JavaScript, HTML, and CSS where users replicate increasingly complex color sequences, complete with sound effects and level tracking to test recall skills.",
    site: "https://tharun2104.github.io/simon-game/",
    code: "https://github.com/Tharun2104/simon-game"
  },
  {
    image: CDBS,
    title: "Crime Incident Analysis System",
    text: "A comprehensive relational database framework for Chicago crime data featuring an ER-designed schema, SQL-based querying, indexing optimizations, and a web interface for interactive visualization of trends and patterns.",
    site: "https://your-username.github.io/crime-incident-analysis/",
    code: "https://github.com/your-username/Crime-Incident-Analysis-System"
  },
  {
    image: GPT3,
    title: "GPT3",
    text: "Modern UI UX Website made in React",
    site: "https://gpt3-modern-web.vercel.app/",
    // code: "https://github.com/ErysCode7/gpt3",
  },
  {
    image: Hulu,
    title: "Hulu v2",
    text: "Hulu v2 is a Hulu clone application where you can see list of trending movies different genres etc. Rebuilt using Next.js, TypeScript and Tailwind CSS and the TMDB API.",
    site: "https://hulu-v2-lyart.vercel.app/",
    // code: "https://github.com/ErysCode7/hulu-v2",
  },
  //  {
  //   image: MovieStar,
  //   title: "MovieStar",
  //   text: "Movie Application in ReactJS. Using OMDB API, Redux Toolkit, Routing, Axios with carousel",
  //   site: "https://movie-star-tawny.vercel.app/",
  //   // code: "https://github.com/ErysCode7/movie-star",
  // },
  // {
  //   image: PGD,
  //   title: "Pokémon Go-Dex",
  //   text: "Pokemon Go-Dex a digital web application displays information about the various species of Pokémon. Built with modern design, Next.js, TypeScript, Tailwind CSS, Redux Toolkit Query.",
  //   site: "https://pokemon-go-dex-pwa4.vercel.app/",
  //   code: null,
  // },
  // {
  //   image: FBV2,
  //   title: "FB v2",
  //   text: "FB v2 is a application where you can login, post some data and upload a photo using firebase as a BaaS. Built with Next.js, TypeScript, Tailwind CSS, Next Auth and Firebase.",
  //   site: "http://fb-v2-lemon.vercel.app/",
  //   code: "https://github.com/ErysCode7/fb-v2",
  // },
  // {
  //   image: Hulu,
  //   title: "Hulu v2",
  //   text: "Hulu v2 is a Hulu clone application where you can see list of trending movies different genres etc. Rebuilt using Next.js, TypeScript and Tailwind CSS and the TMDB API.",
  //   site: "https://hulu-v2-lyart.vercel.app/",
  //   code: "https://github.com/ErysCode7/hulu-v2",
  // },
  // {
  //   image: Realtor,
  //   title: "Realtor",
  //   text: "Realtor is Real Estate Application using the Bayut API where you can find different renting properties in Dubai. Built with Next.js, TypeScript, Chakra UI and Bayut API.",
  //   site: "https://realtor-ten-iota.vercel.app/",
  //   code: "https://github.com/ErysCode7/Realtor",
  // },
  // {
  //   image: Weatheria,
  //   title: "Weatheria",
  //   text: "Weatheria a weather application that keep track of the weather around the world. Built using Next.js, TypeScript, Redux Toolkit, TailwindCSS, Chakra UI and the openweather api.",
  //   site: "https://weatheria-taupe.vercel.app/",
  //   code: "https://github.com/ErysCode7/weatheria",
  // },
  // {
  //   image: CryptoInc,
  //   title: "Crypto Incorporated",
  //   text: "A Crypto Application track of all cryptocurrency markets, news and updates about crypto and many more. Built with ReactJS, Ant Design, Redux Toolkit Query and Chart.js.",
  //   site: "https://crypto-incorporated-web.vercel.app/",
  //   code: "https://github.com/ErysCode7/crypto-incorporated",
  // },
  // {
  //   image: MovieStar,
  //   title: "MovieStar",
  //   text: "Movie Application in ReactJS. Using OMDB API, Redux Toolkit, Routing, Axios with carousel",
  //   site: "https://movie-star-tawny.vercel.app/",
  //   code: "https://github.com/ErysCode7/movie-star",
  // },
 
  // {
  //   image: Countries,
  //   title: "Rest Countries API",
  //   text: "REST Countries API with color theme switcher. Built with ReactJS and TailwindCSS",
  //   site: "https://countries-api-black-psi.vercel.app/",
  //   code: "https://github.com/ErysCode7/countries-api",
  // },
  // {
  //   image: Cocktails,
  //   title: "Cocktails app",
  //   text: "Random cocktails application in React JS fetching data from external source. Built with material design, Axios, Context API",
  //   site: "https://cocktails-omega.vercel.app/",
  //   code: "https://github.com/ErysCode7/cocktails",
  // },
  // {
  //   image: AdviceGenerator,
  //   title: "Advice generator App",
  //   text: "Advice Generator App allows the user to see random advice. Built with HTML, CSS, SASS, JavaScript and Advice Slip API.",
  //   site: "https://eryscode7.github.io/advice-generator-app/",
  //   code: "https://github.com/ErysCode7/advice-generator-app",
  // },
  // {
  //   image: EdieHomepage,
  //   title: "Edie homepage",
  //   text: "Landing page made in React JS and Material UI design",
  //   site: "https://edie-landing-page.vercel.app/",
  //   code: "https://github.com/ErysCode7/edie-landing-page",
  // },
  // {
  //   image: Royals,
  //   title: "Royals Landing Page",
  //   text: "Landing Page using JavaScript Intersection Observer API",
  //   site: "https://eryscode7.github.io/royals-landing-page/",
  //   code: "https://github.com/ErysCode7/royals-landing-page",
  // },
  // // {
  // //   image: FrontendDocumentation,
  // //   title: "Frontend Documentation",
  // //   text: "Personal blog Technical Documentation Page",
  // //   site: "https://eryscode7.github.io/frontend-documentation/",
  // //   code: "https://github.com/ErysCode7/frontend-documentation",
  // // },
  // {
  //   image: GithubGeneratorApp,
  //   title: "Github Generator App",
  //   text: "Github user search app using GitHub API",
  //   site: "https://eryscode7.github.io/github-generator-app/",
  //   code: "https://github.com/ErysCode7/github-generator-app",
  // },

  // {
  //   image: EasyBank,
  //   title: "EasyBank landing page",
  //   text: "Frontend Mentor Challenges Landing Page made with HTML, CSS, SASS and JavaScript.",
  //   site: "https://eryscode7.github.io/easybank-landing-page/",
  //   code: "https://github.com/ErysCode7/easybank-landing-page",
  // },
  // {
  //   image: Toyota,
  //   title: "Toyota",
  //   text: "Toyota UI design",
  //   site: "https://eryscode7.github.io/Toyota/",
  //   code: "https://github.com/ErysCode7/Toyota",
  // },
];

export default ProjectDetails;
