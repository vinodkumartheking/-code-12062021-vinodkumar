const {calculateBMIvalue,getRiskvalue} = require("./calculateBMIvalue")

test('calculate BMI index and risk value for height 170cm and 65 kg',()=>{
    expect(calculateBMIvalue("170","65")).toStrictEqual(["22.49", "Normal weight"])
})

test('check risk value for 29.49 BMI index',()=>{
    expect(getRiskvalue(22.49)).toStrictEqual("Normal weight")
})