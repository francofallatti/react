import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

describe('Test on <GifGrid />', () => {
  const category = 'Java'

  test('Test loading', () => {
    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
    //screen.debug()
  })

  test('Test items with useFetchGifs', () => {})
})
