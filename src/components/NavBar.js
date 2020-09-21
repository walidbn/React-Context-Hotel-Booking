import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';




export default class NavBar extends Component {
    state={
        isOpen:false
    }
    handelToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                Hello from Navbar
            </nav>
        )
    }
}
