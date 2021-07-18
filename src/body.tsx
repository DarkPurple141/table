/** @jsxImportSource @emotion/react */
import { createContext, ReactElement } from 'react'

type BodyProps<T> =
  | {
      rows: T[]
      // eslint-disable-next-line no-unused-vars
      children: (row: T) => ReactElement
    }
  | {
      rows?: never
      children: ReactElement[] | ReactElement
    }

const RowContext = createContext({})

function Body<ObjectType>({ rows, children }: BodyProps<ObjectType>) {
  return typeof children === 'function' ? (
    <RowContext.Provider value={rows}>
      <tbody>{rows.map(children)}</tbody>
    </RowContext.Provider>
  ) : (
    <tbody>{children}</tbody>
  )
}

export default Body
