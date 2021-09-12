import '@atlaskit/css-reset'
import '@atlaskit/tokens/css/atlassian-light.css'
import { AtlasKitThemeProvider } from '@atlaskit/theme'
import { useEffect } from 'react'
import Table, { Row, Cell, TBody, THead, HeadCell } from '../src'

import { presidents } from './data'

/**
 * Primary UI component for user interaction
 */
export const CompositionExample = ({ isSelectable }) => {
  useEffect(() => {
    document.documentElement.dataset.theme = 'light'
  }, [])
  return (
    <AtlasKitThemeProvider mode="light">
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
    </AtlasKitThemeProvider>
  )
}

export default {
  title: 'Table',
  component: CompositionExample,
  argTypes: {
    isSelectable: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
    },
  },
}
