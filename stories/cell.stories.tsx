/* eslint-disable import/prefer-default-export */
import '@atlaskit/css-reset'
import { Cell } from '../src'

/**
 * Primary UI component for user interaction
 */
export const CellExample = () => {
  return (
    <Cell style={{ '--border-width': '1px', borderCollapse: 'separate' }}>
      This is a naked cell
    </Cell>
  )
}

export default {
  title: 'Table',
  component: CellExample,
}
