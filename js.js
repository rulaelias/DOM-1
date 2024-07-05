function buttonclass() {//ex1
    let enterclassname = document.getElementById('enterclass');
    let className = enterclassname.value;
    let classParagraphs = document.getElementById('text');
    classParagraphs.classList.add(className);
    
}
function toggle1(paragraphId) {//ex2
    let paragraph = document.getElementById(paragraphId);
    paragraph.classList.toggle('hidden');
}

function newtest() {//ex3:
    let button = document.getElementById('buttonclick');
    button.textContent = "Clicked! :)";
    button.style.pointerEvents = 'none';//to disable the button by making it unresponsive to any pointer events.
}
