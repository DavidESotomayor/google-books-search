import React from 'react'


export function SubmitBtn(props) {
    return (
        <button {...props} className="btn submitBtn" style={{backgroundColor: "#2196f3", color: "white", marginBottom: "10px"}}>Search</button>
    )
}