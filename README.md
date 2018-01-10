## Getting Setup

1. Clone this repo.
2. Initialize via [Composer](https://getcomposer.org/), `composer install`
3. Install [node.js](https://nodejs.org/) if you don't already have it.
4. Install [Yarn](https://yarnpkg.com/en/), then add dependencies via `yarn install.
5. Customize your database settings in `wp-config-local.php`

Recommended localhost domain is: `www.bubs.dev`

Note that you must use Yarn, and not NPM to manage client-side dependencies. This is because certain libraries which formerly used bower aren't in NPM, and only Yarn can install packages from any github repo.

## Setting up the theme

The default setup has two commands:

* `gulp` -- starts a dev task with dev versions of assets, and live reloading via BrowserSync and watch
* `gulp release` -- builds production versions of all assets, including asset-hashed files

All assets are stored in `wp-content/themes/timber`.

## Deploying

The `_build` folder has our deploy scripts:

* to manually deploy to staging from your current branch, run `./_build/deploy.sh staging`
* to manually deploy to production from your current branch, run `./_build/deploy.sh production`

## Based on Bubs

This project is based on [Bubs](https://github.com/patronage/bubs-wp/) by [Patronage](http://www.patronage.org/studio).

For more docs on getting started with local hosting, multi-site, etc. visit the wiki:
https://github.com/patronage/bubs-wp/wiki
