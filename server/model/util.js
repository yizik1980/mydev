function removeUrl(item){
    return  item.replace(/[^0-9]+/g,'');
}
function ConvertYearToDecimal(exa){
    return parseInt(exa.substr(0, exa.length - 1), 16); 
}

module.exports = {
    removeUrl,
    ConvertYearToDecimal
}