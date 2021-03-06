import React from "react";
import NavBar from "../components/navbar/navbar";
import PageContent from "../components/pageContent/pageContent"

const PageHome = () => {

  let content =
    (
      <React.Fragment>
        <NavBar/>
        <PageContent>
          <p>Bienvenido a Climapp, la aplicacion que te permite consultar el estado del clima en cualquier ciudad del mundo</p>
        </PageContent>
      </React.Fragment>
    );

  return content;
}

export default PageHome;
