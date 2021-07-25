/** @jsxImportSource @emotion/react */
import { ChangeEventHandler, FC, useCallback, memo } from 'react'
import Checkbox from '@atlaskit/checkbox'
import Cell from './cell'
import { useCheckbox } from './hooks/checkbox-provider'

export type SelectableCellProps = {
  idx?: number
}

const SelectableCell: FC<SelectableCellProps> = ({ idx }) => {
  const [state, { toggleSelection }] = useCheckbox()
  const isChecked = state.checked[idx] || state.allChecked
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    () => toggleSelection(idx),
    [idx]
  )

  return (
    <Cell>
      <Checkbox isChecked={isChecked} onChange={onChange} />
    </Cell>
  )
}

export default memo(SelectableCell)
