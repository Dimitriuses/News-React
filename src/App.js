import React, { Component } from "react";
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Components/Header/Header"
import NewsList from "./Components/NewsList/NewsList"
import API from "./APIClient"

class App extends Component{
  state = {
    List:[
      {
        id:1,
        title:"Jacques Chirac, former French president, is dead at 86 - CNN",
        description:"Former French President Jacques Chirac, known for a carefully crafted \"everyman\" image but whose later years were dogged by allegations of corruption, has died at the age of 86.",
        image:"https://cdn.cnn.com/cnnnext/dam/assets/190926111100-01-jacques-chirac-lead-super-tease.jpg",
        url:"https://www.cnn.com/2019/09/26/europe/jacques-chirac-former-french-president-died-intl/index.html",
        favorite: false
    },
      {
        id:2,
        title:"Princess Beatrice engaged to property tycoon - BBC News",
        description:"Prince Andrew's 31-year-old daughter is to marry Edoardo Mapelli Mozzi, the Duke and Duchess of York announce.",
        image:"https://ichef.bbci.co.uk/news/1024/branded_news/45AD/production/_108973871_pressassociation.jpg",
        url:"https://www.bbc.com/news/uk-49839390",
        favorite: false
    },
      {
        id:3,
        title:"Why did Joseph Maguire resist handing over the whistleblower report? Intel chief to testify in Congress - USA TODAY",
        description:"Lawmakers will ask Joseph Maguire, director of national intelligence, why he delayed giving Congress a whistleblower complaint on Trump and Ukraine.",
        image:"https://www.gannett-cdn.com/presto/2019/09/25/USAT/cfcf989c-48bb-41c9-ae9c-4080e6ddb4eb-schiff.JPG?crop=3999,2250,x0,y203&width=3200&height=1680&fit=bounds",
        url:"https://www.usatoday.com/story/news/politics/2019/09/26/trump-ukraine-acting-dni-joseph-maguire-testifies-congress/2442594001/?utm_source=google&utm_medium=amp&utm_campaign=speakable",
        favorite: false
    },
      {
        id:4,
        title:"Canada's Green Party edits photo of leader holding single-use cup - BBC News",
        description:"Elizabeth May was \"shocked\" to see the image, saying it was manipulated without her knowledge.",
        image:"https://ichef.bbci.co.uk/news/1024/branded_news/158FD/production/_108971388_f78ca1c2-90be-4469-b343-1ed605c4e688.jpg",
        url:"https://www.bbc.com/news/world-us-canada-49837590",
        favorite: false
    },
      {
        id:5,
        title:"U.S. Intelligence Boss Joseph Maguire To Face Congress On Ukraine Affair - NPR",
        description:"The acting director of national intelligence is meeting the House and Senate intelligence committees on Thursday as Washington gyrates over Ukraine and potential impeachment.",
        image:"https://media.npr.org/assets/img/2019/09/25/gettyimages-1005184216_wide-47d9c241078cad7e8e961f7937a1e71764928cf5.jpg?s=1400",
        url:"https://www.npr.org/2019/09/26/764354457/u-s-intelligence-boss-joseph-maguire-to-face-congress-on-ukraine-affair",
        favorite: false
    },
      {
        id:6,
        title:"Impeachment is risky, but transcript supports media’s Ukraine reporting - Fox News",
        description:"Nancy Pelosi’s giant step toward impeachment, which she resisted for so long, may well backfire against the Democrats.",
        image:"https://media2.foxnews.com/BrightCove/694940094001/2019/09/25/694940094001_6089473908001_6089472584001-vs.jpg",
        url:"https://www.foxnews.com/media/impeachment-is-risky-but-transcript-supports-medias-ukraine-reporting",
        favorite: false
    },
      {
        id:7,
        title:"Tekashi 6ix9ine Not Planning to Go into Witness Protection After Prison - TMZ",
        description:"Tekashi 6ix9ine ain't no Henry Hill.",
        image:"https://imagez.tmz.com/image/a1/16by9/2019/09/25/a1f6e798499148cdae346e6f4de89490_xl.jpg",
        url:"https://www.tmz.com/2019/09/26/tekashi-6ix9ine-no-witness-protection-after-prison-release-snitch/",
        favorite: false
    },
      {
        id:8,
        title:"Treasury yields slide after weak consumer confidence data, Trump-Ukraine saga rumbles on - CNBC",
        description:"U.S. government debt prices rose Thursday morning, pushing yields lower, after a key consumer confidence index for September slipped to a three-month low.",
        image:"https://image.cnbcfm.com/api/v1/image/102141322-bond-traders-cme-2.jpg?v=1529451523",
        url:"https://www.cnbc.com/2019/09/26/treasury-yields-slide-on-weak-consumer-data-ukraine-saga-continues.html",
        favorite: false
    },
      {
        id:9,
        title:"Ninja was on The Masked Singer and a dancing ice cream is our god now - CNET",
        description:"Commentary: When you make $10 million a year playing video games, what have you got to lose?",
        image:"https://cnet3.cbsistatic.com/img/oYwCAP_2u902PfjxDv2OCqP7vxY=/756x567/2019/09/26/1404913d-c881-47a0-afc4-5b31fba1afc3/gettyimages-1173741271.jpg",
        url:"https://www.cnet.com/news/ninja-was-on-the-masked-singer-and-a-dancing-ice-cream-is-our-god-now/",
        favorite: false
    },
      {
        id:10,
        title:"Des Moines Register reportedly faces threats, adds police presence after story backlash - Fox News",
        description:"The Des Moines Register has reportedly been faced with serious threats and is taking extra precautions to secure its staff after a story published on Tuesday drew enormous backlash on social media.",
        image:"https://static.foxnews.com/foxnews.com/content/uploads/2019/09/CarsonKing_190918_CA3_hpMain_4x3_992.jpg",
        url:"https://www.foxnews.com/media/des-moines-register-carson-king",
        favorite: false
    },
      {
        id:11,
        title:"British Prime Minister Boris Johnson returns to a hostile government - CBS News",
        description:"British Prime Minister Boris Johnson left New York early after the country's highest court ruled his suspension of Parliament was illegal. He returned to a h...",
        image:"https://i.ytimg.com/vi/xhSFnyjnWEc/hqdefault.jpg",
        url:"https://www.youtube.com/watch?v=xhSFnyjnWEc",
        favorite: false
    },
      {
        id:12,
        title:"Apple fiends still line up for iPhone launches. Good for them - CNET",
        description:"Commentary: The iPhone 11 Pro got people lining up for days. It's unnecessary, but that's OK.",
        image:"https://cnet3.cbsistatic.com/img/Dn1wgr1vioTKVyOkJTsKoBxZshQ=/756x567/2019/09/26/6e449b5a-2071-417a-a079-7722825649f1/gettyimages-1169833254.jpg",
        url:"https://www.cnet.com/news/apple-fiends-still-line-up-for-iphone-launches-good-for-them/",
        favorite: false
    }
    ],
    findNews:"",
    list:[]
  }


  onSearch = (searchName) => {
    console.log("searchName => ", searchName);
    this.setState({
        findNews: searchName
    });
  }

  onShowNews = (items, searchValue) => {
    if (searchValue.length === 0) {
      return items;
    }

    return items.filter(item => {
      return (
        item.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
      );
    });
  };

  updateNews (country = "ua"){
    const news = new API();
    const newsList = news.getAllNews("us")
    .then(({articles}) =>{
      const newsList = articles;
      console.log(newsList);
      this.setState({
        list:articles
      });
    })
    .catch(err => console.log(err.message));
  }

  remapList = (list)=>{
    for(var i = 0; i< list.length; i++){
      console.log(list[i],i,list[i].id);
      list[i].id=i;
      list[i].favorite=false;
      console.log(list[i],i,list[i].id);
    }

    //console.log(list);
    return list;
  }
  componentDidMount(){
    this.updateNews();
    /*this.setState({
      list:this.remapList(this.state.list)
    })*/
    console.log(this.state.list)
  }

  render() {

    const showNews = this.onShowNews(
      this.state.list,
      this.state.findNews
    );
    return (
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact render={()=>(
            <NewsList List={showNews}/>
          )}
          />
        </Switch>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div> */}
      </Router>
    );
  }
}
export default App;


