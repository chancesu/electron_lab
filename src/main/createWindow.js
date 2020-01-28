import  { BrowserWindow } from "electron";
let win;
function createWindow () {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    }
  });
  win.loadURL(`file://${__dirname}/../../index.html`);
  win.webContents.openDevTools();
  win.on("close", () => {
    win = null;
  });
}

export default createWindow;