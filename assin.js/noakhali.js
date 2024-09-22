document.getElementById('donate-btn').addEventListener('click', function(){
    const inputValue = getInputValueById ('input-value');

    if(isNaN(inputValue)){
        return alert('only number please')
    }
    else if(inputValue < 0){
        return alert('only number')
    }
    else{
        const donateValue = getDonateValueById ('donate-amount');
        const newDonateAmount = inputValue + donateValue;
        document.getElementById('donate-amount').innerText = newDonateAmount;

        // decrease balance
        const balance = getDonateValueById ('balance-amount');
        const newBalanceAmount = balance - inputValue;
        document.getElementById ('balance-amount').innerText = newBalanceAmount;

        // show history section
        const div = document.createElement ('div')
        div.innerHTML += `
                <h1 class="font-bold text-lg mx-40 mt-10 mb-10 border-2 rounded-xl p-8">${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                <span></span>
            `
            document.getElementById ('history-container').appendChild(div);
        


    }
    

})