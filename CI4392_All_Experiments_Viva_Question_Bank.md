## FULL STACK – BACK END WEB TECHNOLOGY LAB

Complete Viva Question Bank • 11 Experiments • Additional Technical Interview Questions

Course: CI4392 | B.Tech. Computer Science and Information Technology | Semester VII

## How to use this booklet

Prepare the experiment-specific questions first. Then revise the cross-experiment rapid-fire section, differences, troubleshooting and scenario questions. Answers are intentionally concise enough to speak during a viva; expand them with an example when the examiner asks “why” or “how”.

Source basis: the uploaded 89-page CI4392 lab manual, supplemented with clearly labelled general technical interview questions where useful. Follow your faculty’s prescribed implementation if it differs from a practice example.


## Experiment 1 – Demonstrate the Use of Node.js

## Q. What is Node.js?

Answer: Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript outside a web browser.

## Q. Which JavaScript engine does Node.js use?

Answer: It uses the Chrome V8 JavaScript engine.

## Q. Is Node.js a programming language?

Answer: No. JavaScript is the programming language; Node.js is the runtime environment.

## Q. Why is Node.js used?

Answer: It is used to create backend servers, web applications, APIs, command-line tools and applications that perform file and database operations.

## Q. What is npm?

Answer: npm is the Node Package Manager. It is used to install and manage packages and project dependencies.

## Q. What does node -v do?

Answer: It displays the installed Node.js version.

## Q. What does npm -v do?

Answer: It displays the installed npm version.

## Q. What is the Node.js REPL?

Answer: REPL means Read-Eval-Print Loop. It lets us enter and execute JavaScript statements interactively in the terminal.

## Q. How do you exit the Node REPL?

Answer: Use .exit, Ctrl+C twice, or Ctrl+D.

## Q. What is the http module?

Answer: It is a built-in Node.js module used to create HTTP servers and handle requests and responses.

## Q. What is createServer()?

Answer: It creates an HTTP server and accepts a callback that handles incoming requests.

## Q. What are req and res?

Answer: req contains information about the client request. res is used by the server to send a response.

## Q. What does res.write() do?

Answer: It writes response content to the client.

## Q. What does res.end() do?

Answer: It ends the response and completes the request-response cycle.

## Q. What does server.listen(3000) do?

Answer: It starts the server listening on port 3000.

## Q. What is localhost?

Answer: It refers to the local computer, commonly represented by 127.0.0.1.

## Q. What is a port?

Answer: A port is a logical communication endpoint used by an application on a computer.

## Q. What does npm init do?

Answer: It creates a package.json file and initialises a Node.js project.

## Q. What is package.json?


Answer: It stores project metadata, dependencies and scripts such as the start command.

## Q. What is the difference between Node.js and browser JavaScript?

Answer: Browser JavaScript primarily interacts with web pages; Node.js runs JavaScript outside the browser and provides server-side capabilities.

## Q. What is asynchronous programming?

Answer: It allows a program to continue handling other work while waiting for an operation such as file or network I/O to complete.

## Experiment 2 – Implementation of Express.js

## Q. What is Express.js?

Answer: Express.js is a lightweight web application framework built on Node.js. It simplifies routing, middleware and HTTP request handling.

## Q. Why use Express instead of the built-in HTTP module?

Answer: Express provides convenient routing and middleware and reduces the amount of manual server code.

## Q. How do you install Express?

Answer: Run npm install express in the project folder.

## Q. What does require('express') do?

Answer: It imports the Express package into the file.

## Q. What does express() do?

Answer: It creates an Express application object.

## Q. What is app.get()?

Answer: It defines a route handler for HTTP GET requests.

## Q. What does the '/' route represent?

Answer: It represents the root or home URL of the application.

## Q. What does res.send() do?

Answer: It sends a response such as text or HTML to the client.

## Q. What does app.listen() do?

Answer: It starts the Express server on the specified port.

## Q. What is routing?

Answer: Routing defines how an application responds to a request for a particular URL and HTTP method.

## Q. What is middleware?

Answer: Middleware is a function that runs during the request-response cycle and can process the request, response or pass control onward.

## Q. What is the difference between req and res?

Answer: req represents the incoming request; res represents the outgoing response.

## Q. Can Express connect to MongoDB?

