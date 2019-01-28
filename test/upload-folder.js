'use strict';

var qiaoExtCos 	= require('../lib/qiao.ext.cos.js');
var client		= qiaoExtCos.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function(){
	try{
		var destPath		= 'test2';
		var sourceFolder	= 'd:/test/cocos';
		
		var rs = await qiaoExtCos.uploadFolder(client, destPath, sourceFolder);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();