import {genHexColor} from './modules/colorGen';
// import {prependHash} from './modules/inputFocus';

const colorInputs = [...document.getElementsByClassName('colorInput')];
const billIcons = [...document.getElementsByClassName('lockIcon')];
const columns = [...document.getElementsByClassName('col')];

// initialize color inputs 
colorInputs.forEach((element) => {
    let color = genHexColor();
    element.parentElement.style.backgroundColor = color;
    element.value = color;
});

// fire function w/ spacebar 
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        columns.forEach((element, index) => {
            let color = genHexColor();    
            let child = element.children[0];
            let childClasses = child.classList.toString();

            // if lock disabled 
            if (childClasses.includes('fa-lock') === false) {
                element.style.backgroundColor = color;
                colorInputs[index].value = color;
            }
        });
    }
}

// update background color based on input
// to do... 

// if invalid, revert
// to do... 

// toggle color lock 
billIcons.forEach((element, index, array) => {
    array[index].onclick = function() {
        if (event.target.classList.contains('fa-lock')) {
            event.target.classList.remove('fa-lock');
            event.target.classList.add('fa-unlock-alt');
        } else {
            event.target.classList.remove('fa-unlock-alt');
            event.target.classList.add('fa-lock');
        }
    };
});
