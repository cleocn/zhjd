var express = require('express')
  , app = express()
  , fixtures = require('./fixtures_v3');


var allowOrigin = function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Accept,Origin,X-Requested-With,Content-Type,Last-Modified");
  next();
};

// global setup
app.configure(function () {
  app.set('port', process.env.PORT || 9096);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(allowOrigin);
  app.use(app.router);
});


// setup for development
app.configure('development', function () {
  app.use(express.errorHandler());
});

// server listening
app.listen(app.get('port'), function () {
  console.log('server listening on port ' + app.get('port'));
});

//================================ V2.1版本 接口API定义区域 ===========================================开始============
app.get('/versioncontrol/api/App/getAppsBySysId',function(req,res){
    res.send(fixtures.apps);
});
app.get('/versioncontrol/api/Version/getVersionsBySearchKey',function(req,res){
    res.send(fixtures.verions);
});
app.get('/versioncontrol/api/Sys/getSyssBySearchKey',function(req,res){
    res.send(fixtures.systems);
});
app.get('/versioncontrol/api/Host/getHostsBySearchKey',function(req,res){
    res.send(fixtures.hosts);
});
app.get('/versioncontrol/api/Host/getHostById',function(req,res){
    res.send(fixtures.hostById);
});
app.post('/versioncontrol/api/sys/addSys',function(req,res){
    var addSysRequest = req.body;
    addSysRequest.sysId = new Date().getTime();

    res.send(addSysRequest);
});
app.get('/versioncontrol/api/Instance/getInstancesByHostId',function(req,res){
    res.send(fixtures.instances);
});
app.get('/versioncontrol/api/Instance/getInstanceById',function(req,res){
    res.send(fixtures.instanceOne);
});

app.get('/versioncontrol/api/Check/getCheckByIDs',function(req,res){
    res.send(fixtures.tamperList);
});
// 描述：通过实例ID获取某个映射目录的下一层目录
app.get('/versioncontrol/api/File/getInfoByParentFileIdAndSteps',function(req,res){
    res.send(fixtures.treeStepData);
});
// 描述：通过实例ID获取某个映射目录的下一层目录
app.get('/versioncontrol/api/File/getMappingDirFileInfoByInstanceId',function(req,res){
    res.send(req.body);
});
// 描述：通过实例ID获取某个映射目录的右侧数据列表
app.get('/versioncontrol/api/File/getInfoByParentFileId',function(req,res){
    res.send(fixtures.treeFolderData);
});
// 描述：通过实例ID获取某个映射目录的右侧数据列表
app.get('/versioncontrol/api/File/getInfoAndMappingBySteps',function(req,res){
    res.send(fixtures.mappingRootData);
});

