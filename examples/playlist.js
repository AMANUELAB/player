var path = require('path');
var Player = require('../dist/player');
var pkg = require('../package.json');
var debug = require('debug')(pkg.name);

var songs = [
  path.join(__dirname, 'demo.mp3'),
  path.join(__dirname, 'demo2.mp3')
]

new Player(songs)
  .play(function(err) {
    debug("Play List:" + this.playList());
    debug('all songs play end');
    debug("Play List End:" + this.playList());
  })
  .on('playend', function(song) {
    debug("Play List After Song Played:" + this.playList());
  })
  .on('error', function(err) {
    debug('Opps...!')
    debug(err);
  })
