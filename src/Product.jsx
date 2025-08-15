import "./Product.css";

function Product({ title,price,features=[]}){
    // const list = features.map((feature) => <li>{feature}</li>)
   let styles={ backgroundColor:price >3000 ? "pink" :null };

    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h5>Price:{price}</h5>
           {/* <p>{(features.map((feature) => <li>{feature}</li>))}</p> */}
          {price >3000 ? <p>Discount 5%</p> :<a href="#">Get Discount</a>}
            
        </div>
    );
}
export default Product;