app.get('/versioncontrol/api/File/getFolderOrFileNameByParentId',function(req,res){
    res.send({"jsonData":[{"parentFileIdAgent":null,"fileMd5":null,"mappingCheckNode":"\\jdk-7u25-windows-x64.exe","fileSize":92832,"aMFileType":1,"aMFileName":"jdk-7u25-windows-x64.exe","aMFileUrl":"\\jdk-7u25-windows-x64.exe","mappingDirId":0,"creator":null,"checkResult":null,"parentFileId":0,"createDate":1389779231000,"lastEditor":null,"children":null,"isDeleted":0,"aMFileExtension":"exe","physicalDir":null,"aMFileIdAgent":null,"aMFileId":1301,"isDetect":1,"fileId":673,"lastUpdate":1389779231000,"versionId":4},{"creator":null,"lastEditor":null,"isDeleted":0,"children":null,"aMFileType":1,"versionId":4,"physicalDir":null,"aMFileUrl":"\\apache-maven-3.1.1-bin.zip","aMFileId":1302,"parentFileId":0,"createDate":1389832458000,"aMFileName":"apache-maven-3.1.1-bin.zip","mappingCheckNode":"\\apache-maven-3.1.1-bin.zip","fileId":2,"aMFileIdAgent":null,"mappingDirId":0,"aMFileExtension":"zip","parentFileIdAgent":null,"lastUpdate":1389832458000,"isDetect":2,"fileSize":6149,"fileMd5":null,"checkResult":null},{"fileMd5":null,"fileSize":0,"parentFileId":0,"versionId":4,"isDetect":1,"createDate":1389832493000,"physicalDir":null,"aMFileExtension":null,"mappingDirId":0,"aMFileType":2,"checkResult":null,"aMFileName":"destDir","aMFileId":1304,"mappingCheckNode":"\\destDir","children":null,"aMFileUrl":"\\destDir","parentFileIdAgent":null,"lastEditor":null,"lastUpdate":1389832493000,"isDeleted":0,"aMFileIdAgent":null,"fileId":0,"creator":null},{"mappingCheckNode":"\\主机.png","checkResult":null,"aMFileExtension":"png","isDeleted":0,"lastEditor":null,"parentFileIdAgent":null,"aMFileName":"主机.png","versionId":4,"physicalDir":null,"children":null,"createDate":1389964409000,"fileMd5":null,"creator":null,"fileId":4334,"mappingDirId":0,"aMFileIdAgent":null,"fileSize":64,"aMFileId":9942,"isDetect":1,"aMFileUrl":"\\主机.png","aMFileType":1,"parentFileId":0,"lastUpdate":1389964409000},{"mappingDirId":0,"parentFileId":0,"lastUpdate":1389964438000,"isDeleted":0,"aMFileIdAgent":null,"physicalDir":null,"fileMd5":null,"aMFileName":"treeDemo.html","aMFileId":9943,"isDetect":1,"versionId":4,"aMFileType":1,"lastEditor":null,"children":null,"checkResult":null,"parentFileIdAgent":null,"createDate":1389964438000,"fileId":6,"creator":null,"mappingCheckNode":"\\treeDemo.html","fileSize":0,"aMFileExtension":"html","aMFileUrl":"\\treeDemo.html"},{"isDeleted":0,"aMFileType":1,"creator":null,"aMFileIdAgent":null,"aMFileName":"treeDemo.js","children":null,"mappingDirId":0,"mappingCheckNode":"\\treeDemo.js","fileMd5":null,"lastEditor":null,"fileSize":0,"versionId":4,"isDetect":1,"aMFileId":9944,"checkResult":null,"aMFileUrl":"\\treeDemo.js","fileId":7,"aMFileExtension":"js","physicalDir":null,"createDate":1389964438000,"parentFileId":0,"parentFileIdAgent":null,"lastUpdate":1389964438000},{"fileId":0,"versionId":4,"aMFileUrl":"\\应用版本(最新)","aMFileIdAgent":null,"parentFileId":0,"creator":null,"aMFileType":2,"aMFileExtension":null,"checkResult":null,"aMFileName":"应用版本(最新)","aMFileId":9945,"isDetect":1,"isDeleted":0,"parentFileIdAgent":null,"fileMd5":null,"physicalDir":null,"lastUpdate":1389964497000,"lastEditor":null,"createDate":1389964497000,"fileSize":0,"mappingCheckNode":"\\应用版本(最新)","mappingDirId":0,"children":null}],"requestParam":null,"success":true,"pageInfo":null,"msg":"查询成功。"});
});
//================================ V3版本 接口API定义区域 ===========================================开始============
//cbr ====================================================
/*
* 描述：获取下级配置目录
* 请求地址：'/versioncontrol/api/configitems/getConfigFolderByParentId'
* 请求参数： {versionId:0, categoryParentId:0 }
* 接口返回： exports.configFolders (见文件api_server_v3.js)
* */
app.get('/versioncontrol/api/configitems/getConfigFolderByParentId',function(req,res){
    res.send(fixtures.configFolders);
});

/*
 * 描述：创建配置目录
 * 请求地址：'/versioncontrol/api/configitems/addConfigFolder'
 * 请求参数： {"categoryId":1, "categoryParentId":0, "versionId":1, "categoryName":"节点1", "categoryDesc":"节点1", "createTime":"2014-1-12"}
 * 接口返回：{"success":true,
 *             "requestParam":{ "searchKey":null,
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"添加成功。",
 *             "pageInfo":null,
 *             "jsonData":{"categoryId":1, "categoryParentId":0, "versionId":1, "categoryName":"节点1", "categoryDesc":"节点1", "createTime":"2014-1-12"}
 *            }
 * */
