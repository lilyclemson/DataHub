const git = require('simple-git/promise');
const REPO = 'https://github.com/lilyclemson/AutoSync.git';

// git().silent(true)
//   .clone(REPO)
//   .then(() => console.log('finished'))
//   .catch((err) => console.error('failed: ', err));

git('./AutoSync').addRemote('upstream', 'https://github.com/angelalily/AutoSync.git');

git('./AutoSync').listRemote(['--get-url'], (err, data) => {
  if (!err) {
      console.log('Remote url for repository at ' + __dirname + ':');
      console.log(data);
  }
});