Answer: Yes. A Node.js application can use Mongoose or the MongoDB driver to communicate with MongoDB.

## Q. What happens if a port is already in use?

Answer: The server usually cannot bind to that port and reports an address-in-use error.

## Experiment 3 – Connecting to MongoDB

## Q. What is MongoDB?

Answer: MongoDB is a NoSQL, document-oriented database that stores records as BSON documents in collections.


## Q. What is BSON?

Answer: BSON means Binary JSON. It is the binary-encoded document format used by MongoDB.

## Q. What is Mongoose?

Answer: Mongoose is an Object Data Modeling (ODM) library for Node.js that provides schemas, models and database operation methods.

## Q. What is the difference between MongoDB and Mongoose?

Answer: MongoDB is the database system; Mongoose is a library used by a Node.js application to work with MongoDB.

## Q. What is a schema?

Answer: A schema defines the structure and field types of documents.

## Q. What is a model?

Answer: A model is created from a schema and provides methods for working with a MongoDB collection.

## Q. What is a collection?

Answer: A collection is a group of related documents, similar in broad purpose to a table in a relational database.

## Q. What is a document?

Answer: A document is an individual record stored in a MongoDB collection.

## Q. What is CRUD?

Answer: Create, Read, Update and Delete – the four basic data operations.

## Q. What does mongoose.connect() do?

Answer: It establishes a connection between the Node.js application and MongoDB.

## Q. What does express.json() do?

Answer: It parses incoming JSON request bodies and makes the parsed value available through req.body.

## Q. What does Student.create(req.body) do?

Answer: It creates and saves a new Student document using the supplied request data.

## Q. What does Student.find() do?

Answer: It retrieves documents matching the query; with no filter it retrieves all documents.

## Q. What does findByIdAndUpdate() do?

Answer: It updates a document using its MongoDB ID.

## Q. Why use { new: true } in findByIdAndUpdate()?

Answer: It asks Mongoose to return the updated document rather than the original document.

## Q. What does findByIdAndDelete() do?

Answer: It deletes a document identified by its MongoDB ID.

## Q. Why use async and await?

Answer: They make asynchronous operations easier to read and allow us to wait for a promise within an async function.

## Q. Does MongoDB data disappear when the Node server stops?

Answer: No. Database records are stored persistently; stopping the application server does not normally delete them.

## Q. What is MongoDB Compass?

Answer: It is a graphical interface for connecting to MongoDB and viewing databases, collections and documents.

## Q. What is ObjectId?

Answer: It is MongoDB's commonly used unique identifier type for documents.

## Q. What is the difference between SQL and MongoDB?

Answer: Traditional relational databases organise data into tables and rows; MongoDB organises data into collections and BSON documents.


## Experiment 4 – Building RESTful APIs

## Q. What is an API?

Answer: An Application Programming Interface allows software components or applications to communicate.

## Q. What is REST?

Answer: REST stands for Representational State Transfer. It is an architectural style for designing networked applications.

## Q. What is a RESTful API?

Answer: It is an API designed around resources and standard HTTP methods, commonly returning JSON.

## Q. What are the four HTTP methods used in the experiment?

Answer: GET retrieves data, POST submits or creates data, PUT updates a resource, and DELETE removes a resource.

- Q. What is an endpoint?

Answer: An endpoint is a URL and method combination through which a client accesses a resource or operation.

## Q. What is JSON?

Answer: JavaScript Object Notation is a lightweight data-interchange format.

## Q. What does req.body contain?

Answer: It contains the parsed body data sent by the client, when suitable body-parsing middleware is configured.

## Q. What does req.params contain?

Answer: It contains values captured from named route parameters, such as :id.

## Q. What does res.json() do?

Answer: It sends a JSON response.

## Q. What is Postman?

Answer: Postman is a tool for sending HTTP requests and inspecting API responses.

## Q. What is Thunder Client?

Answer: It is an API testing extension for Visual Studio Code.

## Q. What is an HTTP status code?

Answer: It is a numeric code indicating the result of an HTTP request.

## Q. What do 200 and 201 mean?

Answer: 200 means OK; 201 means Created.

## Q. What do 400, 401, 403 and 404 mean?

Answer: 400 Bad Request; 401 Unauthorized or unauthenticated; 403 Forbidden; 404 Not Found.

## Q. What does 500 mean?

Answer: Internal Server Error.

