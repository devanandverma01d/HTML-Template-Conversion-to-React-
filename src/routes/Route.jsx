import About from '../pages/About'
import WhatWeDoComp from '../pages/WhatWeDo'
import Blog from '../pages/Blog'
import ContactUs from '../pages/ContactUs'


export const routes = [
    {path:"/about", element:<About/>},
    {path:"/whatwedo", element:<WhatWeDoComp/>},
    {path:"/blog", element:<Blog/>},
    {path:"/contact", element:<ContactUs/>},
]