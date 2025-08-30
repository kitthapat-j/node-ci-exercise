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
const getUser = (username) => {
  // นี่คือโค้ดที่มีช่องโหว่ร้ายแรง
  const query_ = `SELECT * FROM users WHERE username = '${username}';`;
  console.log('Simulating SQL query:', query_);
  return query_;
};

export  { add, runCommand , getUser };