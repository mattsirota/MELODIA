import React from 'react';
import '../../App.css';
import NavBar from '../Navbar'
<<<<<<< Updated upstream
import Recommendation from '../Recommendations';
import { Button } from '../Button';


import { Link } from 'react-router-dom';

=======
import Recommendations from '../Recommendations';
import { Button } from '../Button';

>>>>>>> Stashed changes
  const Popup = props => {
  return (
    <>
      <NavBar />
<<<<<<< Updated upstream
      <Recommendation />
    <div className="popup-box">
      <div className="box">
=======
      <Recommendations />
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          
      <button className="btn btn-lg pro" id="submit"
              value="Submit">Create Your Play List</button>
              <br />
              <br />

      
      <Link to='/Recommendations'><button className="btn btn-lg pro" id="close"
              value="Close"> Close </button></Link>
      </form>
        
=======
          <fieldset>
      <button className="btn btn-lg pro" id="submit"
              value="Submit">Create Your Play List</button>
    </fieldset>
      </form>
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
>>>>>>> Stashed changes
      </div>
    </div>
</>
  );
<<<<<<< Updated upstream
};

 
export default Popup;
      
=======
};
>>>>>>> Stashed changes
