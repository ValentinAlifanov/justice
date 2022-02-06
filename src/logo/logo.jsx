import react from 'react';
import './logo.css'

export default function Logo(props) {
    return (
        <div className='logo'>
            <h1>
                <p className='justice' style = {{color:props.color}}>Justice</p>
            </h1>
        </div>
    )
}