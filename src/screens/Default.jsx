import Logo from './_components/Logo'
import Description from "./_components/Description"
import OpenLink from '../components/OpenLink'
import LessonInfo from './_components/LessonInfo'

const Default = ()=>{
    return (
        <>
            <header className="App-header">
                <Logo/>
                <Description/>
                <OpenLink title="Learn React" url="https://reactjs.org"/>
                <OpenLink title="Mi Proyecto React (GitHub)" url="https://github.com/patrissia-mm/desarrollo-frontend-react"/>
                <LessonInfo numero='1' info='Información de la Unidad 1'></LessonInfo>
                <LessonInfo numero='2' info='Información de la Unidad 2'></LessonInfo>
            </header>
             
        </>
    )
}

export default Default;