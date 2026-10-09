/* ============================================================
   RÉGLAGES DE LA PAGE DE RÉSERVATION — à modifier ici uniquement
   ============================================================ */
window.RESA_CONFIG = {
  // ---- Mode de fonctionnement ----
  // ""     → site statique (GitHub Pages) : pas de serveur, compteurs ci-dessous, alerte email via Web3Forms
  // "/api" → hébergement Cloudflare Pages avec le dossier functions/ : compteurs et alertes automatiques
  api: "",

  // Clé Web3Forms (gratuite, sur https://web3forms.com) : vous recevez un email à chaque réservation.
  // Laissez "" pour ne pas recevoir d'email (vous serez alors prévenu uniquement par le WhatsApp de l'invité).
  web3formsKey: "",

  // Compteurs affichés en mode statique — à mettre à jour à la main (modifiable directement sur github.com)
  compteurs: {
    demandes: 32,      // demandes en cours
    confirmees: 15,     // réservations confirmées
    pris: { standard: 9, suite: 0 }  // bungalows déjà attribués (pour « Bungalows encore disponibles »)
  },

  // PayPal : identifiant de votre lien paypal.me (https://www.paypal.me/tchakap)
  paypal: "tchakap",

  // Orange Money (Cameroun) : numéro qui reçoit les paiements (9 chiffres, sans +237)
  // titulaire : nom affiché chez l'invité au moment de valider (laisser "" si vous préférez ne pas l'afficher)
  orangeMoney: { numero: "697378718", titulaire: "Eric Nakong" },

  // MTN Mobile Money (Cameroun)
  mtnMomo: { numero: "675177684", titulaire: "Didier Nakong" },

  // Votre numéro WhatsApp (format international, chiffres uniquement : 33612345678 ou 237690000000)
  whatsapp: "33695684913",

  // Parité fixe FCFA (XAF) → euro — PayPal n'accepte pas le FCFA
  xafParEuro: 655.957,

  // Dates clés (heure du Cameroun, UTC+1)
  dateLimite: "2026-10-18T23:59:59+01:00",
  dateMariage: "2026-10-24T14:00:00+01:00",

  // Plage de dates réservables et dates proposées par défaut
  sejour: { min: "2026-10-20", max: "2026-10-28", arriveeDefaut: "2026-10-23", departDefaut: "2026-10-25" },

  // Logements (tarifs négociés Tagidor du 06/10/2026)
  logements: {
    standard: {
      nom: "Bungalow Standard",
      prix: 136000, stock: 42, capacite: 2,
      texte: "Un bungalow confortable et moderne, idéal pour un séjour agréable en toute simplicité. Petit-déjeuner inclus pour 2.",
      photo: "bungalow-standard.jpg"
    },
    suite: {
      nom: "Bungalow Suite",
      prix: 250000, stock: 5, capacite: 4,
      texte: "Un espace plus spacieux et élégant, avec un salon privé pour un confort absolu. Petit-déjeuner inclus pour 2.",
      photo: "bungalow-suite.jpg"
    }
  }
};
