import '@atlaskit/css-reset'
import Table, { Row, Cell, TBody, THead, HeadCell } from '../src'

import { presidents } from './data'

type President = typeof presidents[number]

/**
 * Primary UI component for user interaction
 */
export const RenderProp = ({ isSelectable }) => {
  return (
    <Table<President> numRows={presidents.length} isSelectable={isSelectable}>
      <THead>
        <HeadCell>Name</HeadCell>
        <HeadCell>Party</HeadCell>
        <HeadCell>Year</HeadCell>
      </THead>
      <TBody<President> rows={presidents}>
        {(row) => (
          <Row key={row.id} {...row}>
            <Cell>{row.nm}</Cell>
            <Cell>{row.pp}</Cell>
            <Cell>{row.tm}</Cell>
          </Row>
        )}
      </TBody>
    </Table>
  )
}

export default {
  title: 'Table',
  component: RenderProp,
  argTypes: {
    isSelectable: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
  },
}
