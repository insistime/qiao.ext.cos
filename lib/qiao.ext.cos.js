'use strict';

//引入模块
var COS = require('cos-nodejs-sdk-v5');
//使用永久密钥创建实例
var cos = new COS({
SecretId: 'AKIDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
SecretKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
});
//分片上传
cos.sliceUploadFile({
Bucket: 'test-1250000000',
Region: 'ap-guangzhou',
Key: '1.zip',
FilePath: './1.zip'
}, function (err, data) {
console.log(err, data);
});