class HelloWorldExtension {
    getInfo() {
        return {
            id: 'helloWorld',
            name: 'Hello, World!',
            blocks: [
                {
                    opcode: 'sayHello',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'say hello world',
                },
                {
                    opcode: 'deleteClass',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'delete class [CLASS]',
                },
            ],
        };
    }

    sayHello() {
        console.log('Hello, world!');
    }

    deleteClass(args) {
        let elements = document.getElementsByClassName(args.CLASS);
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}

Scratch.extensions.register(new HelloWorldExtension());
