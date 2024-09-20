import React from "react";
import "./styles.css";

const projects = [
  {
    title: "Study Buddy",
    description:
      "A platform designed to help students find study partners and resources.",
    details: {
      task: "Interactive Quizzes",
      objective:
        "Create a feature that quizzes users after they complete a learning interaction.",
      requirements: [
        "Design a short quiz format (multiple choice or fill-in-the-blank) with 7 questions.",
        "Generate a new 7-question quiz based on the user's mistakes using an LLM.",
        "Provide instant feedback on each quiz answer.",
      ],
      github: "https://github.com/mswger001/study-buddy",
      hosted: "https://nyemwero-study-buddy.netlify.app/",
      demo: "https://www.loom.com/share/aa2d266b5cac4afcadbaf6d3d31a9188",
    },
  },
  {
    title: "Speech Buddy",
    description:
      "An application that assists users in practicing and improving their speech and presentation skills.",
    details: {
      task: "Speech-to-Text and Pronunciation Feedback",
      objective:
        "Build a tool that transcribes speech and provides actionable feedback.",
      requirements: [
        "Integrate a speech-to-text API for real-time transcription.",
        "Offer feedback on pronunciation and fluency.",
      ],
      github: "https://github.com/mswger001/speech-buddy",
      hosted: "https://nyemwero-speech-buddy.netlify.app/",
      demo: "https://www.loom.com/share/aa2d266b5cac4afcadbaf6d3d31a9188",
    },
  },
  {
    title: "Flashcard Buddy",
    description:
      "A tool for creating, managing, and studying flashcards for better retention of information.",
    details: {
      task: "Flashcard Generation",
      objective:
        "Create flashcards based on the user's past mistakes to reinforce learning.",
      requirements: [
        "Automatically generate flashcards from mistakes and new vocabulary.",
        "Implement a spaced repetition algorithm (optional).",
        "Track user progress through flashcards (optional).",
      ],
      github: "https://github.com/mswger001/flashcard-buddy",
      hosted: "https://nyemwero-flashcard-buddy.netlify.app/",
      demo: "https://www.loom.com/share/aa2d266b5cac4afcadbaf6d3d31a9188",
    },
  },
];

function App() {
  return (
    <div className="App">
      <h1>Nyemwero Study Buddy Projects Summary</h1>
      <div className="tile-container">
        {projects.map((project, index) => (
          <div className="tile" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="details">
              <h3>Task: {project.details.task}</h3>
              <p>
                <strong>Objective:</strong> {project.details.objective}
              </p>
              <p>
                <strong>Requirements:</strong>
              </p>
              <ul>
                {project.details.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
              <p>
                <strong>Links:</strong>
              </p>
              <ul>
                <li>
                  <a
                    href={project.details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href={project.details.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo Video
                  </a>
                </li>
                <li>
                  <a
                    href={project.details.hosted}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hosted Project
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
