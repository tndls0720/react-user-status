import "./App.css";
import { MyButton } from "./components/MyButton";
import UserStatus from "./components/UserStatus";
import { useState } from "react";

function App() {
  const [isUserOnline, setIsUserOnline] = useState<boolean>(true);
  const toggleStatus = () => {
    setIsUserOnline((prev) => !prev);
  };

  return (
    <div className="app-container">
      <MyButton onClick={toggleStatus} />
      <div className="status-card">
        <UserStatus isOnline={isUserOnline} />
      </div>
    </div>
  );
}

export default App;