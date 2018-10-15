var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {

  // vue is peerDependencies of vue-test-utils, so we need to include it.
  files.unshift(pattern(path.join(__dirname, 'adapter.js')));
  files.unshift(pattern(getTheParallelFile('@vue/test-utils', 'vue-test-utils.umd.js')));
  files.unshift(pattern(getTheParallelFile('vue', 'vue.runtime.js')))
};

function getTheParallelFile (moduleName, name) {
  let rawPath = require.resolve(moduleName).split('\\');
  rawPath.splice(rawPath.length - 1, 1, name);
  return rawPath.join('\\');
}

framework.$inject = ['config.files'];
module.exports = {'framework:vue-test-utils': ['factory', framework]};