app.post('/versioncontrol/api/configitems/addConfigFolder',function(req,res){
    res.send(req.body);
});
/*
 * 描述：修改配置目录
 * 请求地址：'/versioncontrol/api/configitems/updateConfigFolder'
 * 请求参数： {"categoryId":1, "categoryParentId":0, "versionId":1, "categoryName":"节点1", "categoryDesc":"节点1", "createTime":"2014-1-12"}
 * 接口返回：{"success":true,
 *             "requestParam":{ "searchKey":null,
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"更新成功。",
 *             "pageInfo":null,
 *             "jsonData":{"categoryId":1, "categoryParentId":0, "versionId":1, "categoryName":"节点1", "categoryDesc":"节点1", "createTime":"2014-1-12"}
 *            }
 * */
app.post('/versioncontrol/api/configitems/updateConfigFolder',function(req,res){
    res.send(req.body);
});
/*
 * 描述：删除配置目录
 * 请求地址：'/versioncontrol/api/configitems/deleteConfigFolder'
 * 请求参数： {"categoryId":1, "categoryParentId":0, "versionId":1, "categoryName":"节点1", "categoryDesc":"节点1", "createTime":"2014-1-12"}
 * 接口返回：{"success":true,
 *             "requestParam":{ "searchKey":null,
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"删除成功。",
 *             "pageInfo":null,
 *             "jsonData":null
 *            }
 * */
app.delete('/versioncontrol/api/configitems/deleteConfigFolder',function(req,res){
    res.send(req.body);
});

/*
 * 描述：获取下级配置项列表
 * 请求地址：'/versioncontrol/api/configitems/getConfigItemList'
 * 请求参数： {hostId:3, instanceId:0, categoryParentId:0 } //hostId主机id,instanceId为0代表所有实例；categoryParentId父目录id
 * 接口返回： exports.configItems (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/configitems/getConfigItemList',function(req,res){
    res.send(fixtures.configItems);
});
/*
 * 描述：获取下级配置项列表(通过版本id)
 * 请求地址：'/versioncontrol/api/configitems/getConfigItemListByVersion'
 * 请求参数： {versionId:0, categoryParentId:0 } //versionId版本id；categoryParentId父目录id
 * 接口返回： exports.configItems (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/configitems/getConfigItemListByVersion',function(req,res){
    res.send(fixtures.configItems);
});
/*
 * 描述：获取配置项目录列表
 * 请求地址：'/versioncontrol/api/configitems/getConfigScriptFolderList'
 * 请求参数： {
 *             versionId: 0,//所属版本id
 *             parentFileId: 0//父目录id
 *           }
 * 接口返回： exports.configItems (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/configitems/getConfigScriptFolderList',function(req,res){
    res.send(fixtures.scriptFolders);
});
/*
 * 描述：获取配置项文件列表
 * 请求地址：'/versioncontrol/api/configitems/getConfigScriptFileList'
 * 请求参数： {
 *             versionId: 0,//所属版本id
 *             parentFileId: 0//父目录id
 *           }
 * 接口返回： exports.scriptFiles (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/configitems/getConfigScriptFileList',function(req,res){
    res.send(fixtures.scriptFiles);
});

/*
 * 描述：创建配置项
 * 请求地址：'/versioncontrol/api/configitems/addConfigItem'
 * 请求参数： {"configBaseId":0, "categoryName":"配置项1", "categoryId":0, "configType":1, "orderNumber":1, "publishFileId":1, "checkFileId":1, "createDate":"2014-1-12"}
 * 接口返回：{"success":true,
 *             "requestParam":{ "searchKey":null,
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"添加成功。",
 *             "pageInfo":null,
 *             "jsonData":{"configBaseId":0, "categoryName":"配置项1", "categoryId":0, "configType":1, "orderNumber":1, "publishFileId":1, "checkFileId":1, "createDate":"2014-1-12"}
 *            }
 * */
