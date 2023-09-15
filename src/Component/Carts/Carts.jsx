import Cart from "../Cart/Cart";


const Carts = ({carts,credit}) => {
    
    
    return (
       <div className="ml-6 h-[410px] border-4 bg-white w-96 mx-auto" >

            <h3 className="text-2xl font-bold pl-5 pt-6 h-20 text-[#2F80ED]" >Credit Hour Remaining :{20 -credit} hr</h3>
            <hr></hr>
            <h3 className="text-[20px] font-bold pl-5 h-7" >Course Name</h3>

         <div>
          <ol className="list-decimal text-[#1C1B1B99] ml-10">
            
          {
            carts.map(cart=><Cart key={cart.id} cart={cart}></Cart>)
          }
          </ol>
           <hr></hr>
          
        </div>
        <h3 className="text-[20px] font-bold pl-5" >Total Credit Hour : {credit} </h3>
       </div>
    );
};

export default Carts;