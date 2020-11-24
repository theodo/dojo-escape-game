# Dojo Escape Game

## Prérequis

Tu as besoin de nodejs et npm :

```bash
node --version
# v10+
```

```bash
npm --version
# 6+
```

[Si tu ne connais pas ces outils, tu peux suivre cette documentation NPM pour les installer](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation

### Creation du repo

Pour pouvoir publier ton projet sur github pages:

- Tu dois simplement créer un repo git.
- N'initialise pas ton repo, récupère juste l'origine git.
- Utilise ce boilerplate: `npx degit theodo/dojo-escape-game <nom-de-ton-repo>` et rends toi dans le dossier `cd <nom-de-ton-repo>`.
- Initialise ton repo git:

```bash
git init
# Identifie toi à git si nécessaire https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
git remote add origin https://github.com/<user>/<nom-de-ton-repo>.git # ou en ssh : git remote add origin git@github.com:<user>/<nom-de-ton-repo>.git
git add .
git commit -m "initial commit"
git push
```

### Publier sur Github pages

Pour finir, il faut configurer githubpages pour utiliser le dossier `dist/` du repo git, que l'on commitera lorsque l'on veut faire une version de la page web.

On va utiliser une branche spécifique `gh-pages`, utilise `npm run deploy` pour synchroniser le dossier _dist_ sur la branche `gh-pages`.

Le boilerplate devrait être disponible sur `https://<user>.github.io/<nom-de-ton-repo>` d'ici maximum 10min pour le premier déploiement.

### Développer

Pour développer sur le projet, il reste à installer les outils qui vont transpiler les sources placées dans [src][./src] en un site web dans [dist](./dist) que github servira comme site web.

pour installer les outils nodejs, il suffit de faire:

```bash
npm install
```

Une fois les dépendances installées, pour servir le site web localement sur [http://localhost:1234](http://localhost:1234), il suffit alors de lancer:

```bash
npm start
```

### Publier une version

Une fois qu'une version locale est satisfaisante, il suffit de lancer :

```bash
npm run build
```

Le site va alors être généré et il suffit alors de commit les changements (en incluant dist) et de les pousser sur github pour mettre à jour le site en ligne 🎉 :

```bash
git add dist && git commit && npm run deploy
```

Ainsi la branche _gh-pages_ est reconnu automatiquement par github et servira de source pour servir le site.

## Structure

La page est un simple fichier HTML : `src/index.html`.

Le scenario de l'escape game est décris dans `src/index.js`. Il utilise le moteur du jeu dans `src/Game/` et l'interface `src/Interface/` pour expliciter le comportement du jeu.

## Critères

### Requis

Les fonctionnalités suivantes sont attendus:

- Avoir une carte qui montre les possibilités de déplacement
- Inventaire pour le joueur
- Objets dans la salle
- Mouvements validés par des conditions
- Personnalisation du nom du joueur
- Jeu est gagné si le joueur sort et a un feedback sur le fait de gagner

### Evaluation

- L'escape game sera tout d'abord évalué sur la qualité de l'expérience du jeu (design, scenario)
- Le jeu est [accessible](https://developer.mozilla.org/fr/docs/Apprendre/a11y/What_is_accessibility) et jouable au moins au clavier.
- Puis sur la qualité de l'implémentation technique, tel que la lisibilité du code, la clarté de l'intention (en particulier dans le code du scenario).
