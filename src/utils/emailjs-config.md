
# Configuration d'EmailJS pour Mylli Services

Ce document explique comment configurer EmailJS pour envoyer les données des formulaires par email.

## Étape 1: Créer un compte EmailJS

1. Créez un compte sur [emailjs.com](https://www.emailjs.com/)
2. Connectez-vous à votre tableau de bord EmailJS

## Étape 2: Créer un service EmailJS

1. Dans le tableau de bord, cliquez sur "Add New Service"
2. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
3. Configurez votre service et notez l'ID du service (ex: "service_abc123")

## Étape 3: Créer un modèle d'email

1. Dans le tableau de bord, accédez à l'onglet "Email Templates"
2. Cliquez sur "Create New Template"
3. Concevez votre modèle en utilisant les variables pour les champs de formulaire
4. Exemples de variables:
   - {{form_name}} - Nom du formulaire
   - {{name}} - Nom du visiteur
   - {{email}} - Email du visiteur
   - {{phone}} - Téléphone du visiteur
   - {{message}} - Message du visiteur
5. Notez l'ID du modèle (ex: "template_xyz789")

## Étape 4: Obtenir votre ID utilisateur

1. Dans le tableau de bord, accédez à "Account" > "API Keys"
2. Copiez votre "Public Key"

## Étape 5: Configurer l'application

Modifiez le fichier `src/utils/emailjs.ts` pour remplacer les valeurs par défaut:

```typescript
// Initialisez EmailJS avec votre ID utilisateur
export const initEmailJS = () => {
  emailjs.init("VOTRE_ID_UTILISATEUR");
};

// Dans la fonction sendFormDataToEmail
const response = await emailjs.send(
  "VOTRE_ID_SERVICE", // Remplacez par votre ID de service
  "VOTRE_ID_TEMPLATE", // Remplacez par votre ID de modèle
  templateParams
);
```

## Conseil pour les modèles d'email

Pour créer un modèle qui fonctionne avec tous les formulaires, utilisez une structure conditionnelle:

```html
{{#if form_name}}
<p><strong>Formulaire :</strong> {{form_name}}</p>
{{/if}}

{{#if name}}
<p><strong>Nom :</strong> {{name}}</p>
{{/if}}

{{#if email}}
<p><strong>Email :</strong> {{email}}</p>
{{/if}}

{{#if phone}}
<p><strong>Téléphone :</strong> {{phone}}</p>
{{/if}}

{{#if subject}}
<p><strong>Objet :</strong> {{subject}}</p>
{{/if}}

{{#if message}}
<p><strong>Message :</strong> {{message}}</p>
{{/if}}

<!-- Pour les champs spécifiques à certains formulaires -->
{{#if preferredTime}}
<p><strong>Moment préféré pour rappel :</strong> {{preferredTime}}</p>
{{/if}}

<!-- Ajoutez d'autres champs selon vos besoins -->
```

Cela permet d'avoir un modèle unique qui s'adapte à tous vos formulaires.
