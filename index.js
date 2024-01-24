let mt = prompt('현재는 몇 월인가요?(숫자로 입력해주세요.)'); //만들 달력 월 정하기
let month = parseInt(mt)
console.log(typeof(month))
if (month <= 0 || month > 12 || isNaN(month)) alert('다시 입력해주세요.')//1~12 제외한 텍스트 입력 시 다시입력

date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
days = date[month]

document.write('<table>'); //표 생성
document.write(`<caption>${month}월</caption>`);
document.write('<tr><th>일</th><th>월</th><th>화</th><th>수</th><th>목</th><th>금</th><th>토</th></tr>')
for(i=0, k=1, l=0;i<5;i++){//행 5줄
    document.write('<tr>');
    for(j=0;j<7;j++){//열 7줄
        document.write(`<td>`);
        if ((month == 1 || month == 4 || month ==7) && l < 1){//1, 4, 7월
            document.write('')
            l++;
        }else if (month == 10 && l < 2){//10월
            document.write('')
            l++;
        }else if (month == 5 && l < 3){//5월
            document.write('')
            l++;
        }else if ((month == 2 || month == 8) && l < 4){//2, 8월
            document.write('')
            l++;
        }else if ((month == 3 || month == 11) && l < 5){//3, 11월
            document.write('')
            l++;
        }else if (month == 6 && l < 6){//6월
            document.write('')
            l++;
        }else if (k>days){//해당 월의 말일 넘어가면 빈칸
            document.write('')
        }
        else{
            document.write(`${k}`);//일자
            k++;
        }
        document.write(`</td>`);
    }
    document.write('</tr>');//한 줄 끝
}
document.write('</table>');
