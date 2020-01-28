const { app, BrowserWindow } = require('electron')
let win;
function createWindow () {
  win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL(`file://${__dirname}/index.html`);
  // win.loadFile('index.html')

  win.webContents.openDevTools()

  win.on('closed', () => {
    console.log('window closed');
    win = null
    app.quit();
  });
}
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  console.log('All Closed');
  if(process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if(win == null){
    createWindow()
  }
})