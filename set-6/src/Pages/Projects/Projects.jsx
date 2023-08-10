import React, { useEffect, useState } from "react";
import { fakeFetch } from "./data";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  const [singleData, setSingleData] = useState([]);

  const getProjectData = async () => {
    try {
      const { data, status } = await fakeFetch(
        "https://example.com/api/projects"
      );
      if (status === 200) {
        setProjectData(data.projects);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return (
    <div className="container" style={{ padding: "60px", fontSize: "40px" }}>
      <h1>Projects</h1>
      <div className="container1">
        {projectData?.map(({ title, description }) => (
          <div className="item" key={title}>
            <h3>
              <b>Title:</b> {title}
            </h3>
            <p>
              <b>Description:</b> {description}
            </p>
            <button
              style={{ padding: "10px", fontSize: "40px" }}
              onClick={() =>
                setSingleData(
                  projectData.filter((item) => item.title === title)
                )
              }
            >
              Show Details
            </button>
          </div>
        ))}
      </div>
      <div className="container2">
        {singleData?.map(({ title, description, technologies, completed }) => (
          <div className="item2">
            <h3>
              <b>Title:</b> {title}
            </h3>
            <p>
              <b>Description:</b> {description}
            </p>
            <p>Technology: {technologies}</p>
            <p>Completed: {completed ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
