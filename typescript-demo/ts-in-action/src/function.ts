// 函数定义: 4种方式

// 方式一：函数
function add1(x: number, y: number) {
  return x + y
}

// 方式二：类型变量
let add2: (x: number, y: number) => number

// 方式三：类型别名
type add3 = (x: number, y: number) => number

// 方式四：接口
interface add4 {
  (x: number, y: number): number
}



add1(1, 2, 3)

// 可选参数
function add5(x: number, y?: number) {
  return y ? x + y : x
}
add5(1)

// 函数默认值
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
add6(1, undefined, 3)

// 剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
add7(1, 2, 3, 4, 5)

// 函数重载
function add8(...rest: number[]): number;
function add8(...rest: string[]): string;
function add8(...rest: any[]) {
  let first = rest[0]
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
  if (typeof first === 'string') {
    return rest.join('')
  }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))
