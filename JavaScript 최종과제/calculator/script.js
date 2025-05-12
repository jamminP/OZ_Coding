// 3-1단계: 각 버튼을 클릭했을 때 console에 각 버튼의 value가 나오도록 하기
// 모든 button 클래스를 선택. (모든 요소들을 NodeList로 선택)
const button = document.querySelectorAll('.button');
// getElementsByClassName()은 HTMLCollection을 반환해서 forEach() 사용 불가

button.forEach((button) =>{ // .forEach() 를 사용하여 이벤트 반복을 등록(각 버튼에 대한 콜백을 실행)
    button.addEventListener('click', (event) => { // 각 버튼에 클릭 이벤트 리스너를 등록, 실행마다 콜백함수 실행
        console.log(event.target.innerText); // event.target <= 클릭된 요소 , .innerText <= 버튼 안의 텍스트
        //console.log(event.target.textContent); 위와 같은 경우.
        // value: value 속성을 사용한 경우, 그 값을 가져옴 / innerHTML도 가능 (태그도 다 가져옴)
        // dataset.value: data-value의 값을 활용
    })
});

// 3-2단계: 숫자를 디스플레이에 표시하기
// 1. 숫자 버튼을 클릭하면 디스플레이에 해당 숫자로 표시되도록 하기.
// 2. 초기 디스플레이 값이 0일 경우, 클릭한 숫자로 바뀌어야 한다.
// 3. 초기 값이 0이 아닐 때는 클릭한 숫자가 뒤에 추가되어야 한다.
// 4. 클래스가 number인 버튼에 대해서만 처리해야 한다.

const display = document.querySelector('.calculator-display-data');
const number = document.querySelectorAll('.number'); // 4. 클래스가 number인 버튼에 대해서만 처리해야 한다.
let resetNum = false; // 초기 값을 연산자를 클릭하지 않음. 해당 T/F 데이터로 상태변화관리.

number.forEach(number => {
    number.addEventListener('click', num =>{
        const data = num.target.innerText;

        if(resetNum === false){
            if(display.value === '0'){
                display.value = data;
            }else{
                display.value += data;
            }
        }else{ // 연산자가 들어온 경우,
            display.value = data;
            resetNum = false; // 초기화 시킴.
        }

    })
});
// event.target.classList.contains('클래스명') 다른 사용법


// 3단계: 도전미션
// 소수점과 Clear 기능 추가하기
const decimalPoint = document.querySelector('.decnum');
const funcData = document.querySelectorAll('.function');
const operData = document.querySelectorAll('.operator');

decimalPoint.addEventListener('click', () =>{
    
    if(resetNum){ // 소수점 연산시, 입력이 남도록
        display.value = '0.';
        resetNum = false;
    }else if(!display.value.includes('.')){
        display.value += '.';
    }
});

funcData.forEach(funcData => {
    funcData.addEventListener('click', func => {
        const funcdata = func.target.innerText;
        
        switch(funcdata){
            case 'C':
                display.value = 0;
                break;
            default:
                break;
        }
    })
});

// 4단계: 계산 기능 구현하기
// 4-1단계: 디스플레이에 숫자를 입력한 다음 연산기호를 누르면 
// 디스플레이에 있는 숫자를 firstOperand로 저장하고 연산기호를 기억하기
// 요구 사항 1: 디스플레이에 숫자를 입력한 다음 연산기호를 누르면 디스플레이에 있는 
//              숫자를 firstOperand로 저장하고 연산기호를 기억합니다.
// 요구 사항 2: 연산기호를 누른 후 디스플레이에 다른 숫자를 입력하면 
//              새로운 숫자가 디스플레이에 입력되도록 합니다.

// 1. firstOperand, operator 변수를 선언합니다.
let firstOperand = null; // 1-1. 첫 번째 피연산자를 저장할 변수입니다.
let operator = ''; // 1-2. 연산자를 저장할 변수입니다. 

// 2. 연산기호 버튼이 클릭되면 현재 디스플레이 값을 firstOperand로 저장하고, 연산기호를 기억합니다.
operData.forEach(operEvent => {
    operEvent.addEventListener('click', event => {
        const operating = event.target.innerText;

        operator = operating; // 2-2: operator 변수에 클릭한 연산기호를 값으로 할당합니다.
        
        if(firstOperand === null){ // 첫 번째 피연산자가 null이면
            firstOperand = display.value; // 현재 디스플레이 값을 firstOperand로 저장합니다.
        }
                
        console.log(`First Operand: ${firstOperand}, Operator: ${operator}`); // 2-3: firstOperand와 operator를 console에 출력합니다.
        
        resetNum = true; // 이렇게 사용하면, 연산자가 여러번 똑같이 들어와도 같이 실행.
        // 3. 연산기호 버튼이 클릭된 후 디스플레이에 다른 숫자를 입력하면 새로운 숫자가 디스플레이에 입력되도록 합니다.
        // 위의 number을 수정하여 진행.
    });
});

// 4-2단계: calculate 함수 구현 및 = 버튼 클릭 시 계산 수행
// 요구 사항 1: 매개 변수로 두 숫자를 입력 받아서 결과를 반환하는 calculate 함수를 만듭니다.
// 요구 사항 2: = 버튼을 누르면 firstOperand, operator, secondOperand를 전달하여 계산이 되도록 합니다.

// 1. calculate 함수를 구현합니다.
function calculate(firstOperand, operator, secondOperand){
    let sum = 0;

    switch(operator){
        case '/':
            if(Number(secondOperand) === 0){
                alert(`0으로 나눌 수 없음.`);
                return 0;
            }
            sum += (Number(firstOperand) / Number(secondOperand));
            break;
        case '*':
            sum += (Number(firstOperand) * Number(secondOperand));
            break;
        case '-':
            sum += (Number(firstOperand) - Number(secondOperand));
            break;
        case '+':
            sum += (Number(firstOperand) + Number(secondOperand));
            break;
        default:
            break;
    }

    return sum;
}

// .calculate class를 통해 =에 대한 값 실행.
const cal = document.querySelector('.calculate');
let secondOperand = null;
let calData = 0;

cal.addEventListener('click', event => {
    if(operator === '' || firstOperand === null) // 연산자가 없거나 firstOperand 가 없는 경우, 예외처리
        return;

    if(!display.value || resetNum === true){ // 두번째 값이 입력되어야 하는데 안되는 경우, 예외처리
        return;
    }

    if(secondOperand === null){ 
        secondOperand = display.value; // 현재 디스플레이 값을 secondOperand 저장합니다.
    }

    calData = calculate(firstOperand, operator, secondOperand);

    display.value = calData;
    // 연산 완료 후 초기화
    firstOperand = null;
    operator = '';
    secondOperand = null;
    resetNum = false;
});

