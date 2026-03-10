import "../assets/css/ArticlePages.css"
import Header from "../components/Header";

const PostgreSqlPage = () => {
  return (
    <div className="full-screen-page">
      <Header />
      <main className="page_main_allignment">
        <article>
        <h1 className="header-margin">PostgreSQL</h1>
        <p>
          Nunc aliquam, quam et semper lobortis, erat libero consectetur ligula,
          maximus lobortis dolor orci id tortor. Phasellus malesuada odio ut
          fringilla pellentesque. Donec rhoncus nunc nibh, eu finibus ante
          luctus a. Quisque molestie scelerisque enim, at iaculis nulla bibendum
          in. Mauris ullamcorper lacus varius neque convallis aliquam. Morbi vel
          nulla et odio faucibus auctor eu in augue. Aliquam sit amet leo eros.
          Aenean eu fringilla diam, sollicitudin elementum purus. Fusce
          vestibulum sapien neque, ut imperdiet metus volutpat eu. Duis
          efficitur eget elit ut tempus.
        </p>
        </article>
      </main>
    </div>
  );
};

export default PostgreSqlPage;