app.post('/versioncontrol/api/configitems/addConfigItem',function(req,res){

    res.send({
        "success":true,
        "requestParam":{
            "searchKey":null,
            "reqPageModel":{"***":"***"},
            "reqPageInfo":null
        },
        "msg":"添加成功。",
        "pageInfo":null,
        "jsonData":{"configBaseId":0, "categoryName":"配置项n", "categoryId":0, "configType":1, "orderNumber":1, "publishFileId":1, "publishFileName":"dddd", "checkFileId":1, "checkFileName":"yyyyy", "createDate":"2014-1-12"}
    });//req.body
});
/*
 * 描述：修改配置项
 * 请求地址：'/versioncontrol/api/configitems/updateConfigItem'
 * 请求参数： {"configBaseId":2, "categoryName":"配置项1", "categoryId":0, "configType":1, "orderNumber":1, "publishFileId":1, "checkFileId":1, "createDate":"2014-1-12"},
 * 接口返回：{"success":true,
 *             "requestParam":{ "searchKey":null,
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"更新成功。",
 *             "pageInfo":null,
 *             "jsonData":{"configBaseId":2, "categoryName":"配置项1", "categoryId":0, "configType":1, "orderNumber":1, "publishFileId":1, "checkFileId":1, "createDate":"2014-1-12"}
 *            }
 * */
app.post('/versioncontrol/api/configitems/updateConfigItem',function(req,res){
    res.send(req.body);
});
/*
 * 描述：删除配置项
 * 请求地址：'/versioncontrol/api/configitems/deleteConfigItem'
 * 请求参数： {"configBaseId": 1}
 * 接口返回：{"success":true,
 *             "requestParam":{ "searchKey":null,
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"删除成功。",
 *             "pageInfo":null,
 *             "jsonData":null
 *            }
 * */
app.delete('/versioncontrol/api/configitems/deleteConfigItem',function(req,res){
    res.send(req.body);
});

/*
 * 描述：获取下级配置目录
 * 请求地址：'/versioncontrol/api/hosts/getConfigItemFolderByParentId'
 * 请求参数： {hostId:3, instanceId:0, categoryParentId:0 } //hostId主机id,instanceId为0代表所有实例；categoryParentId父目录id
 * 接口返回： exports.configFolders (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/hosts/getConfigItemFolderByHostId',function(req,res){
    res.send(fixtures.configAllFolders);
});

/*
 * 描述：实例发布预览下的配置项预览，获取下级配置目录
 * 请求地址：'/versioncontrol/api/hosts/getConfigItemFolderByInstanceId'
 * 请求参数： {instanceId:0, categoryParentId:0 }
 * 接口返回： exports.configFolders (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/hosts/getConfigItemFolderByInstanceId',function(req,res){
    res.send(fixtures.configFolders);
});

/*
 * 描述：获取配置项防篡改设置列表
 * 请求地址：'/versioncontrol/api/hosts/getConfigItemTamperList'
 * 请求参数： {
 *             hostId:0,//主机id 为0代表忽略此参数
 *             instanceId: 0,//所属实例id 为0代表忽略此参数
 *             categoryParentId:0//父级id
 *             currentPage: 0,//当前页
 *             pageSize: 50 //分页尺寸
 *           }
 * 接口返回： exports.configSettings (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/hosts/getConfigItemTamperList',function(req,res){
    res.send(fixtures.configSettings);
});
/*
 * 描述：创建配置项防篡改设置
 * 请求地址：'/versioncontrol/api/hosts/addTamperSetting'
 * 请求参数：{"csconfigId":1, "instanceId":1, "configBaseId":0, "status":1, "intervalTime":3, "createDate": "2014-1-12"}
 * 接口返回：{"success":true,
 *             "requestParam":{ "searchKey":null,
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"添加成功。",
 *             "pageInfo":null,
 *             "jsonData":{"csconfigId":1, "instanceId":1, "configBaseId":0, "status":1, "intervalTime":3, "createDate": "2014-1-12"}
 *            }
 * */
app.post('/versioncontrol/api/hosts/addTamperSetting',function(req,res){
    res.send(req.body);
});
/*
 * 描述：修改配置项防篡改设置
 * 请求地址：'/versioncontrol/api/hosts/updateTamperSetting'
 * 请求参数： {"csconfigId":1, "instanceId":1, "configBaseId":0, "status":1, "intervalTime":3}
 * 接口返回：{"success":true,
 *             "requestParam":{
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"更新成功。",
 *             "pageInfo":null,
 *             "jsonData":{"csconfigId":1, "instanceId":1, "configBaseId":0, "status":1, "intervalTime":3, "createDate": "2014-1-12"}
 *            }
 * */
app.post('/versioncontrol/api/hosts/updateTamperSetting',function(req,res){
    res.send(req.body);
});

