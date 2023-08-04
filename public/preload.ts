// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import fs from 'fs';
import { ipcRenderer } from 'electron';

// Open dialog
const dialogOpen = () =>  ipcRenderer.send('dialog-open');

// Save files
const dialogSave = (json: any) => {
  ipcRenderer.send('dialog-save', json);
}

window.api = {
  ipcRenderer,
  dialogOpen,
  dialogSave,
  fs
}