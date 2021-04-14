import React, { useState } from 'react';

const ResultListItem = (props) => {
    const [text, setText] = useState('Save')
    const [bgColor, setBgColor] = useState('')
    const [color, setColor] = useState('')

    const getStyle = () => {
        if (text === "Save") {
            setBgColor("#00E000");
            setColor("white");
            setText("Saved")
        }
        else {
            setBgColor("");
            setColor("");
            setText("Save")
        }
    }

    const onClickFunc = () => {
        props.saveGoogleBook(props)
        getStyle();
    }

    return (
        <div>
            <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                    <img src={props.image} style={{ maxWidth: "100px" }} alt="book" />
                    <h5 className="card-title" style={{ margin: "10px 0" }}>{props.title}</h5>
                    <p className="card-text" >{props.description}</p>
                    <p style={{ fontStyle: "italic" }}>Author(s): {props.authors}</p>
                    <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginRight: "6px" }}>View Book</a>
                    <button onClick={onClickFunc} style={{ backgroundColor: bgColor, color: color }} className="btn">{text}</button>
                </div>
            </div>
        </div>
    )

}

export default ResultListItem