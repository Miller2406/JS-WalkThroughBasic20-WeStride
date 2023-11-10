// จงเขียนโปรแกรมรับ array ที่มีตัวเลขจำนวนเต็ม 10 ค่า จากนั้นทำการ modulo 
// จำนวนทั้งสิบด้วย 42 ในตัวเลขทุกตัวใน array และแสดงผลเป็น  
// จำนวนแบบของเศษที่เหลือจากการ modulo ด้วย 42 ที่ถ้าซ้ำกันให้นับ 1 จำนวน

// A modulo B คือ gLKmujwfh0kddkioe A หารด้วย B
// เช่น 10 modulo 3 = 1 เพราะ 10/3 เศษ 1 

// ตัวอย่าง
// const inputArr = [1,2,3,4,5,6,7,8,9,0]
// output : 10
// const inputArr = [42,84,252,420,840,126,42,84,420,126]
// output : 1 
// const inputArr = [39,40,41,42,43,44,82,83,84,85]
// output : 6 // มีจำนวนที่แตกต่างกัน 6 ตัว ถ้าซ้ำ นับแค่ 1


    let noDupArr = 0;
    const modArr = []
    for (let i = 0; i < inputArr.length; i++) {
        let a = inputArr[i] % 42;
        if (!modArr.includes(a)) {
            modArr.push(a)
        }
    }
    noDupLength = modArr.length
    return noDupLength;
}

console.log(modCheck([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(modCheck([42, 84, 252, 420, 840, 126, 42, 84, 420, 126]));
console.log(modCheck([39, 40, 41, 42, 43, 44, 82, 83, 84, 85]));












