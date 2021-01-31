import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
////////////////////This is do something if true or nothing ----- Short Circuit Operator
        return this.state.isLoggedIn && <div>Welcome Vishnu</div>

/////////////////This is ternary operator
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Vishnu</div> :
        //     <div>Welcome Guest</div>
        // )

////////////////////////
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Vishnu</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
//////////////
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>
        //             Welcome Vishnu
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
//////////////////
        // return (
        //     <div>
        //         <div>
        //             Welcome Vishnu..
        //         </div>
        //         <div>
        //             Welcome Guest..
        //         </div>
        //     </div>

        // )
    }
}

export default UserGreeting
