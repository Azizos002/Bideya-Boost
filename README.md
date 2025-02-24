# BideyaBoost

## 🎯 Description du Projet
BideyaBoost est une plateforme interactive conçue pour aider les élèves et étudiants tunisiens à s'orienter dans leurs études et leur carrière. Elle offre des tests de compétences, des ateliers, des hackathons, et bien plus encore pour accompagner les jeunes dans leurs choix éducatifs et professionnels.

---

## 🚀 Fonctionnalités Principales
- **Tests de compétences et d’intérêts** 🧠
- **Ateliers pratiques et formations** 📚
- **Info-sessions et stages d’observation** 👨‍🎓
- **Hackathons et réseautage** 🔗
- **Interface de reels et vidéos éducatives** 🎥
- **Système de réservation de rencontres avec experts** 📅
- **Module de gamification (badges, classements, etc.)** 🎮
- **Espace parents et tableau de bord personnalisé** 👨‍👩‍👦

---

## 🛠️ Stack Technologique
### **Backend**
- Node.js (Express.js)
- MongoDB (Mongoose)
- JWT pour l’authentification
- WebSockets pour les interactions en temps réel

### **Frontend**
- React.js (Vite ou Create React App)
- Redux Toolkit pour la gestion d’état
- TailwindCSS pour le design UI

### **Autres Services**
- Firebase pour les notifications et le stockage d’images
- AWS / Google Cloud pour l’hébergement
- TensorFlow / PyTorch pour les recommandations basées sur l’IA

---

## 📂 Structure du Projet
```
BideyaBoost/
│── backend/
│   ├── models/         # Modèles MongoDB
│   ├── routes/         # Routes Express
│   ├── controllers/    # Logique métier
│   ├── middleware/     # Middleware d’authentification et sécurité
│   ├── config/         # Configuration (base de données, JWT, etc.)
│   ├── server.js       # Point d’entrée du backend
│
│── frontend/
│   ├── src/
│   │   ├── components/  # Composants réutilisables
│   │   ├── pages/       # Pages principales
│   │   ├── store/       # Gestion d’état Redux
│   │   ├── App.js       # Composant principal
│
│── .env                # Variables d’environnement
│── package.json        # Dépendances du projet
│── README.md           # Documentation
```

---

## ⚡ Installation & Lancement
### **1️⃣ Cloner le projet**
```sh
git clone https://github.com/ton-utilisateur/BideyaBoost.git
cd BideyaBoost
```

### **2️⃣ Configuration du Backend**
```sh
cd backend
npm install
cp .env.example .env  # Modifier avec tes propres valeurs
node server.js
```

### **3️⃣ Configuration du Frontend**
```sh
cd frontend
npm install
npm start
```

---

## 🔒 Sécurité & Protection des Données
- 🔐 **JWT Tokens** pour l’authentification sécurisée
- 🛡️ **Sanitization** des entrées utilisateur pour éviter les injections SQL/XSS
- 🔍 **Logs & Monitoring** avec Winston & Morgan
- 📜 **RGPD Compliant** : Gestion des consentements et suppression des données utilisateur

---

## 👥 Contributeurs
- **Nom 1** - Dev Backend
- **Nom 2** - Dev Frontend
- **Nom 3** - UX/UI Designer

## 📄 Licence
Ce projet est sous licence **MIT**.

---

## 📩 Contact
📧 **Email** : contact@bideyaboost.com  
🌐 **Site Web** : [www.bideyaboost.com](#)
