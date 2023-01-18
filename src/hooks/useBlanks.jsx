import { useState, useEffect } from 'react';
import { fields } from '../helpers/_aux_';

const useBlanks = (inputs) => {
  const [blanks, setBlanks] = useState(fields)

  function verify() {
    const updatedBlanks = {}
    Object.entries(inputs).forEach(([key, value]) => {
      if(value === '') updatedBlanks[key] = 'Can\'t be blank'
    })
    setBlanks({ ...blanks, ...updatedBlanks })
  }

  const fill = Object.values(inputs).every(inp => inp !== '')

    useEffect(() => {
      setBlanks(prevState => { return { ...prevState, ...fields } })
    }, [...Object.values(inputs)])

  return [blanks, verify, fill]
}

export default useBlanks