const characterRange=document.getElementById("slider")
const characterNumber=document.getElementById("slidernum")
const upperCaseEl=document.getElementById("uppercase")
const lowerCaseEl=document.getElementById("lowercase")
const numberEl=document.getElementById("numbers")
const symbolsEl=document.getElementById("symbols")
const upperCode=arrayLowHigh(65,90)
const lowerCode=arrayLowHigh(97,122)
const symbolCode=arrayLowHigh(33,47).concat(arrayLowHigh(58,64)).concat(arrayLowHigh(91,96)).concat(arrayLowHigh(123,126))
const numberCode=arrayLowHigh(48,57)
characterNumber.addEventListener('input',syncCharacterAmount)
characterRange.addEventListener('input',syncCharacterAmount)
const form=document.getElementById("passGen")
const passOne=document.getElementById("passwordSpaceOne")
const passTwo=document.getElementById("passwordSpaceTwo")
function syncCharacterAmount(e)
{
    const value=e.target.value
    characterNumber.value=value
    characterRange.value=value
}
form.addEventListener("submit",e=>{
    e.preventDefault()
    const charAmount=characterNumber.value
    const upperCase=upperCaseEl.checked
    const lowerCase=lowerCaseEl.checked
    const numbers=numberEl.checked
    const symbols=symbolsEl.checked
    const passOneFun=passGetter(charAmount,upperCase,lowerCase,numbers,symbols)
    const passTwoFun=passGetter(charAmount,upperCase,lowerCase,numbers,symbols)
    passOne.innerText=passOneFun
    passTwo.innerText=passTwoFun
})
function passGetter(charAmount,upperCase,lowerCase,numbers,symbols)
{
    let charCodes=[]
    if(lowerCase)
    {
        charCodes=charCodes.concat(lowerCode)
    }
    if(upperCase)
    {
        charCodes=charCodes.concat(upperCode)
    }
    if(numbers)
    {
        charCodes=charCodes.concat(numberCode)
    }
    if(symbols)
    {
        charCodes=charCodes.concat(symbolCode)
    }
    const passWord=[]
    for(let i=0;i<charAmount;i++)
    {
        const pushChar=charCodes[Math.floor(Math.random()*charCodes.length)]
        passWord.push(String.fromCharCode(pushChar))
    }
    return passWord.join('')
}
function arrayLowHigh(low,high)
{
    const arr=[]
    for(let i=low;i<=high;i++)
    {
        arr.push(i)
    }
    return arr
}
