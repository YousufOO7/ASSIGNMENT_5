document.getElementById('quota-donate-btn').addEventListener('click', function(){
    const quotaInputValue = getInputValueById ('qouta-input-value');
    if(isNaN(quotaInputValue)){
        alert('invalid Donate amount');
        document.getElementById('my_modal_3').close();
        return;

    }
    else if(quotaInputValue <= 0){
        alert('invalid Donate amount');
        document.getElementById('my_modal_3').close();
        return;
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
        const today = new Date();
        const div = document.createElement ('div')
        div.classList.add('mx-5');
        div.classList.add('lg:mx-40');
        div.classList.add('mt-10');
        div.classList.add('mb-10');
        div.classList.add('border-2');
        div.classList.add('rounded-xl');
        div.classList.add('p-6');
        div.innerHTML += `
                <h1 class="mb-2 font-bold text-xl">${quotaInputValue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                <span class="text-sm">Date: ${today}</span>
                
            `
        document.getElementById ('history-container').appendChild(div);
        
    }
})