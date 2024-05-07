import  { useContext } from 'react'

import {assets} from '../../assets/assets'
import {Context} from '../../context/Context'
import './Main.css'
const Main = () => {
    const {input,
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
        resultData,} = useContext(Context)
  return (
    <div className='main'>
     <div className='nav'>
        <p>Gemini</p>
        <img src={assets.user_icon} alt="setting-icon" />
     </div>
     <div className='main-container'>
     {!showResult ? 
        <>
        <div className='greet'>
            <p><span>Hello, Omprakash</span></p>
            <p>How can i help you today?</p>
        </div>
       
            
        
        <div className='cards'>
            <div className='card'>
                <p>Create a list of power phrases for my resume.</p>
            <img src={assets.compass_icon} alt="compass-icon" />
            </div>
            <div className='card'>
                <p>Create a list of power phrases for my resume.</p>
            <img src={assets.compass_icon} alt="compass-icon" />
            </div>
            <div className='card'>
                <p>Create a list of power phrases for my resume.</p>
            <img src={assets.compass_icon} alt="compass-icon" />
            </div>
            <div className='card'>
                <p>Create a list of power phrases for my resume.</p>
            <img src={assets.compass_icon} alt="compass-icon" />
            </div>
        </div>
        </ >: <div className='result-container'>
<div className='result-title'>
    <img src={assets.user_icon} alt="user-icon" />
    <p>{recentPrompt}</p>
</div>
<div className='result-data'>
    <img src={assets.gemini_icon} alt="gemini-icon" />
    {loading ? <div className='loader'>
    <hr/>
    <hr/>
<hr/>
    </div>
     :<p dangerouslySetInnerHTML={{__html: resultData}}></p>}
</div>
        </div>}
        <div className='main-bottom'>
            <div className='search-box'>
                <input type='text' placeholder='Enter a prompt here'  value={input} onChange={(e) => setInput(e.target.value)}/>
                <div>
                    <img src={assets.gallery_icon} alt='gallery-icon' />
                    <img src={assets.mic_icon} alt='mic-icon' />
                   {input && <img onClick={() => onSent()} src={assets.send_icon} alt='send-icon' />}
                </div>
            </div>
            <p>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
        </div>
     </div>
    </div>
  )
}

export default Main
