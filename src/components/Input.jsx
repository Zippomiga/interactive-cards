import '../styles/input.css'

const Input = ({ pH, mL, id, onCh, val, blank }) => {
  return (
    <div className='input-blank'>
      <input
        type='text'
        className='input'
        placeholder={pH}
        maxLength={mL}
        id={id}
        onChange={onCh}
        value={val}
      />
      <span className='blank'>
        {blank}
      </span>
    </div>
  )
}

export default Input