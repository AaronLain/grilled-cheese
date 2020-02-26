import breads from '../helpers/data/breadData.js'
import util from '../helpers/utils,js'

const makeBreadRadioButtons = () => {
    let domString = ''
    const bread = breads.getBreads();
    for (let i = 0; i < bread.length; i++) {
        domString += `<radio id='radio-btn'>${bread.type}</radio>`
    }
    util.printToDom('bread-container', domString);
    //document.getElementById('radio-btn').addEventListener('click', );
};

export default { makeBreadRadioButtons }