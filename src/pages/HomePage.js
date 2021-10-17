import Section from 'components/Section';
import Container from 'components/Container';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Section nameForClass={'section'}>
        <Container>
          <p className={s.title}>Welcome in your Phonebook</p>
        </Container>
      </Section>
    </>
  );
};

export default HomePage;
