# Examples

## Render Prop

```tsx
import Table, { Row, Cell, TBody, THead, HeadCell } from '@atlaskit/table'

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
```

## Composition

```tsx
import '@atlaskit/css-reset'
import Table, { Row, Cell, TBody, THead, HeadCell } from '@atlaskit/table'

import { presidents } from './data'

/**
 * Primary UI component for user interaction
 */
export const CompositionExample = ({ isSelectable }) => {
  return (
    <Table numRows={presidents.length} isSelectable={isSelectable}>
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
```
