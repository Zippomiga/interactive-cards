import { useState } from "react";
import { card, fields } from "../helpers/_aux_";

const useInputs = () => {
  const [inputs, setInputs] = useState(fields)

  function fix({ target: {id, value} }) {
    setInputs({ ...inputs, [card[id]]: value })
  }

  return [inputs, fix]
}

export default useInputs