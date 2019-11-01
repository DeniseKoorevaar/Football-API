let countryId;
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
                        let p = document.getElementById('country');
                        let countryText = document.createTextNode(country.country_name);
                        p.appendChild(countryText);
                        document.getElementById('country').hidden = false;
                    }
                })
            }
        });
        $('#country').empty();
        $('#competitions').empty();
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