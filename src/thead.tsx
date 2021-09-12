/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import Checkbox from '@atlaskit/checkbox'
import { useCheckbox } from './hooks/selection-provider'
import { useTable } from './hooks/use-table'
import { HeadCell } from '.'

const THead: FC = ({ children, ...props }) => {
  const table = useTable()
  const [state, { setAll, removeAll }] = useCheckbox()
  const isChecked = state.allChecked || state.anyChecked
  return (
    <thead {...props}>
      <tr>
        {table.isSelectable && (
          <HeadCell style={{ width: '24px' }}>
            <Checkbox
              onChange={isChecked ? removeAll : setAll}
              isChecked={isChecked}
              isIndeterminate={state.anyChecked && !state.allChecked}
            />
          </HeadCell>
        )}
        {children}
      </tr>
    </thead>
  )
}

export default THead
