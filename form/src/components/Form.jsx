function Form() {
    return (
        <div className="p-6 bg-sky-200 border-2 border-solid border-sky-200 rounded-lg m-8">
                <h1 className="flex_center text-3xl font-semibold mt-5">SUBSCRIBE</h1>
                <h2 className="flex_center text-lg my-10 mb-8 tracking-wider">Sign up with your email address to receive news and updates.</h2>
                <div className="flex_center gap-3 mt-15">
                    <input type="text" id="fname" name="fname" placeholder="First name" className="input"></input>
                    <input type="text" id="lname" name="lname" placeholder="Last name" className="input"></input>
                    <input type="text" id="email" name="email" placeholder="Email" className="input"></input>
                </div>
                <button className="text-center block mx-auto bg-red-400 mt-8 py-2 px-30 cursor-pointer border-2 border-solid border-red-400 rounded-lg text-white">Subscribe</button>
        </div>
    );
}

export default Form;