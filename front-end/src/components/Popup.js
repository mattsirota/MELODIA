import React from "react";
import axios from 'axios';
import './Popup.css';

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
          <div className="row">
            <div className="col-35">
              <label for="name">Name</label>
            </div>
            <div className="col-65">
              <input type="text" id="name" placeholder="Playlist Name..."></input>
            </div>
          </div>
          <div class="row">
            <div className="col-35">
              <label for="description">Description</label>
            </div>
            <div className="col-65">
              <input type="text" id="description" placeholder="Description..."></input>
            </div>
          </div>
          <div class="row">
            <div class="col-35">
              <label for="country">Privacy</label>
            </div>
            <div class="col-65">
              <select id="privacy">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
          <br/>
          <div class="row" margin="auto">
            <input type="submit" id="submit-playlist" value="Submit" onClick={getFormData}/>
          </div>
        </form>
      </div>
    </div>
  );
};

const getFormData = () => {
  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let privacy = document.getElementById('privacy').value;

  document.getElementById('submit-playlist').disabled = 'disabled';

  axios("http://localhost:5000/createPlaylist", {
    method: 'post',
    data: {
      name: name,
      description: description,
      privacy: privacy,
      arr: theList,
      type: type
    },
    withCredentials: true
  })
    .then((response) => {
      window.location.href = "http://localhost:3000/showplaylists";
    })

  //axios.get("http://localhost:5000/showplaylists");
}

export default Popup;
