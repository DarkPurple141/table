/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens'
import { css } from '@emotion/react'
import type { CSSProperties, ReactElement } from 'react'
import SelectionProvider from './hooks/selection-provider'
import { TableContext } from './hooks/use-table'
import { varBorderWidth } from './constants'

const styles = css({
  borderCollapse: 'separate',
  borderRadius: 3,
  borderSpacing: 0,
  border: `var(${varBorderWidth}) solid ${token(
    'color.border.neutral',
    '#DFE1E6'
  )}`,
  'thead, tbody, tfooter': {
    border: 'none',
  },
  'th, td': {
    padding: '4px 8px',
  },
})

export type TableProps<DataType extends {} = {}> = {
  // eslint-disable-next-line no-unused-vars
  onSelect?: (arg?: DataType) => void
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
  onSelect,
}: TableProps<ObjectType>) {
  return (
    <TableContext.Provider value={{ isSelectable, sortKey, onSelect }}>
      <table style={{ [varBorderWidth]: '1px' } as CSSProperties} css={styles}>
        {isSelectable ? (
          <SelectionProvider cells={numRows}>{children}</SelectionProvider>
        ) : (
          children
        )}
      </table>
    </TableContext.Provider>
  )
}

export default Table
