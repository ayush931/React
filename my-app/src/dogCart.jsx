import Image from "./image.jsx";
import Name from './Name.jsx'

function DogCart (props) {
    let title = "this is a dog card"
    return (
        <>
            <h2 style={
                {
                    fontSize: '50px',
                    color: 'red'
                }
            }>
                { title }
            </h2>
            <Name>
                <h3>{props.name}</h3>
            </Name>
            <Image src= {props.image} />
        </>
    );
}

export default DogCart