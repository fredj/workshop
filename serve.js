/**
 * This script starts a dev server that provides a script loader for the
 * OpenLayers library at the /loader.js path and serves files from the dist
 * directory for all other paths.
 */

var fork = require('child_process').fork;
var path = require('path');

var distDir = path.join(__dirname, 'dist');
var debugServer = path.join(__dirname, 'node_modules', 'openlayers', 'tasks', 'serve-lib.js');

var child = fork(debugServer, {cwd: distDir});

child.on('close', function(code) {
  if (code !== 0) {
    process.stderr.write('The debug server failed\n');
    process.exit(1);
  } else {
    process.exit(0);
  }
});
