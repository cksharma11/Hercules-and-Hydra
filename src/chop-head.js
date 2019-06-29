const isSingleLevelOneHead = heads => {
  return heads[0] === 1 && heads.length === 1;
};

const isDead = heads => {
  return heads.length === 0;
};

const getLevel = heads => {
  return heads[0] - 1;
};

const spawnHeads = level => {
  return new Array(level).fill(level);
};

const clone = heads => {
  return heads.slice(0);
};

const cutFirstHead = heads => {
  const headsClone = clone(heads);
  headsClone.shift();
  return headsClone;
};

const getLastHead = heads => {
  return heads[heads.length - 1];
};

const addHeads = (heads, additionalHeads) => {
  const headsClone = clone(heads);
  const additionalHeadsClone = clone(additionalHeads);
  headsClone.push(...additionalHeadsClone);
  return headsClone;
};

const chopHead = heads => {
  const headsClone = clone(heads);
  if (isDead(headsClone)) return [];
  if (isSingleLevelOneHead(headsClone)) return [];

  const level = getLevel(headsClone);
  const spawnedHeads = spawnHeads(level);
  const shiftedHeads = cutFirstHead(headsClone);

  return addHeads(spawnedHeads, shiftedHeads);
};

const chopHeadTillAlive = heads => {
  const extendedHeads = [clone(heads)];
  while (!isDead(getLastHead(extendedHeads))) {
    extendedHeads.push(chopHead(getLastHead(extendedHeads)));
  }
  return extendedHeads;
};

export default chopHeadTillAlive;
