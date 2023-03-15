import React from "react";
import Contact from "./Contact";
import Skills from "./Skills";
import "./Aside.css";
export default function Aside() {
  return (
    <div className="aside">
      <Contact />
      <Skills />
    </div>
  );
}
