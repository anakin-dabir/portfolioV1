// /components/Contact/Contact.tsx
// Saturday, September 30th 2023, 12:57 am

import {useState} from 'react';
import {useFormik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Divider,
  Button,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import ShortCenteredDivider from './ShortCenteredDivider';
import Link from './Link';
import EmailSuccessMessage from './EmailSuccessMessage';
import socialIcons from './constants/socialIcons';

interface ContactData {
  title: string;
  p1: string;
  p4: string;
  resumeLink: string;
  subtitle: string;
  formTitle: string;
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  messageLabel: string;
  placeholder: string;
  submitButton: string;
  requiredErrorMessage: string;
  invalidEmailErrorMessage: string;
}

interface ContactFormFields {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const Contact = ({contactData: t}: {contactData: ContactData}) => {
  const [displayMessage, setDisplayMessage] = useState(false);
  const [senderFirstName, setSenderFirstName] = useState('');

  const initialValues: ContactFormFields = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required(t.requiredErrorMessage),
    lastName: Yup.string().required(t.requiredErrorMessage),
    email: Yup.string().email(t.invalidEmailErrorMessage).required(t.requiredErrorMessage),
  });

  const onSubmit = async (
    values: ContactFormFields,
    onSubmitProps: FormikHelpers<ContactFormFields>
  ) => {
    setSenderFirstName(values.firstName);
    onSubmitProps.resetForm();
    setDisplayMessage(true);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const {errors, touched, values, handleChange, handleSubmit, getFieldProps} = formik;

  return (
    <Box component='section' id='contact' sx={{pb: 8, pt: 10}}>
      <Container maxWidth='sm'>
        <Typography gutterBottom align='center' component='h2' variant='h3'>
          {t.title}
        </Typography>
        <ShortCenteredDivider sx={{mb: 4}} />
        <Box sx={{display: 'flex', justifyContent: 'center', my: 2}}></Box>
        <Card sx={{mb: 4}}>
          <CardContent>
            <Typography color='textSecondary' component='p' variant='body2'>
              {t.p1}
              <Link href={t.resumeLink} rel='noopener' target='_blank'>
                fiverr
              </Link>
            </Typography>
          </CardContent>
          <Divider />
          <CardContent>
            <Typography
              gutterBottom
              align='center'
              color='textPrimary'
              component='p'
              variant='body1'
            >
              {t.subtitle}
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              {socialIcons.map(socialIcon => (
                <IconButton
                  key={socialIcon.label}
                  aria-label={socialIcon.label}
                  component='a'
                  href={socialIcon.href}
                  rel='noopener'
                  size='large'
                  sx={{
                    fill: theme => theme.palette.common.white,
                    '&:hover': {
                      fill: theme => theme.palette.primary.main,
                    },
                    '&:focus': {
                      fill: theme => theme.palette.primary.main,
                    },
                  }}
                  target='_blank'
                >
                  {socialIcon.icon}
                </IconButton>
              ))}
            </Box>
          </CardContent>
        </Card>
        <Typography align='center' component='h3' mb={2} variant='h4'>
          {t.formTitle}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={1}>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                autoComplete='given-name'
                color='primary'
                id='firstName'
                label={t.firstNameLabel}
                variant='outlined'
                {...getFieldProps('firstName')}
                error={Boolean(errors.firstName) && Boolean(touched.firstName)}
                helperText={touched.firstName && errors.firstName ? errors.firstName : ' '}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                autoComplete='family-name'
                color='primary'
                id='lastName'
                label={t.lastNameLabel}
                variant='outlined'
                {...getFieldProps('lastName')}
                error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                helperText={touched.lastName && errors.lastName ? errors.lastName : ' '}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                autoComplete='email'
                color='primary'
                id='email'
                label={t.emailLabel}
                variant='outlined'
                {...getFieldProps('email')}
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={touched.email && errors.email ? errors.email : ' '}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                autoComplete='message'
                color='primary'
                id='message'
                label={t.messageLabel}
                name='message'
                placeholder={t.placeholder}
                rows={5}
                type='message'
                value={values.message}
                variant='outlined'
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                color='primary'
                size='large'
                sx={{mt: 1}}
                type='submit'
                variant='contained'
              >
                {t.submitButton}
              </Button>
            </Grid>
          </Grid>
        </form>

        <EmailSuccessMessage
          displayMessage={displayMessage}
          senderFirstName={senderFirstName}
          setDisplayMessage={setDisplayMessage}
        />
      </Container>
    </Box>
  );
};

export default Contact;