## Q. What is the difference between PUT and PATCH?

Answer: PUT generally replaces a resource representation; PATCH applies partial modifications.

## Q. What happens if express.json() is missing?

Answer: JSON request bodies may not be parsed, so req.body may be undefined.

## Q. Does the lab manual's in-memory REST API persist data?

Answer: No. The experiment's example returns or handles sample data in application memory; it is not persistent database storage.

## Experiment 5 – Integrating React.js


## Q. What is React.js?

Answer: React is a JavaScript library for building user interfaces.

## Q. Is React frontend or backend?

Answer: React is used for frontend user-interface development.

## Q. What is a component?

Answer: A component is a reusable part of the user interface.

## Q. What is JSX?

Answer: JSX is a JavaScript syntax extension that lets developers write HTML-like markup in JavaScript.

## Q. What is the Virtual DOM?

Answer: It is a lightweight representation of the UI that React uses when determining updates to the actual DOM.

## Q. What is App.js?

Answer: In this lab project it is the main React component.

## Q. What is index.js?

Answer: It is the entry point that mounts the React application.

## Q. What is a reusable component?

Answer: A component that can be rendered in multiple places or contexts rather than duplicating the same UI code.

## Q. What do import and export do?

Answer: import brings a module's functionality into a file; export makes functionality available to other modules.

## Q. What is one-way data flow?

Answer: Data is commonly passed from parent components to child components through props.

## Q. What are props?

Answer: Props are read-only inputs passed to a component.

## Q. Why use components such as Header, StudentCard and Footer?

Answer: They divide the interface into smaller reusable and maintainable parts.

## Q. What does npm start do in a Create React App project?

Answer: It starts the React development server.

## Experiment 6 – User Authentication and Authorization

## Q. What is authentication?

Answer: Authentication verifies the identity of a user – who the user is.

## Q. What is authorization?

Answer: Authorization determines what an authenticated user is permitted to access or do.

## Q. Give an example of authentication and authorization.

Answer: Logging in verifies identity; deciding that an admin can delete records while a student can only view personal data is authorization.

## Q. What is JWT?

Answer: JWT stands for JSON Web Token. It is a compact token format used to transmit claims between parties.

## Q. What happens after successful login in this experiment?

Answer: The server signs a token and sends it to the client.

## Q. What does jwt.sign() do?

Answer: It creates a signed JWT.

## Q. What does jwt.verify() do?


Answer: It verifies a token's signature and validity, including applicable time claims.

## Q. What is middleware in JWT authentication?

Answer: It checks the request's token before allowing the request to continue to a protected route.

## Q. What is a protected route?

Answer: A route that requires an authentication or authorisation check before access is granted.

## Q. What does the Authorization header do?

Answer: It carries authentication credentials, commonly a bearer token, in the HTTP request.

## Q. What does next() do?

Answer: It passes control to the next middleware or route handler.

## Q. What does expiresIn: '1h' mean?

Answer: The token is configured to expire after one hour.

## Q. What happens when no token is sent?

Answer: The middleware rejects the request; the manual's example responds with Access Denied.

## Q. What happens when a token is invalid?

Answer: Verification fails and the request is rejected.

## Q. Is a signed JWT encrypted by default?

Answer: No. A signed JWT provides integrity/authenticity, but its payload is normally readable after decoding. Do not put secrets in it.

## Q. Is the manual's hardcoded username/password suitable for production?

Answer: No. Production applications should store users securely, hash passwords, validate input and protect signing secrets.

## Q. What is the difference between 401 and 403?

Answer: 401 indicates missing or invalid authentication credentials; 403 indicates that access is forbidden.

## Experiment 7 – React State Management

## Q. What is state in React?

Answer: State is data managed by a component that can change while the application runs.

## Q. What is state management?

Answer: It is the process of storing, updating and using changing application data.

## Q. What is a React Hook?

Answer: A Hook is a React function that lets function components use React features.

## Q. What is useState()?

Answer: It is a Hook that adds state to a function component.

## Q. Explain const [name, setName] = useState('').

Answer: name is the current state value, setName updates it, and the empty string is its initial value.

## Q. What does onChange do?

Answer: It handles a change in an input or form control.

## Q. What is event.target.value?

Answer: It reads the current value of the element that triggered the event.

## Q. What does event.preventDefault() do?

