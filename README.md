# Skeletor
Welcome to Skeletor (Hue, hue, hue!). The most manual, and badass, way to get started with a new Drupal 8 project.

## Installation
When starting a new project you''ll have to manually do the following:

1. Install a new project with [Drupal Project](https://github.com/drupal-composer/drupal-project) `composer create-project drupal-composer/drupal-project:8.x-dev some-dir --stability dev --no-interaction`.

2. Copy the directories from this project inside the new root of your new Drupal Project, project _(this `README.md` file is the only one that will cause any merge conflicts but there is no actual need to move this file - the rest of the files/directories have community approved, awesome, non-conflict names. Buzz, buzz, buzz!)_.

3. Go to the `docker-composer.yml` file and delete any unwanted services.

4. Copy a Docker specific `settings.php` and `services.yml` file to `./docker/web/sites/default/`.

5. _**Profit...**_

![](https://media2.giphy.com/media/dcWd8Q1zVA1YA/giphy.gif)
