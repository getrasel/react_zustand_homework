import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";


export default function App(){
  return(
    <BrowserRouter>
      <div className="bg-slate-200 w-full min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}