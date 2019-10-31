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
    });
});

$(function () {
    $('#country').on('click', function () {
        $.ajax({
            url: '/competitions/:id',
            type: 'GET',
            dataType: 'json',
            success: function (res) {
                res.map(function (id) {
                    console.log(id.league_name);
    
                })
    
            }
        })
    })
})