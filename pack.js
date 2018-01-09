const { spawn } = require('child_process')
const { join }  = require('path')

/**
 * Note, this is probably not compatible with Windows machines
 */

let child
const start = () => {
  child = spawn(
    'node',
    [join(__dirname, 'node_modules', 'webpack', 'bin', 'webpack'), '--config=./webpack.config.js', '--watch'],
    {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'inherit'
    }
  )
  child.on('close', () => setTimeout(start, 1000))
}

process.on('close', () => {
  child && child.kill('SIGINT')
})

// get the ball rolling ... 
start()
