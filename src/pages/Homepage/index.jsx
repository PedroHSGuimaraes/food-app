import { AboutSection } from "../../components/AboutSection";
import { Footer } from "../../components/Footer";
import { FormSection } from "../../components/FormSection";
import { Header } from "../../components/Header";

export const Homepage = () => {
  return (
    <>
      <main>
        <Header />
        <main>
          <AboutSection />
          <FormSection />
        </main>
        <Footer />
      </main>
    </>
  );
};
