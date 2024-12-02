let wordsearch = document.getElementById('wordsearch');
let letters = document.querySelectorAll('td');
let wordBoxs = document.querySelectorAll('.wordsearch-words>ul>li');
let words = Array.from(document.querySelectorAll('.wordsearch-words>ul>li')).map((word) => word.textContent).map((word) => word.split('').sort().join(''));
let score = document.getElementById('score');
let notice = document.querySelector('.notice');
let tempwords;
let tempwordsIndex = [];
let cnt = 0;

const color = ['RGB(173, 216, 230)', 'RGB(144, 238, 144)', 'RGB(255, 182, 193)', 'RGB(221, 160, 221)', 'RGB(255, 255, 224)', 'RGB(255, 200, 124)', 'RGB(152, 255, 152)', 'RGB(255, 228, 225)', 'RGB(211, 211, 211)', 'RGB(255, 253, 208)', 'RGB(173, 255, 47)', 'RGB(240, 128, 128)'];

console.log(letters);
console.log(words);
console.log(wordBoxs);

window.onload = function () {
    Swal.fire({
        title: 'Wordsearch',
        text: `Search up, down, forward, backwards and diagonally to find all the words!`,
        confirmButtonText: 'START',
        width: 'calc(100vh * 0.6)',
        padding: '1.5rem', // 设置弹窗的内边距
        customClass: {
            confirmButton: 'swal-custom-button',
            title: 'swal2-title', // 自定义标题样式
            htmlContainer: 'swal2-html-container', // 自定义内容样式
        },
    });
};

letters.forEach((td, index) => {
    td.addEventListener('click', function () {
        if (td.classList.contains("wordsearch-selected")) {
            td.classList.remove("wordsearch-selected");
            console.log(td.textContent);
            tempwordsIndex = tempwordsIndex.filter((item) => item !== index);
            tempwords = transformWord();
            checkWord();
            console.log(tempwords);
        } else {
            td.classList.add("wordsearch-selected");
            console.log(td.textContent);
            tempwordsIndex.push(index);
            tempwords = transformWord();
            checkWord();
            console.log(tempwords);
        }
    });
});

function transformWord() {
    tempwords = '';
    tempwordsIndex.forEach((index) => {
        tempwords += letters[index].textContent;
    });
    return tempwords;
}

function checkWord() {
    rightWordIndexs.forEach((rightWordIndex) => {
        if (rightWordIndex.every((index) => tempwordsIndex.includes(index)) &&
            tempwordsIndex.every((index) => rightWordIndex.includes(index))) {
            tempwords = transformWord();
            console.log(tempwords);
            let tempwords1 = tempwords.split('').sort().join('');
            let rightWordIndex = words.findIndex((word) => word === tempwords1);
            let color = getColor();
            wordBoxs[rightWordIndex].style.backgroundColor = color;
            console.log(tempwords1);
            tempwordsIndex.forEach((index) => {
                letters[index].classList.remove('wordsearch-selected');
                letters[index].style.backgroundColor = color;
            });
            rightWordIndexs = rightWordIndexs.filter((item) => item !== rightWordIndex);
            cnt++;
            score.textContent = cnt
            if (cnt === 10) showNotice();
            console.log(cnt);
            console.log(tempwords);
            tempwordsIndex = [];
        }
    });
}

function getColor() {
    return color[Math.floor(Math.random() * color.length)];
}

function showNotice() {
    Swal.fire({
        title: 'Congratulations!',
        html: '<p>You have found all the words!</p><p>Fill out the form for an additional lottery chance.</p>',
        icon: 'success',
        showCancelButton: true, // 显示取消按钮
        confirmButtonText: 'Back to Main Page', // 主页面按钮文本
        cancelButtonText: 'Fill Out Form', // 填写表单按钮文本
        customClass: {
            confirmButton: 'swal-custom-button', // 自定义确认按钮样式
            cancelButton: 'swal-custom-button',   // 自定义取消按钮样式
            title: 'swal2-title',                // 自定义标题样式
            htmlContainer: 'swal2-html-container' // 正确的内容容器样式
        }
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.setItem("game3Completed", "true");
            location.href = '../mainpage.html';
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            fillEmailForm();
        }
    });
}


function fillEmailForm() {
    window.location.href = "https://www.abasiabiolabs.com/test-1"; // 使用实际的邮箱表单 URL
}

let rightWordIndexs = [
    [0, 1, 2, 3, 4, 5, 6],
    [7, 8, 9],
    [10, 20, 30, 40, 50, 60],
    [11, 12, 13, 14, 15, 16, 17, 18],
    [23, 24, 25, 26, 27, 28, 29],
    [34, 35, 36, 37, 38, 39],
    [41, 42, 43, 44, 45, 46, 47, 48],
    [52, 53, 54, 55, 56, 57, 58],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    [80, 81, 82, 83, 84, 85, 86, 87, 88],
    [92, 93, 94, 95, 96, 97, 98, 99],
]

// 获取所有表格单元格
const cells = document.querySelectorAll('#wordsearch td');

// 绑定点击事件
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        // 检查是否已存在 .clicked 类
        if (!cell.classList.contains('clicked')) {
            cell.classList.add('clicked'); // 添加点击样式
        } else {
            cell.classList.remove('clicked'); // 再次点击移除样式（如果需要切换）
        }
    });
});
