import { useReducer } from 'react'

const defaultState = {
  checked: [] as boolean[],
  rootChecked: false,
  anyChecked: false,
}

type State = typeof defaultState

type Action =
  | { type: 'set_single'; payload: { id: number; value: boolean } }
  | { type: 'set_root'; value: boolean }
  | { type: 'failure'; error: string }

function reducer({ checked, rootChecked }: State, action: Action) {
  switch (action.type) {
    case 'set_single': {
      const updated = checked.map((status, i) =>
        i === action.payload.id ? action.payload.value : status
      )
      return {
        checked: updated,
        rootChecked,
        anyChecked: updated.some(Boolean),
      }
    }
    case 'set_root':
      return {
        anyChecked: action.value,
        checked: checked.map(() => action.value),
        rootChecked: action.value,
      }
    default:
      throw new Error()
  }
}

const initialiseState = (numCells: number) => {
  return {
    ...defaultState,
    checked: Array.from({ length: numCells }).fill(false) as boolean[],
  }
}

function useCheckableTable(cells: number) {
  return useReducer(reducer, initialiseState(cells))
}

export default useCheckableTable
