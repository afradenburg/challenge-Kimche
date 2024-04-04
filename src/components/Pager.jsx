import React from "react";
import { Header } from "../styledComponents/headerStyled";
import { CloseButton } from "../styledComponents/cardStyled";


export default function Pager({ infoPage, searchTerm, setSearchTerm }) {
  const { pages } = infoPage;

  const handlePage = (value) => {
    if (value >= 1 && value <= pages)
      setSearchTerm({ ...searchTerm, page: value });
  };

  return (
    <Header style={{backgroundColor: "white"}}>
      {(searchTerm.page - 1) !== 0 ? (
        <CloseButton onClick={() => handlePage(searchTerm.page - 1)}>Prev</CloseButton>
        ) : (
        <CloseButton style={{backgroundColor: "gray"}} disabled>Prev</CloseButton>
        )}
      <p>Page: {`${searchTerm.page} / ${pages || "1"}`}</p>
      {(searchTerm.page + 1) <= pages ? (
        <CloseButton onClick={() => handlePage(searchTerm.page + 1)}>Next</CloseButton>
        ) : (
        <CloseButton style={{backgroundColor: "gray"}} disabled>Next</CloseButton>
      )}
    </Header>
  );
}
