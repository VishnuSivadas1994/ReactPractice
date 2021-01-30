import React from 'react'

function FunctionClick() {

    function clickHandler(){
        alert("click")
    }

    return (
        <div>
            <button onClick={clickHandler}>Clickk</button>
        </div>
    )
}

export default FunctionClick
