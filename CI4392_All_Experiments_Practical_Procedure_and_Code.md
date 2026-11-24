## FULL STACK – BACK END WEB TECHNOLOGY LAB

Practical Procedure & Working Code Booklet

CI4392 | 11 Experiments | Step-by-step implementation, commands, code and testing

## Before you start

Install Node.js (LTS), npm, Visual Studio Code and a web browser. For database experiments, install MongoDB Community Server and MongoDB Compass, or use MongoDB Atlas. For API testing, use Thunder Client or Postman. Keep each experiment in its own folder.

Important: the manual contains examples that are intended for laboratory learning. The JWT example uses a hardcoded demo username, password and secret; do not deploy those values. The REST API sample uses demonstration responses, and the React–Express experiment stores sample students in an array. The MongoDB experiment is the one that demonstrates persistent database storage.

## Common commands

| Command | Purpose |
| --- | --- |
| node -v / npm -v | Check installed versions |
| npm init -y | Create package.json with defaults |
| npm install express | Install Express |
| npm install express mongoose | Install Express and Mongoose |
| npm install express jsonwebtoken | Install JWT dependencies |
| npm install express cors | Install CORS and Express |
| node server.js | Run a Node/Express server |
| npx create-react-app app-name | Create the React project used in the manual |
| npm start | Start the React development server |
| npm run build | Create a production build |


## Experiment 1 – Demonstrate the Use of Node.js

Aim: Install Node.js, execute JavaScript and create and run a simple web application.

Requirements: Node.js LTS, npm, VS Code and a browser.

## Step-by-step procedure

- 1. Visit the official Node.js website and install the LTS version.

- 2. Open Command Prompt or the VS Code terminal and run node -v and npm -v to verify installation.

- 3. Type node to enter the Node.js REPL. Try console.log('Hii'), console.log(65+35) and .help. Exit using .exit or Ctrl+C twice.

- 4. Create a folder named FSWD and open it in VS Code.

- 5. Create server.js and enter the following code.

- 6. Run node server.js. Keep the terminal open while testing the page.

```
server.js
const http = require("http");
const server = http.createServer((req, res) => {
res.write("<h1>Welcome to Node.js Web Application</h1>");
res.write("<p>This page is created using Node.js</p>");
res.write("<p>Date: " + new Date() + "</p>");
res.end();
});
server.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});
```

## Run and test

Terminal: node server.js

Browser: open http://localhost:3000

Expected terminal message: Server running at http://localhost:3000

Expected page: heading, paragraph and current date.

## How it works

- require('http') imports Node's built-in HTTP module.

- createServer() creates the server and provides req and res to the callback.

- res.write() writes the HTML response; res.end() completes it.

- listen(3000) starts listening on port 3000.

## Conclusion

In this experiment, Node.js was installed, JavaScript was executed using the runtime and a simple web application was created with the HTTP module.


## Experiment 2 – Implementation of Express.js

Aim: Use Express.js to create and run a simple web application.

Requirements: Node.js, npm and VS Code.

## Step-by-step procedure

- 1. Create a folder named ExpressLab and open it in VS Code.

- 2. Open the terminal in that folder and run npm init -y.

- 3. Install Express using npm install express.

- 4. Create server.js and write the code below.

- 5. Run node server.js and open the local URL in a browser.

```
server.js
const express = require("express");
const app = express();
app.get("/", (req, res) => {
res.send("<h1>Welcome to Express.js Application</h1>");
});
app.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});
```

## Run and test

Terminal: node server.js

Browser: http://localhost:3000

Expected page: Welcome to Express.js Application.

## How it works

- require('express') imports Express.

- express() creates the application object.

- app.get('/') handles GET requests to the home route.

- res.send() sends the HTML response.

- app.listen() starts the server.

## Conclusion

In this experiment, Express was installed and used to create a simple route and run a web server.


## Experiment 3 – Connecting to MongoDB (CRUD)

Aim: Implement Create, Read, Update and Delete operations using Mongoose, MongoDB, Node.js and Express.

Requirements: Node.js, Express, Mongoose, MongoDB Community Server or Atlas, VS Code and optionally Postman/Compass.

Local MongoDB URI is shown to match the manual. For Atlas, replace it with the Atlas URI. For a robust application, add validation and error handling; the compact lab code is a teaching example.

## Step-by-step procedure

- 1. Start MongoDB Community Server, or prepare a MongoDB Atlas connection URI.

- 2. Create MongoCRUD and open the folder in VS Code.

- 3. Run npm init -y.

- 4. Run npm install express mongoose.

- 5. Create a models folder and create Student.js inside it.

- 6. Add the schema and export the Student model.

- 7. Create server.js, connect to MongoDB and define the four routes.

- 8. Run node server.js. Wait for the MongoDB connection message.

- 9. Use Postman or Thunder Client to send POST, GET, PUT and DELETE requests.

- 10. Open MongoDB Compass and connect to mongodb://127.0.0.1:27017. Inspect studentdb and its students collection.

```
models/Student.js
const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
name: String,
age: Number,
course: String
});
module.exports = mongoose.model("Student", studentSchema);
server.js
const express = require("express");
const mongoose = require("mongoose");
const Student = require("./models/Student");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/studentdb")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
// CREATE
app.post("/students", async (req, res) => {
const student = await Student.create(req.body);
res.json(student);
});
// READ
app.get("/students", async (req, res) => {
const students = await Student.find();
res.json(students);
});
// UPDATE
app.put("/students/:id", async (req, res) => {
const student = await Student.findByIdAndUpdate(
req.params.id,
req.body,
{ new: true }
);
res.json(student);
});
```


```
// DELETE
app.delete("/students/:id", async (req, res) => {
await Student.findByIdAndDelete(req.params.id);
res.send("Student Deleted");
});
app.listen(3000, () => {
console.log("Server Running at http://localhost:3000");
});
```

## Run and test

Start: node server.js

POST http://localhost:3000/students with Body raw JSON: {"name":"Rahul","age":21,"course":"B.Tech"}

GET http://localhost:3000/students to view records.

PUT http://localhost:3000/students/REPLACE_WITH_ID with JSON body, for example {"name":"Rahul Sharma"}.

DELETE http://localhost:3000/students/REPLACE_WITH_ID.

Use the actual _id returned by MongoDB for update and delete. Verify records in Compass.

## How it works

- The schema defines name, age and course.

- The model provides methods to create and query documents.

- mongoose.connect() connects to the database.

- POST creates a document; GET reads documents; PUT updates by ID; DELETE removes by ID.

- async/await is used because database operations are asynchronous.

## Conclusion

In this experiment, the application connected to MongoDB using Mongoose and implemented the four CRUD operations.


## Experiment 4 – Building RESTful APIs

Aim: Create a REST API server using Express and Node.js and test it with Postman or Thunder Client.

Requirements: Node.js, npm, Express and Postman or Thunder Client.

Important: this is the lab manual's demonstration API. It echoes the POST/PUT/DELETE request information and does not perform persistent CRUD. Use Experiment 3 for database-backed CRUD.

## Step-by-step procedure

- 1. Create REST_API_Lab and open it in VS Code.

- 2. Run npm init -y and npm install express.

- 3. Create server.js.

- 4. Add express.json() before defining routes.

- 5. Define the home route and GET, POST, PUT and DELETE routes.

- 6. Run node server.js.

- 7. Open Thunder Client or Postman, create requests and test each method.

```
server.js – in-memory lab example
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
res.send("REST API Server Running");
});
app.get("/students", (req, res) => {
const students = [
{ id: 1, name: "Rahul", branch: "Computer Engineering" },
{ id: 2, name: "Amit", branch: "Information Technology" }
];
res.json(students);
});
app.post("/students", (req, res) => {
const student = req.body;
res.json({
message: "Student Added Successfully",
data: student
});
});
app.put("/students/:id", (req, res) => {
const id = req.params.id;
res.json({
message: "Student Updated Successfully",
studentId: id,
updatedData: req.body
});
});
app.delete("/students/:id", (req, res) => {
const id = req.params.id;
res.json({
message: "Student Deleted Successfully",
studentId: id
});
});
app.listen(3000, () => {
console.log("Server running at http://localhost:3000");
});
```

## Run and test

Start: node server.js


GET http://localhost:3000/students returns sample student JSON.

