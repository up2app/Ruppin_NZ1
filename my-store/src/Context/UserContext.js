import { createContext, useState } from 'react';

//יצירת משתנה עבור הקונטקסט שאותו נייצא בקומפוננטה שמתחת
export const UserContext = createContext();

//הקומפוננטה של הקונטקסט אשר תכיל בתוכה את התוכן והפונקציונליות
//children -> all the components that pass in the open and close tags
export default function UserContextProvider({ children }) {

    const [users, SetUsers] = useState([
        { id: 1, name: 'Raz', email: 'razamram@gmail.com', password: '1111', dob: '1993-07-16', msg: 'My Way' },
        { id: 2, name: 'Avshalom', email: 'avshalom@gmail.com', password: '2222', dob: '1997-09-23', msg: 'Goooood Morning' },
        { id: 3, name: 'David', email: 'david@gmail.com', password: '3333', dob: '1996-07-16', msg: 'His Way' }
    ]);

    const [currentUser, SetCurrentUser] = useState(null);

    //פונקציה המעדכנת את הסטייט של המשתמש הנוכחי במידה והוא קיים במאגר
    const FindUser = (email, pass) =>{
        //עובר על כל מאגר המשתמשים ומחזיר אובייקט או ״ריק״ אם קיים או לא קיים משתמש
        let u = users.find((user)=>user.email === email && user.password === pass);

        SetCurrentUser(u);

        return u !== null && u !== undefined;
    }

    const Logout = ()=>{
        SetCurrentUser(null);
    }


    return (
        //מייצאים את הסטייט של המשתמש הנוכחי ואת הפונקציה שמחפשת בתוך המאגר
        <UserContext.Provider value={{currentUser, FindUser, Logout}}>
            {children}
        </UserContext.Provider>
    )

}

