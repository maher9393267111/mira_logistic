import Link from "next/link";
import React from "react";

const PageTitle = (props) => {
  return (
    <section className="page-title arabic" style={{ backgroundImage: "url(/images/background/page-title.jpg)" }}>
      <div className="auto-container">
        <div className="title-outer text-center">
          <h1 className="title">{props.pageName}</h1>
          <ul className="page-breadcrumb">
            <li><Link href="/">Home</Link></li>
            <li>{props.pageName}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;