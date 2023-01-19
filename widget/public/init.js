function init (apiKey) {
  const script = document.createElement('script')

  script.src = '//cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js'
  script.async = 'async'
  script.addEventListener('load')

  document.body.appendChild(script)
}

window.init = init
