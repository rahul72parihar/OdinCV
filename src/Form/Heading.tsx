import React from "react";
import "./Heading.css";

function Heading() {
  const [data, setData] = React.useState({
    name: "Rahul Parihar",
    subheading: "CSE Student",
    profile: `My name is Rahul Parihar and I am a B.Tech 4th year student. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit provident dolorum odio ipsam quia mollitia repellat voluptatum maxime? Similique natus eos accusantium architecto laboriosam voluptatum culpa nulla assumenda minima. Eos?`,
  });

  const [isEditing, setIsEditing] = React.useState(false);
  function handleChange(e: any) {
    console.log(e.target.name);
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="heading">
      <h1>{data.name}</h1>
      <h2>{data.subheading}</h2>
      <p>{data.profile}</p>
      <button onClick={() => setIsEditing((prev) => !prev)}>
        {isEditing ? "Close" : "Edit"}
      </button>
      <div className="form-container">
        {isEditing && (
          <div className="data-form">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subheading"
              value={data.subheading}
              onChange={handleChange}
            />
            <textarea
              name="profile"
              value={data.profile}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Heading;
