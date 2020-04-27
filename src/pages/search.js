import React, { useState } from "react";
import NavBar from "../components/navbar/navbar";
import SearchForm from "../components/searchForm/searchForm";
import PageContent from "../components/pageContent/pageContent";

import history from "../utils/history";

const PageSearch = () => {

  let content =
    (
      <React.Fragment>
        <NavBar />
        <PageContent>
          <SearchForm />
        </PageContent>
      </React.Fragment>
    );

  return content;
}

export default PageSearch;
