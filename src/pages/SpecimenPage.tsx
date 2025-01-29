import { useParams, useSearchParams } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";

function SpecimenPage() {
  const params = useParams();

  return (
    <>
      <Header />
      <main className="padding">
        <h1>Specimen</h1>
        <p>{params.fontId}</p>
      </main>
      <Footer />
    </>
  );
}

export default SpecimenPage;
