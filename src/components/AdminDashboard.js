import React, {
  useEffect,
  useState,
} from "react";
import axios from "./config/axios";
import moment from "moment";

function AdminDashboard() {
  const [candidates, setCandidates] = useState(
    []
  );
  const [selectedJob, setSelectedJob] = useState(
    "Front-End Developer"
  );
  const [jobTitles, setjobTitles] = useState([
    "Front-End Developer",
    "Node.js Developer",
    "MEAN Stack Developer",
    "Full Stack Developer",
  ]);
  const [viewDetails, setViewDetails] = useState(
    []
  );

  useEffect(async () => {
    const candidateData = await axios.get(
      "/users/application-forms"
    );
    setCandidates(candidateData.data);
  }, []);

  console.log("rgrg", candidates);

  const changeTitle = (title) => {
    setSelectedJob(title);
    // console.log("titl", title);
  };

  const Data = candidates.filter(
    (candidate) =>
      candidate.jobTitle === selectedJob
  );
  console.log("Data", Data);

  const handleViewDetails = async (id) => {
    await axios.get(
      `/users/application-forms/${id}`
    );
    setViewDetails(handleViewDetails.data);
    console.log("view", viewDetails);
  };
  console.log("view", viewDetails);

  const handleStatus = (status, id) => {
    axios.put(`/users/application-form/updat
    e/${id} , {status}
    `);
  };

  return (
    <div>
      {" "}
      <h1>Admin Dashboard</h1>{" "}
      {jobTitles.map((title) => {
        return (
          <button
            onClick={() => {
              changeTitle(title);
              // setjobTitles(title);
            }}
          >
            {title}
          </button>
        );
      })}
      {/* <button
        onClick={() => {
          changeTitle("Front-End Developer");
        }}
      >
        Front-End Developer
      </button>
      <button
        onClick={() => {
          changeTitle("Node.js Developer");
        }}
      >
        Node.js Developer
      </button>
      <button
        onClick={() => {
          changeTitle("MEAN Stack Developer");
        }}
      >
        MEAN Stack Developer
      </button>
      <button
        onClick={() => {
          changeTitle("Full Stack Developer");
        }}
      >
        Full Stack Developer
      </button> */}
      <h1> {selectedJob}</h1>{" "}
      <p>
        List of candidates applied for{" "}
        {selectedJob} job
      </p>
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> Technical Skills{""} </th>
            <th> Experience </th>
            <th> Applied Date </th>
            <th> View Details </th>
            <th> Update Application Status </th>
          </tr>
        </thead>
        <tbody>
          {Data.map((candidate) => {
            return (
              <tr>
                <td>{candidate.name}</td>
                <td>{candidate.skills}</td>
                <td>{candidate.experience}</td>
                <td>
                  {moment(
                    candidate.createdAt
                  ).format("DD/MM/YYYY")}
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleViewDetails(
                        candidate._id
                      );
                    }}
                  >
                    view Details
                  </button>
                </td>
                <td>
                  {candidate.status ==
                  "applied" ? (
                    <div>
                      <button
                        onClick={() => {
                          handleStatus(
                            candidate._id,
                            "shortlisted"
                          );
                        }}
                      >
                        Shortlisted
                      </button>{" "}
                      <button
                        onClick={() => {
                          handleStatus(
                            candidate._id,
                            "reject"
                          );
                        }}
                      >
                        reject
                      </button>
                    </div>
                  ) : (
                    <button>
                      {candidate.status}
                    </button>
                  )}
                </td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default AdminDashboard;
