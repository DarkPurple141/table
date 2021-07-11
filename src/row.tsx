/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css } from '@emotion/react';
import { B500 } from '@atlaskit/theme/colors'
import { useTable } from './table';
import Cell from './cell';
import Checkbox from '@atlaskit/checkbox';

const styles = css({
  borderLeft: '2px solid transparent',
  '&:hover': {
    boxShadow: `0 0 0 2px #f8f8f8, -3px 0 0 2px ${B500}`,
    // borderLeft: `2px solid ${B500}`,
    backgroundColor: '#f8f8f8',
  },
});

const Row: FC = ({ children, ...props }) => {
  const table = useTable()
  return (
    <tr
      css={styles}
      {...props}
    >
      <>
      {table.isSelectable && <Cell><Checkbox /></Cell>}
      {children}
      </>
    </tr>
  );
};

export default Row;
