import user from "../assets/user.png";

function WebPage() {
    return (
        <div className="h-screen flex flex-col justify-between">
            <header className="bg-cyan-400 padding_left_55 py-5">
                <h1 className="text-5xl tracking-wider pb-5">Welcome to 30 Days Of React</h1>
                <h2 className="two_xl_text">Getting Started React</h2>
                <h3 className="text-xl">JavaScript Library</h3>
                <h4 className="large_text">Benas Orantas</h4>
                <h5>Oct 3, 2026</h5>
            </header>
            <main>
                <article className="padding_left_55 pt-5">
                    <h4 className="large_text">Prerequisite to get started react.js:</h4>
                    <div className="pl-4">
                    <h4 className="large_text">HTML</h4>
                    <h4 className="large_text">CSS</h4>
                    <h4 className="large_text">JavaScript</h4>
                    </div>
                    <img src={user} alt="empty user icon" className="w-3xs h-61"/>
                    <h2 className="two_xl_text pl-13">Benas Orantas</h2>
                </article>
            </main>
            <footer className="bg-sky-300 flex justify-center"><p>Copyright 2026</p></footer>
        </div>
    );
}

export default WebPage;