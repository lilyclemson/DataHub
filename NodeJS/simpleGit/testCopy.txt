const gitP = require('simple-git/promise');
const REPO = 'https://github.com/CSSEGISandData/COVID-19.git';

// gitP().silent(true)
//   .clone(REPO)
//   .then(() => console.log('finished'))
//   .catch((err) => console.error('failed: ', err));

const git = require('simple-git');
const fs = require('fs');
const request = require('request');


// fileList = git('./COVID-19')
//                 .fetch('upstream', 'master', console.log.bind(console))
//                 .diff(['master', 'upstream/master', '--name-only'] ,  console.log.bind(console));

git('./COVID-19')
                .exec(() => console.log('Starting pull...'))
                .pull()
                .exec(() => console.log('pull done.'));


                
let uploadToLZ = (fileName) => {
  let fileLocation;
  let _destPath = '.';
  let _clusterAddrAndPort = 'http://10.173.147.1:8010';
  let _ClusterIP = '10.173.147.1';
  let _filename = filename,
      _mimetype = 'text/csv',
      _fileStream = fs.createReadStream(_destPath + '/' + _filename),
      _clusterFilename = _filename.substr(_filename.indexOf('_') + 1);

      request({
        method: 'POST',
        uri: _clusterAddrAndPort + '/Filespray/UploadFile.json?upload_' +
          '&NetAddress=' + _ClusterIP + '&rawxml_=1&OS=2&' +
          'Path=/var/lib/HPCCSystems/mydropzone/',
        formData: {
          'UploadedFiles[]': {
            value: _fileStream,
            options: {
              filename: _clusterFilename,
              contentType: _mimetype
            }
          },
        },
        resolveWithFullResponse: true
      });
}

filename = 'simplegit.csv';
uploadToLZ(filename);
console.log('File ' + filename + ' is uploaded!');

