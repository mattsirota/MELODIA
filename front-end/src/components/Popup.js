import React from "react";
import axios from 'axios';

let theList = [];
let type = "";
function Popup(props) {
    theList = props.theList;
    type = props.type;
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <form>
        <label>
          <p> Name: </p>
          <input type="text" id="name" size="30" placeholder="Name*"/>
          <br/>
          <br/>
          <p> Description: </p>
          <input type="text" id="description" size="35" placeholder="Description*"/>
        </label>
        <br/>
        <br/>
        <p> Privacy Setting: </p>
        <select id="privacy">
            <option value="Public"> Public </option>
            <option value="Private"> Private </option>
        </select>
        <br/>
        <br/>
       
      <input class="submit-playlist" type="button" id="submit-playlist" value="Submit" onClick={getFormData}/>
        <br/>
        <br />
      </form>
      </div>
    </div>
  );
};

const getFormData = () =>{
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let privacy = document.getElementById('privacy').value;

    document.getElementById('submit-playlist').disabled = 'disabled';

    axios.post("http://localhost:5000/createPlaylist", {
        name: name,
        description: description,
        privacy: privacy,
        arr: theList,
        type: type
    })
    .then((response) => {
      window.location.href = "http://localhost:3000/showplaylists";
    })

    //axios.get("http://localhost:5000/showplaylists");
}
 
export default Popup;