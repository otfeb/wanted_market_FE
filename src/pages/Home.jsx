import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main className="flex-grow">
                {children}
            </Main>
            <Footer />
        </div>
    )
};

export default Home;