import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export class Contact extends Component {



    
    getStyle = () => {
        return {
            background : 'rgb(36, 2, 49)',
            color: 'yellow',
            padding: '3px',
            borderBottom: '1px #ccc dotted'
        }
    }
    
    delete (id) {
        const userId = window.location.pathname;
        axios.delete('http://localhost:5000/api' + userId,
            {
                "_id":id
            })
            .then(res =>{
                if(res.success){
                    alert("Nice!")
                }
                else alert("NOOO")

            })
    }


    show()
    {
        alert('edit button works')
    }

    deleteContact = (_id) => {
        const body = { _id : _id }
        const userId = window.location.pathname;
        const url = "http://localhost:5000/api" + userId;
        console.log(body)

        axios.delete(url, { data: body })
        .then(res => {
            if(!res.data.success) {
                alert('Deletion error!');
            } else {
                alert('Deleted Successfully!');
            }})
        .catch(err => console.log(err))
    };
         

    render() {
        const { firstName, lastName, _id } = this.props.contact;
        return (
            <div style = {this.getStyle()}>
                <p>
                    <button type="button" style={btnStyle} onClick={() => this.deleteContact(_id)}>x</button>
                    <button style={editBtnStyle} >Edit</button>
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
    background: 'yellow',
    color: 'rgb(36, 2, 49)',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    padding: '3px',
    float: 'right',
    right: '20vh',
    positon: 'relative'
}

const btnStyle = {
    background: '#ff4136',
    color: '#fff',
    border: 'none',
    padding: '3px 11px',
    borderRadius:  '70%',
    cursor: 'solid',
    float: 'right'
}


export default Contact
