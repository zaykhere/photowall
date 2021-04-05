import React from 'react';

const Title= (props) => {
  return(
    <h1> {props.title} </h1>
  )
}

Title.defaultProps={
  title: 'Photowall'
}

export default Title;
