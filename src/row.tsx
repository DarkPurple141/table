/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { B500, B50 } from '@atlaskit/theme/colors'
import Checkbox from '@atlaskit/checkbox'
import { useTable } from './table'
import Cell from './cell'
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
  idx?: number
}

const Row: FC<RowProps> = ({ children, idx, ...props }) => {
  const table = useTable()
  const [state, dispatch] = useCheckbox()
  const isChecked = state.checked[idx] || state.rootChecked
  return (
    <tr
      aria-pressed={isChecked}
      css={[styles, table.isSelectable && selectableStyles]}
      {...props}
    >
      {table.isSelectable && (
        <Cell>
          <Checkbox
            isChecked={isChecked}
            onChange={(e) =>
              dispatch({
                type: 'set_single',
                payload: { value: e.currentTarget.checked, id: idx },
              })
            }
          />
        </Cell>
      )}
      {children}
    </tr>
  )
}

export default Row
