const git = require('simple-git');

git('./AutoSync').pull('upstream', 'master', console.log.bind(console));


// const gitP = require('simple-git/promise');
// const REPO = 'https://github.com/CSSEGISandData/COVID-19.git';

// gitP().silent(true)
//   .clone(REPO)
//   .then(() => console.log('finished'))
//   .catch((err) => console.error('failed: ', err));



// git('./COVID-19')
//                 .exec(() => console.log('Starting pull...'))
//                 .pull()
//                 .exec(() => console.log('pull done.'));
                // .tags((err, tags) => console.log("Latest available tag: %s", tags.latest));
              //   .pull((err, update) => {
              //     if(update && update.summary.changes) {
              //        require('child_process').exec('npm restart');
              //     }
              //  });

              // .pull((err, update) => {
              //    if(update && update.summary.changes) {
              //       require('child_process').exec('npm restart');
              //    }
              // })

            //   .listRemote(['--get-url'], (err, data) => {
            //     if (!err) {
            //         console.log('Remote url for repository at ' + __dirname + ':');
            //         console.log(data);
            //     }
            // });