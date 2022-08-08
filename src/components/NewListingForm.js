import React, { useState } from 'react'

const NewListingForm = ({ onAddListing }) => {
    const [formData, setFormData] = useState({
        description: '',
        image: '',
        location: '',
    })
    const { description, image, location } = formData

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:6001/listings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then((res) => res.json())
        .then((newListing) => onAddListing(newListing))
        formData.description = ''
        formData.image = ''
        formData.location = ''
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>New Listing: </label>
            <input type='text' placeholder='Description' name='description' value={description} onChange={handleChange}/>
            <input type='text' placeholder='Image' name='image' value={image} onChange={handleChange} />
            <input type='text' placeholder='Location' name='location' value={location} onChange={handleChange} />
            <button type='submit'>Add New Listing</button>
            <br />
        </form>
    )
}

export default NewListingForm