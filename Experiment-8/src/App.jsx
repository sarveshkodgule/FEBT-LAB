import UserContext from "./context/UserContext";
import Header from "./components/Header";
import Profile from "./components/Profile";
import "./App.css";

function App() {
  const user = {
    name: "Sarvesh Kodgule",
    branch: "Computer Science & Information Technology"
  };

  return (
    <UserContext.Provider value={user}>
      <div className="app-container">
        <Header />
        <Profile />
      </div>
    </UserContext.Provider>
  );
}

export default App;
