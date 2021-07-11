/** @jsxImportSource @emotion/react */
import { FC } from 'react';
import { css } from '@emotion/react';
import { useTable } from './table';
import Checkbox from '@atlaskit/checkbox';

export const THead: FC = ({ children, ...props }) => {
  const table = useTable();
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
  );
};

const HeadCell: FC = (props) => (
  <th css={css({ color: '#5e6c84' })} {...props} />
);

export default HeadCell;
