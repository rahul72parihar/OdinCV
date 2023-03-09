import React from "react";
import "./Contact.css";
export default function Contact() {
  const [contactState, setContactState] = React.useState({
    firstLine: "First Line",
    secondLine: "Second Line",
    phone: 9843534543,
    email: "example@gmail.com",
    website: "rahulp.me",
  });
  const [isEditing, setIsEditing] = React.useState(false);
  function handleChange(e: any) {
    setContactState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="contact">
      <div className="contact-info">
        <div>
          <h3>ADDRESS</h3>
          <h4>{contactState.firstLine}</h4>
          <h4>{contactState.secondLine}</h4>
        </div>
        <div>
          <h3>Phone</h3>
          <h4>{contactState.phone}</h4>
        </div>
        <div>
          <h3>Email</h3>
          <h4>{contactState.email}</h4>
        </div>
        <div>
          {contactState.website && <h3>PortFolio</h3>}
          <h4>{contactState.website}</h4>
        </div>
      </div>
      <button
        className="edit-button"
        onClick={() => setIsEditing((prev) => !prev)}
      >
        {isEditing ? "CLOSE" : "EDIT"}
      </button>
      {isEditing && (
        <div className="EditForm">
          <input
            type="text"
            value={contactState.firstLine}
            onChange={handleChange}
            name="firstLine"
          />
          <input
            type="text"
            value={contactState.secondLine}
            onChange={handleChange}
            name="secondLine"
          />
          <input
            type="number"
            value={contactState.phone}
            onChange={handleChange}
            name="phone"
          />
          <input
            type="text"
            value={contactState.email}
            onChange={handleChange}
            name="email"
          />
          <input
            type="text"
            value={contactState.website}
            onChange={handleChange}
            name="website"
          />
        </div>
      )}
    </div>
  );
}
