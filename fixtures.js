//================================ V2.1版本 数据结构定义区域 ===========================================开始============
exports.applications = [
    {"sysId": 5, "checkStatus": null, "appId": 8, "appDesc": "testa11", "createDate": 1388999345000, "fileId": 0, "lastUpdate": 1389061450000, "fileUrl": "0", "appName": "Linwb_App"},
    {"fileId": 0, "appName": "asd", "appDesc": "asdasd", "appId": 14, "lastUpdate": 1389061620000, "sysId": 5, "fileUrl": "0", "checkStatus": null, "createDate": 1389061596000},
    { "systemId": "101", "systemName": "PRM系统", "applicationId": "201", "applicationName": "Web应用1", "description": "Web应用1", "editTime": "2013-01-01 10:10:10", "editUser": "zxh" },
    { "systemId": "101", "systemName": "PRM系统", "applicationId": "202", "applicationName": "DB应用1", "description": "DB应用1", "editTime": "2013-01-01 10:10:10", "editUser": "zxh" },
    { "systemId": "103", "systemName": "三方存管", "applicationId": "203", "applicationName": "Web应用2", "description": "Web应用2", "editTime": "2013-01-01 10:10:10", "editUser": "zxh" },
    { "systemId": "103", "systemName": "三方存管", "applicationId": "204", "applicationName": "DB应用2", "description": "DB应用2", "editTime": "2013-01-01 10:10:10", "editUser": "zxh" }
];
exports.systems = {
    "requestParam": {
        "searchKey": "***",
        "ReqPageInfo": [
            {"currentPage": "***", "pageSize": "***"}
        ],
        "ReqPageModel": [
            {"sysId": "***", "sysName": "***", "sysDesc": "***", "createDate": "***", "lastUpdate": "***", "FileId": "***"}
        ]
    },
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"sysId": 5, "sysDesc": "test", "appList": null, "sysName": "Linwb_Sys", "lastUpdate": 1388999333000, "checkStatus": null, "fileUrl": "0", "fileId": 0, "createDate": 1388999333000},
        {"sysId": "1", "sysName": "厂商管理系统", "sysDesc": "厂商管理系统的描述...", "createDate": "2013-10-11 10:20:30", "lastUpdate": "2013-10-11 10:20:30", "FileId": "100", "FileUrl": "../images/icon_systems_active.png"},
        {"sysId": "2", "sysName": "厂商管理系统2", "sysDesc": "厂商管理系统的描述2...", "createDate": "2013-10-12 10:20:30", "lastUpdate": "2013-10-12 10:20:30", "FileId": "101", "FileUrl": "../images/icon_systems_active.png"}

    ]
};
exports.hosts = {
    "msg": "查询成功。",
    "requestParam": {"searchKey": "", "reqPageModel": null, "reqPageInfo": {"totalRecords": 0, "pageSize": 1000, "currentPage": 0}},
    "jsonData": [
        {"lastUpdate": 1389335862000, "createDate": 1388716041000, "fileUrl": "9", "versionId": 0, "hostName": "hyc_主机1", "hostIp": "99.1.67.18", "instanceId": 0, "fileId": 9, "hostDesc": null, "hostId": 1},
        {"lastUpdate": 1389335862000, "createDate": 1388716041000, "fileUrl": "9", "versionId": 0, "hostName": "hyc_主机2", "hostIp": "99.1.67.20", "instanceId": 1, "fileId": 9, "hostDesc": null, "hostId": 2}
    ]
};
exports.hostById = {
    "msg": "查询成功。",
    "requestParam": {"searchKey": "", "reqPageModel": null, "reqPageInfo": {"totalRecords": 0, "pageSize": 1000, "currentPage": 0}},
    "jsonData": {"lastUpdate": 1389335862000, "createDate": 1388716041000, "fileUrl": "9", "versionId": 0, "hostName": "hyc_主机1", "hostIp": "99.1.67.18", "instanceId": 0, "fileId": 9, "hostDesc": null, "hostId": 1}
};
exports.tamperList = {
    "success": true,
    "requestParam": {
        "reqPageModel": {},
        "searchKey": null,
        "reqPageInfo": {"totalRecords": 21, "currentPage": 0, "pageSize": 10}
    },
    "pageInfo": null,
    "msg": "查询成功。",
    "jsonData": [
        {"normalTotal": 6, "instanceName": "实例1", "CheckType": 1, "appId": 67, "versionName": "1.0", "hostId": 0, "allTotal": 102, "appName": "应用1", "sysId": 50, "checkDate": "2014-01-20 18:07:06.0", "hostName": null, "versionId": 0, "instanceId": 125, "sysName": "lxqtest4", "checkId": 1},
        {"normalTotal": 7, "instanceName": "实例2", "CheckType": 1, "appId": 67, "versionName": "2.0", "hostId": 0, "allTotal": 202, "appName": "应用2", "sysId": 50, "checkDate": "2014-01-20 18:07:06.0", "hostName": null, "versionId": 0, "instanceId": 125, "sysName": "hjg", "checkId": 2},
        {"normalTotal": 8, "instanceName": "实例3", "CheckType": 2, "appId": 67, "versionName": "3.0", "hostId": 0, "allTotal": 302, "appName": "应用3", "sysId": 50, "checkDate": "2014-01-20 18:07:06.0", "hostName": null, "versionId": 0, "instanceId": 125, "sysName": "jkd", "checkId": 3}
    ]
};
//映射树的一级数据
exports.treeStepData = {
    "pageInfo": null, "success": true, "requestParam": null, "msg": "查询成功。",
    "jsonData": [
        {"aMFileIdAgent": null, "lastUpdate": null, "aMFileUrl": "\\destDir", "aMFileExtension": null, "lastEditor": null, "createDate": null, "fileId": 0, "isDetect": 0, "parentFileIdAgent": null, "fileMd5": null, "aMFileType": 2, "aMFileName": "destDir(F;)", "physicalDir": "F;", "creator": null, "mappingCheckNode": "\\destDir", "isDeleted": 0, "checkResult": null, "parentFileId": 0, "children": null, "versionId": 11, "mappingDirId": 283, "fileSize": 0, "aMFileId": 1268},
        {"children": null, "aMFileName": "config(ee)", "createDate": null, "aMFileUrl": "\\destDir\\config", "aMFileType": 2, "checkResult": null, "parentFileId": 1268, "mappingCheckNode": "\\destDir\\config", "lastUpdate": null, "aMFileId": 1269, "creator": null, "fileSize": 0, "parentFileIdAgent": null, "aMFileExtension": null, "isDetect": 0, "physicalDir": "ee", "aMFileIdAgent": null, "lastEditor": null, "mappingDirId": 308, "versionId": 11, "isDeleted": 0, "fileMd5": null, "fileId": 0}
    ]
};
//映射树的根下的目录
exports.mappingRootData = {
    "pageInfo": null, "success": true, "requestParam": null, "msg": "查询成功。",
    "jsonData": [
        {"aMFileIdAgent": null, "lastUpdate": null, "aMFileUrl": "\\destDir", "aMFileExtension": null, "lastEditor": null, "createDate": null, "fileId": 0, "isDetect": 0, "parentFileIdAgent": null, "fileMd5": null, "aMFileType": 2, "aMFileName": "destDir(Fssss;)", "physicalDir": "F;", "creator": null, "mappingCheckNode": "\\destDir", "isDeleted": 0, "checkResult": null, "parentFileId": 0, "children": null, "versionId": 11, "mappingDirId": 283, "fileSize": 0, "aMFileId": 1268},
        {"children": null, "aMFileName": "config(essse)", "createDate": null, "aMFileUrl": "\\destDir\\config", "aMFileType": 2, "checkResult": null, "parentFileId": 1268, "mappingCheckNode": "\\destDir\\config", "lastUpdate": null, "aMFileId": 1269, "creator": null, "fileSize": 0, "parentFileIdAgent": null, "aMFileExtension": null, "isDetect": 0, "physicalDir": "ee", "aMFileIdAgent": null, "lastEditor": null, "mappingDirId": 308, "versionId": 11, "isDeleted": 0, "fileMd5": null, "fileId": 0}
    ]
};
//点击树的文件夹
exports.treeFolderData = {
    "msg": "查询成功。", "success": true, "requestParam": null, "pageInfo": null,
    "jsonData": [
        {"lastUpdate": 1389775723000, "isDetect": 1, "fileId": 0, "checkResult": 'A', "fileSize": 0, "aMFileExtension": null, "versionId": 11, "physicalDir": null, "parentFileId": 1268, "aMFileType": 2, "aMFileName": "config", "parentFileIdAgent": null, "mappingDirId": 0, "isDeleted": 0, "children": null, "aMFileUrl": "\\destDir\\config", "mappingCheckNode": "\\destDir\\config", "createDate": 1389775723000, "lastEditor": null, "aMFileIdAgent": null, "creator": null, "aMFileId": 1269, "fileMd5": null},
        {"versionId": 11, "createDate": 1389775723000, "isDetect": 1, "aMFileId": 1273, "aMFileName": "config.xml", "mappingDirId": 0, "checkResult": 'U', "creator": null, "parentFileIdAgent": null, "lastEditor": null, "aMFileIdAgent": null, "fileMd5": null, "aMFileExtension": "xml", "physicalDir": null, "mappingCheckNode": "\\destDir\\config.xml", "lastUpdate": 1389775723000, "parentFileId": 1268, "fileId": 662, "fileSize": 0, "isDeleted": 0, "children": null, "aMFileType": 1, "aMFileUrl": "\\destDir\\config.xml"},
        {"mappingDirId": 0, "checkResult": 'D', "children": null, "aMFileUrl": "\\destDir\\copy.xml", "aMFileId": 1274, "lastEditor": null, "fileId": 663, "fileSize": 0, "parentFileId": 1268, "aMFileType": 1, "createDate": 1389775723000, "isDetect": 1, "fileMd5": null, "isDeleted": 0, "versionId": 11, "physicalDir": null, "mappingCheckNode": "\\destDir\\copy.xml", "aMFileExtension": "xml", "parentFileIdAgent": null, "lastUpdate": 1389775723000, "creator": null, "aMFileIdAgent": null, "aMFileName": "copy.xml"},
        {"parentFileIdAgent": null, "fileMd5": null, "children": null, "aMFileUrl": "\\destDir\\try", "checkResult": 'U', "fileSize": 0, "aMFileId": 1275, "mappingDirId": 0, "lastEditor": null, "createDate": 1389775723000, "fileId": 0, "isDetect": 1, "aMFileExtension": null, "parentFileId": 1268, "mappingCheckNode": "\\destDir\\try", "isDeleted": 0, "aMFileIdAgent": null, "lastUpdate": 1389775723000, "physicalDir": null, "versionId": 11, "creator": null, "aMFileType": 2, "aMFileName": "try"},
        {"versionId": 11, "checkResult": 'A', "aMFileUrl": "\\destDir\\versionV2.0_API20131120.xlsx", "aMFileName": "versionV2.0_API20131120.xlsx", "aMFileIdAgent": null, "fileId": 666, "fileMd5": null, "children": null, "parentFileIdAgent": null, "aMFileType": 1, "aMFileId": 1278, "parentFileId": 1268, "creator": null, "mappingDirId": 0, "fileSize": 17, "mappingCheckNode": "\\destDir\\versionV2.0_API20131120.xlsx", "lastUpdate": 1389775724000, "createDate": 1389775724000, "isDetect": 1, "isDeleted": 0, "aMFileExtension": "xlsx", "physicalDir": null}
    ]
};
//主机实例
exports.instances = {"requestParam": {"reqPageInfo": null, "searchKey": null, "reqPageModel": {"instanceName": null, "hostId": 1, "versionName": null, "createDate": null, "host": null, "instanceId": 0, "fileUrl": null, "versionId": 0, "instanceDesc": null, "fileId": 0}}, "msg": "查询成功。",
    "jsonData": [
        {"fileUrl": "0", "versionId": 164, "fileId": 0, "hostId": 1, "host": {"lastUpdate": 1389335862000, "versionTime": 1390445504000, "hostName": "hyc_主机1", "token": "123456", "hostId": 1, "fileId": 9, "hostIp": "99.1.67.18", "instanceId": 0, "instanceList": null, "versionId": 0, "hostDesc": null, "fileUrl": null, "createDate": 1388716041000}, "versionName": "versionName", "createDate": null, "instanceId": 94, "instanceName": "黄煜驰实例1", "instanceDesc": "实例1"},
        {"instanceId": 104, "fileId": 0, "createDate": null, "versionId": 6, "instanceName": "黄煜驰实例2", "host": {"createDate": 1388716041000, "hostDesc": null, "hostIp": "99.1.67.18", "fileUrl": null, "lastUpdate": 1389335862000, "versionId": 0, "fileId": 9, "hostId": 1, "instanceId": 0, "instanceList": null, "hostName": "hyc_主机1", "versionTime": 1390445504000, "token": "123456"}, "instanceDesc": "2222", "hostId": 1, "versionName": "hyc_版本2", "fileUrl": "0"}
    ], "success": true, "pageInfo": null};
