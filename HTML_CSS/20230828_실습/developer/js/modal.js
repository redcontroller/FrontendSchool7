const modal = document.querySelector('.modal');
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const dim = document.querySelector('.dim');

// console.log(modal);
// console.log(btnOpen);
// console.log(btnClose);

const focusableEl = modal.querySelectorAll('a, button, input');

// querySelector 는 하나만 찾는다.
// const firstEl = modal.querySelector('a, button, input');
const firstEl = focusableEl[0];
const lastEl = focusableEl[focusableEl.length -1];
// console.log(focusableEl, firstEl, lastEl);


function openModal() {
    // console.log('모달 열림');
    modal.classList.add('active');
    document.documentElement.style.overflow = 'hidden';
    // firstEl.focus();
}

function closeModal() {
    // console.log('모달 닫힘');
    modal.classList.remove('active');
    document.documentElement.style.overflow = 'auto';
}

function handleTab(e) {
    // e.key : 누른 key 정보를 반환
    // console.log(e.key);

    // shift 키를 누른 정보를 boolean 값으로 반환
    // console.log(e.shiftKey);
    
    // activeElemnet : 현재 포커스를 받고 있는 요소 반환
    // console.log('activeElemnet', document.activeElement); 
    const activeEl = document.activeElement;   
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            // tab + shift 같이 눌렀을 때
            if(activeEl === firstEl) {
                e.preventDefault();
                lastEl.focus();
            }
        } else {
            // tab 만 눌렀을 때
            if(activeEl === lastEl) {
                e.preventDefault();
                firstEl.focus();
            }
        }
    }
}

btnOpen.addEventListener('click',openModal);
btnClose.addEventListener('click',closeModal);
dim.addEventListener('click', closeModal);

// keyup 은 땔때 동작
// keydown 은 누를 떄 동작
firstEl.addEventListener('keydown', handleTab);
lastEl.addEventListener('keydown', handleTab);

// window.addEventListener('keyup', function(e){
//     console.log(e.key);
//     console.log(e.shiftKey);
//     // console.log(e.key === 'Shift');
// })

window.addEventListener('keydown', (e) => {
    // console.log(e.key); // esc 누르면 'Escape'
    // console.log(modal.classList.contains('modal'));
    // console.log(modal.classList.contains('active'));

    // modal.classList.contains('active') : active 클래스의 포함여부를 boolean 값으로 반환
    if (modal.classList.contains('active') && e.key === 'Escape') {
        closeModal();
    }
})