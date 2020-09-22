import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import tshirtimage from "../../assets/tshirt.png";
import SellerInfo from "../SellerInfo";
import ProductionAction from "../ProductionAction";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="Camiseta" src={tshirtimage} />
          </Gallery>

          <Info />
        </Column>
        <Column>
          <ProductionAction />
          <SellerInfo />
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o MercadoPago</p>
        <p className="description">
          Receba o produto que você está esperando ou devolvemos seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor nisi
      a tempor accumsan. Etiam tortor neque, efficitur nec erat non, tincidunt
      gravida lectus. Nunc ut dolor ac quam varius iaculis. Interdum et
      malesuada fames ac ante ipsum primis in faucibus. Curabitur semper id
      neque sit amet iaculis.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Aenean id augue at ipsum laoreet molestie quis sollicitudin sapien. Mauris
      in metus sed velit rutrum efficitur in ac neque. Cras eget aliquet neque.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Nam congue blandit purus id euismod. Etiam id dapibus
      purus, vel tincidunt lectus. Ut iaculis ac purus vitae sagittis. Aliquam
      erat volutpat. Suspendisse viverra pharetra facilisis. Vivamus posuere
      ligula id ex faucibus interdum ac ut nisi. Quisque malesuada nec purus non
      feugiat. Donec odio ligula, tristique ut fringilla eget, sollicitudin
      vulputate urna. Morbi vitae tristique sapien, eu maximus sem. Donec
      aliquet bibendum ultricies. Donec condimentum metus ac nisi tincidunt
      maximus. Quisque tincidunt dui quis rhoncus aliquet. Etiam vehicula mi a
      cursus porta. Pellentesque vulputate scelerisque ligula sed consectetur.
      Nam pulvinar a neque a rutrum. Duis eros purus, ultrices non interdum nec,
      suscipit a nisl.
    </p>
  </Description>
);

export default Product;
