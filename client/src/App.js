import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Landing,Error,ProtectedRoute} from  "./components/index.js"
import {Home,SingleVedio,Channel,Subscription,Library,History,Register,Login} from "./pages/index"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/singleVedio" element={<SingleVedio/>}/>
          <Route path="/channel" element={<Channel/>}/>
          <Route path="/subscription" element={<Subscription/>}/>
          <Route path="/library" element={<Library/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/register" element={<Login/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
