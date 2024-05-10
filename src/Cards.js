import Card from "./Card.js";
import { useState } from "react";
const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;
    const [likedCourses , setLikedCourses] = useState([]);
    function getCourses() {
        if(category === "All"){
        let allCourses = [];
        Object.values(courses).forEach(array => {
            console.log(array); 
            array.forEach(courseData => {
                allCourses.push(courseData);
            });
        });
        return allCourses;
    }
    else
    {
        //specific category pass here
        return courses[category];
    }
    }

    console.log(courses); // Log the value of courses
    console.log(typeof courses); // Log the type of courses

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    );
};

export default Cards;
