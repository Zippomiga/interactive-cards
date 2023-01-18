import '../styles/button.css'

const Button = ({title, click}) => {
  return (
    <button className='button' onClick={click}>
      {title ? 'Continue': 'Confirm'}
    </button>
  )
}

export default Button