import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';

class App extends Component{
  render(){
    return(
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Profile" element={<Profile/>} />

          {/* <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} /> */}
        </Routes>
      </div>
    </Router>

    )
  }
}


export default App;
