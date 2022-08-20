/*
Module : JavaScript
Exercice n°20 - Appliquer les propriétés CSS à l'élément HTML DOM

Durée de l’exercice : 30min

Appliquez des propriétés CSS à l'élément HTML DOM pour changer le style
Objectif : changer le style de l'élément html.
CSS

Sélectionnez l'élément dans le DOM.
Appliquer les propriétés css.

Énoncé :
Code HTML

<body>
    <div class="random">change the style of my text you can apply background color, fontsize, color any css properties you can think of</div>
    <!-- javascript -->
    <script src="app.js"></script>
</body>

JavaScript à faire : 

1.	Sélectionnez la div avec le nom de classe random.
2.	Changez la couleur de fond en bleu.
3.	Appliquer la couleur au blanc
4.	Appliquez fontSize 2rem
5.	Appliquer textTransform capitalize

*/

// 1-
const random = document.querySelector(".random");
// console.log(random);

// 2-
random.style.backgroundColor = "blue";

// 3-
random.style.color = "white";

// 4-
random.style.fontSize = "2rem";

// 5-
random.style.textTransform = "capitalize";
