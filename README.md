<a name="top"></a>
# Keiko Escape Game

Bienvenue sur le Keiko[^1] Escape Game de Theodo. Le but de ce projet est de créer ton propre escape game en web 🧑‍💻 !

ℹ️ Pourquoi suivre ce keiko ?
- Créer un site web dynamique en utilisant uniquement les briques élémentaires du web : HTML, CSS et JavaScript. Sans framework JavaScript tel que React, Angular ou Vue.js.
- Pouvoir ainsi réaliser un site web fonctionnel avec un minimum de connaissances techniques. Il est donc ouvert à celles et ceux qui souhaitent découvrir la programmation web, avec pour seuls prérequis d'avoir suivi une formation de base sur les trois langages utilisés (HTML, CSS et JavaScript).
- Même si ce n'est pas son objectif initial, ce keiko pourra aussi intéresser les personnes ayant découvert le web à travers un framework JavaScript. Ne pas utiliser de framework permet de comprendre quelles sont les opérations de bas niveau qui sont abstraites par les fonctionnalités de haut niveau du framework. Cela permet alors de mieux maîtriser les frameworks et d'avoir une meilleure vision de la valeur qu'ils apportent.

Tu trouveras sur cette page toutes les informations nécessaires pour le faire, notamment les procédures d'installation du projet, comment le lancer en local sur ta machine et comment le déployer en production avec ton compte github 🥳 !

Afin de pouvoir réaliser ce projet sereinement, un exemple d'escape game tout simple a été codé dans ce repo. Même si réutiliser le code de l'exemple n'est pas obligatoire, ça pourrait s'avérer utile 😉

En ce qui concerne le thème et le type d'escape game, le choix est totalement libre ! Nous avons juste défini une liste de fonctionnalités qui sont utiles à tout bon escape game.

## Prérequis

Avant de commencer, tu as besoin de nodejs et npm, deux outils utilisés quasiment tout le temps à Theodo :

```bash
node --version
# v10+
```

```bash
npm --version
# 6+
```

