import "./App.css"
// import ProductTab from "./ProductTab.jsx";
import Product1Tab from "./Product1Tab.jsx";
// import Button from "./Button.jsx";
// import Form from "./Form.jsx";
import Counter from "./Counter.jsx";
// import LikeButton from "./LikeButton.jsx";
// import Thumb from "./Thumb.jsx";


function Description()
{
  return  <h2>Blockbuster Deal Shop Now</h2>
  
}


function App()
 {
  return (
    <div>
    {/* <MsgBox username="iqra" textcolor="blue"/> */}
  
    <Description />
   <Counter />
    {/* <LikeButton />
    <Thumb /> */}
       </div>
    
  ); 

}

export default App
