import { Typography, styled } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../Button/Button';
import { useState, useCallback } from 'react';

const StyledTextField = styled(TextField)(() => ({
  '& .MuiTextField-root': {
    color: 'rgba(169, 110, 111, 1)',
    backgroundColor: 'rgba(186, 122, 122, 0.3)',
  },
  '& .MuiInputBase-root': {
    color: 'rgba(169, 110, 111, 1)',
    '&::before': {
      border: 'none',

    },
  },

  '& .MuiFilledInput-root': {
    border: 'none',

    '&:hover': {
    },
  },
  '& .MuiInputLabel-root': {
    border: 'none',
    color: 'rgba(169, 110, 111, 1)',
    '&:hover': {
      color: 'rgba(169, 110, 111, 1)',
    },

    '&.MuiInputLabel-shrink': {
      border: 'none',

      color: 'rgba(169, 110, 111, 1)',
    },
  },
  '& .MuiSvgIcon-root': {
    border: 'none',

    color: 'rgba(169, 110, 111, 1)',
  },
}));

export default function BasicTextFields() {

  const [statusMessage, setStatusMessage] = useState({ message: '', isError: false });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const nom = event.target.nom.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();

    if (!nom || !email || !message) {
      setStatusMessage({ message: 'Message non envoyé, veuillez remplir tous les champs.', isError: true });
    } else {
      console.log("Envoi d'un email à elisabethcoaching@hotmail.com");
      setStatusMessage({ message: 'Message envoyé !', isError: false });
    }
  }, []);

  return (
    <>
      <Box
        component="form"
        onSubmit={handleSubmit}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& > :not(style)': { borderRadius: '10px', my: 1, mx: 'auto', backgroundColor: 'rgba(186, 122, 122, 0.3)', width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >

        <StyledTextField
          id="nom"
          name="nom"
          label="Nom"
          variant="filled"
          color='secondary'
          required
        />
        <StyledTextField
          id="email"
          name="email"
          label="Email"
          variant="filled"
          color='secondary'
          required
        />
        <StyledTextField
          id="message"
          name="message"
          label="Message"
          variant="filled"
          color='secondary'
          multiline
          rows={4}
          required
        />
        <Button type="submit" couleur={' text-first-1000 w-full '} texte={"Envoyer"} />
      </Box>
      {statusMessage.isError === false && (
        <Typography
        variant="h6"
        sx={{ textAlign: 'center', fontSize: '0.8rem', width: '10rem', mx: 'auto' }}>
        {statusMessage.message}
      </Typography>
      )}
      {statusMessage.isError && (
        <Typography
        variant="h6"
        sx={{ textAlign: 'center', fontSize: '0.8rem', width: '10rem', mx: 'auto' }}>
        {statusMessage.message}
      </Typography>
      )}
    </>
  );
}
