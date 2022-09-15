import './leftsidebar.css'
import { sliderData } from './leftSliderData'

export const LeftSidebar = () => {
    
    return(
        <div className='leftsidebar'>
            <ul>
            {sliderData.map((val, key)=> {
                return(<li key={key}><a href={val.link}>{val.icon}</a></li>)
            })}
            </ul>
        </div>
    )

}