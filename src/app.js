module.exports = {
    pages: [
        {
            path: 'pages/index/index', 
            config: { // 页面配置，即 page.json 的内容，可选
                enablePullDownRefresh: false
            }
        },{
            path: 'pages/foodList/index', 
            config: { // 页面配置，即 page.json 的内容，可选
                enablePullDownRefresh: true,
                backgroundTextStyle: "dark"
            }
        },{
            path: 'pages/foodEdit/index', 
        },{
            path: 'pages/foodDetail/index', 
        }

    ],
    "window": {
        "backgroundTextStyle": "light",
        "navigationBarBackgroundColor": "#fff",
        "navigationBarTitleText": "袁工选餐",
        "navigationBarTextStyle": "black"
    }
}

