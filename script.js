function state_territory() {

        $.get("https://api.rootnet.in/covid19-in/contacts", function (data) {

            const regional_array = data.data.contacts.regional;
             
            for(let i = 0; i < regional_array.length; i++){
                console.log(regional_array[i].loc)
                $('#state-contact-data').append(`<tr>  
                     <th scope="row">${i+1}</th>
                     <td>${regional_array[i].loc}</td> 
                     <td>${regional_array[i].number}</td> 
                 </tr>`)
            }
        }, "json");

}

state_territory();



function notification() {

    $.get("https://api.rootnet.in/covid19-in/notifications", function (data) {

        const notification_array = data.data.notifications;
         
        for(let i = 0; i < notification_array.length; i++){
            let date = notification_array[i].title.slice(0,10);
            let title = notification_array[i].title.slice(10)

            if(i == 0){
                $('#notification-data').append(`<tr>  
                <th scope="row">${i+1}</th>
                <td>-</td> 
                <td>${notification_array[i].title}</td> 
                <td><a href=${notification_array[i].link}>Link</a></td> 
            </tr>`)
                continue;
            }

            $('#notification-data').append(`<tr>  
                 <th scope="row">${i+1}</th>
                 <td>${date}</td> 
                 <td>${title}</td> 
                 <td><a href=${notification_array[i].link}>Link</a></td> 
             </tr>`)
        }
    }, "json");

}

notification();



function hospital_beds() {

    $.get("https://api.rootnet.in/covid19-in/hospitals/beds", function (data) {

        const regional_array = data.data.regional;
         
        for(let i = 0; i < regional_array.length; i++){
            
            $('#hospital-beds-data').append(`<tr>  
                 <th scope="row">${i+1}</th>
                 <td>${regional_array[i].state}</td> 
                 <td>${regional_array[i].ruralHospitals}</td>
                 <td>${regional_array[i].ruralBeds}</td> 
                 <td>${regional_array[i].urbanHospitals}</td> 
                 <td>${regional_array[i].urbanBeds}</td> 
                 <td>${regional_array[i].totalHospitals}</td> 
                 <td>${regional_array[i].totalBeds}</td> 
                 <td>${regional_array[i].asOn}</td> 
             </tr>`)
        }
    }, "json");

}

hospital_beds();


function medical_colleges() {

    $.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges", function (data) {

        const regional_array = data.data.medicalColleges;
         
        for(let i = 0; i < regional_array.length; i++){
            
            $('#medical-colleges-data').append(`<tr>  
                 <th scope="row">${i+1}</th>
                 <td>${regional_array[i].state}</td> 
                 <td>${regional_array[i].name}</td>
                 <td>${regional_array[i].city}</td> 
                 <td>${regional_array[i].ownership}</td> 
                 <td>${regional_array[i].admissionCapacity}</td> 
                 <td>${regional_array[i].hospitalBeds}</td> 
             </tr>`)
        }
    }, "json");

}

medical_colleges();