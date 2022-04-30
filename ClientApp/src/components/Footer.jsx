import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    static displayName = Footer.name;


    render() {
        return (
            <footer>
                <div className="">
                    <p>¡Spoiler! © 2022</p>
                </div>
            </footer>
        );
    }
}