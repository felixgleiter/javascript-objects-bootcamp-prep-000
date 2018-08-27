var playlist = {"GZA" : "4th Chamber"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.[artistName] = songTitle;
  return playlist;
}