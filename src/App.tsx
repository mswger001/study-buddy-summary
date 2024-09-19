import React from "react";
import "./styles.css";

const sites = [
  {
    title: "Study Buddy",
    description:
      "A platform designed to help students find study partners and resources.",
    url: "https://nyemwero-study-buddy.netlify.app/",
  },
  {
    title: "Speech Buddy",
    description:
      "An application that assists users in practicing and improving their speech and presentation skills.",
    url: "https://nyemwero-speech-buddy.netlify.app/",
  },
  {
    title: "Flashcard Buddy",
    description:
      "A tool for creating, managing, and studying flashcards for better retention of information.",
    url: "https://nyemwero-flashcard-buddy.netlify.app/",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Nyemwero Study Buddy Projects Summary</h1>
      <div className="tile-container">
        {sites.map((site, index) => (
          <div
            className="tile"
            key={index}
            onClick={() => window.open(site.url, "_blank")}
          >
            <h2>{site.title}</h2>
            <p>{site.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
