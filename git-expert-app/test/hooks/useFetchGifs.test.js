import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Test on custom hook useFetchGifs', () => {
  const category = 'Java'
  test('Test inicial state', () => {
    const { result } = renderHook(() => useFetchGifs(category))
    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('Test images array and isLoading', async () => {
    const { result } = renderHook(() => useFetchGifs(category))
    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