exports.instanceOne = {"fileUrl": "0", "versionId": 164, "fileId": 0, "hostId": 1, "host": {"lastUpdate": 1389335862000, "versionTime": 1390445504000, "hostName": "hyc_主机1", "token": "123456", "hostId": 1, "fileId": 9, "hostIp": "99.1.67.18", "instanceId": 0, "instanceList": null, "versionId": 0, "hostDesc": null, "fileUrl": null, "createDate": 1388716041000}, "versionName": "versionName", "createDate": null, "instanceId": 94, "instanceName": "黄煜驰实例1", "instanceDesc": "实例1"};
//================================ V3版本 数据结构定义区域 ===========================================开始============
//获取配置目录
exports.configFolders = {
    "requestParam": [
        {
            "searchKey": "***",
            "ReqPageInfo": [
                {"versionId": 0, "categoryParentI": 0 }
            ],
            "ReqPageModel": [
                {"***": "***"}
            ]//配置目录模型集合
        }
    ],
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"categoryId": parseInt(Math.random() * 1000), "categoryParentId": 0, "versionId": 1, "categoryName": "节点1", "categoryDesc": "节点1", "createTime": "2014-1-12"},
        {"categoryId": parseInt(Math.random() * 1000), "categoryParentId": 0, "versionId": 1, "categoryName": "节点2", "categoryDesc": "节点2", "createTime": "2014-1-13"}
    ]
};
//获取多实例配置目录
exports.configAllFolders = {
    "requestParam": [
        {
            "searchKey": "***",
            "ReqPageInfo": [
                {"versionId": 0, "categoryParentI": 0 }
            ],
            "ReqPageModel": [
                {"***": "***"}
            ]//配置目录模型集合
        }
    ],
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"instanceId": 1, "categoryId": 1, "categoryParentId": 0, "versionId": 1, "categoryName": "实例1配置目录", "categoryDesc": "实例1配置目录", "createTime": "2014-1-12"},
        {"instanceId": 2, "categoryId": 2, "categoryParentId": 0, "versionId": 1, "categoryName": "实例1配置目录1", "categoryDesc": "实例1配置目录1", "createTime": "2014-1-13"}
    ]
};
//获取配置项列表
exports.configItems = {
    "requestParam": [
        {
            "requestParam": [
                {"***": "***"}
            ],//请求参数
            "ReqPageModel": [
                {"***": "***"}
            ]//配置列表模型集合
        }
    ],
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"configBaseId": 1, "categoryName": "配置项1", "categoryId": 0, "configType": 1, "orderNumber": 1, "publishFileId": 1, "publishFileName": "a", "checkFileId": 1, "checkFileName": "b", "createDate": "2014-1-12", "updateDate": "2014-1-12", "checkStatus": 0},
        {"configBaseId": 2, "categoryName": "配置项2", "categoryId": 0, "configType": 1, "orderNumber": 2, "publishFileId": 3, "publishFileName": "c", "checkFileId": 2, "checkFileName": "d", "createDate": "2014-1-12", "updateDate": "2014-1-12", "checkStatus": 1}
    ]
};

//获取配置脚本文件列表
exports.scriptFiles = {"pageInfo": null, "success": true, "requestParam": null, "msg": "查询成功。",
    "jsonData": [
        {"parentFileId": 6470, "physicalDir": "E:\\QQ", "fileId": 0, "children": null, "mappingDirId": 360, "fileSize": 0,
            "aMFileId": 1, "lastEditor": null, "aMFileUrl": "\\agentMonitor", "aMFileIdAgent": null, "fileMd5": null,
            "aMFileExtension": null, "versionId": 126, "createDate": null, "aMFileType": 1, "lastUpdate": null, "checkResult": null, "mappingCheckNode": "\\agentMonitor", "aMFileName": "文件1", "isDetect": 0,
            "parentFileIdAgent": null, "isDeleted": 0, "creator": null},
        {"versionId": 126, "mappingCheckNode": "\\agentMonitor\\lib", "parentFileId": 6470, "fileId": 0, "isDeleted": 0, "parentFileIdAgent": null, "children": null,
            "physicalDir": "D:\\sdd\\", "creator": null, "mappingDirId": 377, "aMFileId": 2, "aMFileExtension": null, "aMFileName": "文件2", "checkResult": null, "createDate": null, "fileSize": 0, "aMFileUrl": "\\agentMonitor\\lib", "aMFileType": 1, "aMFileIdAgent": null, "lastUpdate": null, "fileMd5": null, "lastEditor": null, "isDetect": 0}
    ]};
/*{
 "requestParam":[{
 "requestParam":[{"***":"***"}],//请求参数
 "ReqPageModel":[{"***":"***"}]//配置列表模型集合
 }],
 "success":"true",
 "msg":"***",
 "pageInfo":[{"currentPage":"***","pageSize":"***"}],
 "jsonData":[
 {"AMFileId":1, "ParentFileId":0, "AMFileName":"文件名称1", "AMFileType":1, "AMFileExtension":"txt", "FileSize":1024},
 {"AMFileId":2, "ParentFileId":0, "AMFileName":"文件名称2", "AMFileType":1, "AMFileExtension":"txt", "FileSize":500}
 ]
 };*/

//获取配置脚本目录列表
exports.scriptFolders = {"success": true, "pageInfo": null, "requestParam": null, "jsonData": [
    {"lastUpdate": null, "isDetect": 0, "fileMd5": null, "mappingCheckNode": "\\agentMonitor", "physicalDir": "E:\\QQ", "parentFileId": 0, "creator": null, "lastEditor": null, "aMFileIdAgent": null, "fileId": 0, "versionId": 126, "aMFileExtension": null, "fileSize": 0, "aMFileUrl": "\\agentMonitor", "aMFileType": 2, "parentFileIdAgent": null, "aMFileName": "agentMonitor", "isDeleted": 0, "checkResult": null, "children": null, "mappingDirId": 360, "createDate": null, "aMFileId": 6470},
    {"children": null, "aMFileIdAgent": null, "parentFileId": 0, "lastEditor": null, "fileId": 0, "aMFileUrl": "\\agentMonitor\\lib", "mappingDirId": 377, "createDate": null, "aMFileType": 2, "versionId": 126, "parentFileIdAgent": null, "fileMd5": null, "physicalDir": "D:\\sdd\\", "fileSize": 0, "checkResult": null, "isDetect": 0, "mappingCheckNode": "\\agentMonitor\\lib", "creator": null, "lastUpdate": null, "aMFileExtension": null, "isDeleted": 0, "aMFileId": 6471, "aMFileName": "lib111111111"}
], "msg": "查询成功。"};


//获取配置项防篡改设置列表
exports.configSettings = {
    "requestParam": [
        {
            "requestParam": [
                {"***": "***"}
            ],//请求参数
            "ReqPageModel": [
                {"***": "***"}
            ]//配置列表模型集合
        }
    ],
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"csconfigId": 3, "configBaseId": 1, "categoryName": "配置项1", "intervalTime": 3, "status": 1, "createDate": "2014-1-21"},
        {"csconfigId": 1, "configBaseId": 2, "categoryName": "配置项2", "intervalTime": 3, "status": 1, "createDate": "2014-1-21"}
    ]
};

