let countryId;

$(function () {
    $('#add').on('click', function () {
        let value = document.getElementById('item').value;
        $.ajax({
            url: '/countries',
            type: 'GET',
            dataType: 'json',
            success: function (res) {
                res.map(function (country) {
                    if (value === country.country_name) {
                        countryId = country.country_id;
                        let p = document.getElementById('country');
                        let countryText = document.createTextNode(country.country_name);
                        p.appendChild(countryText);
                    }
                })
            }
        });
        $('#country').empty();
        $('#competitions').empty();
    });
});

$('#country').on('click', function () {
    let id = countryId;
    $.ajax({
        url: `/competitions?id=${id}`,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            res.map(function (id) {
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