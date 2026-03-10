import "../assets/css/ArticlePages.css"
import Header from "../components/Header";

const ReactPage = () => {
  return (
    <div className="full-screen-page">
      <Header />
      <main className="page_main_allignment">
        <article>
        <h1 className="header-margin">React</h1>
        <p>
          Integer fringilla pulvinar lobortis. Nullam placerat ipsum a vulputate
          mattis. Integer id risus eros. Aliquam erat volutpat. Curabitur
          pulvinar auctor dolor at gravida. In metus arcu, eleifend sed odio
          interdum, scelerisque efficitur arcu. Integer tempor risus metus, in
          imperdiet diam molestie eu. Nunc mattis nibh metus, luctus pulvinar
          mauris viverra vitae. Nunc bibendum purus non aliquet egestas. Etiam
          vel congue enim. Pellentesque non vestibulum sem. Nam accumsan eros
          sit amet metus lacinia auctor. In maximus metus sed mauris rhoncus,
          non sollicitudin velit pharetra. Nulla vitae lorem porttitor, congue
          purus quis, dapibus odio.
        </p>
        </article>
      </main>
    </div>
  );
};

export default ReactPage;
