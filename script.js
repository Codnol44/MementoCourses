window.onload = chargementTerminer;

function chargementTerminer() {
    initForm();
    //Associer un listener avec le bouton
    document.getElementById('button').addEventListener('click', ajouter);
}

//Init mon form : vider le champ et mettre focus
function initForm() {
    document.getElementById('article').value = '';
    document.getElementById('article').focus();
}

//Fonction pour ajouter un article
function ajouter() {
    //Recup la saisie
    const article = document.getElementById('article').value;

    //Afficher
    let elLi = document.createElement('li');
    let pArticle = document.createElement('p')

    pArticle.className = 'article';
    pArticle.innerText = article;

    //Gestion du clic de suppression
    elLi.addEventListener('click', supprimer);

    //Associer le <p> avec le <li>
    elLi.appendChild(pArticle);

    document.getElementById('ListeCourses').appendChild(elLi);

    initForm();

}

//Fonction pour supprimer un article
function supprimer(event){
    //Récupère le <li> qui a subi le clic
    const article = event.currentTarget;
    const libelle = article
        .getElementsByClassName('article')[0].innerText;

    if(confirm('Voulez-vous supprimer cet article "'+ libelle +'" ?')){
        article.remove();
    }

}
