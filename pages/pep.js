import PepLandingPage from "../comps/pep/landing/Landing";
import MobileApp from "../comps/HomeComps/mobileApp/mobileApp";
import Objectives from "../comps/pep/objectives";
import GuideComps from "../comps/pep/guide";

export default function Home() {
  return (
    <div className="pep_page">
      <PepLandingPage />
      <Objectives />
      <GuideComps />
      <MobileApp />
    </div>
  );
}
