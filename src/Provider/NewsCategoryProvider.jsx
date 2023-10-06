import { createContext, useEffect, useState } from "react";

export const NewsCategoryContext = createContext(null);
const NewsCategoryProvider = ({ children }) => {
    const [category, setCategory]= useState([])

    useEffect(()=>{
        fetch('newsCategory.json')
        .then(res => res.json())
        .then(data => {
            setCategory(data)
            console.log(data);
        })

    } ,[])

  return(
    <NewsCategoryContext.Provider value={category}>
    {children}
    </NewsCategoryContext.Provider>
  )
  
};

export default NewsCategoryProvider;
