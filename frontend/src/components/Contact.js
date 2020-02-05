import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Contact extends Component {


    getSyle = () => {
        return {
            background : '#f4f4f4',
            padding: '3px',
            borderBottom: '1px #ccc dotted'
        }
    }



    render() {
        const { firstName, lastName } = this.props.contact;
        return (
            <div style = {this.getSyle()}>
                <p>
                    <button type="button" style={btnStyle} >x</button>
                    <button style={editBtnStyle}>Edit</button>
                </p>
                    {firstName} {lastName}
                
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

const editBtnStyle = {
    background: 'grey',
    color: 'white',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    padding: '3px',
    float: 'right'
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '3px 11px',
    borderRadius:  '70%',
    cursor: 'pointer',
    float: 'right'
}


export default Contact
