import { AuthItem } from 'components/AuthNav/AuthNav.styled';
import { Title, Paragraph, Info, InfoLink } from 'components/App.styled';
import { useAuth } from 'hooks/useAuth';

export const HomePage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Title>Phonebook application</Title>
      <Paragraph>A simple phone book with integrated keyword search.</Paragraph>
      {!isLoggedIn && (
        <Paragraph>
          To use the application, you need to{' '}
          <AuthItem to={'/register'}>Sign up</AuthItem> or{' '}
          <AuthItem to={'/login'}>Sign in</AuthItem>
        </Paragraph>
      )}

      <Info>
        Created by{' '}
        <InfoLink
          href="https://www.linkedin.com/in/dmitriy-alyoshin/"
          target="_blank"
          rel="noreferrer"
        >
          D.A.
        </InfoLink>
      </Info>
    </>
  );
};
