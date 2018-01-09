const { resolve } = require('path')
const cwd = process.cwd()
const load = moduleName => require(resolve(cwd, 'src', 'main', moduleName))

const assert = require('assert')

const app = load('index')

describe("Main Process tests", function() {

  it("should test something", () => {
    assert.strictEqual(app(), 'test')
  })

})