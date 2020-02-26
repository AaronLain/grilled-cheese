import breads from '../helpers/data/breadData.js'
import util from '../helpers/utils.js'

const selectBread = (e) => {
    const breadId = e.target.id;
    breads.setSelectedBread(breadId)
}

const radioButtonEvent = () => {
    const radioButtons = document.getElementsByClassName('radio-btn');
    for(let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].addEventListener('click', selectBread)
    }  
}

const makeBreadRadioButtons = () => {
    let domString = ''
    const allBread = breads.getBreads();
    allBread.forEach((bread) => {
        domString += '<div class="input-group">'
        domString += `<input type="checkbox" class="radio-btn" id="${bread.id}" aria-label="${bread.id}">`
        domString += `<p>${bread.type}</p>`
        domString += '</div>'
    }
    ) 
    util.printToDom('bread-container', domString);  
    radioButtonEvent();
};


export default { makeBreadRadioButtons }