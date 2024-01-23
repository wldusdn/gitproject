let mt = prompt('현재는 몇 월인가요?(숫자로 입력해주세요.)');
let month = parseInt(mt)
console.log(typeof(month))
if (month <= 0 || month > 12) alert('다시 입력해주세요.')
switch (month){
    case 1: days = 31
    break;
    case 2: days = 29
    break;
    case 3: days = 31
    break;
    case 5: days = 31
    break;
    case 7: days = 31
    break;
    case 8: days = 31
    break;
    case 10: days = 31
    break;
    case 12: days = 31
    break;
    default: days = 30
}
document.write('<table>');
document.write(`<caption>${month}월</caption>`);
document.write('<tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>')
for(i=0, k=1, l=0;i<5;i++){
    document.write('<tr>');
    for(j=0;j<7;j++){
        document.write(`<td>`);
        if ((month == 1 || month == 4 || month ==7) && l < 1){
            document.write('')
            l++;
        }else if (month == 10 && l < 2){
            document.write('')
            l++;
        }else if (month == 5 && l < 3){
            document.write('')
            l++;
        }else if ((month == 2 || month == 8) && l < 4){
            document.write('')
            l++;
        }else if ((month == 3 || month == 11) && l < 5){
            document.write('')
            l++;
        }else if (month == 6 && l < 6){
            document.write('')
            l++;
        }else if (k>days){
            document.write('')
        }
        else{
            document.write(`${k}`);
            k++;
        }
        document.write(`</td>`);
    }
    document.write('</tr>');
}
document.write('</table>');