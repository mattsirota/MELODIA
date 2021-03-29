import React from 'react';
import '../../App.css';
import NavBar from '../Navbar'
import Tracks from '../Tracks';
import { Button } from '../Button';

  const Popup = props => {
  return (
    <>
      <NavBar />
      <Tracks />
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
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
          <fieldset>
      <button className="btn btn-lg pro" id="submit"
              value="Submit">Create Your Play List</button>
    </fieldset>
      </form>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
</>
  );
};

 
export default Popup;
      