import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 500));
let parcedTime = localStorage.getItem('videoplayer-current-time');
function checkSavedTime() {
  if (!parcedTime) {
    parcedTime = 0;
    return;
  } else {
    player.setCurrentTime(parcedTime);
  }
}
checkSavedTime(parcedTime);

player.off('timeupdate', onPlay);
