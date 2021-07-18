/* eslint-disable no-unused-vars */
/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'

const headCellStyles = css({ color: '#5e6c84' })
export interface CellProps {
  testId?: string
  onClick?: (...args: any[]) => void
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
