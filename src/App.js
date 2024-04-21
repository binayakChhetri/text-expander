import { useState } from "react";
import "./app.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        Space travel is the ultimate adventure! Imagine soaring past the stars
        and exploring new worlds. It's the stuff of dreams and science fiction,
        but believe it or not, space travel is a real thing. Humans and robots
        are constantly venturing out into the cosmos to uncover its secrets and
        push the boundaries of what's possible.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        Space missions have given us incredible insights into our universe and
        have inspired future generations to keep reaching for the stars. Space
        travel is a pretty cool thing to think about. Who knows what we'll
        discover next!
      </TextExpander>

      <TextExpander
        buttonColor="gray"
        collapsedNumWords={2}
        backgroundColor="skyblue"
      >
        Hello my name is Binayak chhetri. I'm 21 years old.
      </TextExpander>
    </div>
  );
}

function TextExpander({
  children,
  collapsedNumWords = 5,
  expandButtonText = "Show more ",
  collapseButtonText = "Show less",
  buttonColor = "blue",
  expanded = false,
  className,
  backgroundColor = "white",
}) {
  const [expandText, setExpandText] = useState(expanded);
  function handleExpandText() {
    setExpandText(!expandText);
  }

  // Setting whether to display the full text or not.
  const displayText = expandText
    ? children
    : children?.split(" ").slice(0, collapsedNumWords).join(" ") + "... ";

  const buttonText = expandText ? collapseButtonText : expandButtonText;

  const btnStyle = {
    color: buttonColor,
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
  };

  return (
    <div className={className}>
      <span>{displayText}</span>

      <button style={btnStyle} onClick={handleExpandText}>
        {buttonText}
      </button>
    </div>
  );
}