//获取所有实例映射目录第一层
exports.MappingFolders = {"requestParam": null, "success": true, "msg": "查询成功。", "pageInfo": null, "jsonData": [
    {"checkResult": 'D', "instanceId": 1, "createDate": null, "parentFileId": 0, "physicalDir": "F;", "mappingCheckNode": "\\destDir", "versionId": 11, "fileSize": 0, "children": null, "aMFileUrl": "\\destDir", "isDeleted": 0, "creator": null, "aMFileName": "实例1(F:\)", "fileMd5": null, "isDetect": 0, "aMFileType": 2, "lastEditor": null, "lastUpdate": null, "mappingDirId": 283, "aMFileIdAgent": null, "aMFileId": 1268, "parentFileIdAgent": null, "aMFileExtension": null, "fileId": 0},
    {"checkResult": 'U', "instanceId": 3, "isDetect": 0, "isDeleted": 0, "aMFileId": 1269, "fileMd5": null, "aMFileExtension": null, "aMFileUrl": "\\destDir\\config", "lastUpdate": null, "mappingDirId": 308, "aMFileType": 2, "parentFileIdAgent": null, "creator": null, "aMFileName": "实例2(D:\)", "parentFileId": 1268, "lastEditor": null, "fileId": 0, "createDate": null, "children": null, "versionId": 11, "physicalDir": "ee", "mappingCheckNode": "\\destDir\\config2", "aMFileIdAgent": null, "fileSize": 0},
    {"checkResult": 'A', "instanceId": 4, "createDate": null, "parentFileId": 0, "physicalDir": "F;", "mappingCheckNode": "\\destDir", "versionId": 11, "fileSize": 0, "children": null, "aMFileUrl": "\\destDir", "isDeleted": 0, "creator": null, "aMFileName": "实例3(E:\)", "fileMd5": null, "isDetect": 1, "aMFileType": 2, "lastEditor": null, "lastUpdate": null, "mappingDirId": 283, "aMFileIdAgent": null, "aMFileId": 1269, "parentFileIdAgent": null, "aMFileExtension": null, "fileId": 0},
    {"checkResult": 'U', "instanceId": 2, "isDetect": 0, "isDeleted": 0, "aMFileId": 1269, "fileMd5": null, "aMFileExtension": null, "aMFileUrl": "\\destDir\\config", "lastUpdate": null, "mappingDirId": 308, "aMFileType": 2, "parentFileIdAgent": null, "creator": null, "aMFileName": "实例4(C:\Ddd\)", "parentFileId": 1268, "lastEditor": null, "fileId": 0, "createDate": null, "children": null, "versionId": 11, "physicalDir": "ee", "mappingCheckNode": "\\destDir\\config3", "aMFileIdAgent": null, "fileSize": 0}
]};


//获取发布任务列表
exports.tasks = {
    "requestParam": {
        "sysId": "***",
        "appId": "***",
        "taskType": "***",
        "reqPageInfo": {"totalRecords": 21, "currentPage": 0, "pageSize": 10},
        "reqPageModel": {}
    },
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"taskId": "1", "sysId": "1", "versionId": "1", "taskType": "1", "sysName": "厂商管理系统", "appName": "应用1", "versionName": "版本3", "hostName": "主机1", "instanceName": "实例1", "createDate": "2013-10-12 10:20:33", "status": "1"},
        {"taskId": "2", "sysId": "1", "versionId": "1", "taskType": "1", "sysName": "厂商管理系统2", "appName": "应用2", "versionName": "版本4", "hostName": "主机2", "instanceName": "实例2", "createDate": "2013-10-13 10:20:31", "status": "0"}
    ]
};

//获取任务日志详情列表
exports.tasklogs = {
    "requestParam": {
        "taskId": "***",
        "reqPageInfo": {"totalRecords": 21, "currentPage": 0, "pageSize": 10},
        "reqPageModel": {}
    },
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"logId": "1", "logLevel": "0", "publishName": "第一步", "createDate": "2013-10-13 10:20:32", "logDesc": "开始发布，复制文件到C盘"},
        {"logId": "2", "taskId": 1, "logLevel": "1", "publishName": "第二步", "createDate": "2013-10-13 10:20:34", "logDesc": "开始发布，开始执行脚本"},
        {"logId": "3", "taskId": 1, "logLevel": "2", "publishName": "第三步", "createDate": "2013-10-13 10:20:36", "logDesc": "开始发布，开始执行脚本1"}
    ]
};

//单个配置项的防篡改检测结果列表
exports.configItemCheckDetail = {
    "requestParam": {
        "reqPageInfo": {"totalRecords": 3, "currentPage": 0, "pageSize": 10},
        "reqPageModel": [
            {"***": "***"}
        ]//配置目录模型集合
    },
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"categoryName": "环境变量", "configType": 0, "checkId": "1", "checkDesc": "成功", "checkStatus": 1, "checkLevel": 0, "checkDate": "2014-01-20 12:07:06"},
        {"categoryName": "环境变量", "configType": 0, "checkId": "2", "checkDesc": "失败", "checkStatus": 0, "checkLevel": 1, "checkDate": "2014-01-20 12:07:08"},
        {"categoryName": "环境变量", "configType": 0, "checkId": "3", "checkDesc": "成功", "checkStatus": 1, "checkLevel": 2, "checkDate": "2014-01-20 12:07:10"}
    ]
};
//单个文件防篡改检测详细
exports.fileCheckDetail = {
    "requestParam": {
        "reqPageInfo": {"totalRecords": 21, "currentPage": 0, "pageSize": 10},
        "reqPageModel": [
            {"***": "***"}
        ]//配置目录模型集合
    },
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"fileName": "file1", "checkResult": "N", "checkId": 1, "checkDate": "2014-01-20 12:07:06"},
        {"fileName": "file2", "checkResult": "U", "checkId": 2, "checkDate": "2014-01-20 15:07:06"},
        {"fileName": "file3", "checkResult": "U", "checkId": 2, "checkDate": "2014-01-20 15:07:06"},
        {"fileName": "file4", "checkResult": "U", "checkId": 2, "checkDate": "2014-01-20 15:07:06"},
        {"fileName": "file5", "checkResult": "U", "checkId": 2, "checkDate": "2014-01-20 15:07:06"}
    ]
};

//配置项的检测日志详情列表
exports.configCheckLogDetail = {
    "requestParam": {
        "checkId": "***",
        "reqPageInfo": {"totalRecords    ": 21, "currentPage": 0, "pageSize": 10},
        "reqPageModel": {}
    },
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"checkId": 1, "checkLevel": 0, "categoryName": "环境变量", "checkDate": "2014-01-20 12:07:06", "checkDesc": "开始检测环境变量"},
        {"checkId": 2, "checkLevel": 1, "categoryName": "环境变量", "checkDate": "2014-01-20 15:07:06", "checkDesc": "开始检查注册表"}
    ]
};
//以主机ID查询下面实例的所有映射目录,注意返回实例ID
exports.mappingFolder = {
    "pageInfo": null, "success": true, "requestParam": null, "msg": "查询成功。",
    "jsonData": [
        {"aMFileId": 1250, "aMFileName": "映射目录1(C:\\ppp)", "instanceId": 10, "aMFileType": 2},
        {"aMFileId": 1255, "aMFileName": "映射目录2(C:\\ccc)", "instanceId": 10, "aMFileType": 2},
        {"aMFileId": 1222, "aMFileName": "映射目录3(D:\\kkk)", "instanceId": 11, "aMFileType": 2}
    ]
};
//================================ V3版本 数据结构定义区域 ===========================================结束============


//================================ 老接口API定义区域   使老的功能可以模拟使用====================================
/**
 * 主机：新增主机返回值 hyc
 */
exports.addHost = {
    "requestParam": [
        {
            "searchKey": "***",
            "ReqPageInfo": [
                {"currentPage": "***", "pageSize": "***"}
            ],
            "ReqPageModel": [
                {"hostId": "***", "hostName": "***", "hostIp": "***", "hostDesc": "***", "createDate": "***", "lastUpdate": "***"}
            ]
        }
    ],
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"hostId": parseInt(Math.random() * 15000), "hostName": "new host", "hostIp": "192.168.1.55", "hostDesc": "this is a new host", "createDate": "***", "lastUpdate": "***"}
    ]
};

/**
 主机: 删除主机返回值 hyc
 */
exports.deleteHost = {
    "requestParam": [
        {
            "searchKey": "***",
            "ReqPageInfo": [
                {"currentPage": "***", "pageSize": "***"}
            ],
            "ReqPageModel": [
                {"hostId": "***", "hostName": "***", "hostIp": "***", "hostDesc": "***", "createDate": "***", "lastUpdate": "***"}
            ]
        }
    ],
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": []
};

/**
 主机: 修改主机返回值 hyc
 */
exports.updateHost = {
    "requestParam": [
        {
            "searchKey": "***",
            "ReqPageInfo": [
                {"currentPage": "***", "pageSize": "***"}
            ],
            "ReqPageModel": [
                {"hostId": "***", "hostName": "***", "hostIp": "***", "hostDesc": "***", "createDate": "***", "lastUpdate": "***"}
            ]
        }
    ],
    "success": "true",
    "msg": "***",
    "pageInfo": [
        {"currentPage": "***", "pageSize": "***"}
    ],
    "jsonData": [
        {"hostId": "***", "hostName": "***", "hostIp": "***", "hostDesc": "***", "createDate": "***", "lastUpdate": "***"}
    ]
};
//应用数据 cbr
exports.apps = {
    "requestParam": {
        "searchKey": null,
        "reqPageModel": {"appDesc": null, "lastUpdate": null, "fileId": 0, "appName": null, "sysId": 2, "createDate": null, "appId": 0, "fileUrl": null, "checkStatus": null},
        "reqPageInfo": null},
    "jsonData": [
        {"lastUpdate": 1388715995000, "sysId": 2, "checkStatus": null, "createDate": 1388715995000, "appDesc": null, "appId": 3, "fileUrl": "0", "fileId": 0, "appName": "hyc_app1"},
        {"appId": 4, "fileId": 0, "checkStatus": null, "appName": "hyc_app2", "lastUpdate": 1388718470000, "sysId": 2, "fileUrl": "0", "createDate": 1388718470000, "appDesc": null},
        {"lastUpdate": 1389856271000, "fileUrl": "0", "appId": 38, "sysId": 2, "checkStatus": null, "createDate": 1389856271000, "fileId": 0, "appName": "App3", "appDesc": "App3"}
    ],
    "pageInfo": null,
    "msg": "查询成功。",
    "success": true
};
//系统版本 cbr
exports.versions = {
    "pageInfo": null,
    "success": true,
    "msg": "查询成功。",
    "requestParam": {
        "reqPageModel": {"versionStatus": 0, "lastUpdate": null, "versionIds": null, "versionId": 0, "versionDesc": null, "versionName": null, "createDate": null, "appId": 2},
        "searchKey": "",
        "reqPageInfo": {"totalRecords": 76, "pageSize": 1000, "currentPage": 0}},
    "jsonData": [
        {"versionName": "Linwb_Ver", "versionId": 11, "versionStatus": 0, "appId": 8, "versionIds": null, "createDate": 1388999367000, "lastUpdate": 1389680702000, "versionDesc": "test1sdfdd"},
        {"versionDesc": "asd", "versionIds": null, "versionName": "asd", "appId": 8, "lastUpdate": 1389064658000, "createDate": 1389064658000, "versionId": 13, "versionStatus": 0},
        {"versionIds": null, "createDate": 1388478191000, "versionId": 4, "versionDesc": "ddd", "versionStatus": 0, "lastUpdate": 1388478191000, "versionName": "dd", "appId": 2},
        {"versionDesc": "搬迁服务器", "versionName": "应用搬迁", "versionStatus": 0, "versionId": 66, "appId": 2, "lastUpdate": 1389837651000, "versionIds": null, "createDate": 1389837651000}
    ]
};
/**
 * 映射目录 : 映射目录列表
 */
