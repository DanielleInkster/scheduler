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
          <label htmlFor="projname">Project name:</label>
          <input type="text" id="projname" name="projname" placeholder="Ex: 'Best Project'" />
          <br />
          <br />
          <label htmlFor="projdesc">Project description:</label>
          <input
            type="text"
            id="projdesc"
            name="projdesc"
            maxLength="1000"
            placeholder="Maximum of 1000 characters"
          />
          <br />
          <br />
          <label htmlFor="email">Email Address:</label>
          <input type="text" id="email" name="email" placeholder="Ex: 'peter.parker@marvel.com'" />
          <br />
          <br />
          <input type="submit" value="Submit"></input>
        </form>
      </center>
    </div>
  );
}
