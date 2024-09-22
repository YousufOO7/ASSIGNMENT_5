document.getElementById('quota-donate-btn').addEventListener('click', function(){
    const quotaInputValue = getInputValueById ('qouta-input-value');
    if(isNaN(quotaInputValue)){
        return alert('only number please')
    }
    else if(quotaInputValue < 0){
        return alert('only number')
    }
    else{
        const qoutaDonateAmount = getDonateValueById ('qouta-donate-amount');
        const newQoutaDonateAmount = quotaInputValue + qoutaDonateAmount;
        document.getElementById('qouta-donate-amount').innerText = newQoutaDonateAmount;

         // decrease balance
         const balance = getDonateValueById ('balance-amount');
         const newBalanceAmount = balance - quotaInputValue;
         document.getElementById ('balance-amount').innerText = newBalanceAmount;

          // show history section
        const div = document.createElement ('div')
        div.innerHTML = `
                <h1 class="font-bold text-lg mx-40 mt-10 mb-10 border-2 rounded-xl p-8">${quotaInputValue}  Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                <span></span>
            `
            document.getElementById ('history-container').appendChild(div);
        
    }
})