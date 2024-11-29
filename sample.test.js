import { expect,test } from "vitest";


test("two object should be same reference",()=>{
    const x = {name:1}
    let y = x
    expect(y).toBe(x)
})


// test("two number plus",()=>{
//     expect(0.1+0.2).toBe(0.3) //should use ToCloseTo to test floating number
// })



// test("test function's return",()=>{
//     function returnUndefined(){
//         console.log('123')
//         return 3
//     }
// 	expect(returnUndefined()).toBeDefined()
// })

// test("test variable's type",()=>{
//     expect([]).toBeTypeOf('object')
// })
