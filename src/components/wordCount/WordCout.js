import { useRef, useState } from "react"

function WordCount(){

    const [wordCnt, setWordCnt] = useState(0);

   



    const word = useRef();
    const wordSearch = useRef();

     function search() {
        let wordValue = word.current.value;
        let wordSearchValue = wordSearch.current.value;


        let spl = wordValue.split(' ')



        // ###############################################################################
        //############################      ISTO     #####################################

        // let fltr = spl.filter( word => word == wordSearchValue)

        // setWordCnt(fltr.length)


        // ###############################################################################
        // ###########################    OU  ISTO     ###################################

        
            let count=0                                                         
            for(let i=0; i<spl.length; i++){
                if(wordSearchValue==spl[i])
                    count++;
            }
            setWordCnt(count);
        
        //###############################################################################
      }

    return <>
        <textarea ref={word}></textarea> <br/>
        <input type='text' ref={wordSearch}></input> <br/>
        <button onClick={search}>Search</button>
        <span>{wordCnt} </span>  <br/>
    </>
}

export default WordCount