import indexService from '../service/indexService'

var getIndexInfo = async (ctx, next) => {
    let data = await indexService.getFoodList()
    ctx.body = {
        code:0,
        data: data
    }
    next()
}

var getFoodDetail = async (ctx, next) => {
  let {id} = ctx.request.body
  let data = await indexService.getFoodDetail(id)
  ctx.body = {
      code:0,
      data: data
  }
  next()
}

export default {
    'GET /index': getIndexInfo,
    'POST /index/detail': getFoodDetail
}
