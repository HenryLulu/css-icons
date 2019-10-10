const fs = require('fs');

const PATH = 'src/icons-v1.less';

let content = fs.readFileSync(PATH).toString();

content = content.replace(/(0\.\d+)em/g, (word, s1) => {
  return (Number(s1) / 0.36).toFixed(4) + 'em';
});

const e = fs.writeFileSync(PATH, content);

console.log(e)
