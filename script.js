
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
            }
            , {

                name: 'Stats',

                formatter: (cell, row) => {
                    let tableau = [];
                    let index
                    for (let i = 0; i < fox.length; i++) {
                        if (row.cells[0].data === fox[i].FighterId) {
                            
                            index = i
                        }
                    }

                    return gridjs.h('button', {
                        className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ',
                        onClick: () => alert(`
                                 Pourcentage de decision: ${fox[index].CareerStats.DecisionPercentage}
                                Précision de frappe ${fox[index].CareerStats.SigStrikeAccuracy}
                                Frappes par minute ${fox[index].CareerStats.SigStrikesLandedPerMinute}
                                Moyenne de mise au sol   ${fox[index].CareerStats.TakedownAverage}`)


                    }, 'info')



                }
            },
        ],

        search: true,
        data: fox,
        sort: true,
        pagination: {
            limit: 7
        },



    }).render(document.getElementById("pdon"))
}


affiche()