exports.dirMappingList = {
    "pageInfo": null,
    "success": true,
    "msg": "查询成功。",
    "requestParam": {
        "reqPageModel": {"versionStatus": 0, "lastUpdate": null, "versionIds": null, "versionId": 0, "versionDesc": null, "versionName": null, "createDate": null, "appId": 2},
        "searchKey": "",
        "reqPageInfo": {"totalRecords": 76, "pageSize": 1000, "currentPage": 0}},
    "jsonData": [
        {"aMFileUrl": "logicDirA", "physicalDir": "physicalDirA"},
        {"aMFileUrl": "logicDirB", "physicalDir": "physicalDirB"}
    ]
};
exports.buildVersion = {
    "requestParam": {"reqPageInfo": null, "searchKey": null, "reqPageModel": null},
    "pageInfo": null, "msg": "",
    "success": true,
    "jsonData": {"timestamp": "2014-01-23 11:07", "webRoot": "http://localhost:9096/versioncontrol/", "version": "0.3"}
};

exports.treeFolders = {"pageInfo": null,
    "success": true,
    "msg": "查询成功。",
    "requestParam": {
        "reqPageModel": {"versionStatus": 0, "lastUpdate": null, "versionIds": null, "versionId": 0, "versionDesc": null, "versionName": null, "createDate": null, "appId": 2},
        "searchKey": "",
        "reqPageInfo": {"totalRecords": 76, "pageSize": 1000, "currentPage": 0}},
    "jsonData": [
        {"mappingCheckNode": "\\destDir", "lastUpdate": 1389775723000, "aMFileUrl": "\\destDir", "createDate": 1389775723000, "children": null, "aMFileName": "destDir", "aMFileId": 1268, "parentFileId": 0, "fileId": 0, "versionId": 11, "fileMd5": null, "aMFileExtension": null, "isDetect": 1, "aMFileType": 2, "mappingDirId": 0, "creator": null, "isDeleted": 0, "lastEditor": null, "physicalDir": null, "parentFileIdAgent": null, "checkResult": null, "aMFileIdAgent": null, "fileSize": 0},
        {"lastEditor": null, "creator": null, "lastUpdate": 1390203622000, "isDeleted": 0, "createDate": 1390203622000, "parentFileId": 0, "fileSize": 0, "children": null, "fileMd5": null, "checkResult": null, "fileId": 0, "isDetect": 1, "aMFileType": 2, "physicalDir": null, "versionId": 11, "mappingCheckNode": "\\folder", "aMFileIdAgent": null, "parentFileIdAgent": null, "aMFileId": 10531, "aMFileExtension": null, "aMFileUrl": "\\folder", "aMFileName": "folder", "mappingDirId": 0}
    ]
};

exports.checkSettingForWeb = {
    "pageInfo": {"currentPage": 0, "totalRecords": 2, "pageSize": 10000},
    "success": true, "requestParam": {"searchKey": null, "reqPageModel": null,
        "reqPageInfo": {"pageSize": 10000, "currentPage": 0, "totalRecords": 2}}, "msg": "查询成功。",
    "jsonData": [
        {"hostId": 4, "intervalTime": 60, "cstatus": 2, "fileId": 0, "mappingDirId": 211, "instanceName": "Linwb_Instance", "checkScopeList": null, "mappingCheckNode": "\\应用版本系统原型\\resources\\scripts\\messagecenter.js", "createDate": null, "physicalDir": "C:\\\\markk", "checkDesc": "test", "mappingDirModel": null, "checkSettingScopeId": 0, "checkSettingId": 1, "amfileModel": null, "aMFileUrl": null, "lastUpdate": null, "instanceId": 3},
        {"createDate": null, "checkSettingId": 2, "physicalDir": "C:\\\\markk", "checkScopeList": null, "hostId": 4, "mappingCheckNode": "\\应用版本系统原型\\resources\\scripts\\messagecenter.js", "mappingDirId": 211, "cstatus": 1, "instanceName": "Linwb_Instance", "checkDesc": "testsds", "mappingDirModel": null, "fileId": 104, "amfileModel": null, "lastUpdate": null, "intervalTime": 60, "checkSettingScopeId": 0, "aMFileUrl": "\\应用版本系统原型\\resources\\reload.html", "instanceId": 3}
    ]
};

exports.instanceAndVersion = {"pageInfo": null,
    "success": true,
    "msg": "查询成功。",
    "requestParam": {
        "reqPageModel": {"versionStatus": 0, "lastUpdate": null, "versionIds": null, "versionId": 0, "versionDesc": null, "versionName": null, "createDate": null, "appId": 2},
        "searchKey": "",
        "reqPageInfo": {"totalRecords": 76, "pageSize": 1000, "currentPage": 0}},
    "jsonData": [
        {"versionName": "versionName", "instanceName": "黄煜驰实例1", "hostId": 1, "instanceDesc": "实例1", "createDate": null, "instanceId": 94, "fileId": 0, "fileUrl": "0", "versionId": 164, "host": {"lastUpdate": 1389335862000, "fileId": 9, "instanceId": 0, "hostId": 1, "versionTime": 1390445504000, "versionId": 0, "hostIp": "99.1.67.18", "createDate": 1388716041000, "token": "123456", "fileUrl": null, "hostName": "hyc_主机1", "hostDesc": null, "instanceList": null}},
        {"versionName": "hyc_版本2", "fileId": 0, "fileUrl": "0", "instanceName": "黄煜驰实例2", "hostId": 1, "versionId": 6, "host": {"fileUrl": null, "hostName": "hyc_主机1", "versionId": 0, "hostDesc": null, "versionTime": 1390445504000, "token": "123456", "createDate": 1388716041000, "instanceList": null, "instanceId": 0, "lastUpdate": 1389335862000, "hostIp": "99.1.67.18", "fileId": 9, "hostId": 1}, "instanceId": 104, "createDate": null, "instanceDesc": "2222"}
    ]
};

exports.checkFolderAndFile = {"pageInfo": null,
    "success": true,
    "msg": "查询成功。",
    "requestParam": {
        "reqPageModel": {},
        "searchKey": "",
        "reqPageInfo": {"totalRecords": 76, "pageSize": 1000, "currentPage": 0}},
    "jsonData": [
        {"keyId": "f95baee6-41ae-41dc-a4a9-7d87401b69a9", "parentFileId": "10052", "aMFileId": 0, "children": [], "aMFileType": "2", "aMFileExtension": null, "fileId": "f95baee6-41ae-41dc-a4a9-7d87401b69a9", "fileName": "Test", "checkResult": "A"},
        {"aMFileId": 0, "children": [], "checkResult": "N", "aMFileExtension": null, "fileId": "10053", "aMFileType": "2", "keyId": "10053", "fileName": "DLL", "parentFileId": "10052"},
        {"keyId": "10058", "aMFileType": "2", "fileName": "Test", "checkResult": "N", "aMFileId": 0, "aMFileExtension": null, "parentFileId": "10052", "fileId": "10058", "children": []}
    ]
};

exports.Tokens = {"pageInfo": null,
    "success": true,
    "msg": "查询成功。",
    "requestParam": {
        "reqPageModel": {"versionStatus": 0, "lastUpdate": null, "versionIds": null, "versionId": 0, "versionDesc": null, "versionName": null, "createDate": null, "appId": 2},
        "searchKey": "",
        "reqPageInfo": {"totalRecords": 76, "pageSize": 1000, "currentPage": 0}},
    "jsonData": [
        {"instanceList": null, "versionTime": null, "fileUrl": null, "fileId": 0, "hostDesc": null, "hostIp": "99.1.67.18", "hostName": "hyc_主机1", "versionId": 0, "lastUpdate": null, "token": "123456", "hostId": 1, "createDate": 1388716041000, "instanceId": 0},
        {"instanceList": null, "hostId": 2, "hostName": "xzTest主机", "token": "11", "lastUpdate": null, "hostIp": "99.1.67.203", "fileId": 0, "instanceId": 0, "fileUrl": null, "versionId": 0, "hostDesc": "xzTest主机", "createDate": 1388731399000, "versionTime": null}
    ]
};
exports.sysCheck = {"pageInfo": null,
    "success": true,
    "msg": "查询成功。",
    "requestParam": {
        "reqPageModel": {},
        "searchKey": "",
        "reqPageInfo": {"totalRecords": 76, "pageSize": 1000, "currentPage": 0}},
    "jsonData": [
        {"sysId": 1, "fileId": 100, "sysDesc": "厂商系统s", "appList": null, "fileUrl": "100", "checkStatus": "N", "sysName": "厂商系统s", "lastUpdate": 1390788267000, "createDate": 1390788267000},
        {"fileUrl": "40", "lastUpdate": 1389947135000, "sysDesc": "hyc描述", "sysId": 2, "createDate": 1388715850000, "sysName": "hyc", "fileId": 40, "checkStatus": "N", "appList": null},
        {"sysName": "xz系统", "sysId": 3, "createDate": 1388732382000, "lastUpdate": 1388732393000, "checkStatus": "N", "fileUrl": "1", "appList": null, "sysDesc": "xz系统", "fileId": 1},
        {"sysName": "舒展", "sysDesc": "sz test", "fileId": 0, "createDate": 1388733441000, "lastUpdate": 1390182056000, "checkStatus": "N", "appList": null, "sysId": 4, "fileUrl": "0"}
    ]
};

