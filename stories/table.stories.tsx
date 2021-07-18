import '@atlaskit/css-reset'
import Table, { Row, Cell, TBody, HeadCell, THead } from '../src'

import { presidents } from './data'

/**
 * Primary UI component for user interaction
 */
export const BasicExample = ({ isSelectable }) => {
  return (
    <Table isSelectable={isSelectable}>
      <THead>
        <HeadCell>Name</HeadCell>
        <HeadCell>Party</HeadCell>
        <HeadCell>Year</HeadCell>
      </THead>
      <TBody>
        {presidents.map((row) => (
          <Row key={row.id}>
            <Cell>{row.nm}</Cell>
            <Cell>{row.pp}</Cell>
            <Cell>{row.tm}</Cell>
          </Row>
        ))}
      </TBody>
    </Table>
  )
}

export default {
  title: 'Table',
  component: BasicExample,
  argTypes: {
    isSelectable: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
  },
}
