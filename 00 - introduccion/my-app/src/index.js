const API_KEY = "Do9coJq41Gi74fo4OjH8cKK6YZZVl7OX";
/*
const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn); */

export const getImage = async () => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );

    const { data } = await response.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    console.error(error);
    return "Image not found";
  }
};
