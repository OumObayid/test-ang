import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-laravel',
  template:`
<h1>📌 Partie 1 : Introduction et Pré-requis</h1>
<h2>🔹 1. Qu'est-ce que Laravel ?</h2>
<p>Laravel est un framework PHP open-source utilisé pour le développement d'applications web. Il est basé sur le modèle MVC (Modèle-Vue-Contrôleur) et est livré avec des fonctionnalités prêtes à l'emploi pour faciliter le développement d'applications web.</p>
<h2>🔹 2. Pourquoi utiliser Laravel ?</h2>
<p>Laravel est populaire pour plusieurs raisons :</p>
<ul>
  <li>Il est facile à apprendre et à utiliser, même pour les débutants.</li>
  <li>Il offre une architecture MVC claire et bien définie pour organiser le code.</li>
  <li>Il est livré avec de nombreuses fonctionnalités prêtes à l'emploi, telles que l'authentification, la validation des données, etc.</li>
  <li>Il possède une communauté active et un écosystème riche de packages et de ressources.</li>
</ul>

  ` ,
  styles: `

  `
})
export class LaravelIntroComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}

