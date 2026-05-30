# Coin Flip Game

<p align="center">
	<img src="https://capsule-render.vercel.app/api?type=waving&height=140&color=0:0f172a,100:06b6d4&text=Coin%20Flip%20Game&fontColor=ffffff&fontAlign=50&fontSize=34" alt="Coin Flip Game banner" />
</p>

<p align="center">
	<a href="https://github.com/Chukwu12/Coin-flip"><img src="https://img.shields.io/github/stars/Chukwu12/Coin-flip?style=for-the-badge&logo=github&label=Stars" alt="GitHub Stars" /></a>
	<a href="https://github.com/Chukwu12/Coin-flip/network/members"><img src="https://img.shields.io/github/forks/Chukwu12/Coin-flip?style=for-the-badge&logo=github&label=Forks" alt="GitHub Forks" /></a>
	<a href="https://github.com/Chukwu12/Coin-flip/issues"><img src="https://img.shields.io/github/issues/Chukwu12/Coin-flip?style=for-the-badge&logo=github&label=Issues" alt="GitHub Issues" /></a>
</p>

<p align="center">
	<img src="https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
	<img src="https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white" alt="Express" />
	<img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-f59e0b?style=flat-square" alt="Frontend" />
	<img src="https://img.shields.io/badge/License-ISC-2563eb?style=flat-square" alt="ISC License" />
	<img src="https://img.shields.io/badge/Status-Active-16a34a?style=flat-square" alt="Status Active" />
</p>

Server-powered coin toss game with a simple arcade feel. Click once, get an instant result from the backend, and keep flipping.

## About

This project is a lightweight full-stack web app:

- The frontend sends a flip request.
- The Express server computes the random result.
- The UI updates with heads or tails.

The result logic lives on the server side, making each toss independent from browser state.

## Feature Set

- Fast one-click gameplay loop.
- Backend-generated random outcomes.
- Clean static asset structure for easy maintenance.
- Quick local run with minimal setup.

## Stack

- Runtime: Node.js
- Server: Express
- Client: HTML, CSS, JavaScript
- Demo Hosting: Netlify

## Quick Start

```bash
git clone https://github.com/Chukwu12/Coin-flip.git
cd Coin-flip
npm install
node server.js
```

Open:

```text
http://localhost:3000
```

## Gameplay

1. Open the app in your browser.
2. Press the Flip Coin button.
3. See the server-generated heads or tails result.

## Live Demo

https://naija-coinflip.netlify.app

## Project Layout

```text
.
|- index.html
|- server.js
|- package.json
|- css/
|  |- style.css
|- js/
|  |- main.js
|- images/
```

## Roadmap

- [ ] Add heads/tails statistics tracker. (in progress)
- [ ] Add flip history panel (last 10 results). (in progress)
- [ ] Add keyboard support for flipping (space/enter).
- [ ] Add basic automated tests for API response.
- [ ] Add simple flip animation improvements.
- [ ] Add optional coin flip sound effects.
- [ ] Add Docker setup for one-command deployment.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a branch for your change.
3. Commit your update.
4. Open a pull request.

For major updates, open an issue first to discuss the proposal.










