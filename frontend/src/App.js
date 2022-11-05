import React, { useState } from 'react';

// import backend from .env
let backendURL = ''
backendURL = `${process.env.REACT_APP_BACKEND_URL}`
// console.log('backend:', backendURL)

const App = () => {
  console.log(backendURL)
  return(
    <div>
      <h1>Welcome To FLATSCALE!</h1>
      <h3>{backendURL}</h3>
    </div>
  )
}

export default App