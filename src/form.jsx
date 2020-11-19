import React from 'react';
import './sass/form.scss';
import JSONPretty from 'react-json-pretty';

let historyArray = [];


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      url: '',
      method: '',
      data: {},
      prevous: '',
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
    localStorage.setItem(event.target.URL.value, JSONUrl);
    for (let i = 0; i < historyArray.length; i++) {
      if (url === historyArray[i]) {
        console.log('already in history');
      } else {
        historyArray.push(url);
      }
    }

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
          <p>{`Request: ${this.state.method}`}</p>
          <p>{`Url: ${this.state.url}`}</p>
          <p><JSONPretty id="json-pretty" data={this.state.data}></JSONPretty></p>
          <p>History:</p>
          <ul>
            <li>{historyArray[0]}</li>
            <li>{historyArray[1]}</li>
            <li>{historyArray[2]}</li>
            <li>{historyArray[3]}</li>
            <li>{historyArray[4]}</li>
            <li>{historyArray[5]}</li>
            <li>{historyArray[6]}</li>
            <li>{historyArray[7]}</li>
            <li>{historyArray[8]}</li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Form;