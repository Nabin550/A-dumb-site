import "./App.css";

import Profile from "./components/avatar/avatar";
import MyButton from "./components/button";
import BasicCard from "./components/card/card";
import PersistentDrawerLeft from "./components/sidenav/sidenav";

function App() {
  return (
    <div>
      <PersistentDrawerLeft />
      <Profile />
      <MyButton />
      <BasicCard />
    </div>
  );
}

export default App;
