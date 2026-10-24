import Navbar from "./Navbar.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter basename="/">
    {/* Basename is the router where our application first open */}
    <Routes>
      <Route path="/" element={<div><h1>Home</h1><p>Welcome to the home page</p></div>} />
      <Route path="/login" element={<div><h1>Login</h1><p>This is the login page</p></div >} />
    </Routes>
    </BrowserRouter>
    <Navbar />
    {/* <h1 className="m-4 text-4xl font-bold">hello world</h1>
    <button class="btn w-64 rounded-full">Button</button> */}
    </>
  )
}

export default App
