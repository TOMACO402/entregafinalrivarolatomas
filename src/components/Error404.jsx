import patineta from "./images/broken.gif";

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    
                    <h1 className="itemnombre m-5">Error 404!</h1>
                    <h2>La página que estás buscando no existe!</h2>
                    <p><img src={patineta} alt="patineta" width={"300"} /></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;