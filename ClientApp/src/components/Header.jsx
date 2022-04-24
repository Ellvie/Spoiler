import React, { Component } from 'react';

export class Header extends Component {
    static displayName = Header.name;


    render() {
        return (
            <header>
                <p>¡Spoiler!</p>
                <img className="logo" src="" alt="The sites logo."></img>
                <img className="user" src="" alt="User picture"></img>
            </header>
        );
    }
}