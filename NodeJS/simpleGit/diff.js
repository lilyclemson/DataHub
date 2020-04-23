const git = require('simple-git');

// filelist = git('./AutoSync')
//                 .fetch('upstream', 'master', console.log.bind(console))
//                 // .diff(['master', 'upstream/master', '--name-only'] );
//                 .diff(['master', 'upstream/master', '--name-only'] ,  console.log.bind(console));

// console.log(filelist);

git('./AutoSync')
                .fetch('upstream', 'master', console.log.bind(console))
                // .diff(['master', 'upstream/master', '--name-only'] );
                .diff(['master', 'upstream/master', '--name-only'] ,  console.log.bind(console));

