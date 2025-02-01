import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Chat from "./pages/Chat"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/signup" element={<Home isSignup={true}/>}></Route> */}
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </>
  )
}

export default App
