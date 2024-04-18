export const getGifts = async (category) => {
  const API_KEY = 'Do9coJq41Gi74fo4OjH8cKK6YZZVl7OX'

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`
  const response = await fetch(url)
  const { data = [] } = await response.json()

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }))

  console.log(gifs)
}
