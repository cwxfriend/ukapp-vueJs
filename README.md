#基于vue.js编写的glocalme网站

###安装
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))


接口api文档 http://119.145.40.140:10091/anonymous/login

参考：使用vue重写nodejs的那个项目而做，结合公司业务，修改部分功能，添加国际化


###目录结构
<pre>
.
├── README.md           
├── dist               // 项目构建目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── i18n       		   // 语言包集中管理路径
├── test               // 自动化测试目录
├── src                // 生产代码目录
│   ├── assets         // css js 和图片资源
│   ├── components     // 各种组件
│   ├── views          // 各种页面
│   ├── libs           // 业务组件代码
│   ├── biz            // 业务逻辑代码
│   ├── filters.js     // 各种过滤器
│   ├── routers.js     // vue路由
│   └── main.js        // Webpack 预编译入口
├── server.js          // webpack-dev-server服务配置
└── webpack.config.js  // Webpack 配置文件
└── gulpfile.js  	   // gulp 配置文件
</pre>

