/** @jsxImportSource @emotion/react */
import { ChangeEventHandler, FC, useCallback, memo } from 'react'
import Checkbox from '@atlaskit/checkbox'
import Cell from './cell'
import { useCheckbox } from './hooks/checkbox-provider'

export type SelectableCellProps = {
  idx?: number
}

const SelectableCell: FC<SelectableCellProps> = ({ idx }) => {
  const [state, dispatch] = useCheckbox()
  const isChecked = state.checked[idx] || state.rootChecked
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (e) =>
      dispatch({
        type: 'set_single',
        payload: { value: e.currentTarget.checked, id: idx },
      }),
    [dispatch, idx]
  )

  return (
    <Cell>
      <Checkbox isChecked={isChecked} onChange={onChange} />
    </Cell>
  )
}

export default memo(SelectableCell)
