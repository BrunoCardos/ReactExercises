import { useRef, useState } from "react"

function WordCount(){

    const [wordCnt, setWordCnt] = useState(0);
    const [charCnt, setCharCnt] = useState(0);
    const [lineCnt, setLineCnt] = useState(0);
 



     function handleChange(event) {
        let wordValue = event.target.value;
        let countWord = wordValue.split(/\s+/).length
        let countChar = wordValue.length
        let countLine = wordValue.split(/\n/).length
  
       setWordCnt(countWord)
       setCharCnt(countChar)
       setLineCnt(countLine)
      }


    return <>
        <textarea onChange={handleChange}></textarea> <br/>
        <span>Word: {wordCnt}</span>   <br/>
        <span>Caracter: {charCnt}</span> <br/>
        <span>Lines: {lineCnt}</span>
    </>
}

export default WordCount