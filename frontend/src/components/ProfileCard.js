import React, { Component, useState, useEffect, createContext, useContext } from 'react'
const ProfileContext = createContext()


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
            <ProfileContext.Provider value={profile}>
                <h1>{profile.password}</h1>
                <h1>Profile</h1>
                <h4>Showing Profile: </h4>
            </ProfileContext.Provider>
        </div>
    )
}

export default ProfileCard