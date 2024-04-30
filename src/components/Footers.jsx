import { Footer } from "flowbite-react";

const Footers = () => {
  return (
    <>
      <hr />
      <Footer className="px-5 md:container py-5 border-0 shadow-none overflow-hidden mx-auto">
        <div className="w-full text-center">
          <Footer.Copyright
            href="https://github.com/fadhilahhfdz"
            by="PokeBook - Fadhilah Hafidz Pradana"
            year={2024}
          />
        </div>
      </Footer>
    </>
  );
};

export default Footers;
