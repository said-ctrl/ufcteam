
async function affiche() {
    const reponse = await fetch("json/Fighters.json");
    const fox = await reponse.json();
    new gridjs.Grid({
        columns: [{
            id: 'Nickname',
            name: 'Pseudo',
        },
        {
            id: 'FirstName',
            name: 'Prenom',
        },
        {
            id: 'LastName',
            name: 'Nom',
        },
        {
            id: 'Wins',
            name: 'Victoires',

        },
        {
            id: 'Losses',
            name: 'Defaites'
        },
        {
            id: 'BirthDate',
            name: 'Naissance',
            formatter: (cell) => ` ${cell.replace('T00:00:00', '')}`
        },
        {
            id: 'CareerStats',
           
        
        
            name: 'Actions',
            formatter: (cell, row) => {
                return gridjs.h('button', {
                    className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
                    onClick: () => alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`)
                }, 'Edit');
            }
        },
     ],
        search: true,
        data: fox,
        sort: true,
        pagination: {
            limit: 15
        },
    })


        .render(document.getElementById("pdon"));
}
affiche()