import React from 'react';
import Header from './header.jsx';
import Form from './form.jsx';


function app(){
  return(
    <div>
      <Header />
      <Form />
    </div>
  );
}

// class app extends React.Component {
//   render() {
//     return(
//       Header()
//     );
//   }
// }

export default app;