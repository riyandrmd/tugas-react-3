import React from 'react'

const container = {
    margin: "16px 20px",
}

const card = {
    backgroundColor: 'green',
    width: 150,
    borderRadius: 15,
    padding: 10,
    color : "white"
}


const CardProduct = (props) => {
    return (
        <div style={container}>
            <div onClick={() => {
                alert("Product" + props.name + "dengan harga" + props.price + " merupakan product kualitas terbaik")
            }} style={card}>
                <img src={props.src} alt="image.jpg" />
                <div>
                    <h4 style={{
                        fontSize : 16
                    }}>{props.name}</h4>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CardProduct