import React, { useState } from "react";
import NavBar from "../components/navbar/navbar";
import PageContent from "../components/pageContent/pageContent"

import history from "../utils/history";

const PageAbout = () => {

  let content =
    (
      <React.Fragment>
        <NavBar/>
        <PageContent>
          <p>Esta aplicacion fue desarrollada por Pablo Bonillo</p>
        </PageContent>
      </React.Fragment>
    );

  return content;
}

export default PageAbout;
