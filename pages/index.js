import HomeLanding from "../comps/HomeComps/Landing";
import Objectives from "../comps/HomeComps/objectives";
import Courses from "../comps/HomeComps/courses";
import Packages from "../comps/HomeComps/packages";
import MobileApp from "../comps/HomeComps/mobileApp/mobileApp";

export default function Home() {
  return (
    <>
      <HomeLanding />
      <Objectives />
      <Packages />
      <Courses />
      <MobileApp />
    </>
  );
}
