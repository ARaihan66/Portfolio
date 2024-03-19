import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import GitLink from "./pages/GitLink"


function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/git-link" element={<GitLink/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
     </BrowserRouter>
        
    </>
  )
}

export default App
