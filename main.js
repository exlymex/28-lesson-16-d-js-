
const getS = selector => document.querySelector(selector);

let colors = ['red', 'blue', 'yellow', 'pink', 'green', 'gray', 'black', 'deeppink', 'brown'];

getS('.btn-edit').onclick = function () {
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');

    getS('.edit-area').value = getS('.top-block').innerHTML;
}

getS('.btn-save').onclick = function () {
    getS('.edit-block').classList.remove('show');
    getS('.top-block').innerHTML = getS('.edit-area').value;


}

getS('.btn-style').addEventListener('click', () => {
    getS('.style-block').classList.add('show');
    getS('.edit-block').classList.remove('show');
})

function fontSize() {
    getS('.top-block').style.fontSize = event.target.value;
}

let ff = document.getElementById('fontFamily');
ff.onchange = function () {
    getS('.top-block').style.fontFamily = event.target.value;
}



getS('.btn-text-color').onclick = function () {
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.color = this.style.backgroundColor;
        }
    }
    getS('.colors').classList.remove('hide');
}

getS('.btn-bg-color').onclick = function () {
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function () {
            getS('.top-block').style.backgroundColor = this.style.backgroundColor;
        }
    }
    getS('.colors').classList.remove('hide');
}
function fontWeight() {
    if (event.target.checked) {
        getS('.top-block').classList.add('bold');
    } else {
        getS('.top-block').classList.remove('bold');
    }
}
getS('.btn-add').addEventListener('click',function(){
    getS('.wrapper').classList.remove('hide')
    getS('.container').classList.add('hide')
})