/** @jsxImportSource @emotion/react */
import type { FC } from 'react'
import { css } from '@emotion/react'
import { B500, B50 } from '@atlaskit/theme/colors'
import SelectableCell from './selectable-cell'
import { useTable } from './hooks/use-table'
import { useCheckbox } from './hooks/checkbox-provider'

const styles = css({
  border: 'none',
  borderImageWidth: 0,
  borderSpacing: 0,
  '&:hover': {
    backgroundColor: '#f8f8f8',
  },
})

const selectableStyles = css({
  '&:hover': {
    boxShadow: `0 0 0 0px #f8f8f8, -3px 0 0 0px ${B500}`,
  },
  '&[aria-pressed="true"]': {
    backgroundColor: B50,
  },
})

export type RowProps = {
  testId?: string
  idx?: number
}

const Row: FC<RowProps> = ({ children, idx, testId, ...props }) => {
  const table = useTable()
  const [state] = useCheckbox()
  const isChecked = state.checked[idx] || state.rootChecked
  return (
    <tr
      aria-pressed={isChecked}
      data-testid={testId}
      css={[styles, table.isSelectable && selectableStyles]}
      {...props}
    >
      {table.isSelectable && <SelectableCell idx={idx} />}
      {children}
    </tr>
  )
}

export default Row
