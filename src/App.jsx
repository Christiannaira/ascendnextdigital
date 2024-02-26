import Mainpage from "./pages/Mainpage";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Casestudies from "./pages/Casestudies";


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>


          <Route path="/" element={<Mainpage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/casestudies" element={<Casestudies />} />


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
