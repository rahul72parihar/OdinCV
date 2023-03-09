import React from "react";
import "./Skills.css";
function Skills() {
  const [skillArray, setSkillArray] = React.useState([
    "jogging",
    "running",
    "studing",
  ]);

  const [isEditting, setIsEditting] = React.useState(false);

  const [skillInput, setSkillInput] = React.useState("");

  function skillsForm() {
    return (
      <>
        {skillArray.map((curr) => {
          return (
            <div className="skill-edit-element">
              {curr}
              <button id="delete-skill-btn" onClick={() => deleteSkill(curr)}>
                🗑️
              </button>
            </div>
          );
        })}
        <input
          type="text"
          id="add-skill-input"
          value={skillInput}
          onChange={handleSkillChange}
          name="newSkill"
        />
        <button onClick={addSkill}>ADD</button>
      </>
    );
  }

  function handleSkillChange(e: any) {
    setSkillInput(e.target.value);
  }

  function addSkill() {
    if (!skillInput) {
      return;
    }

    setSkillArray((prevArray) => {
      return [...prevArray, skillInput];
    });
    setSkillInput("");
  }

  function deleteSkill(toDelete: string) {
    setSkillArray((prevArray) => {
      return prevArray.filter((curr) => {
        return curr !== toDelete;
      });
    });
  }

  return (
    <div className="skills">
      <h3>SKILLS</h3>
      {skillsElement(skillArray)}
      <button onClick={() => setIsEditting((prev) => !prev)}>
        {isEditting ? "CLOSE" : "EDIT"}
      </button>
      {isEditting && <div className="skills-edit">{skillsForm()}</div>}
    </div>
  );
}
function skillsElement(skillArray: string[]) {
  return skillArray.map((curr) => {
    return <h4 key={curr}>{curr}</h4>;
  });
}
export default Skills;
