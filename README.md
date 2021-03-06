## Getting Setup

1. Clone this repo.
2. Initialize via [Composer](https://getcomposer.org/), `composer install`
3. Install [node.js](https://nodejs.org/) if you don't already have it.
4. Install [Yarn](https://yarnpkg.com/en/), then add dependencies via `yarn add`.
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

During the deploy process `gulp release` will run using JSHint which will alert you in the terminal for any warnings/errors. We are only looking at js files in the `build:js` block of `layout.twig` and we have it set to skip any `/vendor` js files.

Gulp will fail if there are any warnings/errors, some of which you may want to ignore which you can do with the following comments:

```
A directive for telling JSHint to ignore a block of code.

// Code here will be linted with JSHint.
/* jshint ignore:start */
// Code here will be ignored by JSHint.
/* jshint ignore:end */

All code in between ignore:start and ignore:end won't be passed to JSHint so you can use any language extension such as Facebook React. Additionally, you can ignore a single line with a trailing comment:

ignoreThis(); // jshint ignore:line
```

You can read more about [JSHint here](https://jshint.com/docs/)

## Auto Deployment to WP Engine via Github Actions
We've included a Github Action (in the `.github/` folder) which can be used to deploy your site to WP Engine after deploying some changes to the `master` branch on Github. JS and SCSS assets are built using `gulp`, and everything deploys as it would if you ran `sh _build/deploy.sh`. The Github action deploy is optional and can be removed if you are not using WP Engine or do not want your site to automatically deploy.

In order to setup, a SSH key needs to be created and the private & public keys need to be set inside the Secrets section of your Github repo's settings. They should be called `WPENGINE_SSH_KEY_PUBLIC` and `WPENGINE_SSH_KEY_PRIVATE`. The same public key in `WPENGINE_SSH_KEY_PUBLIC` needs to be set inside inside the WP Engine environment in order to deploy.

You'll also want to setup a Slack webhook URL and set it as the `SLACK_WEBHOOK` environment variable. You will get deployment updates for both success and failure.

In our usage, we've found that a moderately complex site can deploy to WP Engine within 3-4 minutes of pushing code to Github.

## Based on Bubs

This project is based on [Bubs](https://github.com/patronage/bubs-wp/) by [Patronage](http://www.patronage.org/studio).

For more docs on getting started with local hosting, multi-site, etc. visit the wiki:
https://github.com/patronage/bubs-wp/wiki