POST http://localhost:3000/students; Body raw JSON: {"name":"Priya","branch":"IT"}.

PUT http://localhost:3000/students/1; Body raw JSON: {"name":"Rahul Sharma"}.

DELETE http://localhost:3000/students/1.

In Postman choose Body raw JSON for POST and PUT.

## How it works

- app.get(), app.post(), app.put() and app.delete() define endpoints for the four HTTP methods.

- req.body reads submitted JSON; req.params reads the ID from the URL.

- res.json() returns a JSON response.

- The manual's example demonstrates request/response formats; its sample routes do not actually persist or mutate the in-memory student list.

## Conclusion

In this experiment, REST endpoints were created and tested using Postman or Thunder Client.


## Experiment 5 – Integrating React.js

Aim: Create a React application and display reusable components.

Requirements: Node.js, npm, VS Code and a browser.

## Step-by-step procedure

- 1. Open VS Code terminal and run npx create-react-app react-demo.

- 2. Enter the project using cd react-demo.

- 3. Inside src, create a folder named components.

- 4. Create Header.js, StudentCard.js and Footer.js.

- 5. Export each component using export default.

- 6. Import the three components into App.js and render them.

- 7. Run npm start and open http://localhost:3000.

```
src/components/Header.js
function Header() {
return <h1>Student Management System</h1>;
}
export default Header;
src/components/StudentCard.js
function StudentCard() {
return (
<div>
<h3>Name: Rahul</h3>
<p>Branch: Computer Engineering</p>
</div>
);
}
export default StudentCard;
src/components/Footer.js
function Footer() {
return <h4>Backend Web Technology Lab</h4>;
}
export default Footer;
src/App.js
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
function App() {
return (
<div>
<Header />
<StudentCard />
<StudentCard />
<Footer />
</div>
);
}
export default App;
```

## Run and test

## Run: npm start

Open http://localhost:3000.

Expected page: Student Management System heading, two student cards and Backend Web Technology Lab footer.

## How it works

- Each function returns JSX that describes part of the interface.

- The components are imported into App.js and composed together.


• Rendering StudentCard twice demonstrates reuse.

## Conclusion

In this experiment, a React project was created and the interface was divided into reusable components.


## Experiment 6 – User Authentication and Authorization with JWT

Aim: Generate a JWT after successful login and protect an Express route.

Requirements: Node.js, npm, Express, jsonwebtoken, VS Code and Postman/Thunder Client.

Security note: admin/12345 and jwtsecret are lab-only demo values. A production system must hash passwords, store secrets securely, validate claims/permissions and use HTTPS. A common production convention is Authorization: Bearer <token>; this manual's code reads the raw header value.

## Step-by-step procedure

- 1. Create JWT_Authentication and open it in VS Code.

- 2. Run npm init -y.

- 3. Install packages with npm install express jsonwebtoken.

- 4. Create server.js and add the login route.

- 5. Add verifyToken middleware and the protected /profile route.

- 6. Run node server.js.

- 7. POST to /login with the demonstration credentials and copy the returned token.

- 8. GET /profile with an Authorization header containing the token.

- 9. Remove the header and repeat to demonstrate denied access.

```
server.js
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const SECRET_KEY = "jwtsecret";
// Login Route
app.post("/login", (req, res) => {
const username = req.body.username;
const password = req.body.password;
if (username === "admin" && password === "12345") {
const token = jwt.sign(
{ username: username },
SECRET_KEY,
{ expiresIn: "1h" }
);
res.json({
message: "Login Successful",
token: token
});
} else {
res.status(401).json({
message: "Invalid Credentials"
});
}
});
// Authentication Middleware
function verifyToken(req, res, next) {
const token = req.headers.authorization;
if (!token) {
return res.status(403).json({
message: "Access Denied"
});
}
try {
jwt.verify(token, SECRET_KEY);
next();
} catch {
res.status(401).json({
```


```
message: "Invalid Token"
});
}
}
// Protected Route
app.get("/profile", verifyToken, (req, res) => {
res.json({
message: "Welcome to Protected Profile Page"
});
});
app.listen(3000, () => {
console.log("Server running on Port 3000");
});
```

