import { Section } from 'components/Section/Section';
import { ContentPageContainer } from './Home.module';

const Home = () => {
  return (
    <ContentPageContainer>
      <Section title="Welcome to ContactSync">
        <p style={{ textAlign: 'center', marginTop: 24 }}>
          This is phonebook app for your contacts.
        </p>
        <p style={{ textAlign: 'center' }}>
          Here you can log in and save the necessary numbers of people you need
          in your account.
        </p>
        <p style={{ textAlign: 'center' }}>
          You can register several times to create separate accounts that will
          store the phones of colleagues,friends or relatives separately.
        </p>
      </Section>
    </ContentPageContainer>
  );
};

export default Home;
