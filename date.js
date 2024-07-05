


document.addEventListener('DOMContentLoaded', function () {
    let datuf = [];
    fetch('./json/datesufc.json').then(res => res.json()).then(data => {
        for (let i = 0; i < data.length; i++) {
            datuf.push({ title: data[i].Name, start: data[i].DateTime,
               
             }
            )
        }

        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendar(calendarEl, {

            initialView: 'dayGridMonth',
            events: datuf,
            eventTimeFormat: {
                hour: '2-digit',
                minute: '2-digit',
                
                meridiem: 'long' }

        });






        calendar.render();




    }
    )








})

