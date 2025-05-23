
import './background.css'

import image1 from '../../assets/images/people-talking.png'
import image2 from '../../assets/images/young-couple.png'
import image3 from '../../assets/images/depressed-woman.png'
import image4 from '../../assets/images/low-angle.png'



const background = ({playStatus, heroCount}) => {

  if (playStatus){
    return (
      <video className='background fade-in' autoPlay loop muted>
      </video>
    )
  }

  else if(heroCount === 0)
  {
    return <img src={image1} className='background fade-in' alt="people talking"/>
  }

  else if(heroCount === 1)
    {
      return <img src={image2} className='background fade-in' alt="friends"/>
    }

    else if(heroCount === 2)
      {
        return <img src={image3} className='background fade-in' alt="happy"/>
      }

      else if(heroCount === 3)
        {
          return <img src={image4} className='background fade-in' alt="groupe"/>
        }

}

export default background
