import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello!'
        }

        //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }
    
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Event Bind-Click</button> */}    {/*THis method is not suitable for large apps*/}
                {/* <button onClick={() => this.clickHandler()}>Event Bind-Click</button> */}
                <button onClick={this.clickHandler}>Event Bind-Click</button>
            </div>
        )
    }
}

export default EventBind
