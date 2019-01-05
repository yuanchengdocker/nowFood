var path = require('path');
var fs = require('fs');
var gm = require('gm').subClass({ imageMagick: true });//默认的情况下 gm使用的是另外一个图片处理程序

var app = process.app;
var config = app.get('read');
var targetDir = app.get('targetDir');

// app.get('/:filename', function (req, res) {
// 	var filePath = path.join(targetDir, req.params.filename);
// 	fs.exists(filePath, function (exists) {
// 		res.sendfile(exists ? filePath : path.join(targetDir, config.default));
// 	});
// });
var contentTypes = app.get('contentType');

app.get('/:filename', function (req, res) {
	sendFile([], req.params.filename, res);
});

app.get('/:folder/:filename', function (req, res) {
	sendFile([req.params.folder], req.params.filename, res);
});

app.get('/:folder1/:folder2/:name', function (req, res) {
	sendFile([req.params.folder1, req.params.folder2], req.params.filename, res);
});

function sendFile(folders, filename, res) {
	var ext = path.extname(filename).substr(1);
	if (!contentTypes[ext])
		return res.sendfile(getFilePath());

	folders.push(filename);
	var filePath = getFilePath(path.join.apply(path, folders));
	fs.exists(filePath, function (exists) {
		res.sendfile(exists ? filePath : getFilePath());
	});
}

function getFilePath(filename) {
	return path.join(app.get('targetDir'), filename || config.default);
}
