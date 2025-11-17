// Use this as a bookmarklet or paste it in the console (works with BookUI)

javascript:(() => {

    const num1El = document.querySelector('.mx-1.ng-star-inserted[data-qa-left]');
    const num2El = document.querySelector('.mx-1.ng-star-inserted[data-qa-right]');
    const operatorEl = document.querySelector('.mx-1.ng-star-inserted[data-qa-operator]');
    const inputEl = document.querySelector('.hint-text');

    const n1 = Number(num1El.textContent.trim());
    const n2 = Number(num2El.textContent.trim());
    const op = operatorEl.textContent.trim();

    let answer = 0;
    if (op === '×') {
        answer = n1 * n2;
    } else if (op === '÷') {
        answer = n1 / n2;
    } else if (op === '+') {
        answer = n1 + n2;
    } else if (op === '-') {
        answer = n1 - n2;
    }

      alert(answer);

})();
