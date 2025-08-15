import Product from "./Product.jsx";


function ProductTab(){
    let features1=[<li>"hi-tech"</li>,<li>"durable"</li>,<li>"fast"</li>];
    
    // let option1={a:"hi-tech",b:"durable",c:"fast"};
    return (
    <>
  <Product title="phone" price={30000} />
  <Product title="laptop" price={40000} />
  <Product title="pen" price={10}/>
    </>
  ); 
}1

export default ProductTab;