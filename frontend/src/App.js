import React, { Component, useState } from 'react';

// import backend from .env
let backendURL = ''
backendURL = `${process.env.REACT_APP_BACKEND_URL}`
// console.log('backend:', backendURL)

// going to use this below if using hooks
// const App = () => {
//   constructor(props) {
//     super(props)
//     this.state = {
//       profiles: []
//     }
//   }
//   // const [profile, setProfile] = useState(0)
//   console.log(backendURL)


//   const getProfiles = () => {
//     fetch(backendURL + '/profile')
//     .then((res) => {
//       if(res.status === 200) {
//         return res.json()
//       }else{
//         return[]
//       }
//     })
//     .then((data) => {
//       console.log('data', data)
//       if(data === []) {
//         this.setState({ profiles: data})
//       }else{
//         this.setState({profiles: data.profiles})
//       }
//     })
//   }

//   return(
//     <div>
//       <h1>Welcome To FLATSCALE!</h1>
//       <h3>{backendURL}</h3>
//       <h5>{getProfiles()}</h5>
//     </div>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profiles: []
    }
  }
  
  componentDidMount() {
    this.getProfiles()
  }

  getProfiles() {
    fetch(backendURL + '/profile')
    .then((res) => {
      if(res.status === 200) {
        return res.json()
      }else{
        return[]
      }
    })
    .then((data) => {
      console.log('data', data.profiles[0])
      if(data === []) {
        this.setState({ profiles: data})
      }else{
        this.setState({ profiles: data.profiles })
      }
    })
  }

  render() { 
    // {console.log(this.)}
    return (
      <div>
        <h1>Welcome To FLATSCALE!</h1>
        <h3>{backendURL}</h3>
        <h5>{this.state.profiles.username}</h5>
      </div>
    );
  }
}


export default App