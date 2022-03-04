import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = ({reviews}) => {
    const [id,setId]=useState(0)
    const [Review,setReview]=useState(reviews[id]);
    const Next = () => {
        if(id<reviews.length) {
           setId(id+1)
           setReview(reviews[id])
        }else if(id==reviews.length){
            setId(reviews.length-1)
            return;
        }
    }
    const previous = () => {
        if(id===reviews.length){
            // console.log("---previous---")
            // console.log(id)
            setId(reviews.length-1)
        }
        else if(id>0) {
        //     console.log("---previous---")
        //    console.log(id)
           setId(id-1)
           setReview(reviews[id])
        }else if(id===0){
            setId(0)
            setReview(reviews[id])
           return;
        }    
    }
         return(<article key={Review.id} className="single-review">
            <img src={Review.image} alt={Review.name}/>
            <div>
               <h4 className="review-title">{Review.name}</h4>
               <h5 className="review-age">{Review.age} years old</h5>
               <p className="review-text">{Review.text}</p>
               <div className="button">
                   <button className="prev-btn" onClick={previous}><FaChevronLeft></FaChevronLeft></button>
                   <button className="next-btn" onClick={Next}><FaChevronRight></FaChevronRight></button>
               </div>
            </div>
              </article>)
        

}
export default Review;