/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { ReactElement } from 'react'
import CheckboxProvider from './hooks/checkbox-provider'
import { TableContext } from './hooks/use-table'

const styles = css({
  padding: 8,
  borderRadius: '3px',
  borderBottom: '2px solid #DFE1E6',
})

export type TableProps<DataType extends {} = {}> = {
  isSelectable?: boolean
  numRows: number
  sortKey?: keyof DataType
  children: ReactElement[] | ReactElement
}

function Table<ObjectType>({
  children,
  isSelectable,
  sortKey,
  numRows,
}: TableProps<ObjectType>) {
  return (
    <TableContext.Provider value={{ isSelectable, sortKey }}>
      <table css={styles}>
        {isSelectable ? (
          <CheckboxProvider cells={numRows}>{children}</CheckboxProvider>
        ) : (
          children
        )}
      </table>
    </TableContext.Provider>
  )
}

export default Table
