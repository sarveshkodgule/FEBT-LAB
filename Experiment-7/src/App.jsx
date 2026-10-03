import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      "Name: " + name + "\nEmail: " + email + "\nBranch: " + branch
    );
  };

  return (
    <div className="container">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter student name"
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter student email"
        />

        <label>Branch:</label>
        <select
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
        >
          <option value="">Select Branch</option>
          <option value="Computer Science & Information Technology">Computer Science & Information Technology</option>
          <option value="Computer Engineering">Computer Engineering</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics">Electronics</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <hr />
      <h2>Current State</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Branch:</strong> {branch}</p>
    </div>
  );
}

export default App;
