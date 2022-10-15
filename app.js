const btn = document.querySelector('.mark');
const dot = document.getElementById('dot');
const dott = document.getElementById('dott');
const dots = document.getElementById('dots');
const unread = document.querySelector('.unread');
const chg = document.querySelector('.chg');
const ch = document.querySelector('.ch');
const msg = document.querySelector('.msg');

btn.addEventListener('click', function(e) {
    dot.remove()
    dott.remove()
    dots.remove()
    unread.style.backgroundColor = ('hsl(0, 0%, 100%)');
    chg.style.backgroundColor = ('hsl(0, 0%, 100%)');
    ch.style.backgroundColor = ('hsl(0, 0%, 100%)');
    msg.remove()
})