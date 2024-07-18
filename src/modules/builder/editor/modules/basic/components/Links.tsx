// import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
// import TextField from '@mui/material/TextField';

// const SUPPORTED_NETWORKS = {
//   linkedin: 'linkedin',
//   twitter: 'twitter',
//   github: 'github',
//   hackerrank: 'hackerrank',
//   hackerearth: 'hackerearth',
//   codechef: 'codechef',
//   leetcode: 'leetcode',
// };

// interface IProfileNetwork {
//   network: string;
//   username: string;
//   url: string;
// }

// interface ISupportedNtwkDefaultState {
//   [key: string]: IProfileNetwork;
// }

// const SUPPORTED_NETWORK_DEFAULT_STATE: ISupportedNtwkDefaultState = {
//   linkedin: {
//     network: 'linkedin',
//     username: 'janedoe',
//     url: '',
//   },
//   twitter: {
//     network: 'twitter',
//     username: 'janedoe',
//     url: '',
//   },
//   github: {
//     network: 'github',
//     username: 'janedoe',
//     url: '',
//   },
//   hackerrank: {
//     network: 'hackerrank',
//     username: 'janedoe',
//     url: '',
//   },
//   hackerearth: {
//     network: 'hackerearth',
//     username: 'janedoe',
//     url: '',
//   },
//   codechef: {
//     network: 'codechef',
//     username: 'janedoe',
//     url: '',
//   },
//   leetcode: {
//     network: 'leetcode',
//     username: 'janedoe',
//     url: '',
//   },
// };

// const Links = ({
//   basicTabs,
//   onChangeHandler,
// }: {
//   basicTabs: any;
//   onChangeHandler: (value: any, key: string) => void;
// }) => {
//   const [networks, setNetworks] = useState(SUPPORTED_NETWORK_DEFAULT_STATE);

