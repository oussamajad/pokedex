import Card from '../../components/Card'
import DefaultPicture from '../../assets/profile.jpg'

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne pocine',
        jobTitle: 'DevOps Fullstack',
        picture: DefaultPicture,
    },
]

function Freelances (){
    return(
        <div>
        <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
        {
            freelanceProfiles.map((card,index)=>(
               <Card
               key= {`${card.name}-${index}`}
               label = {card.name}
               title = {card.jobTitle}
               picture = {card.picture}
               />
            ))
        }
        </div>
    )
}
export default Freelances