Answer: It prevents the browser's default action, such as a normal form submission page reload.

## Q. What is a controlled component?


Answer: A form control whose displayed value is driven by React state.

## Q. What happens when state is updated?

Answer: React schedules a render so the UI can reflect the new state.

## Q. Can a component use multiple useState Hooks?

Answer: Yes. A component can manage multiple independent state variables.

## Q. Can state be changed directly?

Answer: Use the setter function rather than directly mutating state.

## Q. What is the difference between props and state?

Answer: Props are inputs received from a parent; state is data managed by the component or its state mechanism.

## Experiment 8 – Context API in React.js

## Q. What is Context API?

Answer: It is a React feature for sharing values with descendant components without manually passing props through every intermediate component.

## Q. Why do we need Context API?

Answer: It can reduce prop drilling when several components need the same shared information.

## Q. What is prop drilling?

Answer: Passing data through intermediate components that do not themselves need the data.

## Q. What does createContext() do?

Answer: It creates a Context object.

## Q. What is a Provider?

Answer: The Provider supplies a context value to components beneath it in the component tree.

## Q. What is the value prop?

Answer: It contains the value made available through the Provider.

## Q. What does useContext() do?

Answer: It reads the value from the nearest matching Context Provider above the component.

## Q. Give examples of shared state.

Answer: Logged-in user, theme, language, shopping cart and application settings.

## Q. What is local state?

Answer: State used by a particular component.

## Q. What is global or shared state?

Answer: Data that multiple components need to access.

## Q. Can multiple components use the same Context?

Answer: Yes. Descendant components can consume the same provided value.

## Q. What happens outside a Provider?

Answer: A component receives the Context default value, if one was supplied; otherwise the default is undefined.

## Q. Does Context replace useState?

Answer: No. Context shares values; useState can manage changing values that are then provided through Context.

## Q. Is Context suitable for every state value?

Answer: No. It is most useful for values shared across a component tree; local state is better for local concerns.

## Experiment 9 – Data Fetching in React.js


## Q. What is data fetching?

Answer: It is retrieving data from an external source, such as an API, for use in an application.

## Q. What is fetch()?

Answer: It is a browser API for making HTTP requests and receiving responses.

## Q. Why use useEffect() for fetching?

Answer: It runs side-effect logic after rendering, such as requesting data when a component loads.

## Q. Why use useState() with fetched data?

Answer: It stores the received data so React can render it and update the UI when it changes.

## Q. What does an empty dependency array mean?

Answer: The effect is scheduled for the initial mount rather than after every ordinary re-render. Development Strict Mode can perform an additional setup/cleanup check.

## Q. What does response.json() do?

Answer: It reads the response body and parses JSON into a JavaScript value.

## Q. What does map() do?

Answer: It transforms each array element into a new value; React commonly uses it to create a list of elements.

## Q. Why use key={user.id}?

Answer: A stable key helps React identify list items when the list changes.

## Q. What is JSONPlaceholder?

Answer: A public mock REST API used for development and testing.

## Q. What happens if the API request fails?

Answer: Handle the error, for example with catch() or try/catch, and show an appropriate error state.

## Q. What is the difference between Fetch and Axios?

Answer: Fetch is built into modern browsers; Axios is an external HTTP client library with additional conveniences.

## Q. Why not fetch directly in the component body?

Answer: The component body runs during rendering, so doing so can cause repeated requests on each render.

## Q. What is asynchronous fetching?

Answer: The request runs without blocking the main JavaScript thread while waiting for the network response.

## Experiment 10 – Integrating React with Express

## Q. What is full-stack development?

Answer: It is development of both the frontend and backend parts of an application.

## Q. What is the role of React?

Answer: It renders the frontend user interface.

## Q. What is the role of Express?

Answer: It handles backend routes, requests and responses.

## Q. How does React communicate with Express?

Answer: Through HTTP requests to backend API endpoints.

## Q. What is CORS?

Answer: Cross-Origin Resource Sharing is a browser security mechanism controlled by response headers that allows a server to permit selected origins.

## Q. Why is CORS needed in the lab?


Answer: The React development server and Express backend use different ports, so they are different origins. The backend must allow the frontend origin.

## Q. What is localhost:3000 in this experiment?

Answer: It is the React development server address.

## Q. What is localhost:5000?

