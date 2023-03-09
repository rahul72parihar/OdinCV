import React from "react";
import "./Education.css";
function Education() {
  const [data, setData] = React.useState([
    {
      type: "X",
      school: "ABC School",
      startYear: "2013",
      endYear: "2013",
      marks: "90%",
    },
    {
      type: "XII",
      school: "ABC School",
      startYear: "2018",
      endYear: "2019",
      marks: "90%",
    },
  ]);
  const [isEditting, setIsEditting] = React.useState(false);
  const [newEducation, setNewEducation] = React.useState({
    type: "",
    school: "",
    startYear: "",
    endYear: "",
    marks: "",
  });

  function handleChange(e: any) {
    setNewEducation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function deleteEdu(toDelete: string) {
    setData((prevData) => {
      return prevData.filter((curr) => curr.type !== toDelete);
    });
  }

  function addEducation() {
    let isAnyEmpty = false;
    let k: keyof typeof newEducation;
    for (k in newEducation) {
      const value = newEducation[k];
      if (value === "") isAnyEmpty = true;
    }
    if (isAnyEmpty) return;
    setData((prev) => [...prev, newEducation]);
    clearObject();
  }

  function clearObject() {
    setNewEducation({
      type: "",
      school: "",
      startYear: "",
      endYear: "",
      marks: "",
    });
  }

  function renderSingle(obj: any) {
    return (
      <div className="singleEdu">
        <h3>{obj.type}</h3>
        <h4>{obj.school}</h4>
        <h4>
          {obj.startYear}-{obj.endYear}
        </h4>
        <h4>{obj.marks}</h4>
        <button
          id="delete-edu-btn"
          onClick={() => {
            deleteEdu(obj.type);
          }}
        >
          🗑️
        </button>
      </div>
    );
  }

  return (
    <div className="education">
      <h2>EDUCATION</h2>
      {data.map((curr) => renderSingle(curr))}
      <button
        onClick={() => setIsEditting((prev) => !prev)}
        className="edit-education-button"
      >
        Edit
      </button>
      <div>
        {isEditting && (
          <div className="add-education-form">
            <input
              type="text"
              name="type"
              placeholder="Degree Name"
              onChange={handleChange}
              value={newEducation.type}
            />
            <input
              type="text"
              name="school"
              placeholder="Institution"
              onChange={handleChange}
              value={newEducation.school}
            />
            <input
              type="text"
              name="startYear"
              placeholder="StartYear"
              onChange={handleChange}
              value={newEducation.startYear}
            />
            <input
              type="text"
              name="endYear"
              placeholder="EndYear"
              onChange={handleChange}
              value={newEducation.endYear}
            />
            <input
              type="text"
              name="marks"
              placeholder="Marks"
              onChange={handleChange}
              value={newEducation.marks}
            />
            <button onClick={addEducation}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Education;
