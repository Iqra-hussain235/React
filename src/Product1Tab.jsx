import Product1 from "./product1";

export default function Product1Tab(){
    let styles={ 
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
        // backgroundColor:"yellow",
        
        
    };

    return(
    <div className="ProductTab" style={styles}>
       
    <Product1 title="Logitech MX Master 3S" idx={0}  />
    <Product1 title="Logitech MX Master 3S" idx={1}  />
    <Product1 title="Logitech MX Master 3S" idx={2} />
     <Product1 title="Logitech MX Master 3S" idx={3} />
    </div>
    );

}