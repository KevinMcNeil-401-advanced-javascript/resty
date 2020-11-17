import React from 'react';
import './sass/form.scss';


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      method: '',
    };
  }

  handleClick = (event) => {
    const method = event.target.value;
    this.setState({ method: method });
  }
  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>URL</label>
            <input name="URL" type="text" />
            <button type="submit">Go</button>
          </fieldset>
          <div id="button">
            <button onClick={this.hancleClick} value="Get">Get</button>
            <button onClick={this.hancleClick} value="Post">Post</button>
            <button onClick={this.hancleClick} value="Put">Put</button>
            <button onClick={this.hancleClick} value="Delete">Delete</button>
          </div>
          <div onSubmit={this.handleSubmit}>
            <textarea name="textbox" rows="10" cols="70">{this.state.method}</textarea>
          </div>
        </form>
      </div>
    );
  }
}



export default Form;