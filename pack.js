const { spawn } = require('child_process')
const { resolve }  = require('path')

/**
 * Note, this is probably not compatible with Windows machines
 */

let webpack
let electron
const start = () => {
  startWebpack()
  startElectron()
}

const startElectron = () => {
  electron = spawn(
    'node',
    [resolve(__dirname, 'node_modules', '.bin', 'electron'), '.'],
    {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'inherit'
    }
  )
  electron.on('close', () => setTimeout(startElectron, 1000))
}

const startWebpack = () => {
  webpack = spawn(
    'node',
    [resolve(__dirname, 'node_modules', 'webpack', 'bin', 'webpack'), '--config=./webpack.config.js', '--watch'],
    {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'inherit'
    }
  )
  webpack.on('close', () => setTimeout(startWebpack, 1000))
}

process.on('close', () => {
  webpack && webpack.kill('SIGINT')
  electron && startElectron.kill('SIGINT')
})

// get the ball rolling ... 
start()