//================================ V4版本 数据结构定义区域 ===============================
//============开始============
exports.auditConfigList = {
    "requestParam": null,
    "success": true,
    "pageInfo": null,
    "jsonData": [
        { "receiverCN": "流浪猫", "receiver": "llm", "moduleCode": "sysCtrl", "auditStatus": 1, "moduleName": "系统", "auditConfigId": 10},
        {"auditConfigId": 12, "moduleCode": "HostCtrl", "moduleName": "主机", "auditStatus": 1, "receiverCN": "黄明江", "receiver": "hmj"},
        {"receiverCN": null, "moduleCode": "tamperCtrl", "auditStatus": 0, "receiver": null, "auditConfigId": 0, "moduleName": "防篡改结果列表"},
        {"auditConfigId": 0, "auditStatus": 0, "moduleCode": "taskCtrl", "moduleName": "任务", "receiverCN": null, "receiver": null},
        {"moduleName": "配置", "receiver": null, "moduleCode": "TokenCtrl", "receiverCN": null, "auditStatus": 0, "auditConfigId": 0},
        {"moduleCode": "appCtrl", "receiverCN": "黄明江", "receiver": "hmj", "auditConfigId": 34, "moduleName": "应用", "auditStatus": 1},
        {"moduleName": "实例", "receiver": "hmj", "moduleCode": "InstanceCtrl", "auditStatus": 1, "auditConfigId": 35, "receiverCN": "黄明江"},
        {"moduleCode": "instanceMapping", "auditStatus": 0, "auditConfigId": 0, "receiverCN": null, "receiver": null, "moduleName": "实例映射"},
        {"auditStatus": 1, "auditConfigId": 36, "moduleName": "版本", "moduleCode": "versionCtrl", "receiverCN": "流浪猫", "receiver": "llm"},
        {"receiver": "ljq", "moduleCode": "fileTreeCtrl", "auditConfigId": 41, "receiverCN": "ljq", "auditStatus": 1, "moduleName": "文件基线"},
        {"receiverCN": "黄明江", "moduleCode": "configitemsCtrl", "receiver": "hmj", "auditConfigId": 42, "moduleName": "配置项基线", "auditStatus": 1},
        {"auditConfigId": 43, "receiverCN": "流浪猫", "receiver": "llm", "auditStatus": 1, "moduleCode": "FooterCtrl", "moduleName": "页脚信息"},
        {"receiverCN": "流浪猫", "auditConfigId": 44, "moduleCode": "IconCtrl", "moduleName": "获取图片信息", "receiver": "llm", "auditStatus": 1},
        {"auditConfigId": 0, "moduleCode": "instanceDeploy", "receiverCN": null, "moduleName": "实例发布", "auditStatus": 0, "receiver": null},
        {"moduleCode": "auditCtrl", "moduleName": "审计模块", "auditConfigId": 0, "receiver": null, "receiverCN": null, "auditStatus": 0},
        {"moduleCode": "messageCtrl", "moduleName": "消息通知", "receiverCN": null, "receiver": null, "auditConfigId": 0, "auditStatus": 0},
        {"receiverCN": null, "moduleName": "一般应用列表", "auditStatus": 0, "moduleCode": "getSimpleAppList", "auditConfigId": 0, "receiver": null},
        {"auditStatus": 0, "moduleCode": "getSimpleHostList", "receiver": null, "moduleName": "一般主机列表", "receiverCN": null, "auditConfigId": 0},
        {"moduleName": "资源管理", "auditConfigId": 0, "moduleCode": "resourceCtrl", "auditStatus": 0, "receiver": null, "receiverCN": null},
        {"moduleName": "首页", "moduleCode": "homeCtrl", "auditStatus": 0, "receiver": null, "receiverCN": null, "auditConfigId": 0}
    ], "msg": "查询成功。"
};

exports.userAccountList = {"jsonData": [
    {"email": "", "displayName": "ljq", "tel": "", "organizationID": -1, "account": "ljq", "ctime": {"weeksInWeekYear": 52, "weekDateSupported": true, "weekYear": 2014, "minimalDaysInFirstWeek": 1, "time": 1395729807750, "lenient": false, "timeZone": {"displayName": "中国标准时间", "rawOffset": 28800000, "iD": "Asia/Shanghai", "dirty": false, "dSTSavings": 0, "lastRuleInstance": null}, "gregorianChange": -12219292800000, "firstDayOfWeek": 1, "timeInMillis": 1395729807750}, "organizationName": null, "cid": 0, "phone": "", "userID": 1761},
    {"phone": "13246757626", "displayName": "黄明江", "tel": "", "organizationName": null, "account": "hmj", "cid": 0, "organizationID": -1, "userID": 1762, "ctime": {"timeZone": {"iD": "Asia/Shanghai", "dirty": false, "displayName": "中国标准时间", "rawOffset": 28800000, "lastRuleInstance": null, "dSTSavings": 0}, "weeksInWeekYear": 52, "weekYear": 2014, "weekDateSupported": true, "time": 1397703042433, "firstDayOfWeek": 1, "minimalDaysInFirstWeek": 1, "timeInMillis": 1397703042433, "lenient": false, "gregorianChange": -12219292800000}, "email": "huangmingjiang@pactera.com"},
    {"userID": 213, "tel": "", "email": "", "phone": "", "displayName": "流浪猫", "organizationID": -1, "ctime": {"timeInMillis": 1345600361863, "weekYear": 2012, "weekDateSupported": true, "lenient": false, "time": 1345600361863, "firstDayOfWeek": 1, "gregorianChange": -12219292800000, "timeZone": {"iD": "Asia/Shanghai", "dirty": false, "rawOffset": 28800000, "displayName": "中国标准时间", "lastRuleInstance": null, "dSTSavings": 0}, "minimalDaysInFirstWeek": 1, "weeksInWeekYear": 52}, "cid": 0, "organizationName": null, "account": "llm"},
    {"tel": "1245647", "cid": 0, "email": "123@sina.com", "displayName": "wade", "ctime": {"weekDateSupported": true, "gregorianChange": -12219292800000, "timeInMillis": 1400638494733, "time": 1400638494733, "weeksInWeekYear": 52, "minimalDaysInFirstWeek": 1, "weekYear": 2014, "timeZone": {"rawOffset": 28800000, "displayName": "中国标准时间", "dirty": false, "iD": "Asia/Shanghai", "lastRuleInstance": null, "dSTSavings": 0}, "firstDayOfWeek": 1, "lenient": false}, "phone": "12345678911", "account": "wade", "organizationName": "数据中心", "organizationID": 1, "userID": 1764},
    {"cid": 0, "ctime": {"weekYear": 2014, "weeksInWeekYear": 52, "gregorianChange": -12219292800000, "lenient": false, "timeZone": {"lastRuleInstance": null, "displayName": "中国标准时间", "rawOffset": 28800000, "dirty": false, "dSTSavings": 0, "iD": "Asia/Shanghai"}, "timeInMillis": 1400636152313, "weekDateSupported": true, "minimalDaysInFirstWeek": 1, "firstDayOfWeek": 1, "time": 1400636152313}, "userID": 1763, "phone": "", "displayName": "黄煜驰", "email": "", "organizationName": null, "organizationID": -1, "tel": "", "account": "hyc"}
],
    "pageInfo": null,
    "success": true,
    "requestParam": null,
    "msg": "查询成功。"
};

exports.auditOperationLogs = {
    "success": true,
    "requestParam": {
        "searchKey": null,
        "reqPageModel": null,
        "reqPageInfo": {"pageSize": 10, "totalRecords": 621, "currentPage": 0}
    },
    "pageInfo": null,
    "msg": "查询成功。",
    "jsonData": [
        {"operator": "流浪猫", "logid": 4436, "moduleRoute": "getSysCheckList", "content": "主机[99.1.67.7]执行了[首页范篡改检测列表]的操作.", "date": 1400815820000, "ip": "99.1.67.18"},
        {"ip": "99.1.67.96", "operator": "流浪猫", "date": 1400815529000, "logid": 4435, "moduleRoute": "getSyssBySearchKey", "content": "主机[99.1.67.7]执行了[显示系统]的操作."},
        {"moduleRoute": "getAuditConfigList", "date": 1400815517000, "ip": "99.1.67.96", "operator": "流浪猫", "logid": 4434, "content": "主机[99.1.67.7]执行了[查询审计]的操作."},
        {"moduleRoute": "getAuditConfigList", "date": 1400815507000, "logid": 4433, "operator": "流浪猫", "ip": "99.1.67.96", "content": "主机[99.1.67.7]执行了[查询审计]的操作."},
        {"content": "主机[99.1.67.7]执行了[查询审计]的操作.", "operator": "流浪猫", "moduleRoute": "getAuditConfigList", "ip": "99.1.67.96", "date": 1400815505000, "logid": 4432},
        {"logid": 4431, "date": 1400815500000, "ip": "99.1.67.96", "operator": "流浪猫", "content": "主机[99.1.67.7]执行了[查询配置]的操作.", "moduleRoute": "getTokenList"},
        {"operator": "流浪猫", "content": "主机[99.1.67.7]执行了[显示主机]的操作.", "logid": 4430, "date": 1400815496000, "ip": "99.1.67.96", "moduleRoute": "getHostsBySearchKey"},
        {"operator": "流浪猫", "ip": "99.1.67.96", "logid": 4429, "moduleRoute": "getSysCheckList", "content": "主机[99.1.67.7]执行了[首页范篡改检测列表]的操作.", "date": 1400815476000},
        {"content": "主机[99.1.67.7]执行了[查询配置]的操作.", "operator": "流浪猫", "ip": "99.1.67.96", "date": 1400815423000, "moduleRoute": "getTokenList", "logid": 4428},
        {"ip": "99.1.67.96", "date": 1400815419000, "content": "主机[99.1.67.7]执行了[显示主机]的操作.", "moduleRoute": "getHostsBySearchKey", "logid": 4427, "operator": "流浪猫"}
    ]};

