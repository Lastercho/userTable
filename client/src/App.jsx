import {useState} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <>
                {/* Header component */}
                <Header/>
                {/* Main component  */}
                <Main/>
                {/* Footer component  */}
                <Footer/>
            </>


        </>
    )
}

export default App
