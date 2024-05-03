function initGlobalConfig() {
    const webglBundles = {
        "code": {
            "url": "./webgl.wasm",
            "md5": "cae5f24a57d55b05ac5001ef5874f1b0"
        },
        "data": {
            "url": "./webgl.data",
            "md5": "a6f008f83351598ed4736fdc6bc3d736"
        },
        "framework": {
            "url": "./webgl.framework.js",
            "md5": "9d8f8b7d90a28b3ab1ee5fbea7ac7121"
        },
        "originalWasmMd5": "3f1b4e94b8a097ca9158943c5b7c736c",
        "streamingAssetsUrl": "https://lf26-stark-cdn.bdgp.cc/obj/game-res-cn/ucmc/TCE/PublishServer/WebGL/iOS/tt4afd3c40d5cebeb607/latest/0.0.67/StreamingAssets",
        "unityVersion": "2021.3.15f1c1"
    };

    const globalConfig = {
        "appExtJson": "{}",
        "versionStateJson": "{\"engine\":3001,\"iosengine\":3001,\"use_webgl_package_v2\":true,\"webgl_debug\":{\"enableVConsole\":true},\"webgl_enable_ios_record\":true,\"webgl_package\":{\"ctime\":\"2023-11-20 17:33:43\",\"index\":\"index.html\",\"index_for_browser\":\"https://lf26-stark-cdn.bdgp.cc/obj/game-res-cn/ucmc/TCE/PublishServer/WebGL/iOS/tt4afd3c40d5cebeb607/latest/0.0.66/Browser/index.html\",\"md5\":\"f6cb73b2e1e680c1643390edb2474c72\",\"orientation\":\"0\",\"size\":1236,\"url\":\"https://lf26-stark-cdn.bdgp.cc/obj/game-res-cn/ucmc/TCE/PublishServer/WebGL/iOS/tt4afd3c40d5cebeb607/latest/0.0.66/package.zip\",\"version\":\"0.0.66\"},\"webgl_package_android\":{\"ctime\":\"2023-11-20 17:33:43\",\"index\":\"index.js\",\"md5\":\"9d4e18102eb0fb26f6c8722d93e2d8af\",\"orientation\":\"0\",\"size\":12758213,\"url\":\"https://lf26-stark-cdn.bdgp.cc/obj/game-res-cn/ucmc/TCE/PublishServer/WebGL/Android/tt4afd3c40d5cebeb607/latest/0.0.66/package.zip\",\"version\":\"0.0.66\"},\"webgl_package_v2\":{\"ctime\":\"2023-11-20 17:33:43\",\"index\":\"index.html\",\"index_for_browser\":\"https://lf26-stark-cdn.bdgp.cc/obj/game-res-cn/ucmc/TCE/PublishServer/WebGL/iOS/tt4afd3c40d5cebeb607/latest/0.0.66/Browser/index.html\",\"md5\":\"a23ce7d94ff4b50e82589a62ee5bc60f\",\"orientation\":\"0\",\"size\":12485001,\"url\":\"https://lf26-stark-cdn.bdgp.cc/obj/game-res-cn/ucmc/TCE/PublishServer/WebGL/iOSV2/tt4afd3c40d5cebeb607/latest/0.0.66/package.zip\",\"version\":\"0.0.66\"},\"webgl_runtime_libs\":{\"md5\":\"5819577ea83cf076b6e76bc92f537c59\",\"url\":\"https://lf3-stark-cdn.bdgp.cc/obj/game-res-cn/ucmc/TCE/PublishServer/WebGL/Android/libs/1.4.90/v8_libs.json\"}}",
        "scVersion": "1.20.0"
    };

    const gameModel = {
        "appId": "tt4afd3c40d5cebeb607",
        "name": "冒险猫",
        "icon": "https://p6-mgsdk-sign.byteimg.com/tos-cn-i-ke512zj2cu/c38d956e87174411aa10d45e09ca821e~tplv-ke512zj2cu-144x144.jpeg?x-expires=2646552980\u0026x-signature=eMT7bY0wLUYe33NFdQr9FeSxq%2F8%3D",
        "orientation": 0
    };

    Object.assign(globalThis, {
        starkWebGLBundleInfos: webglBundles,
        scGlobalConfig: globalConfig,
        scGameModel: gameModel
    });
}

initGlobalConfig();
