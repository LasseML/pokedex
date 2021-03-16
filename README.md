# Pokedex

Angular application simulating a pokeDex using API calls to pokeapi.co for PokeMon stats 

## Project Requirements

1. Webpage should consist of 4 pages:
    1. Landing page
    2. Trainer page
    3. Pokemon Catalogue
    4. Pokemon detail

2. The application should obtain the data from the https://pokeapi.co/ api

3. The landing page should:
    1. Present the user with a box to enter their trainer name
    2. Store the name locally
    3. Automatically log in the user on the next visit

4. The Trainer page should:
    1. Display all the pokemon the user have collected
    2. Display the pokemon with their avatar
    3. Route the user to the pokemon detail page when clicking on the pokemon card

5. The Catalogue page should:
    1. Present each pokemon in a *card style* presentation
    2. Route to the pokemon detail page when clicking on a pokemon card

6. The Detail page should:
    1. Display an image of the pokemon
    2. Display base stats and physical profile
    3. The pokemons moves
    4. Display a button for collecting the pokemons

7. The user should automatically be routed back to the login page if no Trainer name is present in local storage


## Available commands

### `npm install`

Installs the required dependencies

### `ng serve`

Navigate to [http://localhost:4200](http://localhost:4200/). The app will automatically reload if you change any of the source files.