## Run and test

Start: node server.js

POST http://localhost:3000/login; Body raw JSON: {"username":"admin","password":"12345"}.

Copy token from the successful response.

GET http://localhost:3000/profile; Header: Authorization = paste token.

Expected with valid token: Welcome to Protected Profile Page.

Remove Authorization header and send again. Manual's expected response: Access Denied.

Try an invalid token to demonstrate the Invalid Token response.

## How it works

- jwt.sign() creates a signed token containing the username claim and expiry.

- The client sends the token in the Authorization header.

- verifyToken checks for a token and calls jwt.verify().

- next() allows the protected route to run after successful verification.

- The example's token is signed but not encrypted; its payload should not contain secrets.

## Conclusion

In this experiment, JWT login and token verification middleware were used to protect an Express route.


## Experiment 7 – React State Management

Aim: Use local state and React Hooks to build a dynamic student registration form.

Requirements: Node.js, npm, Create React App and VS Code.

## Step-by-step procedure

- 1. Run npx create-react-app react-demo and enter cd react-demo.

- 2. Open src/App.js.

- 3. Import useState from React.

- 4. Create state variables for name, email and branch.

- 5. Bind each input's value to its state and update it using onChange.

- 6. Add a submit handler and call event.preventDefault().

- 7. Run npm start, enter values and demonstrate the live state display.

```
src/App.js
import { useState } from "react";
function App() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [branch, setBranch] = useState("");
const handleSubmit = (event) => {
event.preventDefault();
alert(
"Name: " + name +
"\\nEmail: " + email +
"\\nBranch: " + branch
);
};
return (
<div>
<h1>Student Registration</h1>
<form onSubmit={handleSubmit}>
<label>Name:</label>
<input
value={name}
onChange={(e) => setName(e.target.value)}
/>
<label>Email:</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
<label>Branch:</label>
<select
value={branch}
onChange={(e) => setBranch(e.target.value)}
>
<option value="">Select Branch</option>
<option value="Computer Engineering">Computer Engineering</option>
<option value="Information Technology">Information Technology</option>
<option value="Electronics">Electronics</option>
</select>
<button type="submit">Submit</button>
</form>
<h2>Current State</h2>
<p>Name: {name}</p>
<p>Email: {email}</p>
<p>Branch: {branch}</p>
</div>
);
}
```


export default App;

## Run and test

Run: npm start

Open http://localhost:3000.

Enter a name and email, select a branch, and observe the Current State section update immediately.

Click Submit and confirm the alert displays the entered values.

## How it works

- useState('') creates a state variable with an empty initial value.

- value connects the input to React state; onChange calls the setter.

- The component re-renders when state is updated.

- preventDefault() prevents the browser's normal form submission reload.

## Conclusion

In this experiment, a dynamic student registration form was created using useState and controlled inputs.


## Experiment 8 – Context API in React.js

Aim: Share user information between Header and Profile components using Context API.

Requirements: Node.js, npm, Create React App and VS Code.

## Step-by-step procedure

- 1. Run npx create-react-app context-demo and enter cd context-demo.

- 2. Inside src, create context and components folders.

- 3. Create context/UserContext.js and define the context using createContext().

- 4. Create components/Header.js and components/Profile.js. Use useContext() in each.

- 5. In App.js, create the user object and wrap Header and Profile in UserContext.Provider.

- 6. Run npm start.

- 7. Change the user object in App.js and show that both components display the changed value.

```
src/context/UserContext.js
import { createContext } from "react";
const UserContext = createContext();
export default UserContext;
src/components/Header.js
import { useContext } from "react";
import UserContext from "../context/UserContext";
function Header() {
const user = useContext(UserContext);
return <h2>Welcome, {user.name}</h2>;
}
export default Header;
src/components/Profile.js
import { useContext } from "react";
import UserContext from "../context/UserContext";
function Profile() {
const user = useContext(UserContext);
return (
<div>
<h2>User Profile</h2>
<p>Name: {user.name}</p>
<p>Branch: {user.branch}</p>
</div>
);
}
export default Profile;
src/App.js
import UserContext from "./context/UserContext";
import Header from "./components/Header";
import Profile from "./components/Profile";
function App() {
const user = {
name: "Rahul",
branch: "Computer Engineering"
};
return (
<UserContext.Provider value={user}>
<Header />
<Profile />
</UserContext.Provider>
);
}
```


