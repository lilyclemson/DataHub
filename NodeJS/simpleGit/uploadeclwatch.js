const fs = require('fs');
const request = require('request');

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
// uploadToLZ(filename);
console.log(typeof request)