Si tu ne connais pas ces outils, tu peux suivre cette [documentation NPM pour les installer sur ta machine](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation

### Creation du repo

Pour te faciliter la vie ce repo est un template, il te suffit de cliquer sur le bouton **Deploy to netlify** pour créer un repo à partir de ce boilerplate:

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/theodo/dojo-escape-game"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

Tu vas devoir te créer un compte avec netlify (les quotas gratuits pour développeurs sont très généreux), tu peux utiliser ton compte github comme single sign-on.

Une fois fait, tu auras un repo perso pour le projet et ton site sera déployé automatiquement sur netlify à chaque fois que tu push des changement sur la branche master.

![Déploiement sur netlify](deploy_to_netlify.png)

Le lien de ton site s'affiche sur netlify : https://<NOM_RANDOM>.netlify.app.

Tu peux maintenant cloner ton repo localement pour commencer à développer. Pour le trouver, il faut aller dans tes repos personnels Github puis trouver `dojo-escape-game`.

### Développer

Pour développer sur le projet, il reste à installer les outils qui vont transpiler les sources placées dans [src][./src] en un site web pour travailler localement.

Pour installer les outils nodejs, il suffit de faire:

```bash
npm install
```

Une fois les dépendances installées, pour faire tourner le site web localement sur [http://localhost:1234](http://localhost:1234), il suffit de lancer:

```bash
npm start
```

### Publier une version

Avec l'intégration netlify, il te suffit de pousser des changements sur la branche master de ton repo github pour déployer la nouvelle version.

## Structure

La page est un simple fichier HTML : `src/index.html`.

Le scénario de l'escape game est décrit dans `src/index.js`. Il utilise le moteur du jeu dans `src/Game/` et l'interface `src/Interface/` pour expliciter le comportement du jeu.

## Attentes

### Must have

🚨 Les fonctionnalités suivantes sont nécessaires pour atteindre un jeu minimal. Les 3 premières ont déjà été développées dans l'exemple fourni dans ce repo (tu n'auras donc besoin de les implémenter que si tu décides de ne pas repartir de l'exemple fourni) :

- Avoir une carte qui montre les possibilités de déplacement. Le joueur doit savoir dans quelle 'pièce' il est sur la carte ✅ (déjà développé dans l'exemple)
- Mouvements validés par des conditions. Ces conditions peuvent porter sur n'importe quel élément du jeu comme par exemple: la pièce dans laquelle le joueur est actuellement ✅
- Le succès de l'escape game est défini et visualisé lors de la réussite ✅
- Inventaire pour le joueur.
- Objets dans la salle : le joueur doit pouvoir récupérer les objets de la salle pour les avoir dans son inventaire.
- Mouvements validés par la présence d'un objet spécifique dans l'inventaire du joueur.
- Personnalisation du nom : un joueur doit pouvoir entrer son nom en début de partie et le voir apparaître au niveau du champ de texte.

### Nice to have

Les fonctionnalités définies ci-dessous améliorent l'expérience de jeu 🎮 et ne sont pas obligatoires. Cependant, chaque fonctionnalité développée en plus sera très appréciée par les joueurs 😎 et te permettra de développer de nouvelles compétences web 🧑‍💻 (ETQJ = En tant que joueur 😀).

- ETQJ, je peux recommencer la partie à tout moment en cliquant sur un bouton
- ETQJ, lorsque je refresh la page, je veux retrouver mon état du jeu tel que je l'ai laissé
- ETQJ, je veux pouvoir voir des éléments rappelant le thème de l'escape game dans le background ⛱️
- ETQJ, je veux voir les noms des salles directement sur la carte
- ETQJ, je veux pouvoir jouer que avec mon clavier avec des instructions qui expliquent le rôle de chaque touche

NB: Les fonctionnalités _ne sont pas_ triées par ordre de difficulté 😜

## Pour commencer

### Exemples

Afin de te permettre de te projeter dans les différentes fonctionnalités techniques et de libérer ta créativité, tu peux accéder à deux escape game bâtis sur ce modèle :

- Le premier [escape game en accès libre](https://elegant-sawine-9b39ee.netlify.app/) est focalisé sur la mise en place des fonctionnalités techniques (recommencer la partie, rafraîchir la page, navigation au clavier, etc).
- Le second [escape game jouable](https://magical-pithivier-7d3fbd.netlify.app/) combine nombre de fonctionnalités techniques avec un design personnalisé et une histoire longue et prenante.

### Pistes

Un apprentissage a plus de valeur lorsqu'il a été fait en autonomie, par itérations successives. Mais rester bloqué apporte peu de valeur 🙃 Tu trouveras ci-dessous quelques conseils pour le développement des principales fonctionnalités. À utiliser avec parcimonie 😉

<details>
<summary>Inventaire pour le joueur</summary>
Pour ajouter un inventaire, tu peux reprendre l'organisation du code existante pour les actions :

- dans `/src/Game` avoir une classe `Inventory.js` qui contient l'état (ex. : objets présents dans l'inventaire) et la logique (ex. : méthode pour savoir si un objet est présent dans l'inventaire),
- dans `/src/Interface` avoir une classe `Inventory.js` qui permet d'afficher l'inventaire en manipulant le HTML (en récupérant l'endroit prévu pour à l'aide de `document.getElementById()`).

</details>

<details>
<summary>Mouvements validés par la présence d'un objet dans l'inventaire</summary>

Dans la callback passée en argument à la méthode `world.createAction()`, ajoute une condition sur la présence de l'objet dans l'inventaire. Selon le booléen retourné par la condition, retourne une callback différente.

</details>

<details>
<summary>Personnalisation du nom</summary>
Les possibilités pour cette fonctionnalités sont nombreuses !
L'une d'entre elles consiste à ajouter une modale qui est affichée au début de la partie et dans laquelle le joueur inscrit son nom. Voici quelques astuces :

- dans `index.css` tu peux jouer avec les propriétés suivantes :
    - `display` : `block` ou `none` selon si tu souhaites afficher la modale ou non,
    - `position` : `absolute` combinée avec `left` et `top` pour positionner la modale de façon absolue et `z-index` pour que la modale soit affichée au-dessus de l'écran de jeu,
    - `width` et `height` pour dimensionner la modale,
- le type `Player` peut être défini dans une classe à part, puis instancié dans la classe `World`.
</details>

<details>
<summary>Recommencer la partie en cliquant sur un bouton</summary>

Ici aussi différentes façon de procéder sont possibles. Dans tous les cas, n'oublie pas d'agir à la fois sur l'affichage (en utilisant par exemple la méthode `clearActions()`) et sur l'état stocké (en modifiant le champ `actions` de l'objet `World`).
</details>

<details>
<summary>Après avoir refresh la page, retrouver le jeu dans l'état dans lequel on l'a laissé</summary>

L'une des possibilités consiste à utiliser le stockage présent dans le navigateur pour conserver l'état du jeu. Tu peux utiliser le local storage ou le session storage selon tes besoins.

Afin de stocker l'état actuel du jeu dans le local storage avant un refresh, tu peux écouter l'événement `beforeunload` de `window` et remplir le storage à ce moment-là.

Puis en fonction de ce que tu récupères (ou non) dans le storage après le refresh, tu pourras initialiser le jeu différemment.
</details>

<details>
<summary>Navigation uniquement au clavier</summary>

Quelques astuces :
- si tu as besoin de rendre accessible au clavier un élément qui ne l'est pas nativement, tu peux utiliser l'attribut `tabindex` dans ton HTML,
- le focus peux être modifié à partir du fichier javascript en utilisant la méthode `.focus()`,
- n'oublie pas de donner un retour visuel sur l'élément sélectionné à l'aide de la pseudo-classe `focus` dans ton CSS.
</details>

<br>

[^1] Keiko 稽古 : 稽 signifie <em>penser</em> et 古 signifie <em>ancien</em>. Keiko signifie ainsi : pratiquer avec pour objectif d'apprendre ou d'acquérir un savoir.

[Revenir au début ⬆️](#top)