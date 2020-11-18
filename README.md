# Dojo Escape Game

- Installation de Node (JeremieC)
- Boilerplate avec hot reload (JeremieC)
- Doc sur mettre sa page sur github pages (JeremieC)

- Classe Monde qui gere les salles et la position du joueur
- Classe Salle abstraite

Criteres qu'on veut voir:

- Avoir une carte qui montre les possibilités de deplacement (carte en canvas)
- Inventaire perso
- Objets dans la salle
- Mouvements validés par des conditions
- Le joueur doit avoir un nom
- Feedback sur les actions
- Jeu est gagné si le joueur sort et a un feedback sur le fait de gagner

Criteres techniques:

Des choses qu'on aimerait voir:

- A vous de voir ...

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

- Tu dois créer un repo github avec ton nom d'utilisateur et rajouter '.github.io'. Par exemple pour Theodo, il faut créer le repo : `theodo.github.io`.
- N'initialise pas ton repo, récupère juste l'origine git.
- Utilise ce boilerplate: `npx degit theodo/dojo-escape-game <nom-de-ton-repo>` et rends toi dans le dossier `cd <nom-de-ton-repo>`.
- Initialise ton repo git:

```bash
git init
# Identifie toi à git si nécessaire https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
git remote add origin https://github.com/<user>/<user>.github.io.git # ou en ssh : git remote add origin git@github.com:<user>/<user>.github.io.git
git add .
git commit -m "initial commit"
git push
```

### Publier sur Github pages

Pour finir, il faut configurer githubpages pour utiliser le dossier `dist/` du repo git, que l'on commitera lorsque l'on veut faire une version de la page web.

On va utiliser une branche spécifique `gh-pages`, utilise `npm run deploy` pour synchroniser le dossier _dist_ sur la branche `gh-pages`.

Le boilerplate devrait être disponible sur `https://<user>.github.io/` d'ici maximum 10min pour le premier déploiement.

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
