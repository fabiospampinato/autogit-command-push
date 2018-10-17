# Autogit Command - Push

A command for pushing to a remote.

## Install

```sh
npm install --save autogit-command-push
```

## Usage

#### Options

This command uses the following options object:

```js
{
  remote: 'origin', // The remote to push to
  branch: '' // The branch to push to, if not set the current branch will be used
}
```

#### Configuration

Add this command to your configuration:

```js
const push = require ( 'autogit-command-push' );

module.exports = {
  commands: {
    push: push ({ /* YOUR OPTIONS */ })
  }
}
```

#### CLI

Call it from the CLI with:

```sh
autogit push
```

## License

MIT © Fabio Spampinato
