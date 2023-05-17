import React from 'react'
import { Route, Routes } from 'react-router';
import Routlayout from './pages/Routlayout';

import About from './pages/About';
import Notfound from './pages/Notfound';
import Homepage from './pages/Homepage';
import Contactpage from './pages/Contactpage';


const App = () => {










  return (

    <div>





      <Routes>

        <Route path='/' element={<Routlayout />}>

          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />


          <Route path='Contactpage' element={<Contactpage />} />
          <Route path='*' element={<Notfound />} />




        </Route>
      </Routes>






    </div>
  )
}


export default App