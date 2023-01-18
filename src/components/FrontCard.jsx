import { aux } from "../helpers/_aux_"
import '../styles/front-card.css'

const FrontCard = ({ inputs }) => {
	const { name, code, month, year } = inputs

  return (
    <div className='front-card'>
      {aux.format(code) || '____ ____ ____ ____'}
      <div className='details-card'>
        <span>
          {name || 'Name'}
        </span>
        <span>
          {month || '00'}/{year || '00'}
        </span>
      </div>
    </div>
  )
}

export default FrontCard