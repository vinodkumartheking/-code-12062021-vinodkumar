const {calculateBMIvalue,getRiskvalue} = require("./calculateBMIvalue")

test('calculate BMI index and risk value for height 170cm and 65 kg',()=>{
    expect(calculateBMIvalue("170","65")).toStrictEqual(["22.49", "Normal weight"])
})

test('check risk value for 29.49 BMI index',()=>{
    expect(getRiskvalue(22.49)).toStrictEqual("Normal weight")
})

test('check risk value for undefined BMI index',()=>{
    expect(getRiskvalue("undefinied")).toStrictEqual("Not a valid Number")
})

test('check risk value for NaN BMI index',()=>{
    expect(getRiskvalue(NaN)).toStrictEqual("Not a valid Number")
})

test('check risk value for " " BMI index',()=>{
    expect(getRiskvalue("")).toStrictEqual("Not a valid Number")
})

test('check risk value for -ve number BMI index',()=>{
    expect(getRiskvalue(-1)).toStrictEqual("Equal to zero or -ve number")
})

test('check risk value for 0 BMI index',()=>{
    expect(getRiskvalue(0)).toStrictEqual("Not a valid Number")
})

test('check risk value for 100000 BMI index',()=>{
    expect(getRiskvalue(100000)).toStrictEqual("Out of Range")
})