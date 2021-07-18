/** @jsxImportSource @emotion/react */
import { FC } from 'react'
import { css } from '@emotion/react'
import Checkbox from '@atlaskit/checkbox'
import { useTable } from './table'

const headCellStyles = css({ color: '#5e6c84' })

const HeadCell: FC = (props) => <th css={headCellStyles} {...props} />

export const THead: FC = ({ children, ...props }) => {
  const table = useTable()
  return (
    <thead {...props}>
      <tr>
        {table.isSelectable && (
          <HeadCell>
            <Checkbox />
          </HeadCell>
        )}
        {children}
      </tr>
    </thead>
  )
}

export default HeadCell
