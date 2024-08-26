import React from 'react'
import Header from './Components/Header/Header'
import { useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './ui/Main';
import Content from './ui/Content';
import Profile from './Components/Profile/Profile';
const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const toggleDarkMode =() =>{
    setDarkMode(!darkMode);
  }
  const toggleSideBar = ()=>{
    setIsSideBarOpen(!isSideBarOpen);
  }
  return (
   <div className= {`${darkMode && "dark"} font-quickSand`}>
    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} 
    toggleSideBar ={toggleSideBar} />
      <Sidebar isSideBarOpen={isSideBarOpen} />
      <Main >
        <Content>
          Main Content
        </Content>
        <Profile />
        </Main>
   </div>
  )
}

export default App