Answer: It is the Express backend address in the lab example.

## Q. What does app.use(cors()) do?

Answer: It installs CORS middleware. For production, configure allowed origins rather than allowing every origin indiscriminately.

## Q. What happens when the backend is stopped?

Answer: The frontend's request cannot reach the backend and the fetch operation fails.

## Q. What is the difference between Experiment 9 and 10?

Answer: Experiment 9 fetches from an external API; Experiment 10 fetches from the lab's own Express backend.

## Q. Can React connect directly to MongoDB?

Answer: A browser frontend should normally call a backend API; the backend connects to MongoDB so database credentials are not exposed to users.

## Q. Explain the full request flow.

Answer: React renders, useEffect sends fetch request, Express handles the route, Express returns JSON, React stores it in state and renders the data.

## Q. Why use separate ports?

Answer: The frontend and backend are separate development servers and each needs its own listening port.

## Experiment 11 – Full Stack Application Deployment

## Q. What is deployment?

Answer: Deployment makes an application available in an environment where users can access it.

## Q. What is cloud computing?

Answer: It provides computing resources such as servers, storage and databases over a network, commonly the Internet.

## Q. What is hosting?

Answer: Hosting runs an application on a server so users can access it.

## Q. What is Git?

Answer: Git is a distributed version-control system.

## Q. What is GitHub?

Answer: GitHub is a platform for hosting Git repositories and collaborating on software projects.

## Q. What is MongoDB Atlas?

Answer: It is a managed cloud service for MongoDB databases.

## Q. Why use environment variables?

Answer: They keep configuration and sensitive values outside the source code.

## Q. What is a .env file?

Answer: A local configuration file commonly used to define environment variables.

## Q. Why should .env not be uploaded to a public repository?

Answer: It may contain database credentials, API keys or signing secrets.

## Q. What is a production build?


Answer: An optimised build prepared to be served to end users.

## Q. What is frontend deployment?

Answer: Hosting the React application so users can access its interface online.

## Q. What is backend deployment?

Answer: Hosting the Node.js/Express service so it can handle online API requests.

## Q. Why does localhost not work after deployment?

Answer: localhost refers to the machine making the request, not the deployed backend. The frontend must use the public backend URL.

## Q. What is CI/CD?

Answer: Continuous Integration and Continuous Delivery/Deployment automate parts of building, testing and releasing software.

## Q. What is the difference between development and production?

Answer: Development is used to build and test; production is the live environment serving users.

## Q. Why is CORS needed after deployment?

Answer: The frontend and backend may have different domains, so the backend must allow the deployed frontend origin.

## Q. How do you protect a deployed application?

Answer: Use HTTPS, secure password hashing, authentication, input validation, secret management, restrictive CORS and appropriate database permissions.

## Q. What should you check if the deployed database connection fails?

Answer: Check the connection URI, credentials, network allow-list, environment variables and database service status.


## Additional Cross-Experiment Viva & Interview Questions

## Q. What is the difference between Node.js and Express.js?

Answer: Node.js is a JavaScript runtime; Express is a web framework built on Node.js.

## Q. What is the difference between MongoDB and SQL?

Answer: MongoDB stores BSON documents in collections; relational SQL systems store structured records in tables with defined relationships.

## Q. What is the difference between authentication and authorization?

Answer: Authentication verifies identity; authorization determines permissions.

## Q. What is the difference between GET and POST?

Answer: GET requests a representation; POST submits data for processing or resource creation.

## Q. What is the difference between PUT and PATCH?

Answer: PUT generally replaces a resource representation; PATCH applies partial changes.

## Q. What is the difference between 401 and 403?

Answer: 401 means authentication is missing or invalid; 403 means the server refuses access.

## Q. What is the difference between props and state?

Answer: Props are passed into a component; state is managed by the component or its state mechanism.

## Q. What is the difference between useState and useEffect?

Answer: useState manages state; useEffect runs side effects after rendering.

## Q. What is the difference between local and shared state?

Answer: Local state is needed by one component; shared state is needed by multiple components.

## Q. What is the difference between Context API and props?

Answer: Props explicitly pass data down a component path; Context lets descendants read a shared value without manually forwarding it at every level.

## Q. What is the difference between frontend and backend?

Answer: Frontend presents the user interface; backend handles application logic, APIs, authentication and data access.

