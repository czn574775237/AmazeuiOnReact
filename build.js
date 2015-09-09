import webpack from 'webpack';
import config from './webpack.production.config';
// import serverConfig from './webpack.config.server';

// 暂时屏蔽前端的 build
// -------------------------------------------
// console.log(config);
webpack(config, (err, stats) => {
  if (err) {
    throw err;
  }

  let jsonStats = stats.toJson();
  if (stats.hasErrors()) {
    return handleError(jsonStats.errors);
  }

  if (stats.hasWarnings()) {
    handleWarning(jsonStats.warnings);
  }

  console.log(stats.toString());

  console.log('Front-end build OK!\n');
});

// webpack(serverConfig, (err, stats) => {
//   if (err) {
//     throw err;
//   }
//
//   let jsonStats = stats.toJson();
//   if (stats.hasErrors()) {
//     return handleError(jsonStats.errors);
//   }
//
//   if (stats.hasWarnings()) {
//     handleWarning(jsonStats.warnings);
//   }
//
//   console.log(stats.toString());
//
//   console.log('Backend server build OK!\n');
// });


function handleError(error) {
  console.error(error);
}

function handleWarning(warnings) {
  console.warn(warnings);
}
