#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

const newline = "\n";

const heading = chalk.bold.green("Saurav Kumar");
const contact = [
  "P: +91 91445-82802",
  "Email: mr.sk292000@gmail.com",
  "GitHub: https://github.com/Saurav-gitus/",
  "LinkedIn: https://www.linkedin.com/in/saurav-kumar-697b95258/",
  "HackerRank: https://www.hackerrank.com/profile/mr_sk292000",
].join(" | ");

const skills = `
${chalk.bold.underline("TECHNICAL SKILLS")}
• Languages: HTML, CSS, JavaScript, Java, Android Studio, C/C++, Python
• Frameworks: React.js, Tailwind CSS
• Database & Management: MySQL, MongoDB, PostgreSQL, Firebase
• API & Testing: RESTful API integration
• Developer Tools: Git (version control), Jira, Jenkins, (Basic) Docker & Linux Commands
• Methodologies: Agile/SCRUM, Unit Testing (e.g., Jest/Mocha)
`;

const experience = `
${chalk.bold.underline("WORK EXPERIENCE")}
${chalk.bold("DORTEX AI PVT LTD")}
Full Stack Developer | Sept 2024 – Feb 2025
• Implemented user-friendly UI/UX designs contributing to 30% increase in user engagement.
• Developed REST APIs using JWT, OAuth2, role-based authorization; managed PostgreSQL databases efficiently.
• Utilized Docker to containerize applications and streamline deployment processes.
`;

const projects = `
${chalk.bold.underline("PROJECTS")}

${chalk.bold(
  "Dynamic Multi-Factor Authentication"
)} (Minor) | Sept 2023 – Dec 2023
Technology Stack: Android Studio Giraffe | Firebase
• Implemented secure OTP system reducing unauthorized access by 40%.
• Streamlined email verification, reducing bounced emails by 30% and improving data accuracy by 25%.
• Personalized PIN system increasing user authentication security by 15%.

${chalk.bold("ChatBook")} (Major) | Dec 2018 – Feb 2019
Technology Stack: Apache NetBeans IDE | MySQL
• Enabled user content posting fostering community engagement.
• Added commenting and photo liking features to enhance interaction.
• Facilitated seamless chat capabilities for communication among friends.
`;

const education = `
${chalk.bold.underline("EDUCATION")}

${chalk.bold("Master of Computer Application")} | Chandigarh University, Mohali
August 2022 – May 2024 | CGPA: 7.20

${chalk.bold(
  "Bachelor of Computer Application"
)} | Hemchand Yadav Vishwavidyalaya, Durg (C.G)
August 2018 – May 2021 | Percentage: 77.33%
`;

const resumeContent = [
  heading,
  contact,
  skills,
  experience,
  projects,
  education,
].join(newline.repeat(2));

const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "green",
};

console.log(boxen(resumeContent, boxenOptions));
