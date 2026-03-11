# 🌿 Daily Habits Tracker

Application web permettant aux utilisateurs de suivre leurs routines quotidiennes et d'améliorer leurs habitudes (sport, méditation, lecture, hydratation, etc.).  
Elle permet également de suivre la progression individuelle et celle d’un groupe (famille, amis ou colocataires).

---

## ✨ Fonctionnalités principales

- ➕ **Ajouter une routine** pour suivre une nouvelle habitude.
- 🗑️ **Supprimer une routine** lorsqu’elle n’est plus pertinente.
- ✅ **Marquer une routine comme accomplie** pour la journée.
- 📊 **Suivre la progression hebdomadaire** de chaque utilisateur.
- 👥 **Voir la progression globale du groupe** pour encourager la motivation collective.

---

## 👤 Expérience utilisateur

- Chaque utilisateur possède sa propre liste de routines.
- Les routines peuvent être marquées comme **accomplies** chaque jour.
- Un système de **progression hebdomadaire** permet de visualiser l’évolution des habitudes.
- La progression globale du groupe permet de **comparer et encourager les membres**.

---

## 🗄️ Gestion des données

Les données sont gérées côté client avec **React State** et **localStorage** afin d’assurer la persistance des informations même après le rafraîchissement de la page.

### Principe de fonctionnement

- 📥 **Chargement des données**  
  Au démarrage de l’application, les données des utilisateurs et routines sont récupérées depuis `localStorage`.

- 🧠 **State Management avec React**  
  Les données sont stockées dans un `state` central dans l’application.

- 🔄 **Synchronisation automatique**  
  Toute modification (ajout, suppression, accomplissement) met à jour :
  - le **state React**
  - le **localStorage**

- 💾 **Sauvegarde automatique**  
  Après chaque mise à jour, les données sont enregistrées pour éviter toute perte.

---

## 🎨 Maquette Figma

👉 [Voir la maquette](https://www.figma.com/design/9FpLI8jPltD6OEmjMqrm4U/Untitled?node-id=0-1&t=AMEGdd4DtIciVS8u-1)

---

## 👩‍💻 Réalisé par

- **HOUSNA FATHI** – Développeuse web Full-Stack