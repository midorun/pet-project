import { useState } from 'react'

const useBooleanState = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue)

  const setStateToTrue = () => {
    setState(true)
  }
  const setStateToFalse = () => {
    setState(false)
  }

  const toggleState = () => {
    setState((prev) => !prev)
  }

  return [state, setStateToTrue, setStateToFalse, toggleState] as const
}

export default useBooleanState
