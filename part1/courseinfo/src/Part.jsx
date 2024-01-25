
const Part = () => {

    const parts = [
        {
            name : 'Fundamentals of React',
            exercises : 10
        },
        {
            name : 'Using props to pass data',
            exercises : 7
        },
        {
            name : 'State of a component',
            exercises : 14
        }
    ]
   

    return (
        <div>
             
        <ul>
            <li>
                {parts[0].name} : {parts[0].exercises}
            </li>
            <li>
                {parts[1].name} : {parts[1].exercises}
            </li>
            <li>
                {parts[2].name} : {parts[2].exercises}
            </li>
        </ul>
           
        </div>
    )
}

export default Part