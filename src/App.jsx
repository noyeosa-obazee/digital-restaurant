import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Cart from "./components/Cart/Cart";

function App() {
    return (
        <div className="app-wrapper">
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/signup" element={<Signup />} />

                <Route path="/login" element={<Login />} />
                <Route path="/orders" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
