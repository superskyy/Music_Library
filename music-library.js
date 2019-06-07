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

const lib1 = new MusicLibrary('Peter', "Syn");
lib1.addplaylist("playlist1");
console.log(lib1);

//Adding Tracks to Playlist
Playlist.prototype.addtrack = function (newTrack) {
	this.tracks.push(newTrack);
}

const track1 = new Playlist('Calgary');
track1.addtrack("Beatles");
console.log(track1);

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

const trackInfo1 = new Tracks("Adam Smith - Lake");
trackInfo1.overallRating(4);
trackInfo1.totalDuration(236);

const trackInfo2 = new Tracks("Derson - Slow");
trackInfo2.overallRating(5);
trackInfo2.totalDuration(180);

console.log(trackInfo1);
console.log(trackInfo2);











// function Playlist () {

// }

// function Track () {

// }