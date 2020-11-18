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
    let prettydata = <JSONPretty id="json-pretty" data={notprettydata}></JSONPretty>;
    return prettydata;
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
        </form>
        <div id="button">
          <button onClick={this.handleClick} value="Get">Get</button>
          <button onClick={this.handleClick} value="Post">Post</button>
          <button onClick={this.handleClick} value="Put">Put</button>
          <button onClick={this.handleClick} value="Delete">Delete</button>
        </div>
        <div>
          <textarea name="textbox" rows="10" cols="70" value={`Request:${this.state.method} Url:${this.state.url} Results:${this.pretty(this.state.data)}`}></textarea>
        </div>
      </div>
    );
  }
}


export default Form;