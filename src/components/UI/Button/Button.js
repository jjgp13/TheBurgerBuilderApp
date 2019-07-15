import React from 'react'
import './Button.css'

const button = (props) => {
    
    const buttonType = props.btnType;

    return (
        <button 
            className={['Button', buttonType].join(' ')}
            onClick={props.clicked}>{props.children}</button>
    )
    
}

export default button