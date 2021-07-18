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

function reducer({ checked, rootChecked, anyChecked }: State, action: Action) {
  switch (action.type) {
    case 'set_single': {
      const { value, id } = action.payload

      const updated = checked.map((status, i) => (i === id ? value : status))

      return {
        checked: updated,
        rootChecked: value && rootChecked,
        anyChecked: anyChecked || value,
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

function useSelectable(cells: number) {
  return useReducer(reducer, initialiseState(cells))
}

export default useSelectable
