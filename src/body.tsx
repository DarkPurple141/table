/** @jsxImportSource @emotion/react */
import { createContext, ReactElement, cloneElement, Children } from 'react'

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
      <tbody>{rows.map((row, idx) => children({ ...row, idx }))}</tbody>
    </RowContext.Provider>
  ) : (
    <tbody>
      {Children.map(children, (row, idx) => cloneElement(row, { idx }))}
    </tbody>
  )
}

export default Body
