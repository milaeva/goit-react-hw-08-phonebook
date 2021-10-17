import PropTypes from 'prop-types';
import s from './Section.module.css';
import Container from 'components/Container';

const Section = ({ nameForClass, children }) => (
  <section className={s[`${nameForClass}`]}>
    <Container>{children}</Container>
  </section>
);

export default Section;

Section.propTypes = {
  nameForClass: PropTypes.string.isRequired,
};
