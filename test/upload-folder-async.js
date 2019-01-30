'use strict';

var qiaoExtCos 	= require('../lib/qiao.ext.cos.js');
var client		= qiaoExtCos.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = function(){
	var destPath		= 'static';
	var sourceFolder	= 'd:/static';
	
	qiaoExtCos.uploadFolder(client, destPath, sourceFolder, function(rs){
		console.log(rs);
	});
};

test();