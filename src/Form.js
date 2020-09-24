import React from 'react';

export default function Form({ date, time }) {
  return (
    <div>
      <center>
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
            placeholder="Ex: 'peter.parker@marvel.com'"
          />
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </center>
    </div>
  );
}
