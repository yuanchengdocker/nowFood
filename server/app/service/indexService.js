const indexDao = require('./../dao/indexDao.js');

var getFoodList = async (userId) => {
    var users = indexDao.getFoodList(userId);

    return users;
}

var getFoodDetail = async (id) => {
  var food = indexDao.getFoodDetail(id);

  return food;
}

module.exports = {
    getFoodList : getFoodList,
    getFoodDetail
}
