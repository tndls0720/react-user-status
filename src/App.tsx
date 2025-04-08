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
    <div>
      <MyButton onClick={toggleStatus} />
      <UserStatus isOnline={isUserOnline} />
    </div>
  );
}

export default App;