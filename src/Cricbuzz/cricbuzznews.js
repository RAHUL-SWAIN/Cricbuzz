import Second from "./Second";

function News({imgLink , heading , para , urlLink , urlText }){
    return(
        <div style={{border:"2px solid green", marginBottom:"24px", maxWidth:"800px", padding:"16px", display:"flex", flexDirection:"column",alignItems:"center"}}>
            <img src={imgLink} alt="" style={{width:"100%"}} />
            <h1>{heading}</h1>
            <p>{para}</p>
            <a href={urlLink}>{urlText}</a>

            <Second />
        </div>
    );
}
export default News;