## Q. What is the difference between Git and GitHub?

Answer: Git is version-control software; GitHub is an online platform for hosting and collaborating on repositories.

## Q. What is the difference between localhost and a public URL?

Answer: localhost points to the local machine; a public URL points to a network-accessible deployed service.

## Q. What is middleware order important in Express?

Answer: Middleware executes in registration order, so parsers, CORS and authentication checks must be placed appropriately before routes that depend on them.

## Q. What is REST resource naming?

Answer: REST APIs commonly use nouns representing resources, such as /students, with HTTP methods indicating operations.

## Q. What is input validation?

Answer: Checking that user-supplied data has the expected type, format, range and required fields before processing.

## Q. Why should passwords be hashed?

Answer: A secure password hash makes stored passwords difficult to recover if the database is exposed. Passwords should not be stored as plain text.

## Q. Why should secrets not be hardcoded?


Answer: Hardcoded secrets can leak through source control or shared code; use environment or secret-management facilities.

## Q. What is an HTTP request-response cycle?

Answer: A client sends a request; the server processes it and returns a response containing a status and optional data.

## Q. What is an environment variable?

Answer: A named configuration value provided to a process from its environment.

## Troubleshooting Viva

## Problem: node is not recognized

Answer: Install Node.js and confirm that its installation directory is available in PATH; reopen the terminal.

## Problem: Cannot find module 'express' or 'mongoose'

Answer: Run npm install for the missing package in the correct project directory.

## Problem: EADDRINUSE / port already in use

Answer: Stop the other process using that port or configure the application to use an available port.

## Problem: MongoDB connection error

Answer: Check whether MongoDB is running, the connection URI is correct, credentials are valid and network access is allowed.

## Problem: req.body is undefined

Answer: Register the correct body parser, such as app.use(express.json()), before the route; send valid JSON with the correct Content-Type.

## Problem: React cannot fetch backend

Answer: Check that the backend is running, URL and port are correct, route exists, CORS permits the frontend origin and there are no network errors.

## Problem: JWT verification fails

Answer: Check that the token is complete, correctly sent, not expired and signed with the same secret/key.

## Problem: React module not found

Answer: Check file name, spelling, relative import path and whether the file exists.

## Problem: Data disappears after server restart

Answer: If the experiment stores data only in an in-memory array, it resets. Use a persistent database for permanent storage.

## Problem: Deployed frontend still calls localhost

Answer: Replace the development API URL with the actual deployed backend URL and redeploy the frontend.

## Scenario-Based Examiner Questions

## Q. The examiner asks you to add a mobile field to Student.

Expected response: Add the field to the Mongoose schema, send it in the JSON request and ensure the UI or API displays it.

## Q. The examiner asks you to change the server port from 3000 to 5000.

Expected response: Change the port passed to app.listen() or server.listen(), restart the server and use the new URL.

## Q. The examiner asks you to add a new route.

Expected response: Choose the HTTP method and resource path, implement the route handler and test it with a client.

## Q. The examiner asks you to protect another endpoint.

Expected response: Attach the token-verification middleware before that endpoint's handler.


## Q. The examiner asks you to show only one student.

Expected response: Use a parameter such as /students/:id and query the database by ID, or filter the sample array.

## Q. The examiner asks you to add a new React component.

Expected response: Create and export the component, import it into the parent and render it in JSX.

## Q. The examiner asks you to display another API field.

Expected response: Read the field from the fetched object and render it in the component.

## Q. The examiner asks you to share user details between Header and Profile.

Expected response: Create a Context, wrap both components in its Provider and read the value with useContext().

## Q. The backend is running but React shows no records.

Expected response: Inspect the browser Network tab and console, test the backend URL directly and check the route, CORS, JSON response and state update.

## Q. The deployed app works locally but not online.

Expected response: Check deployed environment variables, backend URL, CORS, build settings, server logs and database network permissions.

## Final oral-exam checklist

- I can define the main technology used in each experiment.

- I can explain the aim and the role of every important file.

- I can explain the main methods and functions used in the code.

- I can identify the request method, URL, body and expected response.

- I can explain how the frontend, backend and database communicate.

- I can test the output and describe what success looks like.

- I can identify common errors and explain how I would troubleshoot them.

I understand that the manual's demo credentials and permissive examples are for lab practice, not production

security.
