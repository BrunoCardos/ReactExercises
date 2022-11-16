import { useRef, useState } from "react"

function WordCount(){

    const [wordCnt, setWordCnt] = useState(0);

   



    const word = useRef();
    const wordSearch = useRef();

     function search() {
        let wordValue = word.current.value;
        let wordSearchValue = wordSearch.current.value;


        let spl = wordValue.split(' ')

        // let fltr = spl.filter( word => word == wordSearchValue)

        // setWordCnt(fltr.length)

        for (let element of spl){
            if (element == wordSearchValue){
                setWordCnt(wordCnt+1)
            }
        }

      }

    return <>
        <textarea ref={word}></textarea> <br/>
        <input type='text' ref={wordSearch}></input> <br/>
        <button onClick={search}>Search</button>
        <span>{wordCnt} </span>  <br/>
    </>
}

export default WordCount