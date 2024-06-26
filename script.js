let test = document.getElementById('pdon');
async function affiche() {
    const reponse = await fetch("Fighters.json");
    const fox = await reponse.json();
    new gridjs.Grid({
        columns: [{id: 'Nickname',
            Name: 'test',}],
        search: true,
        data: fox,
    })


.render(document.getElementById("pdon"));
}  
affiche()