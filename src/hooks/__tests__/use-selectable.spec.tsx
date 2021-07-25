import { renderHook, act } from '@testing-library/react-hooks'
import useSelectable from '../use-selectable'

describe('useSelectable', () => {
  it('should have correct initial state', () => {
    const { result } = renderHook(() => useSelectable(10))

    const [state] = result.current

    expect(state.anyChecked).toBe(false)
    expect(state.allChecked).toBe(false)
    expect(state.checked).toHaveLength(10)
  })

  it('should have correctly update a selection', () => {
    const { result } = renderHook(() => useSelectable(10))

    act(() => {
      const [, { toggleSelection }] = result.current
      toggleSelection(0)
    })

    const [state] = result.current

    expect(state.anyChecked).toBe(true)
    expect(state.allChecked).toBe(false)
    expect(state.checked[0]).toBe(true)
  })

  it('root select all works', () => {
    const { result } = renderHook(() => useSelectable(10))

    act(() => {
      const [, { setAll }] = result.current
      setAll()
    })

    const [state] = result.current

    expect(state.anyChecked).toBe(true)
    expect(state.allChecked).toBe(true)
    expect(state.checked[0]).toBe(true)
  })

  it('root select all works', () => {
    const { result } = renderHook(() => useSelectable(10))

    act(() => {
      const [, { setAll }] = result.current
      setAll()
    })

    const [state1] = result.current

    expect(state1.anyChecked).toBe(true)
    expect(state1.allChecked).toBe(true)
    expect(state1.checked[0]).toBe(true)

    act(() => {
      const [, { removeAll }] = result.current
      removeAll()
    })

    const [state2] = result.current

    expect(state2.anyChecked).toBe(false)
    expect(state2.allChecked).toBe(false)
    expect(state2.checked[0]).toBe(false)
  })

  it('root select -> single toggle off', () => {
    const { result } = renderHook(() => useSelectable(10))

    act(() => {
      const [, { setAll }] = result.current
      setAll()
    })

    const [state1] = result.current

    expect(state1.anyChecked).toBe(true)
    expect(state1.allChecked).toBe(true)
    expect(state1.checked[0]).toBe(true)

    act(() => {
      const [, { toggleSelection }] = result.current
      toggleSelection(0)
    })

    const [state2] = result.current

    expect(state2.anyChecked).toBe(true)
    expect(state2.allChecked).toBe(false)
    expect(state2.checked[0]).toBe(false)
  })
})
