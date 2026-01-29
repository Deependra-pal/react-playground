import React from 'react' 

const Card = (props) => {
    console.log(props);
    
  return (

    <div className='card'>
     <div className="image">
          <img src={props.user.image}alt="" /> 
        </div>   
        <div className="bottom">
             <h3> {props.user.name} <span><i class="ri-verified-badge-line"></i> </span> </h3> 
                
                  
             <p>{props.user.profession}</p>  
        </div>

        <div className="icon">
             <div className="contact">
                 <i class="ri-user-fill"></i>
                 <p>{props.user.followers}</p>
                </div>
            <div className="projects">
                    <i class="ri-checkbox-multiple-line"></i> <p>{props.user.projects}</p>
                    </div>
            <button>Follow <i class="ri-add-line"></i> </button>
        </div>
    </div>
  )
}

export default Card
