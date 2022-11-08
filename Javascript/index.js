fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        let data1 = "";
        data.map((values) => {
            data1 += `<tr>
                        <td>${values.id}</td>
                        <td>${values.name}</td>
                        <td>${values.email}</td>
                        <td>${values.address.street + " " + values.address.city + " " + values.address.zipcode}</td>
                        </tr>`
        });
        document.getElementById("table").innerHTML = data1
    });