## Run and test

Run: npm start

Open http://localhost:3000.

Expected output: Welcome, Rahul; User Profile; Name: Rahul; Branch: Computer Engineering.

Change the user object to Priya and Information Technology. Both components should display the changed values after saving.

## How it works

- createContext() creates the shared Context object.

- Provider makes its value available to descendants.

- useContext(UserContext) reads the provided user object.

- Changing the provided value causes consumers to update when React renders the new value.

## Conclusion

In this experiment, Context API was used to share common user information between multiple components.


## Experiment 9 – Data Fetching in React.js

Aim: Fetch data from an external API and display it in a React component.

Requirements: Node.js, npm, Create React App, VS Code, browser and Internet connection.

Fetch does not automatically reject for HTTP error status codes such as 404; a production implementation should also check response.ok and show loading/error states.

## Step-by-step procedure

- 1. Run npx create-react-app data-fetching-demo.

- 2. Enter cd data-fetching-demo.

- 3. Open src/App.js and import useEffect and useState.

- 4. Create users state with an empty array.

- 5. In useEffect, call fetch() with the JSONPlaceholder users endpoint.

- 6. Convert the response to JSON and update users state.

- 7. Use map() to display each user's name, username, email, phone and city.

- 8. Run npm start and check the browser.

```
src/App.js
import { useEffect, useState } from "react";
function App() {
const [users, setUsers] = useState([]);
useEffect(() => {
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => setUsers(data))
.catch(error => console.log("Error:", error));
}, []);
return (
<div>
<h1>User List</h1>
{users.map(user => (
<div key={user.id}>
<h2>{user.name}</h2>
<p>Username: {user.username}</p>
<p>Email: {user.email}</p>
<p>Phone: {user.phone}</p>
<p>City: {user.address.city}</p>
</div>
))}
</div>
);
}
```

*export default App;*

## Run and test

Run: npm start

Open http://localhost:3000.

Expected output: a list of user records returned by JSONPlaceholder.

If the list does not load, check Internet access, browser console and Network tab.

## How it works

- useEffect runs the fetching side effect after the component is rendered.

- fetch() sends the request; response.json() parses the body.

- setUsers(data) stores the received array in React state.


• map() creates a UI element for each user; key={user.id} identifies list items.

## Conclusion

In this experiment, external API data was fetched, stored in state and displayed in a React component.


## Experiment 10 – Integrating React with Express

Aim: Connect a React frontend to an Express backend and display backend data.

Requirements: Node.js, npm, Express, CORS, Create React App, VS Code and browser.

The lab example uses a hardcoded array in Express, not MongoDB. To use persistent records, replace the array with database-backed model queries as in Experiment 3.

## Step-by-step procedure

- 1. Create the main folder React_Express_Integration.

- 2. Inside it create backend. Open a terminal in backend and run npm init -y.

- 3. Install npm install express cors.

- 4. Create backend/server.js and define the sample students array and GET /students route.

- 5. Run node server.js in the backend terminal. Keep it running.

- 6. Open a second terminal at the main project folder and run npx create-react-app frontend.

- 7. Enter frontend and replace src/App.js with the React fetch code.

- 8. Run npm start in the frontend terminal.

- 9. Test the backend endpoint directly before testing the frontend.

```
backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const students = [
{ id: 1, name: "Rahul", branch: "Computer Engineering" },
{ id: 2, name: "Priya", branch: "Information Technology" },
{ id: 3, name: "Amit", branch: "Electronics" }
];
app.get("/students", (req, res) => {
res.json(students);
});
app.listen(5000, () => {
console.log("Backend server running at http://localhost:5000");
});
frontend/src/App.js
import { useEffect, useState } from "react";
function App() {
const [students, setStudents] = useState([]);
useEffect(() => {
fetch("http://localhost:5000/students")
.then(response => response.json())
.then(data => setStudents(data))
.catch(error => console.log("Error:", error));
}, []);
return (
<div>
<h1>Student Management System</h1>
<h2>Student List</h2>
{students.map(student => (
<div key={student.id}>
<h3>{student.name}</h3>
<p>Branch: {student.branch}</p>
</div>
))}
</div>
```


