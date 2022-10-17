import "./App.css";
import LandingPage from "./components/screens/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import All from "./components/screens/All";
import Calender from "./components/screens/Calender";
import Note from "./components/screens/Note";
import Chat from "./components/screens/Chat";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/all" element={<All />} />
                    <Route path="/calender" element={<Calender />} />
                    <Route path="/note" element={<Note />} />
                    <Route path="/chat" element={<Chat />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
