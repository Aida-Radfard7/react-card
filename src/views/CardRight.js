import React from 'react'
import '../statics/sass/right-card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';


export const CardRight = () => {
  return (
    <div className='card'>
        <div className='right-card'>
          <ul class="count">
            <li>18</li>
            <li>3</li>
          </ul>           
          
          <div className='top-menu'>
            <div className='date'>
              <span>12</span>
              <span>Aug</span>
              <span>2016</span>
            </div>
            <div className='icons'>
              <ul>
                <li><a href='#'><FontAwesomeIcon icon={faBookmark} className="icon" /></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faHeart} className="icon" /></a></li>
                <li><a href='#'><FontAwesomeIcon icon={faComment} className="icon" /></a></li>
              </ul>
            </div>
          </div>
          <div className='footer-content'>
            <p>Jane Doe</p>
            <h1>Stranger Things: The sound of the Upside Down</h1>
            <p>The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
            <a href='#' className='read-more'>
              <p>read more</p>
            </a>
          </div>
        </div>
    </div>
  )
}
