module.exports = (Svelte, opt, tag) => {
  if (Svelte.default) {
    Svelte = Svelte.default
  }

  const el = document.createDocumentFragment(tag || 'div')
  return {
      el: el,
      comp: new Svelte(Object.assign({
        target: el
      }, opt || {}))
  }
}