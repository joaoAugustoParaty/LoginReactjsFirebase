import React from "react";


import {Routes, Route} from 'react-router-dom';
import Config from './pages/config';
import Home from './pages/Home'


export default   () => {
    return (
       <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/config" element = {<Config />}/>
       </Routes> 
    )
}

