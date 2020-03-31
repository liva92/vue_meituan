# 一、源码项目说明:
	gshop-client_final  客户端应用
	gshop-server_final  服务器端应用


# 二、项目运行说明
## 2.1 准备
	1) 确保安装了node环境
		查看是否已经安装: node -v
	
	2) 确保安装了mongodb, 并启动了对应的服务
		查看是否安装并启动了服务: 任务管理器-->服务-->MongoDB

## 2.2  启动后台应用
	1). 进入gshop-server_final
	2). 执行命令: npm start

## 2.3 启动前台应用并访问
	1). 进入gshop-client_final
	2). 执行命令: npm start（请用chrome手机模式预览）

# 三、项目描述
-  此项目为外卖 WebApp(SPA) 
- 包括商家, 商品, 购物车, 用户等多个子模块 
- 使用 Vue 全家桶+ES6+Webpack +stylus+mockjs等前端技术 
- 引入（vue-lazyload、better-scroll、swiper）滑动库，data-fns日期处理
- 采用模块化、组件化、工程化的模式开发

# 四、项目实现功能说明

- 外卖
  -  定位功能 
  -  附近商家列表 
  -  餐馆食品列表
    - 点餐页面 
    -  单个食品预览 
    -  购物车功能 
    -  店铺评价页面 
    -  商家详情页 

+ 搜索
  +  搜索餐馆 	

+ 我的
  +  登录、注册页面 
  +  登录验证 
  +  个人中心页面 
+ 订单列表 -- no~
+  结算 -- 臣妾做不到啊~~

# 四、部分截图

<div>
  <img src="https://github.com/liva92/vue_waimai/blob/master/gshop-client_final/images/1.png" alt="1" style="zoom:48%;float:left" />
	<img src="https://github.com/liva92/vue_waimai/blob/master/gshop-client_final/images/2.png" alt="2" style="zoom:50%;float:left" /><img src="https://github.com/liva92/vue_waimai/blob/master/gshop-client_final/images/3.png" alt="3" style="zoom:50%;float:left" />
	<img src="https://github.com/liva92/vue_waimai/blob/master/gshop-client_final/images/4.png" alt="4" style="zoom:50%;float:left" /><img src="https://github.com/liva92/vue_waimai/blob/master/gshop-client_final/images/5.png" alt="4" style="zoom:50%;float:left" />
	<img src="https://github.com/liva92/vue_waimai/blob/master/gshop-client_final/images/7.png" alt="7" style="zoom:50%;float:left" /><img src="https://github.com/liva92/vue_waimai/blob/master/gshop-client_final/images/8.png" alt="8" style="zoom:50%;float:left" />
	<img src="https://github.com/liva92/vue_waimai/blob/master/gshop-client_final/images/9.png" alt="9" style="zoom:50%;float:left"/>
</div>

















