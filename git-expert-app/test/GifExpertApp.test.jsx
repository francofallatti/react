import { render, screen, fireEvent } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Test on <GifExpertApp />', () => {
  test('Test SnapShot ', () => {
    const { container } = render(<GifExpertApp />)
    expect(container).toMatchSnapshot()
  })

  test('Test inicial state', () => {
    render(<GifExpertApp />)

    const categories = screen.getByTestId('category-list')
    expect(categories.length).toBe(undefined)
  })

  test('Renders GifExpertApp component', () => {
    render(<GifExpertApp />)
    expect(screen.getByText('GifExpertApp'))
  })
})
