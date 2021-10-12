

document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){

    const https = new XMLHttpRequest();
    https.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
    https.send();
    https.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            let datos = JSON.parse(this.responseText);
            

            let res = document.querySelector('#respuesta');
            res.innerHTML = '';

            for(let item of datos){

                res.innerHTML =+ `
                
                <tr>
                                    <td rowspan = "8">${item.name}</td>
                                    <td rowspan = "8">${item.username}</td>
                                    <td rowspan = "8">${item.email}</td>
                                    <td>Calle: </td>
                                    <td colspan="2">${item.street}</td>
                                    <td rowspan = "8">${item.phone}</td>
                                    <td rowspan = "8">${item.website}</td>
                                    <td>Nombre: </td>
                                    <td>${item.name}</td>
                                </tr>
                                <tr>
                                    <td>Suite: </td>
                                    <td colspan="2">${item.suite}</td>
                                    <td>catchPhrase: </td>
                                    <td>${item.catchPhrase}</td>
                                </tr>
                                <tr>
                                    <td>Ciudad: </td>
                                    <td colspan="2">${item.city}</td>
                                    <td>BS: </td>
                                    <td>${item.bs}</td>
                                </tr>
                                <tr>
                                    <td>ZipCode: </td>
                                    <td colspan="2">${item.zipcode}</td>
                                </tr>
                                <tr>
                                    <td rowspan="2">Geo: </td>
                                    <td>LAT</td>
                                    <td>${item.lat}</td>
                                </tr>
                                <tr>
                                    <td>LNG</td>
                                    <td>${item.lng}</td>
                                </tr>

                
                `
                
                
            }

        }
    }
};