//linwb===========================================================================
/*
 * 描述：实例页面发布任务   linwb
 * 请求地址：'/versioncontrol/api/tasks/publishTask'
 * 请求参数： {"instanceId":1, "taskType":2}           任务类型（1,发布文件，2.发布配置项）
 * 接口返回：{"success":true,
 *             "requestParam":{
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"成功。",
 *             "pageInfo":null,
 *             "jsonData":{}
 *            }
 * */
app.post('/versioncontrol/api/tasks/publishTask',function(req,res){
    res.send(req.body);
});



/*
 * 描述：获取指定主机下所有实例映射目录(单层加载)
 * 请求地址：'/versioncontrol/api/File/getMappingFolderByHostId'
 * 请求参数： {hostId:1, instanceId:0, parentFileId: 0}//hostId为主机id, instanceId为0代表所有实例，parentFileId为0代表根目录
 * 接口返回： exports.mappingFolder (见文件fixtures_v3.js)
 * */
app.get('/versioncontrol/api/Check/getMappingFolderByHostId',function(req,res){
    res.send(fixtures.MappingFolders);
});
/*
 * 描述：查看文件检测结果页面，点击其中一条数据的查询详细   linwb
 * 请求地址：'/versioncontrol/api/File/getFileCheckDetail'
 * 请求参数： {"amFileId":0, "instanceId": 3, "currentPage":0, "pageSize":10}
 * 接口返回： exports.fileCheckDetail (见文件fixtures_v3.js)
 * */
app.get('/versioncontrol/api/Check/getFileCheckDetail',function(req,res){
    res.send(fixtures.fileCheckDetail);
});

/*
 * 描述：查看配置项检测结果页面，点击其中一条数据的查询详细   linwb
 * 请求地址：'/versioncontrol/api/configitems/getConfigItemCheckDetail'
 * 请求参数： {"configBaseId":0, "currentPage":0, "pageSize":10}
 * 接口返回： exports.configItemCheckDetail (见文件fixtures_v3.js)
 * */
app.get('/versioncontrol/api/Check/getConfigItemCheckDetail',function(req,res){
    res.send(fixtures.configItemCheckDetail);
});

//lxq ====================================================
/*
 * 描述：获取发布任务列表
 * 请求地址：'/versioncontrol/api/tasks/getTaskList'
 * 请求参数： {
 *             sysId: 0,//所属系统id
 *             appId: 0,//所属应用id
 *             taskType: 1,//任务类型（1,发布文件，2.发布配置项）
 *             currentPage: 0,//当前页
 *             pageSize: 50 //分页尺寸
 *           }
 * 接口返回： exports.tasks (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/tasks/getTaskList',function(req,res){
    res.send(fixtures.tasks);
});

/*
 * 描述：获取发布任务日志详情列表
 * 请求地址：'/versioncontrol/api/tasklogs/getTaskDetailLogList'
 * 请求参数： {
 *             taskId: 0,//所属任务id
 *             currentPage: 0,//当前页
 *             pageSize: 50 //分页尺寸
 *           }
 * 接口返回： exports.tasklogs (见文件api_server_v3.js)
 * */
app.get('/versioncontrol/api/tasks/getTaskDetailLogList',function(req,res){
    res.send(fixtures.tasklogs);
});

/*
 * 描述：通过CheckId获取ConfigBaseId
 * 请求地址：'/versioncontrol/api/Check/getConfigBaseIdByCheckId'
 * 请求参数： {
 *             checkId: 0,//检测id
 *           }
 * 接口返回： {"success":true,
 *             "requestParam":{ "searchKey":null,
 *                              "reqPageModel":{"***":"***"},
 *                              "reqPageInfo":null
 *                            },
 *             "msg":"更新成功。",
 *             "pageInfo":null,
 *             "jsonData":{"configBaseId":1}
 *            }
 * */
app.get('/versioncontrol/api/Check/getConfigBaseIdByCheckId',function(req,res){
    res.send({"success":true,
        "requestParam":{
            "checkId":0,
            "reqPageModel":{"***":"***"},
            "reqPageInfo":null
        },
        "msg":"更新成功。",
        "pageInfo":null,
        "jsonData":{"configBaseId":1}
    });

});

