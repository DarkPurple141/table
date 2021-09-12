/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import { token } from '@atlaskit/tokens'
import { varBorderWidth } from './constants'

const padding = css({
  padding: '4px 8px',
  border: `var(${varBorderWidth}) solid ${token('color.border.neutral')}`,
})

export interface CellProps {
  testId?: string
}

/**
 * __Cell__
 *
 * Basic Cell element
 */
const Cell: FC<CellProps> = ({ testId, ...props }) => (
  <td data-testid={testId} css={padding} {...props} />
)

export default Cell
