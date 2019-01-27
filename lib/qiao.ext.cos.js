'use strict';

var COS = require('cos-nodejs-sdk-v5');

/**
 * client
 * 获取client对象
 * 	config，配文件
 */
exports.client = function(config){
	if(!config) 			throw new Error('need config params');
	if(!config.SecretId) 	throw new Error('need config.SecretId params');
	if(!config.SecretKey) 	throw new Error('need config.SecretKey params');
	
	return {
		config 	: config,
		cos		: new COS({
			SecretId	: config.SecretId,
			SecretKey	: config.SecretKey
		})
	};
};

/**
 * uploadFile
 * 上传文件
 * 	client
 * 	dest，目标路径
 * 	source，待上传文件路径
 * 	cb，回调函数
 */
exports.uploadFile = function(client, dest, source, cb){
	client.cos.sliceUploadFile({
		Region	: client.config.Region,
		Bucket	: client.config.Bucket,
		Key		: dest,
		FilePath: source
	}, function(err, data){
		if(cb) cb(err, data);
	});
};

/**
 * uploadFileSync
 * 上传文件，同步方式
 * 	client
 * 	dest，目标路径
 * 	source，待上传文件路径
 * 
 * return rs
 */
exports.uploadFileSync = function(client, dest, source){
	return new Promise(function(resolve, reject){
		exports.uploadFile(client, dest, source, function(err, data){
			return err ? reject(err) : resolve(data);
		});
	});
};