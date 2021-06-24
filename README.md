# GamePage Front End
![GitHub repo size](https://img.shields.io/github/repo-size/karsonkalt/gamepage_front_end)
![GitHub last commit](https://img.shields.io/github/last-commit/karsonkalt/gamepage_front_end)
![Twitter Follow](https://img.shields.io/twitter/follow/karsonkalt?style=social)

![Gif of GamePage being rendered in a browser](https://github.com/karsonkalt/gamepage_front_end/README_assets/overview.gif)

GamePage is a web app built in Rails and JavaScript that lets two players play the classic board game "Reversi" aka "Othello". The basic premise of the game is to place tokens on the board. When placing a token, you attempt to also swap any opponent's tokens that lay between your placed token and your other tokens with your own.

Players take turns placing tokens, until the entire board is filled. At the end of the game, the player with the highest amount of tokens on the board wins. Watch Triple S's video ["How to Play Othello"](https://www.youtube.com/watch?v=xDnYEOsjZnM&ab_channel=TripleSGames) to learn more.

Once a player wins a game, their score is recorded to the database and the players have the options of playing again.

GamePage is split into two repositories, front end and back end:
- Frontend: [github.com/karsonkalt/gamepage_front_end](https://github.com/karsonkalt/gamepage_front_end)
- Backend: [github.com/karsonkalt/gamepage_back_end](https://github.com/karsonkalt/gamepage_back_end)


## Installation & Usage
1. Fork and clone this repository and the [GamePage Backend repository](https://github.com/karsonkalt/gamepage_back_end)
2. `cd` into your local backend repository and run `bundle`
3. Run rails migrations by running `rails db:migrate`
4. Run the seed file by running `rails db:seed`
5. Serve the rails backend by running `rails s`
6. If you have changed the localhost, open `global.js` inside the front end directory and update the root variable.
7. Open `index.html` in your browser.


## Architecture
GamePage front end is divided up into two directories, components and services. The components directory contains classes for each major component of the front end: Game, Menu, Messenger, Score, Session, and User. The services directory contains the API fetch calls that GET and POST to the rails server: GameAPI, ScoreAPI, SessionAPI, and UserAPI.

The backend is managed through rails MVC architecture and renders JSON. The database is managed through ActiveRecord and layers on ruby models with instance methods for additional funcitonality.


## Dependencies
- [GamePage Backend](https://github.com/karsonkalt/gamepage_back_end) ![GitHub last commit](https://img.shields.io/github/last-commit/karsonkalt/gamepage_back_end)
- [othello_ruby](https://rubygems.org/gems/othello_ruby/versions/0.1.0) [![Gem Version](https://badge.fury.io/rb/othello_ruby.svg)](https://badge.fury.io/rb/othello_ruby)
- [hashdiff](https://rubygems.org/gems/hashdiff) [![Gem Version](https://badge.fury.io/rb/hashdiff.svg)](https://badge.fury.io/rb/hashdiff)


## Contributing to GamePage
To contribute to GamePage, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


## Contributors
This project was created by [@karsonkalt](https://github.com/karsonkalt) as a student of [Flatiron School Software Engineering](https://flatironschool.com/)


## Contact
If you want to contact me you can reach me on Twitter at [@karsonkalt](http://www.twitter.com/karsonkalt)


## Licensed with BSD 2-Clause “Simplified” License
BSD 2-Clause License

Copyright (c) [2021], [karsonkalt]
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT 