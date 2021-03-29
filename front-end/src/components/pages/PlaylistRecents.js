import React from 'react';
import '../../App.css';
import NavBar from '../Navbar'
import Recents from '../RecentTracks';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

  const Popup = props => {
  return (
    <>
      <NavBar />
      <Recents />
    <div className="popup-box">
      <div className="box">
        <form>
        <label>
          <p> Name: </p>
          <input type="text" size="30" placeholder="Name*"/>
          <br/>
          <br/>
          <p> Description: </p>
          <input type="text" size="35" placeholder="Description*"/>
          </label>
          <br/>
          <br/>
          <p> You want your playlist to be </p>
          <select>
            <br/>
          <option value="Public"> Public </option>
          <option value="Private"> Private </option>
          <br/>
          </select>
          <br/>
          <br/>
          
      <button className="btn btn-lg pro" id="submit"
              value="Submit">Create Your Play List</button>
              <br />
              <br />

      
      <Link to='/Recents'><button className="btn btn-lg pro" id="close"
              value="Close"> Close </button></Link>
      </form>
        
      </div>
    </div>
</>
  );
};

 
export default Popup;
      