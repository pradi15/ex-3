import React from 'react';

function Mobile({name, tool}) {

    return (
      <div>
        <h2>Brand: {name}.</h2>
        <h2>Price: {tool}.</h2>
      </div>
    );

  }
  
  Mobile.defaultProps = {
    name: "Apple",
    tool: "90000"
  }
export default Mobile