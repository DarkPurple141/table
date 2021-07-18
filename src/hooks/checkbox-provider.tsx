import { useContext, createContext, FC } from 'react'

import useCheckboxReducer from './use-selectable'

const CheckboxContext = createContext<ReturnType<typeof useCheckboxReducer>>([
  { checked: [], rootChecked: false, anyChecked: false },
  () => {},
])

const CheckboxProvider: FC<{ cells: number }> = ({ cells, children }) => {
  const reducer = useCheckboxReducer(cells)

  return (
    <CheckboxContext.Provider value={reducer}>
      {children}
    </CheckboxContext.Provider>
  )
}

export const useCheckbox = () => {
  return useContext(CheckboxContext)
}

export default CheckboxProvider
