import '../styles/label.css'

const Label = (props) => {
  return (
    <label htmlFor={props.htmlFor} className='label'>
      {props.title}
    </label>
  )
}

export default Label