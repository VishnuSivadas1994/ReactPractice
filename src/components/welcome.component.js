import React from 'react';

// function Welcome(){
//     return <h1>Vii</h1>
// }

// const Welcome = () => <h1>Viii</h1>

class Welcome extends React.Component {

    constructor() {
        super()
        this.state = {
            name: 'Vishnu'
        }
    }

    changeMessage() {
        this.setState({
            name: 'Subscribed!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

// const Welcome = (props) => {
//     return (
//         <div>
//             <h1>Hello, {props.name} aka {props.alias}</h1>
//             {props.children}
//         </div>
//     )
// }

// const Welcome = () => {
//     return React.createElement('div', null, 'ivi')
// }

export default Welcome;