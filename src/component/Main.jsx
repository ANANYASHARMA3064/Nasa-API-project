export default function Main(props){
    const{data}=props 

    return (
        <>
          <div className="imgContainer">
            {data?.media_type === "video" ? (
              <iframe
                className="media"
                src={`${data?.url}&autoplay=1&mute=1&loop=1&playlist=${data?.url.split('/').pop().split('?')[0]}`}
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            ) : (
              <img src={data?.hdurl} className="image" alt="Astronomy Picture of the Day" />
            )}
          </div>
        </>
      );
}