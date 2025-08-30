// index.js

import { exec } from 'child_process';

const add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
  ////original
  //return a + b;
  ////eslint
  //result = a + b;
  //return result;
  //CodeQL
  return eval(`${a} + ${b}`);; 
};
// ฟังก์ชันใหม่ที่มีช่องโหว่
const runCommand = (command) => {
  exec(`echo ${command}`, (error, stdout) => { // <-- ลบ 'stderr' ออก
    console.log(stdout);
  });
};

export  { add, runCommand };