/*
Module : JavaScript
Exercice n°19 - Élément DOM HTML innerHTML et textContent

Durée de l’exercice : 30min
 
Élément DOM HTML innerHTML et textContent
Objectif : Différence entre innerHTML et innerText
innerHTML
textContent

La propriété innerHTML renvoie :
Le contenu textuel de l'élément, y compris tous les espaces et les balises HTML internes.

La propriété innerText renvoie :
Juste le contenu textuel de l'élément et de tous ses enfants, sans l'espacement et les balises CSS de texte caché, à l'exception des éléments <script> et <style>.

Énoncé : 
Code HTML

<body>
    <ul id="first">
      <li class="item">list item</li>
      <li>list item</li>
    </ul>
    <div id="second">
      i have some text content
    </div>
    <!-- javascript -->
    <script src="app.js"></script>
</body>

Complétez le code JavaScript :

1.	Sélectionnez l'élément avec id first et console log innerHTML
2.	Sélectionnez l'élément avec le nom de classe item et console log textContent
3.	Sélectionnez le div avec l'id second et console log textContent
4.	Remplacez le texte dans la classe item, changez le innerHTML de ul avec les listes mises à jour et rendez la balise ul à body

*/

// Réponses

// Question 1-
const elmt = document.querySelector("#first");
console.log(elmt.innerHTML);
// console.log(elmt.innerText);

// Question 2-
const elt = document.querySelector(".item");
console.log(elt.textContent);

// Question 3-
const elnt = document.querySelector("#second");
console.log(elnt.textContent);

//Question 4-
elt.textContent = "Remplacez le texte dans la classe item";
console.log(elmt.innerHTML);
// (Je ne comprend pas cette phrase : rendre la balise ul à body)
