import React from 'react'
import { IoMdStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";

function Rating(props) {
    const {rating, numReviews} = props
  return (
    <div className='rating flex flex-row align-middle justify-center'>
      <span className='mt-2'>{rating >=1?<IoMdStar />: rating >=0.5?<IoStarHalfOutline />: <IoIosStarOutline />}</span>

      <span className='mt-2'>{rating >=2?<IoMdStar />: rating >=1.5?<IoStarHalfOutline />: <IoIosStarOutline />}</span>

      <span className='mt-2'>{rating >=3?<IoMdStar />: rating >=2.5?<IoStarHalfOutline />: <IoIosStarOutline />}</span>

      <span className='mt-2'>{rating >=4?<IoMdStar />: rating >=3.5?<IoStarHalfOutline />: <IoIosStarOutline />}</span>

      <span className='mt-2'>{rating >=5?<IoMdStar />: rating >=4.5?<IoStarHalfOutline />: <IoIosStarOutline />}</span>
      
      <p className='text-[12px] text-[#FFE0AE] ml-3'>
        {numReviews + ' reviews '}
      </p>
    </div>
  )
}
 
export default Rating
