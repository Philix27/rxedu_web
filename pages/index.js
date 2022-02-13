import {HomeLanding} from '../comps/HomeComps/Landing/Landing'
import About from '../comps/HomeComps/AboutUs/About'
import Objectives from '../comps/HomeComps/objectives/objectives'
import Projects from '../comps/HomeComps/projects/projects'
import Products from '../comps/HomeComps/products/products'
import MobileApp from '../comps/HomeComps/mobileApp/mobileApp'

  
export default function Home() {
  return (
    < >    
      <HomeLanding />
      <Objectives/>
      <Products />
      <Projects />
      <MobileApp/>
      {/* <About/> */}
    </>
  )
}
