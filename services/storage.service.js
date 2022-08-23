import { homedir } from 'os';
import { join } from 'path';
import { promises } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};

const getFileData = async (path) => {
  if (await isExist(path)) {
    const file = await promises.readFile(path);

    return JSON.parse(file);
  } else {
    return {};
  }
}
const getKeyValue = async (key) => {
  const data = await getFileData(filePath);

  return data[key];
};

const saveKeyValue = async (key, value) => {
  const data = await getFileData(filePath);

  data[key] = value;

  await promises.writeFile(filePath, JSON.stringify(data));
}

export {
  getFileData,
  saveKeyValue,
  getKeyValue
}
