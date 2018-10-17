
/* IMPORT */

import * as pushPlugin from 'autogit-plugin-push';

/* PULL */

type options = {
  remote: string,
  branch: string
};

function pull ( customOptions?: Partial<options> ) {

  return {
    description: 'A command for pushing to a remote.',
    plugins: [
      pushPlugin ( customOptions )
    ]
  };

}

/* EXPORT */

export = Object.assign ( pull, { default: pull } );
