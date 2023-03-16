import surfing from "./images/surfin.gif";
const Loading = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img  src={surfing} alt="surfinglogo" width={300}/>
                    <h3>Cargando...</h3>
                </div>
            </div>
        </div>
    )
}

export default Loading;