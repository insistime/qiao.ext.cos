'use strict';

var qiaoExtCos 	= require('../lib/qiao.ext.cos.js');
var client		= qiaoExtCos.client(require('../bin/config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function(){
	var destPath		= 'test1';
	var sourceFolder	= 'd:/test1';
	
	console.log("upload folder " + sourceFolder + " to oss bucket's " + destPath);
	console.log();
	
	console.log('please wait a moment...');
	console.log();
	
	console.time('total use');
	var rs = await qiaoExtCos.uploadFolder(client, destPath, sourceFolder);

	console.log('	upload ' + rs.suc.length + ' files successfully!');
	console.log('	upload ' + rs.fail.length + ' files failed!');
	console.log();
	
	console.timeEnd('total use');
	console.log();
	
	console.log(rs);
};

test();