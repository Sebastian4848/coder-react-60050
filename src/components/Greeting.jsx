import React from 'react'

const Greeting = (props) => {
    console.log(props);

  return (
    <>
    <h1>{props.message}</h1>
    <button>Hola!</button>
    </>
  )
}

export default Greeting