import { useState } from "react";
import { createContext } from "react";
import runChat from "../config/gemini";
export const Context = createContext()

const ContextProvider = (props) => {
    const [input , setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
     const [prevPrompt, setPrevPrompt] = useState([]);
     const [showResult, setShowResult] = useState(false);
     const [loading, setLoading] = useState(false);
     const [resultData, setResultData] = useState('');

    const delayPara = (index,nextWord) => {
setTimeout(function(){
    setResultData(prev => prev + nextWord)
}, 75*index);
    }

    const onSent = async (prompt) => {
        setResultData('')
        setLoading(true)
        setShowResult(true)
        let response ;
        if(prompt !== undefined){
            response = await runChat(prompt);
            setRecentPrompt(prompt)
        }else{
            setPrevPrompt(prevPrompt => [...prevPrompt, input])
            setRecentPrompt(input)
            response = await runChat(input);
        }
      

let responseArray = response.split('**');
let newResponse = '';
for (let i = 0; i < responseArray.length; i++) {
    if(i === 0 || i %2!== 1){
        newResponse+=responseArray[i]
    }
    else{
        newResponse += '<b>'+ responseArray[i] + '</b>'
    }
}
let newResponse2 = newResponse.split('*').join('<br/>');
let newResponseArry = newResponse2.split(' ');
for (let i = 0; i < newResponseArry.length; i++) {
    delayPara(i,newResponseArry[i]+' ')
}
setLoading(false)
setInput('')
    }
    
const contextValue = {
    input,
    setInput,
    onSent,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
  

}
    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}

export default ContextProvider