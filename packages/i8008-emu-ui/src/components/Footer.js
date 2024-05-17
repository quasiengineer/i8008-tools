import { Footer as BulmaFooter, Container, Content } from 'react-bulma-components';

function Footer() {
  return (
    <BulmaFooter>
      <Container>
        <Content style={{ textAlign: 'center' }}>
          <p>
            Mark,
            {' '}
            <a href="mailto:me@mark.engineer">me@mark.engineer</a>
          </p>
        </Content>
      </Container>
    </BulmaFooter>
  );
}

export default Footer;
