import React from 'react';

let historyArray = [];

function History() {
  var url = JSON.parse(localStorage.getItem('url'));
  historyArray.push(url);
  console.log(historyArray);
  return (
    <div>
      <h2>History Page</h2>
      <div id="savedSearch">
        <ul>
          {historyArray.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>

      </div>
    </div>
  );
}

export default History;