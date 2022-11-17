import React, { Component, useState, useNavigate } from 'react';

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
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('target:',event.target)
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/profile`, {
                method: 'POST',
                body: JSON.stringify({
                    username: event.target.username.value,
                    password: event.target.password.value,
                    name: event.target.name.value,
                    location: event.target.location.value,
                    image: event.target.image.value
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => res.json())
            if(response.status === 401) {
                alert('This user already exists')
                return
            }
            const responseData = await response.json()
            console.log(responseData) 
        } catch(err) {
            console.log(err)
        }
    }   
        


    return(
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Sign Up!</h1>
                <input onChange={handleChangeUsername} type='text' name='username' placeholder='Username'/>
                <input onChange={handleChangePassword} type='text' name='password' placeholder='Password'/>
                <input onChange={handleChangeName} type='text' name='name' placeholder='Name'/>
                <input onChange={handleChangeLocation} type='text' name='location' placeholder='Location'/>
                <input type='text' name='image' placeholder='Image'/>
                <input type='submit' placeholder='Sign Up!'/>
            </form>
        </div>
    )
}

export default Register