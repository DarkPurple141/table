import { useContext, createContext } from 'react'

export const TableContext = createContext({
  isSelectable: false,
  sortKey: '' as string | number | symbol,
})

export const useTable = () => useContext(TableContext)
