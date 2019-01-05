module.exports = {
    pages: [
        {
            path: 'pages/index/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
        },{
            path: 'pages/foodList/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
            config: { // 页面配置，即 page.json 的内容，可选
                enablePullDownRefresh: true
            }
        },{
            path: 'pages/foodEdit/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
        },{
            path: 'pages/foodDetail/index', // 页面路径，同时是 vue 文件相对于 src 的路径，必填
        }

    ],
    "window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "袁工选餐",
        "navigationBarTextStyle": "black"
    }
}

