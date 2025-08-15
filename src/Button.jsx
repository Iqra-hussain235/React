
function printHello(event)
{
    console.log("Hello");
    console.log(event);
}

function para()
{
    console.log("paragraph");
}

function handleDblClick(){
    console.log("work able");
}
export default function Button()
{
    return (
        <div>
            <button onClick={printHello}>clilck me</button>
            <p onMouseOver={para}>Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Atque, animi obcaecati veniam molestias 
                 ipsam ab enim quidem blanditiis fugit aliquid, eveniet numquam 
                 non, suscipit nihil! Praesentium, error? Quae, eos eveniet!</p>
            <button onDoubleClick={handleDblClick}> submit </button>   
        </div>
        

    
    );

}