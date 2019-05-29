# urls
## homepage
[https://code.insistime.com/qiao.ext.cos](https://code.insistime.com/qiao.ext.cos)

## github
[https://github.com/insistime/qiao.ext.cos](https://github.com/insistime/qiao.ext.cos)

## npm
[https://www.npmjs.com/package/qiao.ext.cos](https://www.npmjs.com/package/qiao.ext.cos)

# started
## install
npm install qiao.ext.cos

## config.json
```json
{
	"SecretId"	: "your secret id",
	"SecretKey"	: "your secret kye",
	"Region"	: "your region",
	"Bucket"	: "your bucket"
}
```

# api
## uploadFileSync
```javascript
'use strict';

var qiaoExtCos 	= require('qiao.ext.cos');
var client		= qiaoExtCos.client(require('./config.json'));

/**
 * upload file demo
 * upload d:/test.js to your bucket's test/test.js
 */
var test = async function(){
	try{
		var destPath	= 'test/test.js';
		var sourceFile 	= 'd:/test.js';
		
		var rs = await qiaoExtCos.uploadFileSync(client, destPath, sourceFile);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();
```

## uploadFolderSync
```javascript
'use strict';

var qiaoExtCos 	= require('qiao.ext.cos');
var client		= qiaoExtCos.client(require('./config.json'));

/**
 * upload folder
 * upload d:/test folder's files to your bucket's test folder
 */
var test = async function(){
	try{
		var destPath		= 'static';
		var sourceFolder	= 'd:/static';
		
		var rs = await qiaoExtCos.uploadFolderSync(client, destPath, sourceFolder);
		console.log(rs);
	}catch(e){
		console.log(e);
	}
};

test();
```

## uploadFile
```javascript
'use strict';

var qiaoExtCos 	= require('qiao.ext.cos');
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
```

## uploadFolder
```javascript
'use strict';

var qiaoExtCos 	= require('qiao.ext.cos');
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
```

# also in cli
```shell
npm install -g qiao.ext.cos

qcos file 	z:/workspaces/qiao.ext.cos/test/config.json 	d:/test.js	test.js	
qcos folder	z:/workspaces/qiao.ext.cos/test/config.json 	d:/test/cocos	test9 	-i

or

qcos fi 	z:/workspaces/qiao.ext.cos/test/config.json 	d:/test.js 	test.js	
qcos fo		z:/workspaces/qiao.ext.cos/test/config.json 	d:/test/cocos 	test9 	-i

or

qcos | qcos -h for help
```

# version
## 0.0.3.20190529
1. check region and bucket

## 0.0.2.20190130
1. upload file async
2. upload file sync
3. upload folder async
4. upload folder sync
5. modify qcos
6. 优化代码，并行上传

## 0.0.1.20190128
1. 初始化项目
2. upload file
3. upload folder 
4. qcos ok
5. modify md
6. modify qiao.ext.cos
7. bin qcos
