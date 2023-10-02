import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Film } from "./pages/Film/Film";
import { Karakterer } from "./pages/Karakterer/Karakterer";
import { Section1 } from "./pages/Section1/Section1";
import { MainLayout } from "./layout/MainLayout";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Section1 />} />
          <Route path='/film' element={<Film />} />
          <Route path='/karakterer' element={<Karakterer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
