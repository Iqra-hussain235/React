
export default function Price({oldPrice,newPrice}){
    let oldStyles ={
        textDecorationLine:"line-through",  
    };
    let newStyle ={
        fontWeight:"bold",
    };
    let styles={
        backgroundColor:"red",
        height:"30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        marginTop:"58px",
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    );
}