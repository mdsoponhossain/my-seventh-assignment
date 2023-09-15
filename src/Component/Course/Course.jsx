import { FaRegBookmark } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = ({course,courseBtnHandler}) => {
    
    const {image,title,description,price,credit} = course ;
    return (
       <div className="p-4 w-[310px] h-[400px] mx-auto my-2 rounded-xl  bg-[#FFF] ">
        <div>
            <img className='h-36 ' src={image}/>
            <h3 className="text-[18px] font-semibold mt-4">{title}</h3>
            <h4 className="text-[14px] text-[#1C1B1B99] mt-3">{description}</h4>
        </div>
        <div className="flex gap-3 mt-2" >
            <p className='font-semibold text-[16px] text-[#1C1B1B99]'>$ <span className='ml-3'> price: {price}  </span> </p>
            
            <div className='flex items-center gap-2' >
            <p className='text-2xl ' ><FaRegBookmark /></p>
            <p className='font-semibold text-[16px] text-[#1C1B1B99]'>Credit: {credit} hr</p>
            </div>

        </div>
        <div className='grid justify-center mt-6' > 
        <button onClick={()=>courseBtnHandler(course,credit)} className='w-60 h-10 rounded-lg block bg-[#2F80ED] text-white font-semibold text-[18px]' >Select</button>
        <ToastContainer />
        </div>
       
       </div>
    );
};

export default Course;