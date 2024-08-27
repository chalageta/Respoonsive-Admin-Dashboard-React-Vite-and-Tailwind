import React from "react";
import Header from "./Components/Header/Header";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./ui/Main";
import Content from "./ui/Content";
import Profile from "./Components/Profile/Profile";
import Stats from "./Components/Stats/Stats";
import Team from "./Components/Team/Team";
import Event from "./Components/Event/Event";
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div className={`${darkMode && "dark"} font-quickSand`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSideBar={toggleSideBar}
      />
      <Sidebar isSideBarOpen={isSideBarOpen} />
      <Main>
        <Content>
          <Stats darkMode={darkMode} />

          <div className="flex flex-col gap-3 lg:flex-row mt-4">
            <Team />
            <Event />
          </div>
        </Content>
        <Profile />
      </Main>
    </div>
  );
};

export default App;
