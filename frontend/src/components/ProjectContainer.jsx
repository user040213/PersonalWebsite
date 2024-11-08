import './ProjectContainer.css'


export const ProjectContainer = (props) => {
    return(
        <a href={props.ghLink}>
            <div className="main-container">
                <div className="title">
                    {props.title}
                </div>
                <img src={props.imageLink}/>
                <div className="descript">
                    {props.qDescript}
                </div>
            </div>
        </a>
    )
}