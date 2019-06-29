const chopHead = head => {
  if (head.length === 0) return [];
  if (head[0] === 1 && head.length === 1) return [];
  const result = new Array(head[0] - 1).fill(head[0] - 1);
  head.shift();
  result.push(...head);
  return result;
};

const repetedlyChopHead = heads => {
  const extendedHeads = [heads.slice(0)];
  while (extendedHeads[extendedHeads.length - 1].length !== 0) {
    extendedHeads.push(
      chopHead(extendedHeads[extendedHeads.length - 1].slice(0))
    );
  }
  return extendedHeads;
};

console.log(repetedlyChopHead([3]));
