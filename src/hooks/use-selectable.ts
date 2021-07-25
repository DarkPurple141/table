import { useCallback, useReducer } from 'react'

const defaultState = {
  checked: [] as boolean[],
  allChecked: false,
  anyChecked: false,
}

type State = typeof defaultState

type Action =
  /** value here is the id of the selection */
  | { type: 'toggle_selection'; value: number }
  | { type: 'set_root'; value: boolean }
  | { type: 'failure'; error: string }

function reducer({ checked, allChecked }: State, action: Action) {
  switch (action.type) {
    case 'toggle_selection': {
      const { value: id } = action

      const updated = checked.map((status, i) => (i === id ? !status : status))
      const anyChecked = updated.some(Boolean)

      return {
        checked: updated,
        allChecked: updated[id] && allChecked,
        anyChecked: anyChecked || updated[id],
      }
    }
    case 'set_root':
      return {
        anyChecked: action.value,
        checked: checked.map(() => action.value),
        allChecked: action.value,
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
  const [state, dispatch] = useReducer(reducer, initialiseState(cells))

  const toggleSelection = useCallback((id: number) => {
    dispatch({
      type: 'toggle_selection',
      value: id,
    })
  }, [])

  const setAll = useCallback(() => {
    dispatch({ type: 'set_root', value: true })
  }, [])

  const removeAll = useCallback(() => {
    dispatch({ type: 'set_root', value: false })
  }, [])

  return [state, { setAll, removeAll, toggleSelection }] as const
}

export default useSelectable
