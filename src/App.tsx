import "./App.css"
import ChatBox from "./components/ChatBox";
import NavBar from "./components/NavBar"
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SocketContext, socket } from './core/context/socket';

function App() {

  return (
    <SocketContext.Provider value={socket}>
      <NavBar></NavBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot/:id" element={<ChatBox />} />
          <Route path="/admin" element={<AdminPage />} />

        </Routes>
      </BrowserRouter>
    </ SocketContext.Provider>
  )
}

export default App
