/* eslint-disable import/prefer-default-export */
import { Row, Cell } from '../src'

/**
 * Primary UI component for user interaction
 */
export const RowExample = () => {
  return (
    <Row style={{ '--border-width': '1px', borderCollapse: 'separate' }}>
      <Cell>Column 1</Cell>
      <Cell>
        <a href="/">Column 2 is a link</a>
      </Cell>
      <Cell>Column 3</Cell>
    </Row>
  )
}

export default {
  title: 'Table',
  component: RowExample,
}
