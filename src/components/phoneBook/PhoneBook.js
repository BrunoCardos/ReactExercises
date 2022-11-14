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

        setPhoneList(...phoneList)
        console.log(phoneList)
       
        
    }

    return <>
        <label>Name:</label> <br/>
        <input type='text' ref={nameInput}></input>  <br/>
        <label>Phone Number:</label> <br/>
        <input type='number' ref={phoneInput}></input> <br/>
        <button onClick={addPhone}>Add</button>

        <ul>
        {phoneList.map((item, i) => <li>{item.name} {item.phone}</li>)}
        </ul>

     

       
    

    </>
}

export default PhoneBook