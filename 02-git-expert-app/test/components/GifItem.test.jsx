import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Tests on <GifItem />', () => {
  const title = 'java'
  const url = 'https://www.image.com/java.gif'

  test('Snapshot test', () => {
    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })

  test('Test image URL', () => {
    render(<GifItem title={title} url={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('Test title in component', () => {
    render(<GifItem title={title} url={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
