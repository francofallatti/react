import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Test on <GifGrid />', () => {
  const category = 'Java'

  test('Test loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })
    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
    //screen.debug()
  })

  test('Test items with useFetchGifs', () => {
    const gifs = [
      {
        id: '111',
        title: 'Java',
        url: 'https://localhost/Java.jpg',
      },
      {
        id: '112',
        title: 'Python',
        url: 'https://localhost/Python.jpg',
      },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })
    render(<GifGrid category={category} />)
    expect(screen.getAllByRole('img').length).toBe(2)
    //screen.debug()
  })
})
