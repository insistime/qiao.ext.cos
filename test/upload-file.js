'use strict';

var qiaoExtCos 	= require('../lib/qiao.ext.cos.js');
var client		= qiaoExtCos.client(require('../bin/config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function(){
	try{
		var destPath	= 'test/test.js';
		var sourceFile 	= 'd:/test.js';
		
		console.log("upload file " + sourceFile + " to oss bucket's " + destPath);
		console.log();
		
		console.log('please wait a moment...');
		console.log();
		
		console.time('total use');
		var data = await qiaoExtCos.uploadFileSync(client, destPath, sourceFile);
		
		console.log('upload success, url is:');
		console.log('	' + data.Location);
		console.log();
		
		console.timeEnd('total use');
	}catch(e){
		console.log(e);
	}
};

test();