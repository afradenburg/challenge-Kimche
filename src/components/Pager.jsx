import React from "react";


export default function Pager({ infoPage, searchTerm, setSearchTerm }) {
  const { pages } = infoPage;

  const handlePage = (value) => {
    if (value >= 1 && value <= pages)
      setSearchTerm({ ...searchTerm, page: value });
  };

  return (
    <div className="">
      {(searchTerm.page - 1) !== 0 ? (
        <button onClick={() => handlePage(searchTerm.page - 1)}>Prev</button>
        ) : (
        <button disabled>Prev</button>
        )}
      <p>Page: {`${searchTerm.page} / ${pages}`}</p>
      {(searchTerm.page + 1) <= pages ? (
        <button onClick={() => handlePage(searchTerm.page + 1)}>Next</button>
        ) : (
        <button disabled>Next</button>
      )}
    </div>
  );
}
