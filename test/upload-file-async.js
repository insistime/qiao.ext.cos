'use strict';

var qiaoExtCos 	= require('../lib/qiao.ext.cos.js');
var client		= qiaoExtCos.client(require('../bin/config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = function(){
	var destPath	= 'test/test.js';
	var sourceFile 	= 'd:/test.js';
	
	console.log("upload file " + sourceFile + " to oss bucket's " + destPath);
	console.log();
	
	console.log('please wait a moment...');
	console.log();
	
	console.time('total use');
	qiaoExtCos.uploadFile(client, destPath, sourceFile, function(err, data){
		if(err) throw err;
		
		console.log('upload success, url is:');
		console.log('	' + data.Location);
		console.log();
		
		console.timeEnd('total use');
	});
};

test();