## Run and test

Backend terminal: cd backend then node server.js.

Test backend in browser: http://localhost:5000/students. It should return three student objects as JSON.

Frontend terminal: cd frontend then npm start.

Open http://localhost:3000. Expected output: Rahul, Priya and Amit with their branches.

## How it works

- React runs on port 3000 and Express runs on port 5000 in this manual's example.

- The frontend sends GET /students using fetch().

- Express returns the students array as JSON.

- React stores the response in state and renders the student list.

- CORS middleware permits cross-origin browser access; for production, restrict it to the actual frontend origin.

## Conclusion

In this experiment, the React frontend was connected to an Express backend and displayed data returned by the backend.


## Experiment 11 – Full Stack Application Deployment

Aim: Deploy a full-stack application so that frontend and backend are accessible online.

Requirements: Working React frontend, Express backend, REST APIs, MongoDB or Atlas, Git, GitHub and a cloud hosting account.

Cloud provider dashboards and exact deployment settings can change. Use the provider's current instructions. Never commit secrets, and do not treat placeholder URLs or credentials as real deployment values.

## Step-by-step procedure

- 1. Test the complete application locally. Start the backend and frontend separately; verify API calls and database operations.

- 2. Organise the project into frontend and backend folders. Keep backend routes and models in their respective folders.

- 3. Replace hardcoded localhost API references in the frontend with the deployed backend URL, preferably configured through a frontend environment variable supported by the build tool.

- 4. Prepare MongoDB Atlas or another accessible database and obtain the connection URI.

- 5. Store MONGO_URI and JWT_SECRET as environment variables in the backend hosting service. Keep the local .env file out of public GitHub.

- 6. Initialise Git, commit the project and push it to GitHub.

- 7. Create a backend web service on the chosen cloud platform. Select the repository, set root directory to backend, build command npm install and start command node server.js (adjust to the platform's requirements).

- 8. Add the required environment variables to the backend service and deploy it.

- 9. Test the deployed backend endpoint, for example https://your-backend.example.com/students.

- 10. Configure the frontend deployment using root directory frontend and build command npm run build. Configure the frontend API base URL to the deployed backend.

- 11. Deploy the frontend and open its public URL. Verify that it can communicate with the backend and database.

backend environment file – local example only

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Git commands
git init
git add .
git commit -m "Initial full stack application"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
Backend database connection example
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
Frontend API URL example
fetch("https://your-backend.example.com/students")
.then(response => response.json())
.then(data => setStudents(data))
.catch(error => console.log(error));
```

## Run and test

Verify the local frontend, backend and database before deployment.

Verify the backend public URL directly and inspect its JSON response.

Open the frontend public URL and test the complete workflow.

Check hosting logs, environment variables, CORS configuration and database network permissions if something fails.

## How it works


- The frontend is the user-facing application; the backend exposes API endpoints.

- The backend connects to MongoDB using a server-side environment variable.

- GitHub stores the project source; a hosting provider builds and runs the services.

- localhost is a local machine address and must be replaced by the deployed backend URL for online frontend requests.

- CORS must allow the deployed frontend origin.

## Conclusion

In this experiment, the frontend and backend were deployed separately and connected to the hosted database so the application could be accessed online.


## Final Practical Exam Checklist

- Node and npm versions are installed and verified.

- Each experiment has its own folder and required packages.

- Backend server is running before sending API requests.

- MongoDB is running and the connection URI is correct for Experiment 3.

- Postman/Thunder Client request methods, URLs and JSON bodies are correct.

- React component imports and file paths are correct.

- Both React and Express are running for Experiment 10.

- JWT token is copied correctly into the Authorization header.

- Deployment environment variables and public API URLs are configured.

- I can explain the aim, code, output and conclusion of the experiment.

## Reference note

Prepared from the uploaded CI4392 Full Stack–Back End Web Technology Lab manual (89 pages). The procedures follow its 11-experiment sequence. Explanatory notes flag demo-only or non-persistent sample code so that you can distinguish the manual's exact demonstration from production-grade implementation.
