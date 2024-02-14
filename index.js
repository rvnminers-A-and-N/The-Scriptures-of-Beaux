const { app, BrowserWindow } = require('electron');

function createWindow () {
  var splash = new BrowserWindow({ 
    width: 800,
    height: 600,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    fullscreen: true
  });
  
  splash.center();
  splash.maximize();
  splash.loadFile('resources/splash.html');

  // Create the browser window.
  var win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Maximize the window to take up the entire screen space but still keep the window controls
  //win.maximize();

  // If you really want it to cover the entire screen but not in the fullscreen mode, you can uncomment the following:
  // const { screen } = require('electron');
  // const primaryDisplay = screen.getPrimaryDisplay();
  // const { width, height } = primaryDisplay.workAreaSize;
  // win.setBounds({ x: 0, y: 0, width, height });

  // and load the index.html of the app.
  // win.loadFile('resources/The Scriptures of Beaux.html');

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Hide the menu bar
  //win.setMenuBarVisibility(false);
  // Or to remove the menu entirely
  // win.setMenu(null);

  setTimeout(function () {
    splash.close();
    win.center();
    win.maximize();
    win.setMenuBarVisibility(false);
    win.loadFile('resources/The Scriptures of Beaux.html');
    win.show();
  }, 5000);

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  // Quit when all windows are closed, except on macOS. There,
  // it's common for applications to stay active until the user quits
  // explicitly with Cmd + Q.
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
});