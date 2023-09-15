import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = ({courseBtnHandler}) => {
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('CourseData.json')
        .then(res=>res.json())
        .then(data=>setCourses(data));
    },[]);
    return (
        <div>
            
            <div className="grid grid-cols-3 bg-[#F3F3F3]">
            {
                courses.map(course=><Course key={course.id}  course={course} courseBtnHandler={courseBtnHandler}></Course> )
            }
            </div>
        </div>
    );
};

export default Courses;