exports.tokenList = {
    "pageInfo": {"totalRecords": 41, "currentPage": 0, "pageSize": 10},
    "jsonData": [
        {"token": "123456", "releaseVersionTime": null, "versionId": 0, "hostName": "hmj主机1qwa2", "checkStatus": 0, "instanceList": null, "hostIp": "99.6.32.2", "hostDesc": "dsfsdfdsfdfd", "createDate": 1398498990000, "lastUpdate": null, "hostId": 190, "versionTime": null, "fileUrl": null, "fileId": 0, "instanceId": 0},
        {"fileId": 0, "fileUrl": null, "hostIp": "22.33.33.2", "instanceList": null, "checkStatus": 0, "instanceId": 0, "lastUpdate": null, "hostDesc": "是多少", "versionId": 0, "createDate": 1399273810000, "releaseVersionTime": null, "versionTime": null, "hostId": 196, "hostName": "hmj主机", "token": null},
        {"hostDesc": "ljq test", "instanceList": null, "checkStatus": 0, "hostIp": "99.1.67.23", "createDate": 1399340064000, "fileUrl": null, "releaseVersionTime": null, "hostId": 197, "token": null, "lastUpdate": null, "instanceId": 0, "versionTime": null, "hostName": "ljq test", "versionId": 0, "fileId": 0},
        {"fileId": 0, "checkStatus": 0, "hostName": "黄煜驰_测试主机", "hostIp": "99.1.67.18", "versionTime": null, "fileUrl": null, "lastUpdate": null, "token": "123456", "instanceList": null, "createDate": 1399430064000, "releaseVersionTime": null, "hostId": 198, "hostDesc": "黄煜驰_测试主机", "versionId": 0, "instanceId": 0},
        {"createDate": 1399461569000, "hostName": "hmj正式测试主机1", "hostId": 199, "fileUrl": null, "fileId": 0, "token": "123456", "lastUpdate": null, "releaseVersionTime": null, "checkStatus": 0, "instanceList": null, "hostDesc": "说东方闪电", "instanceId": 0, "versionTime": null, "versionId": 0, "hostIp": "22.22.33.1"},
        {"fileUrl": null, "instanceId": 0, "fileId": 0, "hostName": "上海测试", "token": null, "lastUpdate": null, "versionId": 0, "checkStatus": 0, "hostDesc": "上海测试", "hostId": 200, "instanceList": null, "versionTime": null, "createDate": 1399515146000, "releaseVersionTime": null, "hostIp": "99.1.67.44"},
        {"fileId": 0, "token": null, "hostId": 313, "lastUpdate": null, "createDate": 1399947149000, "hostDesc": "撒的撒的", "hostIp": "22.22.22.3", "releaseVersionTime": null, "hostName": "hmjhmj主机", "versionId": 0, "instanceList": null, "checkStatus": 0, "versionTime": null, "fileUrl": null, "instanceId": 0},
        {"fileId": 0, "hostId": 314, "versionTime": null, "checkStatus": 0, "hostName": "tttt", "fileUrl": null, "versionId": 0, "releaseVersionTime": null, "instanceList": null, "createDate": 1400742210000, "hostDesc": "llll", "hostIp": "99.1.67.23", "instanceId": 0, "token": null, "lastUpdate": null},
        {"instanceList": null, "createDate": 1400747941000, "fileUrl": null, "hostDesc": "JunitTest", "checkStatus": 0, "hostIp": "192.168.1.1", "fileId": 0, "releaseVersionTime": null, "lastUpdate": null, "hostName": "HostTest", "versionTime": null, "instanceId": 0, "versionId": 0, "hostId": 315, "token": "123456"},
        {"fileId": 0, "checkStatus": 0, "hostIp": "192.168.1.1", "instanceId": 0, "releaseVersionTime": null, "hostDesc": "JunitTest", "fileUrl": null, "instanceList": null, "hostId": 317, "versionId": 0, "token": "123456", "lastUpdate": null, "createDate": 1400748261000, "versionTime": null, "hostName": "HostTest"}
    ],
    "requestParam": {
        "searchKey": null,
        "reqPageInfo": {"totalRecords": 41, "currentPage": 0, "pageSize": 10},
        "reqPageModel": null
    },
    "success": true, "msg": "查询成功。"
};

exports.simpleAppList = {
    "jsonData": [
        {"appName": "hmj应用1.12", "fileUrl": null, "fileId": 0, "createDate": 1398498810000, "appDesc": "四十四修改了该应用3", "appId": 171, "sysId": 109, "lastUpdate": 1400637249000, "checkStatus": null},
        {"fileId": 0, "appId": 172, "lastUpdate": 1399272678000, "createDate": 1398498920000, "checkStatus": null, "appName": "hmj应用2.1", "fileUrl": null, "appDesc": "啊啊", "sysId": 110},
        {"appId": 173, "appName": "hmj应用2.2", "sysId": 110, "fileId": 0, "appDesc": "撒的发生", "lastUpdate": 1399272685000, "checkStatus": null, "fileUrl": null, "createDate": 1398498958000},
        {"appName": "hmj应用1.2", "fileUrl": null, "createDate": 1399272541000, "lastUpdate": 1399272541000, "fileId": 0, "checkStatus": null, "appDesc": "是", "sysId": 109, "appId": 179},
        {"createDate": 1399272567000, "fileUrl": null, "lastUpdate": 1399272567000, "appName": "hmj应用1.3", "appId": 180, "fileId": 0, "sysId": 109, "checkStatus": null, "appDesc": "啊"},
        {"appId": 181, "appDesc": "啊", "createDate": 1399272578000, "sysId": 109, "fileUrl": null, "appName": "hmj应用1.4", "checkStatus": null, "lastUpdate": 1399272578000, "fileId": 0},
        {"createDate": 1399272592000, "appDesc": "额很大", "appName": "hmj应用1.5", "lastUpdate": 1400568921000, "appId": 182, "fileUrl": null, "checkStatus": null, "sysId": 109, "fileId": 0},
        {"fileId": 0, "createDate": 1399272604000, "lastUpdate": 1400568906000, "appDesc": "额", "checkStatus": null, "appName": "hmj应用1.622", "sysId": 109, "appId": 183, "fileUrl": null},
        {"fileId": 0, "appName": "hmj应用3.1", "sysId": 115, "createDate": 1399273059000, "fileUrl": null, "appId": 184, "lastUpdate": 1399273059000, "appDesc": "啊啊", "checkStatus": null},
        {"appId": 185, "createDate": 1399273072000, "appName": "hmj应用3.2", "lastUpdate": 1399273072000, "checkStatus": null, "fileId": 0, "appDesc": "问问", "sysId": 115, "fileUrl": null},
        {"checkStatus": null, "lastUpdate": 1399273083000, "fileId": 0, "sysId": 115, "fileUrl": null, "createDate": 1399273083000, "appId": 186, "appDesc": "啊啊我", "appName": "hmj应用3.3"},
        {"checkStatus": null, "lastUpdate": 1399273094000, "appName": "hmj应用3.4", "createDate": 1399273094000, "appDesc": "阿斯顿发", "fileUrl": null, "fileId": 0, "sysId": 115, "appId": 187},
        {"fileUrl": null, "lastUpdate": 1399273105000, "appName": "hmj应用3.5", "appId": 188, "fileId": 0, "appDesc": "啊啊", "sysId": 115, "createDate": 1399273105000, "checkStatus": null},
        {"fileId": 0, "sysId": 115, "lastUpdate": 1399273116000, "appName": "hmj应用3.6", "createDate": 1399273116000, "fileUrl": null, "checkStatus": null, "appId": 189, "appDesc": "112啊"},
        {"fileId": 0, "fileUrl": null, "appName": "hmj应用3.7", "appDesc": "二二二二", "lastUpdate": 1399273147000, "sysId": 115, "createDate": 1399273147000, "appId": 190, "checkStatus": null},
        {"lastUpdate": 1399276093000, "fileUrl": null, "checkStatus": null, "appDesc": "啊啊", "fileId": 0, "createDate": 1399276093000, "appId": 191, "sysId": 117, "appName": "hmj应用4.1"},
        {"appName": "黄煜驰测试", "appId": 266, "fileId": 0, "appDesc": "黄煜驰测试", "lastUpdate": 1400315198000, "createDate": 1400315198000, "checkStatus": null, "sysId": 117, "fileUrl": null},
        {"fileUrl": null, "fileId": 0, "appDesc": "ww是打算", "lastUpdate": 1400568918000, "sysId": 109, "createDate": 1400486163000, "appId": 267, "checkStatus": null, "appName": "cc乜乜"},
        {"fileUrl": null, "appId": 362, "createDate": 1400574947000, "sysId": 279, "appName": "ljq test", "appDesc": "ljq test", "lastUpdate": 1400574947000, "checkStatus": null, "fileId": 0},
        {"createDate": 1400747910000, "appId": 363, "fileUrl": null, "fileId": 0, "appDesc": "大撒旦撒", "sysId": 281, "appName": "黄煜驰_测试", "lastUpdate": 1400747910000, "checkStatus": null}
    ],
    "msg": "查询成功。",
    "requestParam": {
        "searchKey": null,
        "reqPageInfo": {"totalRecords": 41, "currentPage": 0, "pageSize": 10},
        "reqPageModel": null
    },
    "success": true,
    "pageInfo": null
};

exports.addMessageResponse = {
    "msg": "查询成功。",
    "requestParam": {"reqPageModel": null,
        "reqPageInfo": {
            "pageSize": 10, "totalRecords": 3, "currentPage": 0
        },
        "searchKey": null
    },
    "success": true,
    "pageInfo": null,
    "jsonData": [
        {"content": "3", "receiver": "流浪猫;", "importance": 1, "sendWay": "1;2;0", "updateEventType": "2", "title": "2", "note": "0", "status": 1, "email": "1", "upateTime": null, "hostId": "190;196;197;", "weixin": "2", "receiptTime": null, "messageId": 71, "createTime": null, "eventType": "1;2;0", "addEventType": "1", "triggers": "213", "createUser": null, "copyTo": "213;1762;", "appId": "171;172;173;", "delEventType": "0", "receiverId": "213;", "messageName": "tt"}
    ]};

