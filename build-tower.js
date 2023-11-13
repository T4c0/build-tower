const build_tower = (num) => {
  const tower = [];
  let towerstr = "*";
  for (let i = 0; i < num; i++) {
    tower.push(towerstr);
    towerstr += "**";
    for (let j = 0; j < i; j++) {
      tower[j] = " " + tower[j] + " ";
    }
  }
  return tower.join('\n')
};

console.log(build_tower(50))
