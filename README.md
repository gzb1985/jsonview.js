# jsonview.js

将json转换为html，更好的呈现json数据。

### 使用方法

引用jsonview.js和jsonview.css，假设有

	<div id="jsonview"></div>，

调用：

	jsonview(jsonObj, $container);

其中，jsonObj为对象化后的json数据；$container为放置html的容器，可以是一个div元素，例如$('#jsonview')。

### 依赖于jquery