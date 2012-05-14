"use strict";

var sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var player = models.player;
var collaborativePlaylist = new models.Playlist("Collaborative Playlist");
//var playlist = models.Playlist.fromURI("spotify:user:1228060725:playlist:1UC58HGgNCri9RsKs8Jvh3");
var playlist;

exports.init = init;

function init(myuri) {

	updatePageWithTrackDetails(myuri);

	player.observe(models.EVENT.CHANGE, function (e) {

		// Only update the page if the track changed
		if (e.data.curtrack == true) {
			updatePageWithTrackDetails();
		}
	});
	
	//$.each(playlist.data.all(),function(i,track){ collaborativePlaylist.add(track); });
	var i, track;
	for (i=0;i<playlist.length;i++)
	{
    	track = playlist.get(i);
    	collaborativePlaylist.add(track.uri);
	}

}

function updatePageWithTrackDetails(myuri) {
	
	playlist = models.Playlist.fromURI(myuri);
	
	var header = document.getElementById("header");

	// This will be null if nothing is playing.
	var playerTrackInfo = player.track;

	if (playerTrackInfo == null) {
		header.innerText = "Nothing playing!";
	} else {
		var track = playerTrackInfo.data;
		header.innerHTML = track.name + " on the album " + track.album.name + " by " + track.album.artist.name + ".";
	}
}

//add the tracks from the playlist into
//$.each(pl.data.all(),function(i,track){ collaborativePlaylist.add(track); });

//collaborativePlaylist.add(pl.tracks[0]);
//playlist.add(m.Track.fromURI(results.tracks[j].uri));

