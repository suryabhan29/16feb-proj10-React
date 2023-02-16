// 1.import area

import React, { Component } from 'react'
import Nav from './layouts/Nav'
// class defination
export default class Header extends Component {

    //1. properties


    //2. constructour


    //3. method
    render() {
        return (
            <header>
                <div className='container'>
                    <Nav></Nav>
                </div>
            </header>
        )
    }
}
