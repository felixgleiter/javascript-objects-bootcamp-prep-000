var playlist = {"GZA" : "4th Chamber"};

function updatePlaylist(playlist, artistName, songTitle) {
  var newPlaylist = Object.assign({}, playlist, {[artistName] : songTitle});
  return newPlaylist;
}