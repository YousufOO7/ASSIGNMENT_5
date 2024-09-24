document.getElementById('donate-btn').addEventListener('click', function(){
    const inputValue = getInputValueById ('input-value');

    if(isNaN(inputValue)){
        alert('invalid Donate amount');
        document.getElementById('my_modal_1').close();
        return;
    }
    else if(inputValue <= 0){
        alert('invalid Donate amount')
        document.getElementById('my_modal_1').close();
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
        const today = new Date();
        const div = document.createElement ('div')
        div.classList.add('mx-5');
        div.classList.add('font-bold');
        div.classList.add('text-lg');
        div.classList.add('lg:mx-40');
        div.classList.add('mt-10');
        div.classList.add('mb-10');
        div.classList.add('border-2');
        div.classList.add('rounded-xl');
        div.classList.add('p-8');
        div.innerHTML += `
                <h1>${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
                <span>${today}</span>
                
            `
            document.getElementById ('history-container').appendChild(div);
    }
    

})

