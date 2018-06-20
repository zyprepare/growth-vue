# growth-vue

前端脚手架，支持最新的最基本的前端开发环境。<br>

基于webpack4打包静态文件，支持单页面和多页面入口，支持最新js语法和sass语法。<br>

使用eslint验证代码规范性，使用mock-server模拟API请求响应数据。<br>

文件规范：所有的页面必须在src的pages目录中创建，格式为：pages/文件名/index.ejs、pages/文件名/index.js，其中，.ejs为模板文件，.js为程序入口文件。<br>
目录说明：（src下的所有目录）<br>
  components 》 公共组件目录<br>
  router 》 路由目录<br>
  server 》 请求api目录<br>
  store 》 vuex数据仓库目录<br>
  styles 》 公共样式目录<br>
  template 》 基本模版目录<br>
  utils 》 公共js文件目录<br>
  views 》 路由匹配的试图目录<br>
