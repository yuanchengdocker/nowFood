let isDev = process.env.NODE_ENV == 'development'

export const config = {
    url: isDev?'http://localhost:3000/now':'https://www.yuancc.top/now'
  }
