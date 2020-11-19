import React from 'react';
import './sass/form.scss';
import JSONPretty from 'react-json-pretty';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      method: '',
      data: {},
    };
  }

  pretty(notprettydata) {
    return <JSONPretty id="json-pretty" data={notprettydata}></JSONPretty>;
  }

  handleClick = (event) => {
    const method = event.target.value;
    this.setState({ method: method });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = event.target.URL.value;
    this.setState({ url: url });
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
    let JSONUrl = JSON.stringify(event.target.URL.value);
    localStorage.setItem('url', JSONUrl);

  }

  render() {
    return (
      <div id="form">
        <h2>Home Page</h2>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>URL</label>
            <input name="URL" type="text" />
            <button type="submit">Go</button>
          </fieldset>
        </form>
        <div id="button">
          <button onClick={this.handleClick} value="Get">Get</button>
          <button onClick={this.handleClick} value="Post">Post</button>
          <button onClick={this.handleClick} value="Put">Put</button>
          <button onClick={this.handleClick} value="Delete">Delete</button>
        </div>
        <div>
          <p>{`Request: ${this.state.method}`}</p>
          <p>{`Url: ${this.state.url}`}</p>
          <p><JSONPretty id="json-pretty" data={this.state.data}></JSONPretty></p>
        </div>
      </div>
    );
  }
}


export default Form;