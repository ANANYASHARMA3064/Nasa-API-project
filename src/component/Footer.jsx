export default function Footer(props){
    const{showModal,handleDisplayModal,data}=props;
            // optional conditioning:?. = "If the left side exists, return the next thing. Otherwise, return undefined

    return(<>

    <footer>
        
       
        <h1>Apod project</h1>
        <h2>{data?.title}</h2>
        <div id="bgGradient"></div>
        <button onClick={handleDisplayModal}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
    
    </>)
}