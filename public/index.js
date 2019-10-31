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
                        let p = document.createElement('p');
                        p.classList.add('country');
                        let countryText = document.createTextNode(country.country_name);
                        p.appendChild(countryText);

                        let bossDiv = document.querySelector('.container');
                        bossDiv.appendChild(p);


                        // p.addEventListener('click', getCountryId);
                        p.onclick = () => {
                            console.log(countryId);
                        }
                    }
                })
            }
        });
    });
});