import React from 'react';
import './sass/form.scss';


function Form() {
  return (
    <div id="form">
      <form>
        <fieldset>
          <label>URL</label>
          <input name="URL" type="text" />
          <button type="submit">Go</button>
        </fieldset>
      </form>
      <div id="button">
        <button name="Get">Get</button>
        <button name="Post">Post</button>
        <button name="Put">Put</button>
        <button name="Delete">Delete</button>
      </div>
      <div>
        <textarea name="textbox" rows="10" cols="70"></textarea>
      </div>
    </div>
  );
}



export default Form;