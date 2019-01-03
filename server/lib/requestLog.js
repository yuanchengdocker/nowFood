const fs = require('fs')
const path = require('path')
const log4js = require('log4js')
var log = log4js.getLogger("requst");

class LoggerFactory{
    static getLogger(config){
        // var accessLogFile = path.join(config.log.logDir,config.log.accessLogFile)
        return async (ctx,next)=> {
            const start = Date.now()
            const requestTime = new Date()
            
            const ms = Date.now() - start
            const lientIp = ctx.request.href
            let logout = `${lientIp} -- ${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${ms}ms`
            // 命令行模式下向终端输出日志
            log.info(logout);

            return next().then(()=>{
                // const ms = Date.now() - start
                // const lientIp = ctx.request.href
                // let logout = `${lientIp} -- ${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${ms}ms`
                // // 命令行模式下向终端输出日志
                // console.log(logout)
                // fs.appendFileSync(accessLogFile, logout + '\n')
                // // log.info(logout);
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}

module.exports = LoggerFactory