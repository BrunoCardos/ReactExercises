import { useState } from "react";
import Card from "../../components/card/card";
import './all.css'

function All(){

    const [list, setList] = useState([
        {
            url: 'www.facebook.com',
            title: 'Facebook',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
    
        },
        {
            url: 'www.google.com',
            title: 'Google',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
    
        },
        {
            url: 'www.instagram.com',
            title: 'Instagram',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley',
    
        }
    ])



    
    return <>


    
    <h1>Todos os conteudos</h1>

    <div className="flex">

  {list.map((item, i)=><Card
    key={i}
    url={item.url}
    title={item.title}
    text={item.text}/>)}
    </div>

    </>

  }


export default All;