const meme = 'data:image/png;base64,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'
class pingas {
  constructor() {}
  getInfo() {
    return {
      id: 'pingas',
      name: 'Pingas!',
      color1: '#00daee',
      color2: '#00daee',
      color3: '#00747f',
      menuIconURI: meme,
      blockIconURI: meme,
      blocks: [
        {
          opcode: 'testReporter',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Pingas',
            },
          },
          text: 'Pingas [A]',
        },
        {
          opcode: 'testHat',
          blockType: Scratch.BlockType.HAT,
          text: 'Pingas',
        },
        {
          opcode: 'testCommand',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Pingas [A]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Pingas',
            },
          },
        },
        {
          opcode: 'testVar',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Pingas',
        },
      ],
    }
  }
  testReporter({ A }) {
    return A
  }
  testHat() {
    return
  }
  testCommand({ A }) {
    return
  }
  testVar() {
    return 'Pingas'
  }
}
Scratch.extensions.register(new pingas())
