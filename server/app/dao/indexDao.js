const mysql = require('./../utils/mysqlUtil.js');
const log4js = require('log4js')
var log = log4js.getLogger("indexDao");

var getFoodList = async (userId) => {
    let mysqlOptions = {
        sql : 'select * from food_menu',
        args : [userId]
    };
    try {
        var users = await mysql.execQuery(mysqlOptions);
    } catch (error) {
        log.error(error)
    }
    if(users.length == 0) {
        return null;
    } else {
        return users;
    }
}
var getFoodDetail = async (id) => {
  let mysqlOptions = {
      sql : 'select * from food_menu where id = ?',
      args : [id]
  };
  try {
      var food = await mysql.execQuery(mysqlOptions);
  } catch (error) {
      log.error(error)
  }
  if(food.length == 0) {
      return {};
  } else {
      return food[0];
  }
}

module.exports = {
    getFoodList : getFoodList,
    getFoodDetail
}
