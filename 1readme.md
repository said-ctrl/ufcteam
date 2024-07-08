my project UFC team


voici la maquette de mon projet en fin les grandes lignes.




![enter image description here](https://i.postimg.cc/MGnL3C08/maquette.png)


dons ce projet j' ai commencé par prendre les instructions et imaginer les grosses lignes du projet
n'ayant pas d'idée j'ai également visité différents site du meme genre .

je commence donc à récupérer les data fourni par l' instructeur et les entrés dans mon éditeur![](https://i.postimg.cc/QMH9jRPP/rdm1.png) 
voici ce que renvoie la récupération des données. Ici on voit uniquement le calendriers des prochains événements on peut donc anticiper la création d'une 2eme page HTML après celle de la page d'accueil.
on voit également l'autre fichiers JSON qui contient des les informations  et statistiques pro des sportifs qui cette dernière sera aussi une 3 eme page HTML


après la création des mes 3 fichiers HTML 
**page 1 accueil**
j’entre mon titre UFC team dans mon dans mes balises h ainsi que les différent lien de mon menu qui sera 'accueil' 'les combattants', 'les dates' et 'contact'
je télécharge une photo bannière pour la mettre sur ma n av barre qui sera composé du titre et des liens pour 3 autres pages.
j'ai  bg cover pour prendre la largeur de ma nav et j'ai centré limage pour avoir un melleur visuel
![enter image description here](https://i.postimg.cc/K8tRCk9f/Capture-d-cran-2024-07-05-093354.png)
ayant mis le titre et le menu dans une même section j’utilise un flex justify bettween via tailwind pour mettre mon titre a gauche  et mon mes 3 autres liens vers les autres pages a droite.


je rajoute un paragraphe de présentation du titre su site ainsi que d’autres informations dans un second paragraphe.
et j'ai ajouté une a coté des ces 2 paragraphe un splide (pellicule de plusieurs images ) de 3 images que l'on peut faire défilé via un clic 
![enter image description here](https://i.postimg.cc/BvmvPMWF/Capture-d-cran-2024-07-05-095533.png)
la page des combattants et elle compose d'un tableau que j'ai récupéré et dont le contenu sera les données d'un fichiers json qui état fournit et qui contient les noms pseudo date et différents stats de combattants.

je me pense donc sur un code java script qui va me permettre de récupéré automatiquement les donnés que je souhaite uniquement.
je vais donc créer une fonction qui va rechercher les données et les intégrer au tableau que jai positionné dans une section de ma 2eme page HTML au titre les combattants.
avec le column je dis combien de colonne dans mon tableau et quelle titre et données je veux mettre.

![enter image description here](https://i.postimg.cc/kGBgXB72/Capture-d-cran-2024-07-05-100306.png) je termine mon code js avec comme information a affiché en effectuant un clic sur le bouton infos certaines statistiques des combattants.
en effectuant ce clic une fenêtre alerte s’affiche avec les infos demandées.

j'utilise un code animation pour faire pivoté le titre qui est le titre des combattants dès l’ouverture ou le rafraichissement de la page.
![enter image description here](https://i.postimg.cc/GhmM9q1k/Capture-d-cran-2024-07-08-092107.png)




mon tableaux avec les infos demandées s’affiche correctement.


![enter image description here](https://i.postimg.cc/8cPbJPx1/Capture-d-cran-2024-07-08-092218.png)





après l’utilisation du bouton infos la fenêtre s’ouvre comme prévu.


![enter image description here](https://i.postimg.cc/9MPxwkMB/Capture-d-cran-2024-07-08-092149.png)

je m’attaque maintenant à la 3eme page qui est celle du calendrier en intégrant les dates et et nom des combattants pour chaque événements . 


![enter image description here](https://i.postimg.cc/zvCyT9H0/cld.png)



comme pour la formule qui m'a permis de trier les information qui  m'intéressait pour la seconde page pour cette dernière aussi j'ai passé pas mal de temps à trouver la fonction exact.





![enter image description here](https://i.postimg.cc/VkDbGQGh/Capture-d-cran-2024-07-08-093322.png)




de plus cette page m'a paru très compliqué car il fallait que je renvoie le résultat de ma fonction au calendrier déjà collé sur mon programme. 


![enter image description here](https://i.postimg.cc/Y9g0wJRM/Capture-d-cran-2024-07-08-093357.png)
j' ai déjà perdu pas mal de temps sur les différentes formule et il me reste pas de travail.

La dernier page est composé de 2 photo de chaque coté avec un formulaire de contact au centre .
ces 3 éléments ont un effet a ouverture de la page.



![enter image description here](https://i.postimg.cc/FsKvyMSz/footer.png)
sur cette photo vous pouvez également voir que j'ai commence le pieds de page de mon site .




je place mes photo sur chaque section différentes avec le formulaire de contact .
![enter image description here](https://i.postimg.cc/Y9XnMsCD/photfooter.png)
je termine avec mon pieds de pages .

![enter image description here](https://i.postimg.cc/wxGfrZP7/piedsss.png).



j’utilise une page css pour mettre en place des marges sur mon tableau ou même mon calendrier ainsi que pour effectuer plusieurs effet dans mes photo ou titres .

![enter image description here](https://i.postimg.cc/zfz4NWkB/css.png)
mon site est terminer pour l’affichage large je peux maintenant commencer le responsive cad l’adaptation mobile.


je code la page index car c’est cette page qui devra afficher un burger et replier le menu. 
![enter image description here](https://i.postimg.cc/bwC9Gthd/burg.png)


voici la page 1 en responsive
![enter image description here](https://i.postimg.cc/25gdGN3D/bg2.png)

et la dernière page qui est celle de contact m'a aussi poser problème pour mettre les 3 éléments en colonne.
![enter image description here](https://i.postimg.cc/NG686Vc3/bg3.png)voila mon premier projet en js c'etait pas simple mais j’ai encore appris pas mal de chose et j'ai rendu mon projet le dernier avec 1 jours d'avance.





