
async function affiche() {
    const reponse = await fetch("json/Fighters.json");
    const fox = await reponse.json();
    new gridjs.Grid({
        columns: [
            {
                id: 'FighterId',
                hidden: true,
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
                        className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ',
                        onClick: () => for ( let f=0; f<data.length; f++)
                        
                        }
                            console.log(row.cells[0].data)
                        return alert(`Editing "${row.cells[1].data}" "${row.cells[2].data}"`)
                        
                        }
                    }, 'Infos');
                }
            },
        ],
        search: true,
        data: fox,
        sort: true,
        pagination: {
            limit: 7
        },
    })


        .render(document.getElementById("pdon"));
}
affiche()


