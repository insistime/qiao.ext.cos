'use strict';

var qiaoExtCos 	= require('../lib/qiao.ext.cos.js');
var client		= qiaoExtCos.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = function(){
		var destPath	= 'test/test.js';
		var sourceFile 	= 'd:/test.js';
		
		qiaoExtCos.uploadFile(client, destPath, sourceFile, function(err, data){
			console.log(err, data);
		});
};

test();