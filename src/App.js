
import { routes } from "./routes/Route";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PageNotFound from "./pages/PageNotFound";
import { Routes,Route} from 'react-router-dom'


function App() {
  return (
    <>
      
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          {
            routes.map((cv,idx)=>{
              return <Route key={idx} path={cv.path} element={cv.element} />
              })
          }
          
        </Route>
        <Route path="*" element={<PageNotFound />} />
        
      </Routes>
      
    </>
  );
}

export default App;
