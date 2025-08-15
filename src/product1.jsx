import "./Product.css";
import Price from "./Price";

export default  function Product1({title,idx}){
    let oldPrices =["12,495","12,900","1000","800"];
    let newPrices =["8,999","9,199","899","278"];
    let description =[
        ["8,000 DPI","5 programmble button"],
        ["intuitive surface","fast"],
        ["design for i pad","initutive surface"],
        ["wireless","superd-fast"]
                      ]
    
    return(
    <div className="Product1">
        <h3>{title}</h3>
        <p>{description[idx][0]}</p>
         <p>{description[idx][1]}</p>
        <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
    );
}