import React , {useState} from 'react'
import '../statics/sass/card.scss';
import '../statics/sass/left-card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

export const CardLeft = () => {

  const [isChecked , setIsChecked] = useState(0)

  const Checked = () =>{
    if(isChecked === 0){
      setIsChecked(1)
    }else{
      setIsChecked(0)
    }
    console.log(isChecked)
  }


  return (
    <div className='card'>
        <div className='left-card'>
          <div className='date'>
            <p>12</p>
            <p>AUG</p>
            <p>2016</p>
          </div>

          <div className='footer-content'>
            <div className={isChecked ? 'footer-icons' : 'display-none'}>
              <ul className='icon-bar'>
                <li><a href='#'><FontAwesomeIcon icon={faBookmark} className="icon" /></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faHeart} className="icon" /><span>45</span></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faComment} className="icon" /><span>18</span></a></li>
              </ul>
            </div>
            <div className='footer-desc'>
            <div>  
              <p>Jane Doe </p>
              <a href='#' onClick={() => Checked()}><FontAwesomeIcon icon={faEllipsis} className="icon ellipsis-icon" /></a>
            </div>
            <h1>Boxing icon has the will for a couple more fights</h1>
            <p>The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
            </div>
          </div>
        </div>
    </div>
  )
}
