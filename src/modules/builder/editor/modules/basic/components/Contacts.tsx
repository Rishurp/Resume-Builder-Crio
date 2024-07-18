// import React, { ChangeEvent, Fragment } from 'react';
// import TextField from '@mui/material/TextField';

// const Contacts = ({
//   basicTabs,
//   onChangeHandler,
// }: {
//   basicTabs: any;
//   onChangeHandler: (value: any, key: string) => void;
// }) => {
//   return (
//     <Fragment>
//       <TextField
//         label="Name"
//         variant="filled"
//         value={basicTabs.name}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onChangeHandler(event.target.value, 'name');
//         }}
//       />
//       {/* <TextField
//         label="Image URL"
//         variant="filled"
//         value={basicTabs.image}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onChangeHandler(event.target.value, 'image');
//         }}
//       /> */}
//       <TextField
//         label="Title"
//         variant="filled"
//         value={basicTabs.label}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onChangeHandler(event.target.value, 'label');
//         }}
//       />
//       <TextField
//         label="Email"
//         variant="filled"
//         value={basicTabs.email}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onChangeHandler(event.target.value, 'email');
//         }}
//       />
//       {/* <TextField
//         label="Website URL"
//         variant="filled"
//         value={basicTabs.url}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onChangeHandler(event.target.value, 'url');
//         }}
//       /> */}
//       <TextField
//         required
//         label="Phone"
//         variant="filled"
//         value={basicTabs.phone ?? 'null'}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onChangeHandler(event.target.value, 'phone');
//         }}
//       />
//       {/* <TextField
//         label="Location"
//         variant="filled"
//         value={basicTabs.location.city}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           const location = basicTabs.location;
//           location.city = event.target.value;
//           onChangeHandler(location, 'location');
//         }}
//       /> */}
//       {/* <TextField
//         label="Relevant Experience"
//         variant="filled"
//         value={basicTabs.relExp}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onChangeHandler(event.target.value, 'relExp');
//         }}
//       /> */}
//       {/* <TextField
//         label="Total Experience"
//         variant="filled"
//         value={basicTabs.totalExp}
//         onChange={(event: ChangeEvent<HTMLInputElement>) => {
//           onChangeHandler(event.target.value, 'totalExp');
//         }}
//       /> */}
//     </Fragment>
//   );
// };

// export default Contacts;


import React, { ChangeEvent, Fragment, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

const Contacts = ({
  basicTabs,
  onChangeHandler,
}: {
  basicTabs: any;
  onChangeHandler: (value: any, key: string) => void;
}) => {
  const [warnings, setWarnings] = useState({
    name: '',
    label: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    setWarnings({
      name: basicTabs.name ? '' : 'Name is required.',
      label: basicTabs.label ? '' : 'Title is required.',
      email: basicTabs.email ? '' : 'Email is required.',
      phone: basicTabs.phone ? '' : 'Phone is required.',
    });
  }, [basicTabs]);

  const handleInputChange = (value: any, key: string) => {
    onChangeHandler(value, key);
    if (value.trim() === '') {
      setWarnings((prev) => ({
        ...prev,
        [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`,
      }));
    } else {
      setWarnings((prev) => ({
        ...prev,
        [key]: '',
      }));
    }
  };

  return (
    <Fragment>
      <TextField
        label="Name"
        variant="filled"
        value={basicTabs.name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event.target.value, 'name');
        }}
        error={!!warnings.name}
        helperText={warnings.name}
      />
      <TextField
        label="Title"
        variant="filled"
        value={basicTabs.label}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event.target.value, 'label');
        }}
        error={!!warnings.label}
        helperText={warnings.label}
      />
      <TextField
        label="Email"
        variant="filled"
        value={basicTabs.email}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event.target.value, 'email');
        }}
        error={!!warnings.email}
        helperText={warnings.email}
      />
      <TextField
        required
        label="Phone"
        variant="filled"
        value={basicTabs.phone ?? ''}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          handleInputChange(event.target.value, 'phone');
        }}
        error={!!warnings.phone}
        helperText={warnings.phone}
      />
    </Fragment>
  );
};

export default Contacts;
