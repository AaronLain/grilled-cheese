import breads from '../helpers/data/breadData.js'
import util from '../helpers/utils.js'

const makeBreadRadioButtons = () => {
    let domString = ''
    const bread = breads.getBreads();
    console.log(bread)
    for (let i = 0; i < bread.length; i++) {
        domString += `<input type='radio' class="bread-btn" id='radio-btn'>${bread[i].type}</input>`
    }
    util.printToDom('bread-container', domString);
    document.getElementById('radio-btn').addEventListener('click', );
};

export default { makeBreadRadioButtons }