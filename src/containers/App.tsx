import AppRoutes from "./Routes";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
import Message from "../components/Message";

function App() {
    const message = useSelector((state: State) => state.generalReducer.message);
    const isLoading = useSelector(
        (state: State) => state.generalReducer.isLoading
    );

    return (
        <>
            <div className="container-md bd-layout">
                <Header />
                <div>
                    {message && (
                        <Message text={message.text} level={message.level} />
                    )}
                </div>
                <main className="" role="main">
                    {/* <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="border-dark-secondary">
                                <div className="p-0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

                    <div className="page-wrapper">
                        <div className="page-inner">
                            <div className="page-content-wrapper">
                                <div className="page-content">
                                    {isLoading ? <Spinner /> : null}
                                    <AppRoutes />
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;
