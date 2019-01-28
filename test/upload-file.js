'use strict';

var qiaoExtCos 	= require('../lib/qiao.ext.cos.js');
var client		= qiaoExtCos.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function(){
	try{
		var destPath	= 'test/test.js';
		var sourceFile 	= 'd:/test.js';
		
		var rs = await qiaoExtCos.uploadFile(client, destPath, sourceFile);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();