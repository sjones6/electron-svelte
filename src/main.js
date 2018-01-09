const electron = require('electron')
const { app, BrowserWindow } = electron
const { join } = require('path')
const url = require('url')
const reload = require('electron-reload')

if (process.env.NODE_ENV !== 'production') {
  reload(join(__dirname), {
    electron: join(__dirname, '..', 'node_modules', '.bin', 'electron')
  });
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let window

function createWindow () {
  // Create the browser window.
  window = new BrowserWindow({width: 800, height: 600})

  // and load the index.html of the app.
  window.loadURL(url.format({
    pathname: join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  if (process.env.NODE_ENV !== 'production') {
    window.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  window.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (window === null) {
    createWindow()
  }
})