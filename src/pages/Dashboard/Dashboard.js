import React, { useState } from "react";
import { RxCrossCircled } from "react-icons/rx";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValue, setFilterValue] = useState("All");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  // Sample data
  const tableData = [
    {
      SN: 1,
      projectID: "P001",
      projectName: "Project 1",
      quantity: 10,
      methodology: "Method 1",
      location: "Location 1",
      vintage: "2023",
      projectType: "Type 1",
      creditType: "Credit 1",
      registry: "Registry",
    },
    {
      SN: 2,
      projectID: "P002",
      projectName: "Project 2",
      quantity: 20,
      methodology: "Method 2",
      location: "Location 2",
      vintage: "2023",
      projectType: "Type 2",
      creditType: "Credit 2",
      registry: "Registry",
    },
    {
      SN: 3,
      projectID: "P003",
      projectName: "Project 3",
      quantity: 30,
      methodology: "Method 3",
      location: "Location 3",
      vintage: "2023",
      projectType: "Type 3",
      creditType: "Credit 3",
      registry: "Registry",
    },
    {
      SN: 4,
      projectID: "P004",
      projectName: "Project 4",
      quantity: 40,
      methodology: "Method 4",
      location: "Location 4",
      vintage: "2023",
      projectType: "Type 4",
      creditType: "Credit 4",
      registry: "Registry",
    },
    {
      SN: 5,
      projectID: "P005",
      projectName: "Project 5",
      quantity: 50,
      methodology: "Method 5",
      location: "Location 5",
      vintage: "2023",
      projectType: "Type 5",
      creditType: "Credit 5",
      registry: "Registry",
    },
    // Add more data rows here
  ];

  // Filter the data based on search term and filter value
  const filteredData = tableData.filter((row) => {
    return (
      (row.projectID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.projectName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterValue === "All" || row.projectID === filterValue)
    );
  });

  //  ===================== Modal =====================
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    serialNumber: "",
    projectId: "",
    projectName: "",
    quantity: "",
    methodology: "",
    location: "",
    vintage: "",
    projectType: "",
    creditType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here, e.g., send the form data to an API

    // Reset the form after submission
    setFormData({
      serialNumber: "",
      projectId: "",
      projectName: "",
      quantity: "",
      methodology: "",
      location: "",
      vintage: "",
      projectType: "",
      creditType: "",
    });

    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="dashboard-table">
      <div className="bbb-container">
        <div className="table-container">
          <div className="table__heading">
            <h2 className="table__heading--text">Project Data</h2>
          </div>
          <div className="table-section">
            <div className="table-controls">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <select value={filterValue} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="P001">P001</option>
                <option value="P002">P002</option>
                <option value="P003">P003</option>
                <option value="P004">P004</option>
                <option value="P005">P005</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <table>
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Project ID</th>
                  <th>Project Name</th>
                  <th>Quantity</th>
                  <th>Methodology</th>
                  <th>Location</th>
                  <th>Vintage</th>
                  <th>Project Type</th>
                  <th>Credit Type</th>
                  <th>Registry</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.SN}</td>
                    <td>{row.projectID}</td>
                    <td>{row.projectName}</td>
                    <td>{row.quantity}</td>
                    <td>{row.methodology}</td>
                    <td>{row.location}</td>
                    <td>{row.vintage}</td>
                    <td>{row.projectType}</td>
                    <td>{row.creditType}</td>
                    <td>
                      <button
                        className="registry-btn"
                        onClick={() => setShowModal(true)}
                      >
                        {row.registry}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h2 className="registry-heading">Registry Form</h2>
                <div>
                  <RxCrossCircled
                    className="closeBtn"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                <form onSubmit={handleSubmit}>
                  <label>
                    <input
                      type="text"
                      name="serialNumber"
                      placeholder="Serial Number"
                      value={formData.serialNumber}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="projectId"
                      placeholder="Project ID"
                      value={formData.projectId}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="projectName"
                      placeholder="Project Name"
                      value={formData.projectName}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="Quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="methodology"
                      placeholder="Methodology"
                      value={formData.methodology}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="vintage"
                      placeholder="Vintage"
                      value={formData.vintage}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="projectType"
                      placeholder="Project Type"
                      value={formData.projectType}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="creditType"
                      placeholder="Credit Type"
                      value={formData.creditType}
                      onChange={handleInputChange}
                    />
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
