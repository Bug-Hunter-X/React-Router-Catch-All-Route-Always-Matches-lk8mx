```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route now works correctly because the catch-all route is at the end */}
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route must be the last one to work correctly */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact(){
  return <h1>Contact</h1>;
}

function NotFound() {
  return <h1>Not Found</h1>;
}
export default App;
```