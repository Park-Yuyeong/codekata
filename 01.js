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
}

const arr = new FixedArray(5);

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);

console.log("getLength : ", arr.getLength()); // getLength : 5
console.log("stringify : ", arr.stringify()); // stringify : [1,2,3,4,5]

console.log("pop1 : ", arr.pop()); // pop1 : 5
console.log("pop2 : ", arr.pop()); // pop2 : 4

console.log("getLength : ", arr.getLength()); // getLength : 3
console.log("stringify : ", arr.stringify()); // stringify : [1,2,3]
