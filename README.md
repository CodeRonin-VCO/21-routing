# Demo - react router (Delcarative)


## Setup
```
npm create vite@latest
npm i
```

## Ajout package router
```
npm i react-router
```

_Créer le dossier "Routes" pour les composants du routage
- "Routes"

## Mise en place du routing

    ### Création des pages de base (3)
    ```
    /routes 
        - home.route.jsx (le .route est indicatif, il n'a aucune utilité)
        - contact.route.jsx
    ```

    ### Création du mécanisme de routing
    Dans le fichier "./src/App.jsx"
    ```
    <Routes>
        <Route index element={<HomePage />} />
        <Route path='contact' element={<ContactPage />} />
    </Routes>
    ```

    ### Activer le mécanisme de router sur l'application
    Ajouter la balise `<BrowserRouter> ... </BrowserRouter>` dans le fichier "./src/main.jsx"

    ### Ajouter un menu de navigation
