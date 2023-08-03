// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import fs from 'fs';
import { ipcRenderer, contextBridge } from 'electron';

// const remote = require('remote');
// const dialog = require('electron').remote.dialog 

const natification = () => ipcRenderer.send("notify", "notification!!!")

// Open dialog
const dialogOpen = () => {
  ipcRenderer.send('dialog-open')
};

// Open files
ipcRenderer.on('open-file-paths', (event,data)=>{
  console.log(`Canceled? ${data.canceled}`);
  console.log(`File Paths: ${data.filePaths}`);
  // fs.open(data.filePaths, (err, data) => {
  //   if (err) throw err;
  //   console.log(111, data);
  // })
  
});

let saveName = '';

// Save files
ipcRenderer.on('saved-file', (event, filename)=>{
  console.log('filename', event, filename);
  saveName = filename;
})

const dialogSave = () => {
  ipcRenderer.send('dialog-save');
}

window.api = {
  saveName,
  dialogOpen,
  dialogSave,
  fs,
  natification
}