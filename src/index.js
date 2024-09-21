import fs from 'fs';
import path from 'path';

const pathData = path.resolve('src', 'data', 'posts.json');

const data = fs.readFileSync(pathData);

const parseData = JSON.parse(data);
const pushData = {
  id: 10,
  title: 'Kỹ Thuật Lập Trình An Toàn',
  content: 'Hướng dẫn kỹ thuật lập trình an toàn...',
  topic: 'Cybersecurity',
  author: 'Đặng Minh Trí',
  date: '2023-09-30',
};

parseData.posts.push(pushData);

fs.writeFileSync(pathData, JSON.stringify(parseData));
console.log('Updated data!');

// Default nodemon .json, js, .mjs
