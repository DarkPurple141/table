import { useContext, createContext, FC } from 'react'

import useCheckboxReducer from './use-selectable'

const SelectionContext = createContext<ReturnType<typeof useCheckboxReducer>>([
  { checked: [], allChecked: false, anyChecked: false },
  {} as any,
])

const SelectionProvider: FC<{ cells: number }> = ({ cells, children }) => {
  const reducer = useCheckboxReducer(cells)

  return (
    <SelectionContext.Provider value={reducer}>
      {children}
    </SelectionContext.Provider>
  )
}

export const useCheckbox = () => {
  return useContext(SelectionContext)
}

export default SelectionProvider
