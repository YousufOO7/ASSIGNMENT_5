document.getElementById('feni-donate-btn').addEventListener('click', function(){
    const feniInputValue = getInputValueById ('feni-input-value');
    if(isNaN(feniInputValue)){
        alert('invalid Donate amount');
        document.getElementById('my_modal_2').close();
        return;
    }
    else if(feniInputValue <= 0){
        alert('invalid Donate amount');
        document.getElementById('my_modal_2').close();
        return;
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
                  <h1>${feniInputValue} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
                  <span>${today}</span>
                  
              `
            document.getElementById ('history-container').appendChild(div);
        
    }
})