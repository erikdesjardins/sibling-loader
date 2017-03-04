/**
 * @author Erik Desjardins
 * See LICENSE file in root directory for full license.
 */

'use strict';

var path = require('path');
var loaderUtils = require('loader-utils');

module.exports = function() {};

module.exports.pitch = function(request) {
	var callback = this.async();

	var context = ''; // todo

	// add context dependency so new files are picked up
	this.addContextDependency(context);

	this.fs.readdir(context, function(err, files) {
		if (err) return callback(err);

		var matchingFiles = files
			.filter(function(filename) {
				// todo filter
				return match.test(filename);
			})
			.map(function(filename, i) {
				return {
					name: filename,
					id: '_' + i
				};
			});

		var header = '/* generated by sibling-loader */';

		var importStatements = matchingFiles
			.map(function(info) {
				return 'import * as ' + info.id + ' from ' + JSON.stringify(path.join(context, info.name)) + ';';
			})
			.join('\n');

		var exportStatement = 'export default { ' + matchingFiles
				.map(function(info) {
					return JSON.stringify(info.name) + ": " + info.id;
				})
				.join(', ') + ' };';

		callback(null, [header, importStatements, exportStatement].join('\n'));
	});

	return '';
};
