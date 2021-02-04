import React, { PureComponent } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComponent'
import MemoComp from './MemoComponent'

class ParentComp extends PureComponent {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Vishnu'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Vishnu'
            })
        }, 2000)
    }
    
    render() {
        console.log('-----------Parent Component Render------------')
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComp
