const getImageUrl = (image) => {
  if (!image) return image;
  if (image.startsWith('http') || image.startsWith('data:') || image.startsWith('/')) {
    return image;
  }
  return new URL(`../assets/${image}`, import.meta.url).href;
}

export { getImageUrl };