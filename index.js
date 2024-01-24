let mt = prompt('현재는 몇 월인가요?(숫자로 입력해주세요.)'); //만들 달력 월 정하기
let month = parseInt(mt)
console.log(typeof(month))
if (month <= 0 || month > 12 || isNaN(month)) alert('다시 입력해주세요.')//1~12 제외한 텍스트 입력 시 다시입력

date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
days = date[month]

let t = document.querySelectorAll('td')
console.log(t)
console.log(month)
if (month == 1 || month == 4 || month ==7){
    for (i=1;i<=days;i++){
        t[0].innerText = ""
        t[i].innerText = `${i}`
    }
}
