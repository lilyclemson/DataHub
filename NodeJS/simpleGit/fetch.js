const git = require('simple-git');

git('./AutoSync').fetch('upstream', 'master', console.log.bind(console));