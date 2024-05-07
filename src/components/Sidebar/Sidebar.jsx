import { useState , useContext} from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./Sidebar.css";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const {  onSent,prevPrompt,setPrevPrompt } = useContext(Context);

  const onLoadingPrompt = async(prompt) => {
    setPrevPrompt(prompt)
    await onSent(prompt)
    
  }
  return (
    <div className="sidebar">
      <div className="top">
        <img src={assets.menu_icon} onClick = {() => setExtended(!extended)} alt="menu" className="menu" />
        <div className="new-chat-container">
          <img src={assets.plus_icon} alt="gemini_icon" />
          {extended ? <p>new chat</p> : null}
        </div>
        {extended ? (
          <div className="recent-chat-container">
            <p className="recent-title">Recent</p>
            {prevPrompt.map((prompt, index) => (
              <div className="recent-entry" onClick={onLoadingPrompt(prompt)} >
              <img src={assets.message_icon} alt="message-icon" />
              <p>{prompt.slice(0, 16)}...</p>
            </div>
            ))}
            
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help-icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="help-icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="help-icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
