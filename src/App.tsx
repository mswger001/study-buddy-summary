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
      deliverables: [
        "A functioning quiz feature.",
        "A link to the hosted version or instructions to run the project locally.",
        "Source code and documentation explaining design choices.",
        "A short demo video of the system in use.",
      ],
    },
    url: "https://nyemwero-study-buddy.netlify.app/",
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
      deliverables: [
        "A working project that allows users to speak and receive feedback.",
        "A link to the hosted version or instructions to run the project locally.",
        "Source code and documentation explaining the implementation.",
        "A short demo video of the system in use.",
      ],
    },
    url: "https://nyemwero-speech-buddy.netlify.app/",
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
      deliverables: [
        "A working project that generates and displays flashcards.",
        "A link to the hosted version or instructions to run the project locally.",
        "Source code and documentation explaining the approach.",
        "A short demo video of the system in use.",
      ],
    },
    url: "https://nyemwero-flashcard-buddy.netlify.app/",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Nyemwero Study Buddy Projects Summary</h1>
      <div className="tile-container">
        {projects.map((project, index) => (
          <div
            className="tile"
            key={index}
            onClick={() => window.open(project.url, "_blank")}
          >
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
                <strong>Deliverables:</strong>
              </p>
              <ul>
                {project.details.deliverables.map((deliv, j) => (
                  <li key={j}>{deliv}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
