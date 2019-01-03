import path from 'path'

const basePath = path.join(__dirname,"./")
export default {
    port: 3000,
    log: {
        logDir: basePath+"log",
        accessLogFile: "access.log",
    }
}