//   useEffect(() => {
//     const defaultNetworks = { ...SUPPORTED_NETWORK_DEFAULT_STATE };
//     Object.keys(SUPPORTED_NETWORKS).forEach((ntwk) => {
//       const matchedNetwork = basicTabs.profiles.find(
//         (profile: IProfileNetwork) => profile.network === ntwk
//       );
//       if (matchedNetwork) {
//         defaultNetworks[ntwk] = matchedNetwork;
//       }
//     });
//     setNetworks(defaultNetworks);
//     onChangeHandler(Object.values(defaultNetworks), 'profiles');
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const onURLChange = (value: string, network: string) => {
//     const profiles = basicTabs.profiles;
//     const matchedNetwork = profiles.find((profile: IProfileNetwork) => profile.network === network);
//     matchedNetwork.url = value;
//     onChangeHandler(profiles, 'profiles');
//   };

//   return (
//     <Fragment>
//       <TextField
//         label="LinkedIn"
//         variant="filled"
//         value={networks[SUPPORTED_NETWORKS.linkedin].url}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onURLChange(event.target.value, SUPPORTED_NETWORKS.linkedin);
//         }}
//       />
//       {/* <TextField
//         label="Twitter"
//         variant="filled"
//         value={networks[SUPPORTED_NETWORKS.twitter].url}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onURLChange(event.target.value, SUPPORTED_NETWORKS.twitter);
//         }}
//       /> */}
//       <TextField
//         label="Github"
//         variant="filled"
//         value={networks[SUPPORTED_NETWORKS.github].url}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onURLChange(event.target.value, SUPPORTED_NETWORKS.github);
//         }}
//       />
//       <TextField
//         label="Crio Portfolio"
//         variant="filled"
//         value={networks[SUPPORTED_NETWORKS.hackerrank].url}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onURLChange(event.target.value, SUPPORTED_NETWORKS.hackerrank);
//         }}
//       />
//       {/* <TextField
//         label="HackerEarth"
//         variant="filled"
//         value={networks[SUPPORTED_NETWORKS.hackerearth].url}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onURLChange(event.target.value, SUPPORTED_NETWORKS.hackerearth);
//         }}
//       /> */}
//       {/* <TextField
//         label="CodeChef"
//         variant="filled"
//         value={networks[SUPPORTED_NETWORKS.codechef].url}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onURLChange(event.target.value, SUPPORTED_NETWORKS.codechef);
//         }}
//       /> */}
//       {/* <TextField
//         label="Leetcode"
//         variant="filled"
//         value={networks[SUPPORTED_NETWORKS.leetcode].url}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onURLChange(event.target.value, SUPPORTED_NETWORKS.leetcode);
//         }}
//       /> */}
//     </Fragment>
//   );
// };

// export default Links;


import React, { ChangeEvent, Fragment, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';

const SUPPORTED_NETWORKS = {
  linkedin: 'linkedin',
  twitter: 'twitter',
  github: 'github',
  hackerrank: 'hackerrank',
  hackerearth: 'hackerearth',
  codechef: 'codechef',
  leetcode: 'leetcode',
};

interface IProfileNetwork {
  network: string;
  username: string;
  url: string;
}

interface ISupportedNtwkDefaultState {
  [key: string]: IProfileNetwork;
}

const SUPPORTED_NETWORK_DEFAULT_STATE: ISupportedNtwkDefaultState = {
  linkedin: {
    network: 'linkedin',
    username: 'janedoe',
    url: '',
  },
  twitter: {
    network: 'twitter',
    username: 'janedoe',
    url: '',
  },
  github: {
    network: 'github',
    username: 'janedoe',
    url: '',
  },
  hackerrank: {
    network: 'hackerrank',
    username: 'janedoe',
    url: '',
  },
  hackerearth: {
    network: 'hackerearth',
    username: 'janedoe',
    url: '',
  },
  codechef: {
    network: 'codechef',
    username: 'janedoe',
    url: '',
  },
  leetcode: {
    network: 'leetcode',
    username: 'janedoe',
    url: '',
  },
};

const Links = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  const [networks, setNetworks] = useState(SUPPORTED_NETWORK_DEFAULT_STATE);
  const [warnings, setWarnings] = useState({
    linkedin: networks[SUPPORTED_NETWORKS.linkedin].url,
    twitter: networks[SUPPORTED_NETWORKS.twitter].url,
    github: networks[SUPPORTED_NETWORKS.github].url,
    hackerrank: networks[SUPPORTED_NETWORKS.hackerrank].url,
    hackerearth: networks[SUPPORTED_NETWORKS.hackerearth].url,
    codechef: networks[SUPPORTED_NETWORKS.codechef].url,
    leetcode: networks[SUPPORTED_NETWORKS.leetcode].url,
  });

  useEffect(() => {
    const defaultNetworks = { ...SUPPORTED_NETWORK_DEFAULT_STATE };
    Object.keys(SUPPORTED_NETWORKS).forEach((ntwk) => {
      const matchedNetwork = basicTabs.profiles.find(
        (profile: IProfileNetwork) => profile.network === ntwk
      );
      if (matchedNetwork) {
        defaultNetworks[ntwk] = matchedNetwork;
      }
    });
    setNetworks(defaultNetworks);
    onChangeHandler(Object.values(defaultNetworks), 'profiles');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basicTabs]);

  const onURLChange = (value: string, network: string) => {
    const profiles = basicTabs.profiles;
    const matchedNetwork = profiles.find((profile: IProfileNetwork) => profile.network === network);
    matchedNetwork.url = value;
    onChangeHandler(profiles, 'profiles');
    if (value.trim() === '') {
      setWarnings((prev) => ({
        ...prev,
        [network]: 'URL is required.',
      }));
    } else {
      setWarnings((prev) => ({
        ...prev,
        [network]: '',
      }));
    }
  };

  return (
    <Fragment>
      <TextField
        label="LinkedIn"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.linkedin].url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.linkedin);
        }}
        error={!!warnings.linkedin}
        helperText={warnings.linkedin}
      />
      <TextField
        label="Github"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.github].url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.github);
        }}
        error={!!warnings.github}
        helperText={warnings.github}
      />
      <TextField
        label="Crio Portfolio"
        variant="filled"
        value={networks[SUPPORTED_NETWORKS.hackerrank].url}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onURLChange(event.target.value, SUPPORTED_NETWORKS.hackerrank);
        }}
        error={!!warnings.hackerrank}
        helperText={warnings.hackerrank}
      />
    </Fragment>
  );
};

export default Links;
