import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupExample({ date, time }) {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
        <form>
          <label htmlFor="fname">Full name:</label>
          <input type="text" id="fname" name="fname" placeholder="Ex: 'Peter Parker'" />
          <br />
          <br />
          <label htmlFor="lname">Project name:</label>
          <input type="text" id="lname" name="lname" placeholder="Ex: 'Best Project'" />
          <br />
          <br />
          <label htmlFor="lname">Project description:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            maxLength="1000"
            placeholder="Maximum of 1000 characters"
          />
          <br />
          <br />
          <label htmlFor="lname">Email Address:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            maxLength="1000"
            placeholder="peter.parker@marvel.com"
          />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </Popup>
  );
}
