import React, {useState} from "react"

const Filter = ({handleChange}) => {

    return (
        <>
        <select id="ifGreased" onChange={handleChange}>
            <option value="Select">Select</option>
            <option value="Greased">Greased</option>
        </select>
        <select id="ifSort" onChange={handleChange}>
            <option value="sort">Sort By</option>
            <option value="name">name</option>
            <option value="weight">weight</option>
        </select>
        </>
    )
}

export default Filter