import 'babel/polyfill';

import nodemon from 'nodemon';

// Run back-end server
// ------------------------------------------------
nodemon('--exec npm run server').on('start', function () {
  console.log('App has started');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});
