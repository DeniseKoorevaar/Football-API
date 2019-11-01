let countryId;
// let value = document.getElementById('item');
document.getElementById('country').hidden = true;

$(() => {
    $('#add').on('click', () => {
        let value = document.getElementById('item').value;
        $.ajax({
            url: '/countries',
            type: 'GET',
            dataType: 'json',
            success: (res) => {
                res.map((country) => {
                    if (value === country.country_name) {
                        countryId = country.country_id;
                        let btn = document.getElementById('country');
                        let countryText = document.createTextNode(country.country_name);
                        btn.appendChild(countryText);
                        document.getElementById('country').hidden = false;
                    }
                })
            }
        });
        $('#country').empty();
        $('#competitions').empty();
        $('item').value = '';
    });
});


$('#country').on('click', () => {
    let id = countryId;
    $.ajax({
        url: `/competitions?id=${id}`,
        type: 'GET',
        dataType: 'json',
        success: (res) => {
            res.map((id) => {
                let competitions = document.createElement('li');
                competitions.classList.add('display');
                let competitionsText = document.createTextNode(id.league_name);
                competitions.appendChild(competitionsText);

                let bossUl = document.getElementById('competitions');
                bossUl.appendChild(competitions);
            })
        }
    });
});

// function getCountries() {
//     fetch('/countries',
//         { method: 'GET' }
//     )
//         .then(response => response.json())
//         .then(json => json.forEach((country) => {
//             if (value.value === country.country_name) {
//                 countryId = country.country_id;
//                 let p = document.getElementById('country');
//                 let countryText = document.createTextNode(country.country_name);
//                 p.appendChild(countryText);
//                 document.getElementById('country').hidden = false;
//                 document.getElementById('item').value = '';
//             }
//         }))
// }