//lxq ==================================================== END

//================================ V3版本 接口API定义区域 ===========================================结束============







//================================ 老接口API定义区域   使老的功能可以模拟使用====================================
//主机管理: 增加主机
app.post('/versioncontrol/api/Host/addHost',function(req,res){
    var data = req.body;
    data.sysId = new Date().getTime();

    res.send(data);
});
//主机管理: 删除主机
app.delete('/versioncontrol/api/Host/deleteHost',function(req,res){
    var data = req.body;
    res.send(data);
});
//主机管理: 修改主机
app.post('/versioncontrol/api/Host/updateHost',function(req,res){
    var data = req.body;
    res.send(data);
});

//获取单个系统
//请求参数：{"sysId":"***"}
//接口返回：
app.get('/versioncontrol/api/Sys/getSysById',function(req,res){
    res.send(fixtures.systems.jsonData[0]);
});

//创建系统
//请求参数：{"sysId": "***","sysName":"***","sysDesc": "***", "createDate":"***","lastUpdate":"***","FileId":"***"}
//接口返回：
app.post('/versioncontrol/api/Sys/addSys',function(req,res){
    var addSysRequest = req.body;
    addSysRequest.sysId = new Date().getTime();

    res.send(addSysRequest);
});

//编辑系统信息
//请求参数：{"sysId": "***","sysName":"***","sysDesc": "***", "createDate":"***","lastUpdate":"***","FileId":"***"}
//接口返回：
app.post('/versioncontrol/api/Sys/updateSys',function(req,res){
    var sysData = req.body;
    res.send(sysData);
});


//删除系统
//请求参数：{"sysId":"***"}
//接口返回：
app.delete('/versioncontrol/api/Sys/deleteSys',function(req,res){
    var sysData = req.body;
    res.send(sysData);
});

//请求图片
app.get('/versioncontrol/api/Icon/getIcon',function(req,res){
    var sysData = req.body;
    res.send(sysData);
});

//获取单个应用
//请求参数：{"Id":"***"}
//接口返回：
app.get('/versioncontrol/api/App/getAppById',function(req,res){
    res.send(fixtures.apps.jsonData[0]);
});
//编辑应用
//请求参数：{"appId":"1","appName":"***","appDesc":"***","SysId":"111","CreateDate":"2013-12-12","LastUpdate":"2013-12-12"}
//接口返回：
app.post('/versioncontrol/api/App/updateApp',function(req,res){
    var appData = req.body;
    res.send(appData);
});

//创建应用
//请求参数：{"appName":"***","appDesc":"***","SysId":"111","CreateDate":"2013-12-12","LastUpdate":"2013-12-12"}
//接口返回：
app.post('/versioncontrol/api/App/addApp',function(req,res){
    var addAppRequest = req.body;
    addAppRequest.appId = new Date().getTime();

    res.send(addAppRequest);
});

//删除应用
//请求参数：{"Id":"***"}
//接口返回：
app.delete('/versioncontrol/api/App/deleteApp',function(req,res){
    var appId = req.params.appId;
    var appData = req.body;
    res.send(appData);
});

//特定版本
app.get('/versioncontrol/api/Version/getVersionById',function(req,res){
    res.send(fixtures.verions.jsonData[0]);
});
//创建版本
//请求地址：
//请求参数：{"appId":"1","versionId":"1001","versionName":"1001","versionDesc":"1001","versionStatus":"0"}
app.post('/versioncontrol/api/Version/addVersion',function(req,res){
    var addVerRequest = req.body;
    addVerRequest.versionId = new Date().getTime();

    res.send(addVerRequest);
});

//修改版本
//请求参数：{"appId":"1","versionId":"1001","versionName":"1001","versionDesc":"1001","versionStatus":"0"}
//接口返回：
app.post('/versioncontrol/api/Version/updateVersion',function(req,res){
    var verData = req.body;
    res.send(verData);
});

//删除版本
//请求参数：{"versionId":"***"}
//接口返回：
app.delete('/versioncontrol/api/Version/deleteVersion',function(req,res){
    //var verId = req.params.verId;
    var verData = req.body;
    res.send(verData);
});

//获取应用版本主机实例信息
//请求参数：
//接口返回：
app.get('/versioncontrol/api/Version/getHostsByAppId',function(req,res){

    res.send(fixtures.hosts);
});

