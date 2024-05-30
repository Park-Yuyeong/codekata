export class FixedArray {
  #arrayLength;
  #array;
  #count;

  // 생성자 파라미터에는 FixedArray의 고정된 길이를 받아야 함.
  constructor(arrayLength) {
    this.#arrayLength = arrayLength;
    this.#array = [];
    this.#count = 0;
  }

  // 배열 맨 뒤에 요소 추가
  // 배열의 길이가 #arrayLength를 초과할 경우 요소를 추가하면 안 됨.
  push(element) {
    if (this.#count < this.#arrayLength) this.#array[this.#count++] = element;
  }

  // 배열의 맨 마지막 요소를 제거하고 그 요소를 반환
  pop() {
    if (this.#count > 0) return this.#array[--this.#count];
  }

  // 현재 배열의 사용되고 있는 크기를 반환
  getLength() {
    return this.#count;
  }

  // 현재 배열의 상태를 string으로 반환
  stringify() {
    let arrToStr = "[";
    for (let i = 0; i < this.#count; i++) {
      arrToStr += this.#array[i];
      if (i !== this.#count - 1) arrToStr += ",";
    }

    return arrToStr + "]";
  }

  // 배열에서 특정 요소의 첫 번째 인덱스를 반환합니다. 요소가 없으면 -1을 반환합니다.
  indexOf(searchElement) {
    for (let i = 0; i < this.#count; i++)
      if (this.#array[i] === searchElement) return i;

    return -1;
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소 1개만 반환
  // true 가 없으면 null 반환
  find(predicate) {
    for (let i = 0; i < this.#count; i++)
      if (predicate(this.#array[i])) return this.#array[i];

    return null;
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소 중 제일 첫번째 요소의 index반환
  // true 가 없으면 -1 반환
  findIndex(predicate) {
    for (let i = 0; i < this.#count; i++)
      if (predicate(this.#array[i])) return i;

    return -1;
  }

  // 배열에 특정 요소가 포함되어 있는지 여부를 확인합니다. (true or false)
  includes(searchElement) {
    for (let i = 0; i < this.#count; i++)
      if (this.#array[i] === searchElement) return true;

    return false;
  }

  // 배열의 각 요소에 대해 제공된 함수를 한 번씩 실행합니다.
  // callback(value, index, array)
  forEach(callback) {
    for (let i = 0; i < this.#count; i++)
      callback(this.#array[i], i, this.#array);
  }

  // 배열의 각 요소에 대해 predicate 결과가 true인 요소를 모아 새로운 배열 반환
  filter(predicate) {
    const newArray = new FixedArray(this.#count);

    for (let i = 0; i < this.#count; i++)
      if (predicate(this.#array[i])) newArray.push(this.#array[i]);

    return newArray;
  }

  // 배열의 각 요소에 대해 callback 함수를 호출한 결과를 모아 새로운 배열로 반환
  map(callback) {
    const newArray = new FixedArray(this.#count);

    for (let i = 0; i < this.#count; i++)
      newArray.push(callback(this.#array[i], i, this.#array));

    return newArray;
  }

  // 배열의 각 요소에 대해 제공된 함수를 호출하여 누산기에 값을 축적
  reduce(callback, initValue) {
    const acc = initValue;
    for (let i = 0; i < this.#count; i++)
      acc = callback(acc, this.#array[i], i, this.#array);

    return acc;
  }
}
