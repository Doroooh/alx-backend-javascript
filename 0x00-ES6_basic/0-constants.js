export function taskFirst() {
  const taskMessage = 'I prefer const when I can.';
  return taskMessage;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let dynamicMessage = 'But sometimes let';
  dynamicMessage += getLast();

  return dynamicMessage;
}
