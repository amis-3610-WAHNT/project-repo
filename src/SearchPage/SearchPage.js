import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchPage = () => {
  return (
    <MDBCol md="6" style={{padding: 0}}>
      <form className="form-inline">
        <MDBIcon icon="search" />
        <input className="form-control ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </MDBCol>
  );
}

export default SearchPage;