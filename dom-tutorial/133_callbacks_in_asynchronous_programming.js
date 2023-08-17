// 1)callback hell : nested callbacks 2) pyramid doom 
// these can be resolved by promises
// problem statement: we have 7 h1 tag, for every one sec we need to change the text inside each h1 tag

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');


setTimeout(()=>{
    heading1.textContent ='Heading 1'
    heading1.style.color='violet';
    setTimeout(()=>{
        heading2.textContent ='Heading 2'
        heading2.style.color='violet';
    }, 1000)
}, 1000)


function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(() => {
        if(element){
            element.textContent= text;
            element.style.color=color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }
            else if(onFailureCallback){
                onFailureCallback();
            }
    }, time);
}


// pyramid of doom
changeText(heading1, 'one', 'red', 1000, ()=>{
    changeText(heading2, 'two', 'red', 1000, ()=>{
        changeText(heading3, 'three', 'red', 1000, ()=>{
            changeText(heading4, 'four', 'red', 1000, ()=>{
                changeText(heading5, 'five', 'red', 1000, ()=>{
                    changeText(heading6, 'six', 'red', 1000, ()=>{
                        changeText(heading7, 'seven', 'red', 1000, ()=>{
                            console.log('done with last success callback')
                        }, ()=>{console.log('heading seven doesnot exist')})
                    }, ()=>{console.log('heading six doesnot exist')})
                }, ()=>{console.log('heading five doesnot exist')})
            }, ()=>{console.log('heading four doesnot exist')})
        }, ()=>{console.log('heading three doesnot exist')})
    }, ()=>{console.log('heading two doesnot exist')})
}, ()=>{console.log('heading one doesnot exist')})
