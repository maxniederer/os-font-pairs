import { useParams, useSearchParams } from "react-router";

import Footer from "../components/Footer";
import Header from "../components/Header";

function PairSpecimenPage() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <Header />
      <main className="padding">
        <h1>Pair Specimen Page</h1>
      </main>
      <Footer />
    </>
  );
}

export default PairSpecimenPage;
