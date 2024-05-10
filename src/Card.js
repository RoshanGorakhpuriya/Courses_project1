import { FcLike , FcLikePlaceholder} from "react-icons/fc";

import {ToastContainer , toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function Card(props) {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev) => prev.filter((cid) =>(cid !== course.id)));
      toast.warning("Like removal");
    }
    else
    {
      if(likedCourses.length === 0)
        {
          setLikedCourses([course.id]);
        }
      else
      {
        setLikedCourses((prev) => [...prev , course.id]);
      }
      toast.success("Liked successfully");
    }
  }
  return (
    <div style={{ width: '300px', backgroundColor: 'rgba(6,57,112)', borderRadius: '0.375rem', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        <img src={course.image.url} style={{}} alt={course.title} />
        <div style={{ width: '40px', height: '40px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', right: '0.5rem', bottom: '-15px' , display:'grid' , placeItems : 'center' }}>
          <button onClick={clickHandler}>
            {
              likedCourses.includes(course.id) ? 
              (<FcLike fontSize="1.75rem"/>) :(<FcLikePlaceholder fontSize="1.75rem" />)
            }
          </button>
        </div>
      </div>
      <div>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">
          {course.description.length > 100 ? 
          (course.description.substr(0 , 100)+"...") : (course.description)}
          </p>
      </div>
    </div>
  );
}


export default Card;
