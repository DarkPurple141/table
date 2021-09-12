/* eslint-disable no-unused-vars */
/** @jsxImportSource @emotion/react */
import type { FC, CSSProperties } from 'react'
import { css } from '@emotion/react'
import { token } from '@atlaskit/tokens'
import { varBorderWidth } from './constants'

const headCellStyles = css({
  border: `var(${varBorderWidth}) solid ${token('color.border.neutral')}`,
  verticalAlign: 'middle',
  color: token('color.text.mediumEmphasis', '#5e6c84'),
})
export interface CellProps {
  testId?: string
  onClick?: (...args: any[]) => void
  style?: CSSProperties
}

/**
 * __HeadCell__
 *
 * Head Cell element
 */
const Cell: FC<CellProps> = ({ testId, onClick, ...props }) => (
  <th
    role="button"
    onClick={onClick}
    data-testid={testId}
    css={headCellStyles}
    {...props}
  />
)

export default Cell
