//判断请求图片是否存在
if (exists)
	return res.sendfile(filePath);

var groups = filename.match(config.sizeReg);
if (!groups)
	return res.sendfile(getFilePath());

folders[len] = groups[1] + "." + groups[4];
filePath = getFilePath(path.join.apply(path, folders));
var width = parseInt(groups[2]);
var height = parseInt(groups[3]);
//判断原始图是否存在
fs.exists(filePath, function (exists) {
	if (!exists)
		filePath = getFilePath();

	var gm = gm(filePath);
	if (width > 0 && height > 0)
		gm.resize(width, height);
	gm.toBuffer(function (err, buffer) {
		if (err)
			return res.sendfile(getFilePath());

		res.set('Content-Type', contentTypes[ext]);
		res.send(buffer);
	});
});
