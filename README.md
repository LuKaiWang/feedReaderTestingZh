# 项目概述

该项目旨在培养测试驱动开发思维和能力，重点练习使用jasmine框架，使用jasmine版本为2.9.1,

## 测试内容

* `RSS Feeds` 测试用例
  * allFeeds 是否定义
  * allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的
  * allFeeds 对象里面的所有的源来保证有名字字段而且不是空的
* `The menu` 测试用例
  * 菜单元素默认是隐藏的
  * 当菜单图标被点击的时候菜单会切换可见状态
* `Initial Entries` 测试用例
  * loadFeed 函数被调用而且工作正常
* `New Feed Selection` 测试用例
  * 当用 loadFeed 函数加载一个新源的时候内容会真的改变
