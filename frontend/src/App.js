import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home";

function App() {
  return (
  <>
     <Header />
      <main className="py-3">
        <Container>
            
            <Home/>
        </Container>
        
      </main>
      <Footer />
  </>
  );
}

export default App;
