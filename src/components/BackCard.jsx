import '../styles/back-card.css'

const BackCard = ({ inputs: { cvc } }) => {
  return (
    <div className='back-card'>
      {cvc || '000'}
    </div>
  )
}

export default BackCard