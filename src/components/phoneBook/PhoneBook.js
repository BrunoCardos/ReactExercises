import { useRef, useState } from "react";




function PhoneBook(){

    const [phoneList, setPhoneList] = useState ([
        {
            "name": "Pedro",
            "phone": 9364852,
        },
        {
            "name": "Paulo",
            "phone": 5931576,
        },
        {
            "name": "Manuel",
            "phone": 9762415,
        }
    ])


    
    const nameInput = useRef ();
    const phoneInput = useRef();
    const searchInput = useRef();

    function addPhone(){
        
        const name = nameInput.current.value;
        const phone = phoneInput.current.value;

        const newContact = 
            {
                "name":name,
                "phone": phone
            }
        

        phoneList.push(newContact); 

        setPhoneList([...phoneList]);
       
       
        
    }

    function search(){
        const [searchResult, setSearchResult] = useState ('')
        let searchName = searchInput.current.value;
    }


    return <div className="phone">
        <div className="left">
        <h2>Register Number</h2>
            <label>Name:</label> <br/>
            <input type='text'  ref={nameInput}></input>  <br/>
            <label>Phone Number:</label> <br/>
            <input type='number' ref={phoneInput}></input> <br/>
            <button onClick={addPhone}>Add Number</button>
        </div>

        <div className="right">
            <h2>Phone List</h2>
            <div className="flex">
                <input type="search" placeholder="Search" ref={searchInput}></input>
                <button onClick={search}>Search</button>
            </div>
            {searchResult.length==0 && phoneList.map((item, i) => <div><li>
                Name: {item.name} <br/>
                Phone: {item.phone}</li></div>)
              }

            {searchResult.length>0 && phoneList.map((item, i) => <div><li>
                Name: {item.name} <br/>
                Phone: {item.phone}</li></div>)
              }
        </div>
       

       
    

    </div>
}

export default PhoneBook