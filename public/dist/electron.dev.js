"use strict";

var path = require('path');

var _require = require('electron'),
    app = _require.app,
    BrowserWindow = _require.BrowserWindow;

var isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  var win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  }); // and load the index.html of the app.
  // win.loadFile("index.html");

  win.loadURL(isDev ? 'http://localhost:3000' : "file://".concat(path.join(__dirname, '../build/index.html'))); // Open the DevTools.

  if (isDev) {
    win.webContents.openDevTools({
      mode: 'detach'
    });
  }
}

app.whenReady().then(createWindow);
app.on('window-all-closed', function () {
  app.quit();
});
app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});