# GamePage Front End
![GitHub repo size](https://img.shields.io/github/repo-size/karsonkalt/gamepage_front_end)
![GitHub last commit](https://img.shields.io/github/last-commit/karsonkalt/gamepage_front_end)
![Twitter Follow](https://img.shields.io/twitter/follow/karsonkalt?style=social)

<!-- Houseplant helper is a Ruby on Rails web application used to track how often you water your houseplants, keep notes on how they are doing, and get tips on how to take care of your plants. A user can create plants which also belong to a species and edit data that belongs to the logged_in user. -->


## Architecture and models

<!-- Houseplant helper consists of four basic models -- Species, Users, Plants, and Waterings. Plants belong to a Species and a User, and have attributes of their own such as a nickname and water_frequency. Species are pre-loaded into the database on the backend. Users can sign up and login through third party authentication or with their own username and password.

The database is managed through ActiveRecord and layer on ruby methods for additional funcitonality. For example, an instance of Plant can call the method needs_to_be_watered? which will query the database for the most recent watering and return true or false if it has been more than it's water_frequency. -->


## Development

<!-- To get started with Houseplant Helper, run `bundle` from the command line to install all necessary gems. After dependencies have been installed run `rails db:reset` to run the db migrations and seed the database, then run `rails s` from the console to start serving the site to `http://localhost:3000/`. You can then log in with your own information or view a seed account by viewing the User database and selecting a User email and entering the seed password `password`. -->


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