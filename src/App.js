import './App.css';
import SideBar from "./SideBar.js"
import cardCollection from "./picture/my-card-collection.png"
import wob from "./picture/wob.png"
import React from 'react';
class App extends React.Component {
  state = {
    headerList:["My Card Collection","Kitapların Dünyası"],
    imageList:[cardCollection, wob],
    infoList:["Oyun kartı yapıp, toplayabildiğin bir web sitesi. React kullanılarak yapılmıştır.",
     "Bu proje kitapları görüntüleyip yorum yapabildiğin bir websitesidir. Admin paneli bulunmaktadır ve buradan kitap eklenebilir, editlenebilir ve silinebilir. Kullanıcıların mesajlarını kaldırabilir. Kullanıcılar kitaplara yorumda bulunabilir. ASP.NET CORE MVC kullanılarak yapılmıştır."],
    linkList:["https://my-card-collection.herokuapp.com/", "https://github.com/TarikOztoprak/Web-Programlama-Proje-Odevi"],
    index: 0
  }

  render(){
    return (
   
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 p-0"><SideBar/></div>
        <div className="col-sm-6 p-0">
          <span className="Projects">

          <h1 className="p-3" style={{minWidth: '100%' , marginTop: '0', float:'left', backgroundColor:'#008CBA'}}>Projeler</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 p-0">
              <button style={{float:'left'}} className="Projects-button" onClick={() => this.state.index === 0 ? this.setState({index: this.state.headerList.length-1}) : this.setState({index: this.state.index -1})} >{"<"}</button>      
              </div>
              <div className="col-8 p-0">
                <h1 className="mt-3">{this.state.headerList[this.state.index]}</h1> 
              </div>
              <div className="col-2 p-0">
                <button style={{float:'right'}} className="Projects-button" onClick={() => this.state.index === this.state.headerList.length-1 ? this.setState({index: 0}) : this.setState({index: this.state.index +1})} >{">"}</button>      
              </div>
            </div>
          </div>
          
         
         
          
          <a href={this.state.linkList[this.state.index]}>
          <img className="Project-image mt-5" src={this.state.imageList[this.state.index]} alt="pic"></img>
          </a>
          <br/>
          <p className="mt-3">{this.state.infoList[this.state.index]}</p>

          </span>
        </div>
      </div>
    </div>
        
        
   
    );
  }
}

export default App;
