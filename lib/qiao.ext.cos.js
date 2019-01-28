'use strict';

var fs	= require('fs');
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
 * 
 * return rs
 */
exports.uploadFile = function(client, dest, source){
	return new Promise(function(resolve, reject){
		client.cos.sliceUploadFile({
			Region	: client.config.Region,
			Bucket	: client.config.Bucket,
			Key		: dest,
			FilePath: source
		}, function(err, data){
			return err ? reject(err) : resolve(data);
		});
	});
};

/**
 * uploadFolder
 * 上传文件夹
 * 	client
 * 	destFolder，目标路径，末尾不要添加/
 * 	sourceFolder，待上传的文件夹，末尾不要加/
 */
exports.uploadFolder = async function(client, destFolder, sourceFolder){
	try{
		var paths = [];
		getPathsFromFolder(sourceFolder, paths);
		console.log('begin upload ' + paths.length + ' files');
		
		var allFiles = [];
		var sucFiles = [];
		var failFiles= [];
		for(var i=0; i<paths.length; i++){
			var path = paths[i];
			var dest = destFolder + path.substr(sourceFolder.length);
			var data = await exports.uploadFile(client, dest, path);

			allFiles.push(data);
			if(data && data.statusCode == 200){
				sucFiles.push(data);
			}else{
				failFiles.push(data);
			}
		}
		
		var obj = {};
		obj.paths 	= paths;
		obj.all		= allFiles;
		obj.suc		= sucFiles;
		obj.fail	= failFiles;
		
		return obj;
	}catch(e){
		console.log(e);
		throw e;
	}
};

// get paths from folder
function getPathsFromFolder(root, list){
	var paths = fs.readdirSync(root);
	
	for(var i=0; i<paths.length; i++){
		var path = root + '/'  + paths[i];

		if(fs.statSync(path).isDirectory()){
			getPathsFromFolder(path, list);
		}else{
			list.push(path);
		}
	}
}