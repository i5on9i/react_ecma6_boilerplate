import React from 'react';
import ReactDOM from 'react-dom';

import MainView from 'mainview/MainView.jsx'
import SubTitleBar from 'subtitlebar/SubTitleBar.jsx'
// import {ajax} from 'utils/utils.jsx';




export default class SlideMain extends React.Component {
  render() {
    return (
        <div>
            <MainView></MainView>
            <SubTitleBar></SubTitleBar>
        </div>
        
    )
  }
}

