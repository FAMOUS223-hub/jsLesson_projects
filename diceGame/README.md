# Dice Game

A two-player dice game built with HTML, CSS, and vanilla JavaScript. Each round rolls one die for Player 1 and Player 2, then displays the winner or a draw.

## How to Run

Open `/` in a web browser. No build tools or dependencies are required.

## How to Play

1. Click **Play Now** to roll both dice.
2. The higher roll wins the round.
3. The scores and draw count are kept in `localStorage`, so they remain after refreshing the page.
4. Click **Reset Scores** to clear the displayed scores and saved game data.

## Project Files

- `/` - Page structure and game controls.
- `app.js` - Dice rolls, winner selection, score handling, and local storage.
- `script.js` - A separate JavaScript constructor example for creating bell boy objects; it is not loaded by the page.
- `styles.css` - Layout, typography, colors, and button styles.
- `img/` - Dice face images used by the game.

## Notes

The game currently uses browser `localStorage`, so scores are saved only in the current browser profile. The initial HTML shows blank score fields until the first round or a reset is performed.
