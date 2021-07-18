/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import Checkbox from '@atlaskit/checkbox'
import { useCheckbox } from './hooks/checkbox-provider'
import { useTable } from './hooks/use-table'
import { HeadCell } from '.'

const THead: FC = ({ children, ...props }) => {
  const table = useTable()
  const [state, dispatch] = useCheckbox()
  return (
    <thead {...props}>
      <tr>
        {table.isSelectable && (
          <HeadCell>
            <Checkbox
              onChange={(e) =>
                dispatch({ type: 'set_root', value: e.currentTarget.checked })
              }
              isChecked={state.rootChecked || state.anyChecked}
              isIndeterminate={state.anyChecked && !state.rootChecked}
            />
          </HeadCell>
        )}
        {children}
      </tr>
    </thead>
  )
}

export default THead
