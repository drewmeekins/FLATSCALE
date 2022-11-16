import React, { Component } from 'react';

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }
    
    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    
    const handleChangeLocation = (event) => {
        setLocation(event.target.value)
    }
    
    const handleChangeImage = (event) => {
        setImage(event.target.value)
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
            method: 'POST',
            body: JSON.stringify({
                username: profiles.username,
                password: profiles.password,
                location: profiles.locaiton,
                name: profiles.name,
            })
        })
    }


    return(
        <div>
            <form onSubmit={handleSubmit()}>
                <h1>Sign Up!</h1>
                <input>Name</input>
            </form>
        </div>
    )
}