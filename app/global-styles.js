import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  // body {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // body.fontLoaded {
  //   font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // #app {
  //   background-color: #fafafa;
  //   min-height: 100%;
  //   min-width: 100%;
  // }

  // p,
  // label {
  //   font-family: Georgia, Times, 'Times New Roman', serif;
  //   line-height: 1.5em;
  // }
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

div {
    display: block;
}

.main-container {
    font-family: 'Roboto', sans-serif;
    width: 1200px;
    margin: 0 auto;
}
.has_error, .removeitem a {
    color: #DF3868;
}
.questionaire {
    margin: 0;
    padding-top: 20px;
    border-left: 1px solid #AAB9CE;
    border-right: 1px solid #AAB9CE;
    border-bottom: 1px solid #AAB9CE;
    width: 1200px;
}
.btnmain {
  background-color: #AAB9CE;
  border-color: 1px solid #AAB9CE;
  color: white;
}
.header {
    padding-left: 44px;
    border-top: 1px solid #AAB9CE;
    border-left: 1px solid #AAB9CE;
    border-right: 1px solid #AAB9CE;
}
.mainbtn {
    padding-left: 25px;
}
.questionaire-list {
    padding: 1em;
    border-bottom: 1px solid #E8EDF3;
}

.divider {
    border: 1px solid #E8EDF3;
    width: 1200px;
}

.no-data {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em 0;
}

.modal {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
}

.modal-main {
    position:fixed;
    background: white;
    width: 50%;
    height: auto;
    top:50%;
    left:50%;
    padding: 1em;
    transform: translate(-50%,-50%);
}

.display-block {
    display: block !important;
}
  
  .display-none {
    display: none;
  }

  .btn-position {
      top: 0;
      right: 0;
      position: absolute;
  }

  .btn-save {
      right: 10px;
      position: absolute;
      bottom: 10px;
  }
  
  .space-container {
      padding: 1em 0;
  }

  .modal-container{
      padding: 1em;
  }

  .form-control {
      margin: 0.6em 0 !important;
  }

`;

export default GlobalStyle;
