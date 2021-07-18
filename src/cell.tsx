/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'

const padding = css({ padding: '4px 8px' })

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
