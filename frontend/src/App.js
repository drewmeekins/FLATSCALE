import React, { Component, useState } from 'react';
import ProfileCard from './components/ProfileCard'
import Register from './components/Register';

// import backend from .env
let backendURL = ''
backendURL = `${process.env.REACT_APP_BACKEND_URL}`
// console.log('backend:', backendURL)

// going to use this below if using hooks
const App = () => {
  // setup useState
  const [profile, setProfile] = useState()
  console.log(backendURL)


  const getProfiles = () => {
    fetch(backendURL)
    .then((res) => {
      if(res.status === 200) {
        return res.json()
      }else{
        return[]
      }
    })
    .then((data) => {
      console.log('data', data)
      if(data === []) {
        this.setState({ profiles: data})
      }else{
        this.setState({profiles: data.profiles})
      }
    })
  }

  return(
    <div>
      <h1>Welcome To FLATSCALE!</h1>
      <h3>{backendURL}</h3>
      <h5>{getProfiles}</h5>
      <ProfileCard/>
      <Register />
    </div>
  )
}



export default App