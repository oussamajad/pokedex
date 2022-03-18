import { left } from "@popperjs/core"
import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/profile.jpg'

function Card({ label, title, picture }) {
    return (


                <div class="card" style={{width:300,marginBottom:10,marginRight:10,float:left}}>
                <img class="card-img-top" src={picture} alt={label}/>
                <div class="card-body">
                    <h5 class="card-title">{label}</h5>
                    <p class="card-text">{title}</p>
                </div>
                </div>
                
        
    )
}

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
}

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,
}
 
export default Card