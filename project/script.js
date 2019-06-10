let getId = x => document.getElementById(x);
let formReg = document.forms['formReg'];
let formNav = document.forms['formNav'];
let formAccount = document.forms['formAccount'];
let formWatch = document.forms['formWatch'];
let formRandom =document.forms['formRandom'];
let valid = 0;
let check;
// робота sign up в менюшці
formNav.sign.addEventListener('click', () => {
    // getId('sign').style.display = 'none';
    // document.body.style.background = 'rgba(0,0,0,0.4)';
    formReg.style.display = 'block';
});
// робота sign in в менюшці

formNav.signIn.addEventListener('click', () => {
    if (formNav.email.value != '' && formNav.password.value != '') {
        getId('main').style.display = 'none';
        getId('account').style.display = 'block';
        getId('man').style.display = 'block';

        formAccount.account.innerHTML = formNav.email.value;
        formNav.reset();
    }
});
// функції валідації полів реєстраційної форми
function flag() {
    if (formReg.checkbox.checked) {
        valid++;
        console.log('valid checkbox', valid);

        // formReg.style.display = "none";
        // formAccount.removeAttribute('style');
    }
    else {
        return;
    }
}
function validateGender() {
    if (formReg.female.checked && formReg.male.checked) {
        return;
    }
}
function validatePassword() {
    let password = formReg.password.value;
    let confPassword = formReg.confPassword.value;
    if (password != confPassword) {
        formReg.password.setCustomValidity("Passwords Don't Match");
        formReg.password.style.backgroundColor = 'lightcoral';
        formReg.confPassword.style.backgroundColor = 'lightcoral';
    }
    else {
        valid++;
        formReg.password.style.backgroundColor = 'white';
        formReg.confPassword.style.backgroundColor = 'white';
        console.log('valid password', valid);


        // formReg.confPassword.setCustomValidity('');
    }
}
function validateEmail(str) {
    let reg = /^[a-zA-Z0-9-\._]+@[a-z]+\.((ua)|(com)|(com.ua))$/;
    let res = reg.test(str);
    if (!res) {
        formReg.mail.style.backgroundColor = 'lightcoral';
    }
    else {
        formReg.mail.style.backgroundColor = 'white';

        valid++;
        console.log('valid', valid);

    };
};
// робота sign up  в реєстраційній формі

formReg.signUp.addEventListener('click', function () {
    flag();
    validateEmail(formReg.mail.value);
    validatePassword();
    if (formReg.male.checked) {
        getId('man').style.display = 'block';
        getId('woman').style.display = 'none';
        valid++;
        console.log('valid gender', valid);
    }
    if (formReg.female.checked) {
        getId('man').style.display = 'none';
        getId('woman').style.display = 'block';
        valid++;
        console.log('valid gender', valid);
    }
    if (valid == 4) {
        formReg.reset();
        getId('main').style.display = 'none';
        getId('account').style.display = 'block';
        formReg.style.display = "none";
        formAccount.removeAttribute('style');
        formAccount.account.innerHTML = formReg.mail.value;
    }
    else {
        valid = 0;
    }
});
// робота кнопки cancel
formReg.cancel.onclick = () => {
    formReg.style.display = "none";
}
// робота кнопки exit
formAccount.exit.addEventListener('click', () => {
    getId('main').style.display = 'block';
    getId('account').style.display = 'none';
    formReg.reset();
    valid = 0;
    formReg.mail.style.backgroundColor = 'white';
    formReg.password.style.backgroundColor = 'white';
    formReg.confPassword.style.backgroundColor = 'white';
});
// робота menu watch
getId('watchMenu').addEventListener('click', () => {
    getId('accountMain').style.display = 'none';
    getId('watch').style.display = 'block';
    getId('random1').style.display = 'none';
});
// робота menu add
formWatch.add.addEventListener('click', () => {
    getId('img').style.display = 'block';
})
// робота menu random
getId('random').addEventListener('click', () => {
    getId('accountMain').style.display = 'none';
    getId('random1').style.display = 'block';
    getId('watch').style.display = 'none';

    // let arr=['images/hvost_fei.jpg','images/naruto.jpg','images/cat.jpg','images/gul.jpg'];
    // let rand=Math.random()*arr.length;
    // rand=Math.floor(rand);
    // getId('randomBlock').style.backgroundImage=`${arr[rand]}`;
});
formRandom.random.addEventListener('click', () => {
    let arr=['images/titans.jpg','images/deathnote.jpg','images/cat.jpg','images/blich.jpg','images/gcrown.jpg'];
    let rand=Math.random()*arr.length;
    rand=Math.floor(rand);
     getId('randomBlock').style.background= `url(${arr[rand]})`;

});

