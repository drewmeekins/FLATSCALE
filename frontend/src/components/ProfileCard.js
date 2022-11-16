import React, { Component, useState, useEffect } from 'react'


const ProfileCard = () => {
    const[profile, setProfile] = useState({})

    useEffect(() => {
        const getProfiles = () => {
            const profiles = fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                } 
            })
            .then((res) => res.json())
            .then(profile => setProfile(profile.profiles))
            .then((resJson) => {
                console.log(profile)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        getProfiles()
    }, [])
    
    return(
        <div>
            <h1>{profile[0].password}</h1>
            <h1>Profile</h1>
            <h4>Showing Profile: </h4>
        </div>
    )
}

export default ProfileCard