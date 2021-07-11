/** @jsxImportSource @emotion/react */
import { createContext, FC, useContext } from 'react';
import { css } from '@emotion/react';

const styles = css({
  padding: 8,
  borderRadius: '3px',
  borderTop: '2px solid #DFE1E6',
  borderBottom: '2px solid #DFE1E6',
});

export const TableContext = createContext({ isSelectable: false });

export const useTable = () => {
  return useContext(TableContext)
}

const Table: FC<{ isSelectable?: boolean }> = ({ children, isSelectable }) => (
  <TableContext.Provider value={{ isSelectable }}>
    <table css={styles}>{children}</table>
  </TableContext.Provider>
);

export default Table;
