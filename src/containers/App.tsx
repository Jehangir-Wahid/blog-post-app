import AppRoutes from "./Routes";
import Header from "../components/LayoutComponents/Header";
import Footer from "../components/LayoutComponents/Footer";
import Spinner from "../components/LayoutComponents/Spinner";
import { useSelector } from "react-redux";
import { State } from "../redux/reducers";
import Message from "../components/LayoutComponents/Message";
import { IsLoadingType } from "../redux/types";

function App() {
    const message = useSelector((state: State) => state.generalReducer.message);
    const isLoading: IsLoadingType = useSelector(
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
