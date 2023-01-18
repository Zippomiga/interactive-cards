import Form from "./Form"
import { useState } from "react"
import Confirm from "./Confirm"
import Button from "./Button"
import useBlanks from "../hooks/useBlanks"
import '../styles/form-section.css'

const FormSection = ({ inputs, fix }) => {
  const [form, setForm] = useState(true)
  const [blanks, verify, fill] = useBlanks(inputs)

  return (
    <section className='form-section'>
      {form ? <Form
        inputs={inputs}
        fix={fix}
        blanks={blanks}
      /> : <Confirm />}
      <Button
        title={fill}
        click={() => fill ? setForm(false) : verify()}
      />
    </section>
  )
}

export default FormSection