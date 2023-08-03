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

const formData = {};

// Open files
// ipcRenderer.on('open-file-paths', (event, content)=>{
//   console.log("content", content)
//   formData = content;
// });
ipcRenderer.on('open-file-paths', (event, store)=>{
  // console.log("store", store)
  console.log('store', store);
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
  formData,
  saveName,
  dialogOpen,
  dialogSave,
  fs,
  natification
}