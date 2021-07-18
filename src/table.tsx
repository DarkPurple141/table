/** @jsxImportSource @emotion/react */
import { createContext, FC, useContext } from 'react'
import { css } from '@emotion/react'
import CheckboxProvider from './hooks/checkbox-provider'

const styles = css({
  padding: 8,
  borderRadius: '3px',
  borderBottom: '2px solid #DFE1E6',
})

export const TableContext = createContext({
  isSelectable: false,
})

export const useTable = () => useContext(TableContext)

const Table: FC<{ isSelectable?: boolean; numRows: number }> = ({
  children,
  isSelectable,
  numRows,
}) => (
  <TableContext.Provider value={{ isSelectable }}>
    <table css={styles}>
      {isSelectable ? (
        <CheckboxProvider cells={numRows}>{children}</CheckboxProvider>
      ) : (
        children
      )}
    </table>
  </TableContext.Provider>
)

export default Table
