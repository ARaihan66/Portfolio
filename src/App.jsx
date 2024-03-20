import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import GitLink from "./pages/GitLink"
import LinkNotAvailable from "./pages/LinkNotAvailable"


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/git-link" element={<GitLink/>}/>
      <Route path="/not-available-link" element={<LinkNotAvailable/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
     </BrowserRouter>
        
    </>
  )
}

export default App
