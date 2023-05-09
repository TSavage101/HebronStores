document.addEventListener('DOMContentLoaded', () => {
    alert('Bayode Redirect User to this page only if he checks "register as seller"')
    fetch('../static/bank.json')
        .then((response) => response.json())
        .then((json) => {
            // console.log(json.data)
            const bankArray = json.data
            const select = document.querySelector('select');
            bankArray.forEach(bank => {
                // console.log(bank)
                const option = document.createElement('option')
                select.appendChild(option)
                option.innerHTML = bank.name
                option.dataset.bankcode = bank.code;

                // option.addEventListener('click', ()=>{
                //     bankCode = option.dataset.bankcode;
                //     console.log('bankCode')
                // })
            });

            let bankCode = bankArray[select.selectedIndex].code
            document.querySelector('.bankcode').value = bankCode;
            document.querySelector('.addBtn').addEventListener('click', () => {
                console.log(bankCode)
                    // submit user details and bankCode variable
            })

            // document.querySelector('span').innerHTML = bankCode

            select.addEventListener('change', () => {
                const index = select.selectedIndex;
                // console.log(index)
                bankCode = bankArray[index].code
                    // document.querySelector('span').innerHTML = bankCode
                document.querySelector('.bankcode').value = bankCode;

                document.querySelector('.addBtn').addEventListener('click', () => {
                    console.log(bankCode)
                        // submit user details and bankCode variable
                })
            })
        });
})