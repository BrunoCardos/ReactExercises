import { useRef, useState } from "react";




function PhoneBook(){

    const [phoneList, setPhoneList] = useState ([
        {
            "name": "pedro",
            "phone": 9364852,
        },
        {
            "name": "admin",
            "phone": 5931576,
        },
        {
            "name": "tech89",
            "phone": 9762415,
        }
    ])


    
    const nameInput = useRef ();
    const phoneInput = useRef();

    function addPhone(){
        
        const name = nameInput.current.value
        const phone = phoneInput.current.value

        const newContact = 
            {
                "name":name,
                "phone": phone
            }
        

        phoneList.push(newContact) 

        setPhoneList([...phoneList])
       
       
        
    }

    return <>
        <div className="left">
            <label>Name:</label> <br/>
            <input type='text' ref={nameInput}></input>  <br/>
            <label>Phone Number:</label> <br/>
            <input type='number' ref={phoneInput}></input> <br/>
            <button onClick={addPhone}>Add</button>
        </div>

        <div className="right">
            {phoneList.map((item, i) => <div>
                name: {item.name} <br/>
                phone: {item.phone}</div>)
                
                }
        </div>
       
       
      

     

       
    

    </>
}

export default PhoneBook