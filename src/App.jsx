
import { useEffect, useState } from 'react'
import './App.css'
import Carts from './Component/Carts/Carts'
import Courses from './Component/Courses/Courses'
import Header from './Component/Header/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [carts, setCarts] = useState([]);
  const [credit, setCredit] = useState(0);

  /* course button handler */
  const courseBtnHandler = (newCourse, newCredit) => {


    const totalCredit = credit + newCredit;
    if (totalCredit <= 20) {
      setCredit(totalCredit);

      const totalCourse = [...carts, newCourse];
      setCarts(totalCourse);
      for (const singleCart of carts) {
        console.log(singleCart.id)
        
        if (singleCart.id === newCourse.id) {
          toast('It is added bofore. You cannot add one course twice ');
          setCarts(carts);
          setCredit(credit);
        }



      }



    }
    else {
      toast("Your total credit can't be more than 20");
      setCredit(credit);
    }


  }





  return (
    <>
      <div className='max-w-[1440px] mx-auto'>
        <Header></Header>

        <div className='flex justify-between '>

          <div className='w-2/3 border-4' >
            <Courses courseBtnHandler={courseBtnHandler} ></Courses>
          </div>

          <div className='w-1/3 rounded-xl bg-[#F3F3F3]'>
            <Carts carts={carts} credit={credit} ></Carts>
          </div>


        </div>



      </div>
    </>
  )
}

export default App
