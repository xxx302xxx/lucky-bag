const rollDice = function() {
    let lotto = [];
    while (lotto.length < 6) {                        // 로또 변수lotto안에 6개가 채워질때까지 (조건) 반복한다.
        let num = parseInt(Math.random() * 45 + 1);   // 1 ~ 45 까지의 랜덤한 자연수를 변수 num에 담는다.
        if (lotto.indexOf(num) == -1) {               // ".indexOf(값)"은 값이 있다면 위치 인덱스가 나오고 없으면 -1
            lotto.push(num);                          // 배열안에 값이 없는 -1이 나오면 num을 푸쉬 한다.
        };                                            //  = 은 값을 넣는다는 의미, ==는 같은지 배교한다 라는 의미
    };

    lotto.sort((a,b)=>a-b);                           // 오름차순

    // let num1 = document.querySelector('.num1');
    // let num2 = document.querySelector('.num2');
    // let num3 = document.querySelector('.num3');
    // let num4 = document.querySelector('.num4');
    // let num5 = document.querySelector('.num5');
    // let num6 = document.querySelector('.num6');
    // num1.innerHTML=lotto[0];
    // num2.innerHTML=lotto[1];
    // num3.innerHTML=lotto[2];
    // num4.innerHTML=lotto[3];
    // num5.innerHTML=lotto[4];
    // num6.innerHTML=lotto[5];

    let colors = [
        '#F6C601',
        '#6AC7F3',
        '#FE726F',
        '#AAAAA9',
        '#AED943',
    ];

    let balls = document.querySelectorAll('.num-box .ball');
    balls.forEach((ball, index) => {
        let number = lotto[index];                         // 위에서 추출한 로또배열을 변수 let number에 index를 붙여 순서대로 담음.
        ball.querySelector('span.num').innerHTML = number;
        let colorIndex = parseInt((number - 1) / 10);
        ball.style.backgroundColor = colors[colorIndex];
    });
};

let btn = document.querySelector('.circle');
let light = document.querySelector('.bling-wrap');
let title = document.querySelector('.title');
let sentence = document.querySelector('.left p');

btn.addEventListener('click', function(){
    light.style.display = 'block';
    sentence.style.display = 'none';
    rollDice();
});

title.addEventListener('click', function(){
    window.location.reload();
});
