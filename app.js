const keys = Array.from(document.querySelectorAll('.key')); //Creer un tableau a partir de toute nos div
console.log(keys);

function playsound(e) {
    // console.log(e.keyCode);

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);  //La touche est relier au son lors de l'evenement keydown

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return; //Si on tape une autre touche, dans le cas ou c'est false, on sort de la fonction

    key.classList.add('playing');   //On ajoute une classe playing sur la div lorsque la touche est taper

    audio.currenTime = 0;                   //L'audio va directement se remettre a 0 lorsqu'on relance la fonction, lorsqu'on rappuie sur la touche
    audio.play();
}

function removeTransition(e){
    e.target.classList.remove('playing');
}



keys.forEach(keey => keey.addEventListener('transitionend', removeTransition)) //Pour chaque element du tableau, tu applique l'evenement transitionend qui va a chaque fin de transition (dans le css), appliquer la fonction removeTransition qui elle meme va supprimer la class playing

window.addEventListener('keydown', playsound);