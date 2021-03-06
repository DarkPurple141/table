/** @jsxImportSource @emotion/react */
import { ReactElement, cloneElement, Children } from 'react'
import { useTable } from './hooks/use-table'

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

function Body<ObjectType>({ rows, children }: BodyProps<ObjectType>) {
  const { sortKey } = useTable()
  return typeof children === 'function' ? (
    <tbody>
      {rows
        .sort((rowA, rowB) => (rowA[sortKey] < rowB[sortKey] ? -1 : 1))
        .map((row, idx) => children({ ...row, idx }))}
    </tbody>
  ) : (
    <tbody>
      {Children.map(children, (row, idx) => cloneElement(row, { idx }))}
    </tbody>
  )
}

export default Body
