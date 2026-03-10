import "../assets/css/ArticlePages.css"
import Header from "../components/Header";


const JsPage = () => {
  return (
    <div className="full-screen-page">
      <Header/>
      <main className="page_main_allignment">
        <article>
        <h1 className="header-margin">JS</h1>
        <p>
          Donec non viverra arcu. Etiam ac elit libero. Pellentesque sed neque
          aliquet, rhoncus nibh ac, dignissim urna. Proin convallis, augue eget
          scelerisque bibendum, tellus est eleifend ligula, in tincidunt enim
          nisl id augue. Nam fringilla quam ac mi condimentum, ornare tincidunt
          ante consectetur. Suspendisse fringilla, odio id tincidunt ornare,
          ipsum felis gravida mauris, ac luctus turpis ligula sed ante. Nullam
          sit amet nisl eleifend, sollicitudin leo quis, dictum ex. Mauris
          tempor, nibh eget interdum porttitor, dolor tellus pretium lectus, ac
          finibus ex velit non massa. Maecenas sem nunc, luctus sed tempus at,
          sodales sed nisi. Pellentesque non cursus turpis, vel ullamcorper
          arcu. Phasellus pharetra, turpis id efficitur pulvinar, tellus nibh
          elementum elit, vitae eleifend massa libero non diam. Quisque viverra
          consequat facilisis. Nulla justo arcu, interdum eget sem vel, ultrices
          efficitur est. Nullam ultrices eu erat viverra euismod. Quisque
          convallis tempor nisl quis venenatis. Pellentesque in consectetur
          felis, sed posuere purus. Quisque commodo luctus leo et rutrum.
        </p>
        </article>
      </main>
    </div>
  );
};

export default JsPage;
