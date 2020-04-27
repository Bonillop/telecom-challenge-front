import React from 'react';

const PageContent = props => {

  let content =
    (
      <div className="wrapper">
        {props.children}
      </div>
    );

  return content;
}

export default PageContent;