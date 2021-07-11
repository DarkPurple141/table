/** @jsxImportSource @emotion/react */
import { createContext, FC, useState } from 'react';
import { css } from '@emotion/react';
import { B500, B50 } from '@atlaskit/theme/colors';
import { useTable } from './table';
import Cell from './cell';
import Checkbox from '@atlaskit/checkbox';

const styles = css({
  border: 'none',
  '&:hover': {
    backgroundColor: '#f8f8f8',
  },
});

const selectableStyles = css({
  '&:hover': {
    boxShadow: `0 0 0 2px #f8f8f8, -3px 0 0 2px ${B500}`,
  },
  '&[aria-pressed="true"]': {
    backgroundColor: B50,
  },
});

const RowContext = createContext({ isSelected: false });

const Row: FC = ({ children, ...props }) => {
  const table = useTable();
  const [isSelected, setIsSelected] = useState(false);
  return (
    <RowContext.Provider value={{ isSelected }}>
      <tr
        aria-pressed={isSelected}
        css={[styles, table.isSelectable && selectableStyles]}
        {...props}
      >
        {table.isSelectable && (
          <Cell>
            <Checkbox
              isChecked={isSelected}
              onChange={() => setIsSelected((old) => !old)}
            />
          </Cell>
        )}
        {children}
      </tr>
    </RowContext.Provider>
  );
};

export default Row;
