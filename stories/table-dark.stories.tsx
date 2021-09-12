import '@atlaskit/css-reset'
import '@atlaskit/tokens/css/atlassian-dark.css'
import { useEffect } from 'react'
import { token } from '@atlaskit/tokens'
import Table, { Row, Cell, TBody, THead, HeadCell } from '../src'

import { presidents } from './data'

/**
 * Primary UI component for user interaction
 */
export const DarkMode = ({ isSelectable }) => {
  useEffect(() => {
    document.body.style.backgroundColor = token('color.background.default')
    document.body.style.color = token('color.text.highEmphasis')
    document.documentElement.dataset.theme = 'dark'
  }, [])
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

export default {
  title: 'Table',
  component: DarkMode,
  argTypes: {
    isSelectable: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
  },
}
