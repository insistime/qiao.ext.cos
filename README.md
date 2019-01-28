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
## uploadFile
```javascript
'use strict';

var qiaoExtCos 	= require('qiao.ext.cos');
var client		= qiaoExtCos.client(require('../bin/config.json'));

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
```

## uploadFolderSync
'use strict';

var qiaoExtCos 	= require('qiao.ext.cos');
var client		= qiaoExtCos.client(require('../bin/config.json'));

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
```

# also in cli
```shell
npm install -g qiao.ext.cos

and put config.json file into your-path
cd your-path

qcos file 	test/test.js	d:/test.js	
qcos folder	test		d:/test		-i

or

qcos fi 	test/test.js	d:/test.js	
qcos fo		test		d:/test		-i

or

qcos | qcos -h for help
```

# version
## 0.0.1.20190128
1. 初始化项目
2. upload file
3. upload folder 