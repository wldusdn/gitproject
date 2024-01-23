let month = prompt('현재는 몇 월인가요?(숫자로 입력해주세요)');

switch (parseInt(month)){
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
for(i=0;i<days;i++){
    if (i%7 == 0) document.write('<tr>');
    document.write(`<td>${i+1}</td>`);
    if (i%7 != 0 && i%14 == 0) {
        document.write('</tr>');}
}
document.write('</table>');