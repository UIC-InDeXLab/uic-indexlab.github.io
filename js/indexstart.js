function header(path='') {
st = '<nav class="navbar navbar-expand-lg navbar-light bg-light"> ';
st += '<a class="navbar-brand" href="projects.htm" style="color:#ffcb05;"> ';
//st += '        <img src="'+path+'imgs/home.ico" height="40pt" alt="Home!">';
st += '        <img src="'+path+'imgs/InDeXLab2.gif" height="40pt" alt="Home!">';
st += '</a> ';
st += '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> ';
st += '  <span class="navbar-toggler-icon"></span> ';
st += '</button> ';
st += '<div class="collapse navbar-collapse" id="navbarSupportedContent"> ';
st += '  <ul class="navbar-nav mr-auto"> ';
st += '    <li class="nav-item active"> ';
st += '      <a class="nav-link" href="'+path+'index.htm">Home <span class="sr-only">(current)</span></a> ';
st += '    </li> ';
st += '  <ul class="navbar-nav mr-auto"> ';
//st += '    <li class="nav-item active"> ';
//st += '      <a class="nav-link" href="'+path+'projects.htm">Projects<span class="sr-only">(current)</span></a> ';
//st += '    </li> ';
/*
st+= '     <li class="nav-item dropdown">';
st+= '        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
st+= '          Pinned Systems&Repos';
st+= '        </a>';
st+= '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
st+= '          <a class="dropdown-item" href="https://uic-indexlab.github.io/Needle/"><img src="imgs/needlelogo.png" width="70pt"/> Needle🪡🔍: An Image Database for Answering Complex Natural Language Queries</a>';
st+= '          <a class="dropdown-item" href="https://github.com/UIC-InDeXLab/RSR/" target="_blank"> <img src="imgs/github.png" width="40pt"/>RSR 🧮: Efficient Matrix Multiplication for Binary and Ternary NNs</a>';
st+= '        </div>';
st += '    </li> ';
st+= '     <li class="nav-item dropdown">';
st+= '        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
st+= '          Project';
st+= '        </a>';
st+= '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
st+= '          <a class="dropdown-item" href="'+path+'tutorial22.htm"> <img src="imgs/sigmod22.png" width="130pt"/>"Responsible Data Integration: Next-generation Challenges"</a>';
st+= '          <a class="dropdown-item" href="http://wp.sigmod.org/?p=3174" target="_blank"> <img src="imgs/ACM1.png" width="130pt"/>"Enabling Responsible Data Science in Practice"</a>';
st+= '          <a class="dropdown-item" href="'+path+'tutorial20.htm"> <img src="imgs/vldb2020-logo.png" width="50pt"/>Tutorial: "Fairly Evaluating and Scoring Items in a Data Set"</a>';
st+= '        </div>';
st += '    </li> ';
*/
/*st+= '     <li class="nav-item dropdown">';
st+= '        <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">';
st+= '          Tools';
st+= '        </a>';
st+= '        <div class="dropdown-menu" aria-labelledby="navbarDropdown">';
st+= '          <a class="dropdown-item" target="_blank" href="'+path+'covidinsights/index.htm"> <img src="imgs/virus.png" width="50pt"/> CovidInsights</a>';
st+= '        </div>';
st += '    </li> ';*/
st += '    <li class="nav-item active"> ';
st += '      <a class="nav-link" href="https://www.cs.uic.edu/~asudeh/pub.htm" target="_blank">Publications<span class="sr-only">(current)</span></a> ';
st += '    </li> ';
st += '    <li class="nav-item active"> ';
st += '      <a class="nav-link" href="ppl.htm">People<span class="sr-only">(current)</span></a> ';
st += '    </li> ';
st += '    <li class="nav-item active"> ';
st += '      <a class="nav-link" href="contact.htm">Contact<span class="sr-only">(current)</span></a> ';
st += '    </li> ';
st += '  </ul> ';
st += '</div> ';
st += '</nav> ';
/*
st = '<table width="100%" id="header">';
st+= '        <tr>';
st+= '            <td width="10pt">&nbsp;</td>';
st+= '            <td><img src="assets/mithra.png" height="52px"/></td>';
st+= '            <td style="font-size:16pt; text-align:left; vertical-align: bottom; color:white; font-family:fantasy">Where Data Management meets Responsibility!</td>';
st+= '            <td class="menue" align="right">';
st+= '                <a href="index.htm">&#9751; Home</a><span width="10pt">&nbsp;&nbsp;&nbsp;</span>';
st+= '                <a href="papers.htm">&#9776; Publication</a><span width="10pt">&nbsp;&nbsp;&nbsp;</span>';
st+= '                <!--<a href="projects.htm">&#9741; Projects</a><span width="10pt">&nbsp;&nbsp;&nbsp;</span>-->';
st+= '                <a href="tools.htm">&#9732; Tools</a><span width="10pt">&nbsp;&nbsp;&nbsp;</span>';
st+= '                <a href="about.htm">&#9737; About</a>';
st+= '            </td>';
st+= '            <td width="10pt">&nbsp;</td>';
st+= '        </tr>';
st+= '</table>';
*/
headerDiv.innerHTML = st;
}