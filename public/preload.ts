// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const fs = require('fs');
const electron = require('electron');
// const remote = require('remote');
// const dialog = require('electron').remote.dialog 

console.log('dialog', electron)
window.api = {
  fs
}