document.getElementById('feni-donate-btn').addEventListener('click', function(){
    const feniInputValue = getInputValueById ('feni-input-value');
    if(isNaN(feniInputValue)){
        return alert('only number please');
    }
    else if(feniInputValue < 0){
        return alert('only number')
    }
    else{
        const feniDonateValue = getDonateValueById ('feni-donate-amount');
        const feniNewDonateAmount = feniInputValue + feniDonateValue;
        document.getElementById('feni-donate-amount').innerText = feniNewDonateAmount;

         // decrease balance
         const balance = getDonateValueById ('balance-amount');
         const newBalanceAmount = balance - feniInputValue;
         document.getElementById ('balance-amount').innerText = newBalanceAmount;

          // show history section
        const div = document.createElement ('div')
        div.innerHTML = `
                <h1 class="font-bold text-lg mx-40 mt-10 mb-10 border-2 rounded-xl p-8">${feniInputValue} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
                <span></span>
            `
            document.getElementById ('history-container').appendChild(div);
        
    }
})