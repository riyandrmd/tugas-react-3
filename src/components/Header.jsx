import React from "react"

const Header =()=> {
const name = 'Riyanda Ramadhan'

return (
    <header style={{
        backgroundColor: "green",
        margin : 0,
        padding : 10,
        fontSize : 24,
        color : "white"
    }}>
        <h1>{name}</h1>
    </header>
)

}

export default Header