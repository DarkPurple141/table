import { useContext, createContext } from 'react'

export const TableContext = createContext({
  isSelectable: false,
  sortKey: '' as string | number | symbol,
  onSelect: () => {},
})

export const useTable = () => useContext(TableContext)
