export default function SideBar(props){
    const {handleDisplayModal,data}=props;
    return(
        <>
        <div className="sidebar">
            <div className="bgOverlay"></div>
            <div className="sidebarContents">
                <div className="decriptionContent ">
                <h2>{data?.title}</h2>
                <p className="DescriptionTitle">{data?.date}</p>
                <p>{data?.explanation}</p>
                </div>
                <button onClick={handleDisplayModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
              
             
             </div> 
             
        </div>
         </>
    )
}