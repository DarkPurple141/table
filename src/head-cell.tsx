/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'

const headCellStyles = css({ color: '#5e6c84' })

const HeadCell: FC = (props) => <th css={headCellStyles} {...props} />

export default HeadCell
