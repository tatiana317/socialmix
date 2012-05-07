/**
* @author Tati
*/

var sp = getSpotifyApi();
var models = sp.require('sp://import/scripts/api/models');

var collaborativePlaylist = new models.Playlist("Collaborative Playlist");

//have user enter spotify playlist url
var pl = Playlist.fromURI("spotify:user:spotify:playlist:3Yrvm5lBgnhzTYTXx2l55x", function(playlist) {
    console.log("Playlist loaded", playlist.name);
});

//add the tracks from the playlist iinto
$.each(pl.data.all(),function(i,track){ myAwesomePlaylist.add(track); });

//myAwesomePlaylist.add(pl.tracks[0]);
//myAwesomePlaylist.add("spotify:track:6JEK0CvvjDjjMUBFoXShNZ");

var currentTrack, playlist, queue, queueVersion;