import amongus1 from "../assets/amongus1.png";
import amongus2 from "../assets/amongus2.png";
import amongus3 from "../assets/amongus3.png";
import amongus4 from "../assets/amongus4.png";
import bostonfood1 from "../assets/bostonfood1.png";
import bostonfood2 from "../assets/bostonfood2.png";
import dijkstras1 from "../assets/dijkstras1.png";
import dijkstras2 from "../assets/dijkstras2.png";
import dijkstras3 from "../assets/dijkstras3.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import litedoc1 from "../assets/litedoc1.png";
import litedoc2 from "../assets/litedoc2.png";
import liveSubtitles1 from "../assets/live-subtitles1.png";
import liveSubtitles2 from "../assets/live-subtitles2.png";
import obsvis1 from "../assets/obsvis1.png";
import obsvis2 from "../assets/obsvis2.png";
import rogerwangImage from "../assets/rogerwang.png";
import rokutesting1 from "../assets/rokutesting1.png";
import rokutesting2 from "../assets/rokutesting2.png";

export const header = {
  title: "Roger Wang",
  subtitle: "Software Engineer @ Boston",
};

export const summary = {
  picture: rogerwangImage,
};
export const SummaryText = () => {
  return (
    <p>
      <strong>Hey!</strong> 👋
      <br /> I'm <strong>Roger</strong>, currently a software engineer based in
      Boston working on the Verily Workbench research platform.
    </p>
  );
};

export const skills = [
  {
    name: "Languages",
    items: [
      "Javascript",
      "Java",
      "Python",
      "HCL",
      "Golang",
      "SQL",
      "HTML/CSS",
      "Bash",
    ],
  },
  {
    name: "Frameworks and Libraries",
    items: ["React", "Node", "PostgresSQL"],
  },
  {
    name: "Infrastructure",
    items: ["Terraform", "AWS", "Google Cloud"],
  },
];

export const projects = [
  {
    name: "Roku App Testing Framework",
    shortname: "Roku Test Framework",
    subtitle: "Spring 2022 - Discovery Inc.",
    images: [rokutesting1, rokutesting2],
    description:
      "Developed a headless automated testing framework for the Roku platform with fellow engineer Vitaly Tarasov at Discovery. The framework allows for extensive functionality testing suites and remote automated testing.",
    links: [
      {
        name: "See It",
        link: "https://www.linkedin.com/posts/vitaly-tarasov-1137008_my-coworker-roger-wang-and-i-recently-wrote-activity-6907478605467893760--p9M?utm_source=linkedin_share&utm_medium=member_desktop_web",
      },
    ],
  },
  {
    name: "In-Person Among Us",
    subtitle: "Spring 2021  - Boston College",
    images: [amongus1, amongus2, amongus3, amongus4],
    imageFit: "contain",
    description:
      "An ambitious project to bring the fun of Among Us to real life. Using proximity detection by emitting and receiving high frequency sounds and QR code scanning, players can complete tasks, kill, sabotage, and call for meetings. Developed with Flutter along with David Shen for Boston College.",
    links: [
      {
        name: "Source Code",
        link: "https://github.com/rogerwangcs/acf-among-us",
      },
    ],
  },
  {
    name: "Boston Foods Explorer",
    shortname: "Boston Food Explorer",
    subtitle: "Fall 2020",
    images: [bostonfood1, bostonfood2],
    description:
      "For Professor Nam Wook Kim's Visualization course at Boston College. An interactive visualization with drill-down functionality to explore various restaurants in the Greater Boston area and learn more about the nutrition of their menu items. Built with d3",
    links: [
      {
        name: "Source Code",
        link: "https://github.com/rogerwangcs/boston-food-vis",
      },
    ],
  },
  {
    name: "Observation Visualization Tool",
    shortname: "Obs Vis",
    subtitle: "Summer 2020 - NASA Jet Propulsion Lab",
    images: [obsvis1, obsvis2],
    description:
      "This tool interfaces with a database of observed telemetry. It provides a user friendly interface for instrument operators view past observations, note anomalies and errors, as well as generate an anomly report. The tool is developed as part of the MAIA mission. Built with React",
    links: [
      {
        name: "Mission Status",
        link: "https://www.jpl.nasa.gov/missions/multi-angle-imager-for-aerosols-maia",
      },
    ],
  },
  {
    name: "LiteDoc - Distributed Collab Editor",
    shortname: "LiteDoc",
    subtitle: "March 2020 - Percom 2020",
    images: [litedoc1, litedoc2],
    description:
      "Under the guidance of Pr. Lewis Tseng (Boston College), I implementated LiteDoc, a distributed collaborative text editor. LiteDoc proposes a fault tolerant approach to consensus using a set of single write multi read (SWMR) atomic registered to separate different parts of a given document.",
    links: [
      {
        name: "Conference Paper",
        link: "https://ieeexplore.ieee.org/document/9156221",
      },
      {
        name: "Source Code",
        link: "https://github.com/LiteDoc",
      },
    ],
  },
  {
    name: "Dijkstra's Arena",
    subtitle: "Fall 2019",
    images: [dijkstras1, dijkstras2, dijkstras3],
    description:
      "Dijkstra’s Arena is a web browser game aimed to educate players on the basis of Dijkstra’s algorithm and other graph theory shortest path problems in a fun, challenging, and interactive environment.",
    links: [
      {
        name: "See It",
        link: "http://dijkstras-arena.rogerwangcs.com/",
      },
      {
        name: "Source Code",
        link: "https://github.com/rogerwangcs/Dijkstras-Arena",
      },
    ],
  },
  {
    name: "Live Subtitles",
    subtitle: "April 2019 - Hack Dartmouth V",
    images: [liveSubtitles1, liveSubtitles2],
    description:
      "Display what people are saying as they are talking in real time! A quick app built during Hack Dartmouth V. Created by Roger Wang, David Shen, Jerry Han, and Alex Sun using React and Google Chrome's speech-to-text API.",
    links: [
      {
        name: "See It",
        link: "http://live-subtitles.rogerwangcs.com/",
      },
      {
        name: "Devpost",
        link: "https://devpost.com/software/live-subtitles",
      },
      {
        name: "Source Code",
        link: "https://github.com/rogerwangcs/ar-dialogue-subtitles",
      },
    ],
  },
];

export const socials = [
  {
    name: "Github",
    image: github,
    link: "https://github.com/rogerwangcs",
  },
  {
    name: "LinkedIn",
    image: linkedin,
    link: "https://www.linkedin.com/in/rogerwangcs/",
  },
  {
    name: "Email",
    image: gmail,
    link: "mailto:rogerwangcs@gmail.com",
  },
];
