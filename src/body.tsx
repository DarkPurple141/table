/** @jsxImportSource @emotion/react */
import { createContext, ComponentProps } from 'react';
import { css } from '@emotion/react';
import { B500 } from '@atlaskit/theme/colors';

type BodyProps<T> =
  | {
      rows: T[];
      children: (row: T) => React.ReactElement;
    }
  | {
      rows?: never;
      children: React.ReactElement[] | React.ReactElement;
    };

const RowContext = createContext({});

function Body<ObjectType>({ rows, children }: BodyProps<ObjectType>) {
  return typeof children === 'function' ? (
    <RowContext.Provider value={rows}>
      <tbody>{rows.map(children)}</tbody>
    </RowContext.Provider>
  ) : (
    <tbody>{children}</tbody>
  );
}

export default Body;