//应用关联版本列表示
app.get('/versioncontrol/api/Version/getAppAndVersionByAppId',function(req,res){

    res.send(fixtures.versions);
});


//实例管理：查询列表
app.get('/versioncontrol/api/Instance/getInstancesBySearchKey',function(req,res){
    res.send(fixtures.instances);
});
//实例管理: 增加实例
app.post('/versioncontrol/api/Instance/addInstance',function(req,res){
    var data = req.body;
    res.send(data);
});
//实例管理: 删除实例
app.delete('/versioncontrol/api/Instance/deleteInstance',function(req,res){
    var data = req.body;
    res.send(data);
});
//实例管理: 修改实例
app.post('/versioncontrol/api/Instance/updateInstance',function(req,res){
    var data = req.body;
    res.send(data);
});
//通过实例Id获取应用
app.post('/versioncontrol/api/Instance/getAppByInstanceId',function(req,res){
    res.send(fixtures.apps.jsonData[0]);
});



app.get('/versioncontrol/api/MappingDir/getMappingDirList',function(req,res){
    res.send(fixtures.dirMappingList);
});

app.post('/versioncontrol/api/MappingDir/addMappingDir',function(req,res){
    var data = req.body;
    res.send(data);
});

app.post('/versioncontrol/api/MappingDir/updateMappingDir',function(req,res){
    var data = req.body;
    res.send(data);
});

app.delete('/versioncontrol/api/MappingDir/deleteMappingDir',function(req,res){
    var data = req.body;
    res.send(data);
});

//================================ V4版本 接口API定义区域 ================================
//===========开始============
//获取审计列表
app.get('/versioncontrol/api/AuditConfig/getAuditConfigList',function(req,res){
    res.send(fixtures.auditConfigList);
});

//设置接收者
app.post('/versioncontrol/api/AuditConfig/setReceiver',function(req,res){
    res.send({
        "success":true,
        "msg":"查询成功。"
    });
});

//暂停审计
app.post('/versioncontrol/api/AuditConfig/stopAuditConfig',function(req,res){
    res.send({
        "success":true,
        "msg":"查询成功。"
    });
});

//启用审计
app.post('/versioncontrol/api/AuditConfig/startAuditConfig',function(req,res){
    res.send({
        "success":true,
        "msg":"查询成功。"
    });
});

//获取用户列表
app.get('/versioncontrol/api/AuditConfig/getAllUserAccount',function(req,res){
    res.send(fixtures.userAccountList);
});

//获取审计报表列表
app.get('/versioncontrol/api/AuditOperationLog/getAuditOperationLogs',function(req,res){
    res.send(fixtures.auditOperationLogs);
});

//消息通知设置主机树
app.get('/versioncontrol/api/Token/getTokenList',function(req,res){
    res.send(fixtures.tokenList);
});

//消息通知设置应用树
app.get('/versioncontrol/api/App/getSimpleAppList',function(req,res){
    res.send(fixtures.simpleAppList);
});

//添加消息通知
app.post('/versioncontrol/api/Message/addMessage',function(req,res){
    res.send(fixtures.addMessageResponse);
});

//修改消息通知
app.post('/versioncontrol/api/Message/updateMessage',function(req,res){
    res.send(fixtures.addMessageResponse);
});

//删除消息通知
app.delete('/versioncontrol/api/Message/deleteMessage',function(req,res){
    res.send(fixtures.addMessageResponse);
});

//消息通知列表
app.get('/versioncontrol/api/Message/getMessageByRecord',function(req,res){
    res.send(fixtures.messageList);
});

//应用角色列表
app.get('/versioncontrol/api/Source/getAppRoles',function(req,res){
    res.send(fixtures.appRoles);
});

//获取系统所有的对象资源
app.get('/versioncontrol/api/Source/getAppResource',function(req,res){
    res.send(fixtures.resourceList);
});

//获取角色对应的资源列表
app.get('/versioncontrol/api/Source/queryResIdByRoleid',function(req,res){
    res.send(fixtures.roleResourceList);
});

//保存对象资源授权设置
app.get('/versioncontrol/api/Source/saveResourceMapping',function(req,res){
    res.send({
        "success":true,
        "msg":"保存成功。"
    });
});




