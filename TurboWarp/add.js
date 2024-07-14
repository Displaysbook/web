class HelloWorldExtension {
    getInfo() {
        return {
            id: 'game',
            name: 'game!',
            blocks: [
                {
                    opcode: 'gamestart',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'gamestart',
                },
            ],
        };
    }

    gamestart() {
        // 假设你要替换的 canvas 元素是页面上的第一个 canvas 元素
let oldCanvas = document.getElementsByTagName('canvas')[0];

// 创建新的 canvas 元素
let newCanvas = document.createElement('canvas');
newCanvas.width = 510;
newCanvas.height = 382;
newCanvas.style.height = '306px';
newCanvas.style.width = '408px';

// 在旧的 canvas 元素的位置插入新的 canvas 元素
oldCanvas.parentNode.insertBefore(newCanvas, oldCanvas);

// 删除旧的 canvas 元素
oldCanvas.parentNode.removeChild(oldCanvas);

console.log('New canvas element created at the same position.');

fetch('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js')
    .then(response => response.text())
    .then(text => {
        eval(text);

        // 创建一个场景
        let scene = new THREE.Scene();

        // 创建一个具有透视效果的摄像机
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // 创建一个 WebGL 渲染器，并将其附加到新的 canvas 元素
        let renderer = new THREE.WebGLRenderer({canvas: newCanvas});
        renderer.setSize(newCanvas.width, newCanvas.height);

        // 创建一个立方体几何体
        let geometry = new THREE.BoxGeometry(1, 1, 1);

        // 创建一个基本材质并设置其颜色
        let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

        // 使用几何体和材质创建一个网格（立方体）
        let cube = new THREE.Mesh(geometry, material);

        // 将立方体添加到场景
        scene.add(cube);

        // 将摄像机移动到一个可以看到立方体的位置
        camera.position.z = 5;

        // 创建一个渲染循环
        function animate() {
            requestAnimationFrame(animate);

            // 在每一帧中旋转立方体
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            // 渲染场景
            renderer.render(scene, camera);
        }

        // 开始渲染循环
        animate();
    })
    .catch(error => console.error('Error:', error));

    }
}

Scratch.extensions.register(new HelloWorldExtension());
