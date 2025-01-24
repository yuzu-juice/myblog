import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutRoot from "./Layouts/LayoutRoot";
import HomePage from "./pages";
import NotFoundPage from "./pages/404";
import "./App.css";

function App() {
    return (
        <Router>
            <LayoutRoot>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />{" "}
                </Routes>
            </LayoutRoot>
        </Router>
    );
}

export default App;
