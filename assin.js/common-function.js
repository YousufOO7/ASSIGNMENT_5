function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat (inputValue);
    return inputNumber;
}

function getDonateValueById (id){
    const textValue = document.getElementById(id).innerText;
    const donateValue = parseFloat(textValue);
    return donateValue;
}


function showSectionId (id){
    document.getElementById('donate-form').classList.add ('hidden');
    document.getElementById('history-form').classList.add ('hidden');

    document.getElementById(id).classList.remove('hidden');
}

function changeBtnColor (id){
    document.getElementById('show-donate-btn').classList.remove ('bg-primary');
    document.getElementById ('show-history-btn').classList.remove ('bg-primary');

    document.getElementById(id).classList.add ('bg-primary');
}
