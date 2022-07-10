import React from 'react';
import '../styles/QuickNote.css';
function QuickNote(props) {
    return (
        <div className='container-quicknote'>
            <p>Username: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    )
}

export default QuickNote;