const assert = require('assert')

const mount = require('mount')
const App = require('@/App.html')

describe('App', function() {

  let { el, comp } = mount(App, {
    data: {
      name: 'test'
    }
  })

  it('should ensure component is rendered', () => {
    assert.strictEqual(el.textContent, "Hello, test!")
  })
})