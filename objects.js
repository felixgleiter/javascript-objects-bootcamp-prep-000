var playlist = {"GZA" : "4th Chamber"};

function updatePlaylist(playlist, artist, song) {
  var newPlaylist = Object.assign(playlist, {artist : song});
  return newPlaylist;
}