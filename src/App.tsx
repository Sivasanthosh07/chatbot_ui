import "./App.css"
import ChatBox from "./components/ChatBox";
import NavBar from "./components/NavBar"
import AdminPage from "./pages/adminPage";
import HomePage from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <NavBar></NavBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chatbot/:id" element={<ChatBox />} />
          <Route path="/admin" element={<AdminPage />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
