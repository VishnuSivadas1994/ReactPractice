import React, { Component } from 'react'

export class ClassClick extends Component {

    clickHandler(){
        alert("Button clicked!!")
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        )
    }
}

export default ClassClick
