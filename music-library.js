function MusicLibrary (name, creator) {
	this.name = name;
	this.creator = creator;
	this.playlist = [];
}

function Playlist (name) {
	this.name = name;
	this.tracks = [];
}

function Tracks (title, rating, length) {
	this.title = title;
	this.rating = 0;
	this.length = 0;
}

//Music Library
MusicLibrary.prototype.addplaylist = function (newPlaylist) {
	this.playlist.push(newPlaylist);
}

//Adding Tracks to Playlist
Playlist.prototype.addtrack = function (newTrack) {
	this.tracks.push(newTrack);
}

//Track
Tracks.prototype.overallRating = function(rate) {
	this.rating += rate;
	if (this.rating < 1 && this.rating > 5) {
		this.rating = 5;
	}
}
Tracks.prototype.totalDuration = function(time) {
	this.length += time;
}

// Adding Playlist, Tracks
const lib1 = new MusicLibrary('Peter', "Syn");
const playlist1 = new Playlist('Calgary');
const track1 = new Tracks("Adam Smith - Lake");
track1.overallRating(4);
track1.totalDuration(236);

lib1.addplaylist(playlist1);
playlist1.addtrack(track1);

console.log(lib1);
// console.log(playlist1);
console.log(track1);