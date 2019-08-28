//function that makes ajax request/ use the fetch function

// function fetchAlbums() {
//   fetch('rallycoding.herokuapp/api/music_albums')
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

const fetchAlbums = async () => {
  const res = await fetch('https://rallycoding.herokuapp/api/music_albums');
  const json = await res.json();
  console.log(json);
};
fetchAlbums();
