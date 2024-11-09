import React from "react";
import ProfilePage from "./components/ProfilePage";
import { DataContext } from "./components/UserContext";
function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <DataContext.Provider value={userData}>
      <h1>Is it actually working</h1>

      <ProfilePage userData={userData} />
    </DataContext.Provider>
  );
}

export default App;
