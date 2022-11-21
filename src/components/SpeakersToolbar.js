import { ThemeContext } from "./Layout";
import { useContext } from "react";

function SpeakersToolbar({showSessions, setShowSessions }) {
  
  const {setTheme, theme} = useContext(ThemeContext);
  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-column flex-lg-row">
            <li className="d-flex flex-column flex-lg-row">
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className="fav">
                <input type="checkbox" checked={showSessions} onChange={(e)=>{setShowSessions(e.target.checked)}}/>
                <span className="switch"></span>
              </label>
            </li>
            <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
              <strong>Theme</strong>
              <labl className="dropdown">
                <select
                  className="form-control theme"
                  value={theme}
                  onChange={(e)=>{setTheme(e.target.value)}}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </labl>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SpeakersToolbar;