import React, { useState, useEffect } from "react";

const JobsList = () => {
  const [jobs, setJobs] = useState([]);

  async function getJobs() {
    try {
      const data = await fetch(`${process.env.REACT_APP_BASE_URL}/jobs`);
      const result = await data.json();
      return result;
    } catch (error) {
      return error.message;
    }
  }
  useEffect(() => {
    getJobs().then((j) => setJobs(j));
  }, []);
  console.log(jobs);

  return (
    <div>
      {jobs.map(({ title, location, tags }) => (
        <div className="d-flex flex-column my-3">
          <h5>{title}</h5>
          <p>{location}</p>
          <div className="d-flex justify-content-between bottom">
            <div className="d-flex tags">
              {tags.map((tag) => (
                <div className="tag">{tag}</div>
              ))}{" "}
            </div>
            <div className="payment">
              <h5>Payment Verified</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobsList;
