export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=9UaZHEvD3i9aupEBp58y5YNPfTQp5p4n&q=${category}&limit=10&rating=r`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}