exports.messageList = {"msg": "查询成功。", "pageInfo": null, "success": true, "requestParam": {"reqPageModel": null, "reqPageInfo": {"totalRecords": 102, "pageSize": 10, "currentPage": 0}, "searchKey": null}, "jsonData": [
    {"upateTime": null, "receiptTime": 1400637380000, "beginReceiptTime": null, "sendWay": "1", "sendStatus": 1, "endReceiptTime": null, "createTime": null, "messageId": 77, "messageLoggingId": 222, "receiver": "黄明江"},
    {"beginReceiptTime": null, "createTime": null, "sendStatus": 1, "receiptTime": 1400637380000, "messageLoggingId": 223, "sendWay": "1", "messageId": 77, "endReceiptTime": null, "receiver": "流浪猫", "upateTime": null},
    {"createTime": null, "receiver": "黄明江", "receiptTime": 1400637250000, "messageLoggingId": 220, "sendStatus": 1, "beginReceiptTime": null, "sendWay": "1", "messageId": 77, "upateTime": null, "endReceiptTime": null},
    {"receiptTime": 1400637250000, "sendStatus": 1, "messageLoggingId": 221, "endReceiptTime": null, "upateTime": null, "beginReceiptTime": null, "messageId": 77, "sendWay": "1", "receiver": "流浪猫", "createTime": null},
    {"messageLoggingId": 218, "upateTime": null, "messageId": 77, "sendWay": "1", "receiptTime": 1400637240000, "sendStatus": 1, "receiver": "黄明江", "beginReceiptTime": null, "endReceiptTime": null, "createTime": null},
    {"upateTime": null, "messageLoggingId": 219, "sendWay": "1", "endReceiptTime": null, "sendStatus": 1, "beginReceiptTime": null, "receiver": "流浪猫", "receiptTime": 1400637240000, "messageId": 77, "createTime": null},
    {"receiver": "黄明江", "beginReceiptTime": null, "endReceiptTime": null, "messageLoggingId": 214, "messageId": 71, "sendWay": "1", "sendStatus": 1, "upateTime": null, "createTime": null, "receiptTime": 1400575048000},
    {"upateTime": null, "messageId": 71, "messageLoggingId": 215, "createTime": null, "sendStatus": 1, "beginReceiptTime": null, "receiver": "流浪猫", "sendWay": "2", "receiptTime": 1400575048000, "endReceiptTime": null},
    {"upateTime": null, "receiptTime": 1400575048000, "messageId": 71, "receiver": "流浪猫", "beginReceiptTime": null, "messageLoggingId": 216, "sendStatus": 1, "createTime": null, "sendWay": "2", "endReceiptTime": null},
    {"receiptTime": 1400575048000, "messageId": 71, "sendStatus": 1, "upateTime": null, "createTime": null, "messageLoggingId": 217, "endReceiptTime": null, "beginReceiptTime": null, "sendWay": "2", "receiver": "黄明江"}
]};

exports.appRoles = {
    "success": true,
    "jsonData": [
    {
        "roleNameSpecified": true,
        "permissions": {"permissionSpecified": false, "permission": null},
        "roleName": "应用版本_超级管理员",
        "application": null,
        "roleIDSpecified": true,
        "entityKey": {
            "entityKeyValues": {
                "entityKeyMember": [
                    {"value": 43, "valueSpecified": true, "keySpecified": true, "key": "RoleID"}
                ],
            "entityKeyMemberSpecified": true
            },
        "entityKeyValuesSpecified": true,
        "ref": null,
        "entityContainerName": "PMSEntitiesModel",
        "entityContainerNameSpecified": true,
        "entitySetName": "Roles",
        "entitySetNameSpecified": true,
        "id": {}
        },
        "re_User_RoleSpecified": true,
        "parentRoleID": 0,
        "applicationSpecified": true,
        "ctimeSpecified": true,
        "roleID": 43,
        "re_User_Role": {
            "re_User_Role": null,
            "re_User_RoleSpecified": false
        },
        "applicationIDSpecified": true,
        "cIdSpecified": true,
        "parentRoleIDSpecified": true,
        "applicationReference": {
            "entityKey": null, "entityKeySpecified": true
        },
        "id": {},
        "applicationReferenceSpecified": true,
        "cId": 0,
        "ref": null,
        "permissionsSpecified": true,
        "applicationID": 1012,
        "entityKeySpecified": true,
        "ctime": {"firstDayOfWeek": 1, "timeInMillis": 1396318517123, "weekYear": 2014, "timeZone": {"lastRuleInstance": null, "iD": "Asia/Shanghai", "rawOffset": 28800000, "dSTSavings": 0, "dirty": false, "displayName": "中国标准时间"}, "minimalDaysInFirstWeek": 1, "weeksInWeekYear": 52, "time": 1396318517123, "weekDateSupported": true, "lenient": false, "gregorianChange": -12219292800000}},
    {"permissionsSpecified": true, "re_User_Role": {"re_User_Role": null, "re_User_RoleSpecified": false}, "permissions": {"permission": null, "permissionSpecified": false}, "cId": 0, "id": {}, "entityKeySpecified": true, "ctime": {"weekDateSupported": true, "weekYear": 2014, "timeZone": {"iD": "Asia/Shanghai", "dSTSavings": 0, "lastRuleInstance": null, "dirty": false, "rawOffset": 28800000, "displayName": "中国标准时间"}, "time": 1396318593073, "weeksInWeekYear": 52, "lenient": false, "firstDayOfWeek": 1, "minimalDaysInFirstWeek": 1, "gregorianChange": -12219292800000, "timeInMillis": 1396318593073}, "applicationReference": {"entityKey": null, "entityKeySpecified": true}, "roleIDSpecified": true, "parentRoleIDSpecified": true, "entityKey": {"entityContainerName": "PMSEntitiesModel", "ref": null, "id": {}, "entityKeyValuesSpecified": true, "entityContainerNameSpecified": true, "entityKeyValues": {"entityKeyMemberSpecified": true, "entityKeyMember": [
        {"keySpecified": true, "valueSpecified": true, "key": "RoleID", "value": 44}
    ]}, "entitySetName": "Roles", "entitySetNameSpecified": true}, "ref": null, "applicationReferenceSpecified": true, "applicationIDSpecified": true, "parentRoleID": 0, "applicationSpecified": true, "applicationID": 1012, "cIdSpecified": true, "roleNameSpecified": true, "roleID": 44, "application": null, "roleName": "应用版本_管理员", "re_User_RoleSpecified": true, "ctimeSpecified": true},
    {"applicationReferenceSpecified": true, "applicationSpecified": true, "applicationReference": {"entityKeySpecified": true, "entityKey": null}, "applicationIDSpecified": true, "parentRoleID": 0, "entityKey": {"ref": null, "entityContainerName": "PMSEntitiesModel", "entityKeyValuesSpecified": true, "entitySetName": "Roles", "entitySetNameSpecified": true, "entityContainerNameSpecified": true, "id": {}, "entityKeyValues": {"entityKeyMemberSpecified": true, "entityKeyMember": [
        {"key": "RoleID", "value": 46, "valueSpecified": true, "keySpecified": true}
    ]}}, "re_User_RoleSpecified": true, "roleName": "应用版本 _普通用户", "ref": null, "ctime": {"time": 1397702765277, "weekYear": 2014, "firstDayOfWeek": 1, "weeksInWeekYear": 52, "timeInMillis": 1397702765277, "lenient": false, "minimalDaysInFirstWeek": 1, "gregorianChange": -12219292800000, "weekDateSupported": true, "timeZone": {"rawOffset": 28800000, "displayName": "中国标准时间", "iD": "Asia/Shanghai", "dirty": false, "dSTSavings": 0, "lastRuleInstance": null}}, "entityKeySpecified": true, "ctimeSpecified": true, "roleIDSpecified": true, "parentRoleIDSpecified": true, "id": {}, "cIdSpecified": true, "permissionsSpecified": true, "application": null, "re_User_Role": {"re_User_Role": null, "re_User_RoleSpecified": false}, "permissions": {"permission": null, "permissionSpecified": false}, "applicationID": 1012, "roleID": 46, "cId": 0, "roleNameSpecified": true},
    {"ref": null, "re_User_RoleSpecified": true, "parentRoleIDSpecified": true, "cId": 0, "permissions": {"permission": null, "permissionSpecified": false}, "applicationReference": {"entityKey": null, "entityKeySpecified": true}, "permissionsSpecified": true, "parentRoleID": 0, "applicationIDSpecified": true, "ctime": {"timeZone": {"dSTSavings": 0, "dirty": false, "rawOffset": 28800000, "iD": "Asia/Shanghai", "lastRuleInstance": null, "displayName": "中国标准时间"}, "lenient": false, "weekYear": 2014, "minimalDaysInFirstWeek": 1, "time": 1397703300443, "firstDayOfWeek": 1, "weekDateSupported": true, "gregorianChange": -12219292800000, "weeksInWeekYear": 52, "timeInMillis": 1397703300443}, "roleNameSpecified": true, "applicationSpecified": true, "roleID": 47, "entityKeySpecified": true, "applicationID": 1012, "roleName": "餐旅系统管理员", "id": {}, "entityKey": {"ref": null, "entitySetNameSpecified": true, "entityKeyValues": {"entityKeyMemberSpecified": true, "entityKeyMember": [
        {"key": "RoleID", "value": 47, "keySpecified": true, "valueSpecified": true}
    ]}, "entityContainerName": "PMSEntitiesModel", "id": {}, "entityKeyValuesSpecified": true, "entitySetName": "Roles", "entityContainerNameSpecified": true}, "roleIDSpecified": true, "re_User_Role": {"re_User_Role": null, "re_User_RoleSpecified": false}, "ctimeSpecified": true, "cIdSpecified": true, "applicationReferenceSpecified": true, "application": null},
    {"permissionsSpecified": true, "applicationReferenceSpecified": true, "applicationReference": {"entityKey": null, "entityKeySpecified": true}, "ctime": {"gregorianChange": -12219292800000, "weeksInWeekYear": 52, "timeZone": {"rawOffset": 28800000, "lastRuleInstance": null, "displayName": "中国标准时间", "dSTSavings": 0, "iD": "Asia/Shanghai", "dirty": false}, "firstDayOfWeek": 1, "weekYear": 2014, "weekDateSupported": true, "time": 1400637575017, "minimalDaysInFirstWeek": 1, "timeInMillis": 1400637575017, "lenient": false}, "roleID": 48, "applicationIDSpecified": true, "id": {}, "entityKey": {"ref": null, "entityContainerName": "PMSEntitiesModel", "entityKeyValuesSpecified": true, "entitySetName": "Roles", "entityKeyValues": {"entityKeyMember": [
        {"keySpecified": true, "valueSpecified": true, "key": "RoleID", "value": 48}
    ], "entityKeyMemberSpecified": true}, "entitySetNameSpecified": true, "id": {}, "entityContainerNameSpecified": true}, "applicationID": 1012, "ref": null, "re_User_RoleSpecified": true, "permissions": {"permission": null, "permissionSpecified": false}, "cIdSpecified": true, "roleIDSpecified": true, "ctimeSpecified": true, "roleName": "对对对", "parentRoleID": 0, "roleNameSpecified": true, "parentRoleIDSpecified": true, "cId": 0, "application": null, "applicationSpecified": true, "re_User_Role": {"re_User_Role": null, "re_User_RoleSpecified": false}, "entityKeySpecified": true}
    ],
    "msg": "查询成功。", "requestParam": null, "pageInfo": null};

