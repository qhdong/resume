联系方式
=======

* Email: dongqihong@vip.qq.com
* QQ: 798525614
* Github: http://github.com/qhdong
* Blog: http://qhdong.github.io

个人信息
=======

* 董启宏 / 男 / 1993
* 硕士 / 东南大学 / 信息安全 （2015 - 2018）
* 本科 / 东南大学 / 信息工程 （2010 - 2014）
* CET-6 / CET-4

奖励活动
=======

* 第十二届全国研究生数学建模竞赛全国二等奖
* 2012年江苏省电子设计竞赛二等奖
* 学业二等奖学金 / 叶晶奖学金 / 三菱电机奖学金
* 硕士、本科期间均担任班长
* 校三好学生、丽江市优秀青年志愿者

项目经验
=======

智能手机传感器用户隐私提取
----------------------

此项目期望通过智能手机传感器提取到用户的隐私信息。作为项目负责人，我主要负责理论研究和软件开发工作，通过编写基于`ES6`的`Webapp`，利用`devicemotion`获取手机加速度传感器、陀螺仪等数据，实时传送到后台服务器存储。利用机器学习训练模型，实现通过传感器数据识别出用户在数字键盘上的按键内容，从而获取密码等隐私信息。在这个项目，我遇到的困难是如何将传感器数据实时传送的后台，我通过使用`NodeJS`、`MongoDB`、`SocketIO`完成了这一挑战，在实际测试中面对复杂的网络环境，基本能够做到实时传输。在机器学习阶段，我设计了训练模型，采用有监督的机器学习方法，首先对数据序列分割为对应每次按键的片段，然后求向量的多个统计特征，如最大值、最小值、均方根、波峰、波谷等数据，然后使用多层神经网络训练，目前项目正处于此攻艰阶段。

中影南京4D电影座椅控制系统
----------------------

2014年我参与了4D电影座椅控制系统的开发。作为核心开发者，我使用`C++`和`Qt`在`Linux`平台下开发中控平台，配合影院排片服务器，在电影开始播放时将相应的动作数据下发给座椅，实现4D影厅内座椅的控制、同步，同时监控座椅的状态，实时显示在控制界面。在此项目中我遇到的主要困难有： 如何保证所有座椅动作帧的同步，如何检查座椅是否断开连接？ 我通过使用`心跳包`完成这一挑战; 排片服务器没有提供接口，如何在添加新的动作文件后自动下发？ 我通过使用`Linux`下的`inotify`文件系统事件控制机制实现了实时同步动作文件。该项目产品已在泉州、丹阳等多家影院稳定运营，影院反应良好。


工作经验
=======

三星电子中国研发中心 （实习）
------------------------

2016/02 - 2016/06，参与三星电视浏览器网页广告拦截专利的编写，通过公司内部专利评审； 参与SCRC智能电视Web开发库的维护； 预研Firefox的webVR库——`A-Frame`，在`WebMM`小组内做汇报。在三星实习的这段经历为我打下了坚实的`Web`基础，让我对现代前端技术有了更加深刻的了解，提高了`JavaScript`、`NodeJS`等技术的应用能力。


一步智能科技 （实习）
-----------------

2015/10 - 2016/01，参与公司多功能WiFi移动终端嗅探系统的软件开发和测试工作，我主要负责提取抓到的TCP包中的用户身份特征、以及匹配逻辑的编写。为了提高效率，我使用`Pandas`和`Matplotlib`编写了数据可视化脚本，获得了同事好评。实习期间，我的网络知识得到了提高，熟练掌握了`Linux`平台下的开发工具链。

开源项目和作品
============

* [pymorse](https://github.com/qhdong/pymorse): python下支持中文的莫斯电码编码/解码库
* [web-server](https://github.com/qhdong/web-server): 最基本的web server，能够提供静态文件服务、最基本的CGI脚本
* [gobang](http://qhdong.github.io/gobang): 使用JavaScript编写的具有一定智能的五子棋游戏

技能清单
=======

以下均为我熟练使用的技能

* Web开发： JavaScript / NodeJS / Flask
* 前端框架： Bootstrap / Vue / HTML5
* 前端工具： Webpack / Gulp / SaSS
* 后端开发： C / C++ / Java / Python
* 机器学习: NumPy / Pandas / Matplotlib / sk-learn
* 数据库： MySQL / MongoDB / Redis / SQLite
* 版本控制和开发工具： Git / gdb / clang / Linux
* 单元测试： JUnit

致谢
====

感谢您花宝贵时间阅读我的简历，期待能有机会与您共事。
