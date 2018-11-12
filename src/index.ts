
/* IMPORT */

import * as pushPlugin from 'autogit-plugin-push';

/* PULL */

type options = {
  remote: string,
  branch: string
};

function pull ( customOptions?: Partial<options> ) {

  return {
    description: 'Push to the remote',
    plugins: [
      pushPlugin ( customOptions )
    ]
  };

}

/* EXPORT */

export default pull;