exports.resourceList = {"requestParam": null, "success": true, "msg": "查询成功。", "jsonData": [
    {"lists": [
        {"resourceName": "hmj应用1.12", "resourceId": 171, "id": 6, "parentId": 109, "lists": null, "typeId": 2},
        {"typeId": 2, "resourceName": "hmj应用1.2", "id": 29, "resourceId": 179, "parentId": 109, "lists": null},
        {"resourceName": "hmj应用1.3", "resourceId": 180, "parentId": 109, "id": 30, "typeId": 2, "lists": null},
        {"id": 31, "typeId": 2, "resourceId": 181, "resourceName": "hmj应用1.4", "parentId": 109, "lists": null},
        {"resourceId": 182, "parentId": 109, "id": 32, "typeId": 2, "resourceName": "hmj应用1.5", "lists": null},
        {"resourceId": 183, "parentId": 109, "id": 33, "typeId": 2, "lists": null, "resourceName": "hmj应用1.622"},
        {"resourceId": 267, "lists": null, "id": 422, "typeId": 2, "resourceName": "cc乜乜", "parentId": 109}
    ], "resourceName": "hmj系统123", "resourceId": 109, "id": 5, "parentId": 0, "typeId": 1},
    {"parentId": 0, "resourceName": "hmj系统21", "lists": [
        {"parentId": 110, "lists": null, "resourceId": 172, "resourceName": "hmj应用2.1", "typeId": 2, "id": 8},
        {"parentId": 110, "resourceName": "hmj应用2.2", "typeId": 2, "resourceId": 173, "id": 9, "lists": null}
    ], "resourceId": 110, "id": 7, "typeId": 1},
    {"id": 10, "resourceName": "hmj主机1qwa2", "resourceId": 190, "parentId": 0, "lists": [
        {"resourceName": "hmj实例1.1", "lists": null, "resourceId": 81, "id": 11, "parentId": 190, "typeId": 4},
        {"lists": null, "typeId": 4, "resourceName": "hmj实例1.2", "resourceId": 82, "parentId": 190, "id": 12},
        {"typeId": 4, "id": 43, "resourceName": "hmj实例1.3", "resourceId": 85, "lists": null, "parentId": 190}
    ], "typeId": 3},
    {"resourceId": 115, "id": 28, "resourceName": "hmj系统3", "lists": [
        {"resourceId": 184, "resourceName": "hmj应用3.1", "lists": null, "id": 34, "parentId": 115, "typeId": 2},
        {"parentId": 115, "id": 35, "resourceId": 185, "typeId": 2, "lists": null, "resourceName": "hmj应用3.2"},
        {"resourceId": 186, "resourceName": "hmj应用3.3", "lists": null, "id": 36, "typeId": 2, "parentId": 115},
        {"resourceName": "hmj应用3.4", "lists": null, "parentId": 115, "id": 37, "resourceId": 187, "typeId": 2},
        {"typeId": 2, "resourceName": "hmj应用3.5", "resourceId": 188, "parentId": 115, "lists": null, "id": 38},
        {"lists": null, "id": 39, "resourceId": 189, "parentId": 115, "typeId": 2, "resourceName": "hmj应用3.6"},
        {"resourceName": "hmj应用3.7", "lists": null, "typeId": 2, "resourceId": 190, "id": 40, "parentId": 115}
    ], "parentId": 0, "typeId": 1},
    {"lists": [
        {"resourceName": "hmj实例", "resourceId": 86, "lists": null, "id": 48, "typeId": 4, "parentId": 196},
        {"typeId": 4, "parentId": 196, "resourceId": 87, "lists": null, "resourceName": "hmj实例", "id": 49},
        {"resourceId": 88, "parentId": 196, "typeId": 4, "lists": null, "resourceName": "hmjdd", "id": 50}
    ], "typeId": 3, "resourceName": "hmj主机22222", "resourceId": 196, "parentId": 0, "id": 42},
    {"typeId": 1, "lists": [
        {"typeId": 2, "id": 46, "lists": null, "resourceId": 191, "parentId": 117, "resourceName": "hmj应用4.1"},
        {"resourceName": "黄煜驰测试", "id": 414, "typeId": 2, "resourceId": 266, "parentId": 117, "lists": null}
    ], "parentId": 0, "resourceId": 117, "id": 45, "resourceName": "hmj系统4"},
    {"resourceName": "黄煜驰_测试主机", "parentId": 0, "lists": [
        {"lists": null, "parentId": 198, "resourceId": 89, "typeId": 4, "id": 54, "resourceName": "黄煜驰_测试实例"}
    ], "typeId": 3, "resourceId": 198, "id": 52},
    {"id": 57, "resourceId": 199, "parentId": 0, "typeId": 3, "lists": [
        {"parentId": 199, "id": 58, "resourceId": 90, "typeId": 4, "resourceName": "hmj正式测试实例1", "lists": null}
    ], "resourceName": "hmj正式测试主机1"},
    {"resourceName": "上海测试", "parentId": 0, "resourceId": 200, "id": 62, "lists": [
        {"resourceId": 91, "id": 64, "resourceName": "上海测试", "typeId": 4, "parentId": 200, "lists": null}
    ], "typeId": 3},
    {"lists": [
        {"resourceName": "hmjhmjhmj实例", "typeId": 4, "resourceId": 191, "parentId": 313, "lists": null, "id": 409},
        {"parentId": 313, "resourceName": "hmjhmj实例2", "lists": null, "id": 410, "typeId": 4, "resourceId": 192}
    ], "resourceName": "hmjhmj主机", "resourceId": 313, "id": 408, "typeId": 3, "parentId": 0},
    {"typeId": 1, "resourceId": 279, "lists": [
        {"lists": null, "typeId": 2, "resourceId": 362, "id": 857, "resourceName": "ljq test", "parentId": 279}
    ], "parentId": 0, "id": 856, "resourceName": "ljq test"},
    {"resourceId": 280, "lists": [], "resourceName": "hmj系统", "parentId": 0, "id": 860, "typeId": 1},
    {"lists": [], "resourceName": "tttt", "resourceId": 314, "parentId": 0, "id": 861, "typeId": 3},
    {"resourceName": "黄煜驰_测试", "parentId": 0, "typeId": 1, "lists": [
        {"typeId": 2, "resourceName": "黄煜驰_测试", "parentId": 281, "id": 863, "lists": null, "resourceId": 363}
    ], "resourceId": 281, "id": 862},
    {"typeId": 3, "resourceId": 315, "id": 865, "resourceName": "HostTest", "lists": [], "parentId": 0},
    {"typeId": 3, "id": 870, "resourceName": "HostTest", "parentId": 0, "lists": [], "resourceId": 317},
    {"parentId": 0, "typeId": 3, "resourceId": 321, "resourceName": "Host Test", "lists": [], "id": 879},
    {"resourceId": 322, "parentId": 0, "resourceName": "HostTest", "lists": [], "typeId": 3, "id": 881},
    {"typeId": 3, "parentId": 0, "resourceId": 324, "id": 886, "resourceName": "HostTest", "lists": []},
    {"resourceName": "HostTest", "resourceId": 326, "id": 891, "lists": [], "typeId": 3, "parentId": 0},
    {"typeId": 3, "parentId": 0, "lists": [], "id": 896, "resourceName": "HostTest", "resourceId": 328},
    {"lists": [], "id": 901, "resourceName": "HostTest", "parentId": 0, "typeId": 3, "resourceId": 330},
    {"lists": [], "id": 906, "resourceId": 332, "typeId": 3, "parentId": 0, "resourceName": "HostTest"},
    {"typeId": 3, "resourceId": 334, "lists": [], "id": 911, "parentId": 0, "resourceName": "HostTest"},
    {"resourceName": "HostTest", "lists": [], "typeId": 3, "resourceId": 336, "id": 916, "parentId": 0},
    {"typeId": 3, "parentId": 0, "id": 926, "lists": [], "resourceName": "HostTest", "resourceId": 340},
    {"parentId": 0, "resourceName": "HostTest", "resourceId": 344, "id": 936, "typeId": 3, "lists": []},
    {"id": 986, "lists": [], "parentId": 0, "typeId": 3, "resourceName": "HostTest", "resourceId": 364}
], "pageInfo": null};

exports.roleResourceList = {
    "jsonData": [5, 6, 7, 402, 8, 403, 9, 400, 10, 401, 11, 12, 404, 405, 29, 28, 31, 269, 30, 34, 35,
                32, 33, 38, 39, 36, 37, 42, 43, 40, 46, 47, 45, 51, 50, 49, 48, 55, 54, 53, 52, 59, 58,
                57, 56, 63, 62, 61, 60, 64, 65, 66, 197, 235, 245, 240, 406, 407, 408, 409, 410, 411,
                412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428,
                429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446,
                447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464,
                465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482,
                483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500,
                501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518,
                519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536,
                537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554,
                555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572,
                573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590,
                591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608,
                609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626,
                627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644,
                645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662,
                663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680,
                681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698,
                699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716,
                717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734,
                735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752,
                753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770,
                771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788,
                789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806,
                807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824,
                825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842,
                843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860,
                861, 862, 863, 864, 865, 866, 867, 868, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870,
                871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888,
                889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906,
                907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924,
                925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942,
                943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960,
                961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978,
                979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996,
                997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012,
                1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027,
                1028, 1029, 1030, 1031, 1032, 1033],

        "requestParam": null,
        "success": true,
        "pageInfo": null,
        "msg": "查询成功。"
};
//============结束============
