import PropTypes from 'prop-types';
function Descreption (props) {
    
    return (
        <div style={{color: "red", textAlign: "center"}}>
           <h1> {props.name}</h1>
           <h2>  {props.bio}</h2>
           <h2>   {props.profession}</h2>  
           {props.children}
           <button onClick={()=>props.handleName(props.name)} className="Button"> click me</button>
        </div>
    )
}
Descreption.defaultProps={
name:"nadd",bio:"student"

}
Descreption.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    
    handleName: PropTypes.func,
}

export default Descreption 