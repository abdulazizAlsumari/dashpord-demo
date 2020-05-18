import React, { Component } from "react";
import "../Components/style.css";
import axios from "axios";
import Table from "./Table";
import Nav from "./Nav";
export default class card extends Component {
  state = {
    API: [],
    filtered: [],
    APIS:[],
    y:2018,
    Awarded_p_b:null,
    countt:null,
    NewProject_F_perweek:null,
    Awarded_p_berweek_f:null,
    project:null,
    Freelancer:null,
    Client:null,
    TojjerUser:null,
    numberNewStore:null,
    registered_y_m:[]
  };
  requestOne =()=> axios.get("https://beta.910ths.sa/queries/run?service=bahr&query=countOfAwardedProjects&format=json");
  requestTwo =()=> axios.get("https://beta.910ths.sa/queries/run?service=esso&query=totalNumberOfUsers&format=json");     
  requestThree =()=> axios.get("https://beta.910ths.sa/queries/run?service=esso&query=numberOfActivatedUsersPerMonth&format=json");     
  requestFour =()=> axios.get("https://beta.910ths.sa/queries/run?service=forsa&query=numberAwardedOpportunitiesPerWeek&format=json");     
  requestFive =()=> axios.get("https://beta.910ths.sa/queries/run?service=bahr&query=totalProjects&format=json");     
  requestSix =()=> axios.get("https://beta.910ths.sa/queries/run?service=bahr&query=totalFreelancers&format=json");     
  requestSaven =()=> axios.get("https://beta.910ths.sa/queries/run?service=bahr&query=totalClients&format=json");     
  requestEight =()=> axios.get("https://beta.910ths.sa/queries/run?service=tojjar&query=totalNumberOfUsers&format=json");     
  requestNighn =()=> axios.get("https://beta.910ths.sa/queries/run?service=tojjar&query=numberNewStoreRequestPerMonthPerYear&format=json");     
  
  async componentDidMount() {
    
      const [AWARDED_PROJECTS_B, TOTAL_REGISTERD,TOTAL_NEW_PROJECT_F_PER_WEEK,AWARDED_PROJECTS_PERWEEK_F,TOTAL_PROJECT,TOTAL_FREELANCER,TOTAL_CLENT,TOTAL_TOJJER_U,TOTAL_N_N_STORE] = await axios.all([ this.requestOne(),this.requestTwo(),this.requestThree(),this.requestFour(),this.requestFive(),this.requestSix(),this.requestSaven(),this.requestEight(),this.requestNighn()]); 
      let Awarded_p_b =AWARDED_PROJECTS_B.data[0].count;
      let countt =TOTAL_REGISTERD.data[0].count;
      let NewProject_F_perweek = TOTAL_NEW_PROJECT_F_PER_WEEK.data;
      let Awarded_p_berweek_f =AWARDED_PROJECTS_PERWEEK_F.data[0].count;
      let project =TOTAL_PROJECT.data[0].projects;
      let Freelancer =TOTAL_FREELANCER.data[0].profs;
      let Client =TOTAL_CLENT.data[0].profs;
      let TojjerUser =TOTAL_TOJJER_U.data[0].total_users;
      let numberNewStore =TOTAL_N_N_STORE.data[0].Store_Requests;
  //     NewProject_F_perweek =await this.state.NewProject_F_perweek.filter((item)=> {
  //       if (!item.month) {
  //            return}

  //   return item.month.includes("3");
  //  });
      this.setState({Awarded_p_b,countt,NewProject_F_perweek,Awarded_p_berweek_f,project,Freelancer,Client,TojjerUser,numberNewStore})
      this.setState({filtered:numberNewStore})
     
      
      // const responseTwo = res[1]
      // const responesThree = res[2]
    
    
    // axios.get("js/data.json").then(res => {
    //   this.setState({ API: res.data.datajs, filtered: res.data.datajs });
    // });
  }

    onYearChange = year =>{
    this.setState({y:year})
    console.log(this.state.y);
    }
    // this.setState(() => ({
      // console.log
    
  onYearChange = year =>
    this.setState(prev => ({
    
      filtered: prev.API.filter(item => item.year === year)
    }));
  onMounthChange = mounth =>
    this.setState(prev => ({
      filtered: prev.API.filter(item => item.mounth === mounth)
    }));

  render() {
    const API = this.state.API;
    const APIS = this.state.APIS;
    const TEXT= ["Total Vistor","Total Vistor per week","Total Projects","New Projects per week","Awarded Projects","Awarded Projects per week","Total Registerd"]
    // const filtered = this.state.filtered;

    return (
      <>
      {this.props.table==="ntths"?
      <div className="Table" id={this.props.table}>
        <Nav
          onYearChange={this.onYearChange}
          onMounthChange={this.onMounthChange}
        />
        <h3 id="title">{this.props.title}</h3>
        <div className="row">
            <div className="table-item-container">
              <Table  number={this.state.countt} tex={TEXT[6]}   />
              <Table  number={"000"} tex={TEXT[0]}   />
              <Table  number={"000"} tex={TEXT[1]}   />
          </div>
        </div>
      </div>
      :this.props.table==="forsa"?
      <div className="Table" id={this.props.table}>
        <Nav
          onYearChange={this.onYearChange}
          onMounthChange={this.onMounthChange}
        />
        <h3 id="title">{this.props.title}</h3>
        <div className="row">
            <div className="table-item-container">
              <Table  number={"0000"} tex={TEXT[2]}   />
              <Table  number={this.state.NewProject_F_perweek} tex={TEXT[3]}   />
              {/* {console.log(this.state.NewProject_F_perweek)}
              { this.state.NewProject_F_perweek.filter((item)=> {
        if (!item.month) {
             return}

    return item.month.includes("3"); }),
              this.setState({NewProject_F_perweek : this.s}) 
   }
   {console.log(s)} */}
              
              <Table  number={"0000"} tex={TEXT[4]}   />
          </div>
        </div>
        <div className="row">
            <div className="table-item-container">
              <Table  number={this.state.Awarded_p_berweek_f} tex={TEXT[5]}   />
              <Table  number={"0000"} tex={TEXT[0]}   />
              <Table  number={"0000"} tex={TEXT[1]}   />
          </div>
          </div>
      </div>:this.props.table==="bahr"?
      <div className="Table" id={this.props.table}>
        <Nav
          onYearChange={this.onYearChange}
          onMounthChange={this.onMounthChange}
        />
        <h3 id="title">{this.props.title}</h3>
        <div className="row">
            <div className="table-item-container">
              <Table  number={this.state.project} tex={TEXT[2]}   />
              <Table  number={"000"} tex={TEXT[3]}   />
              <Table  number={this.state.Awarded_p_b} tex={TEXT[4]}   />
          </div>
        </div>
        <div className="row">
            <div className="table-item-container">
              <Table  number={"000"} tex={TEXT[5]}   />
              <Table  number={"000"} tex={TEXT[0]}   />
              <Table  number={"000"} tex={TEXT[1]}   />
          </div>
        </div>
      </div>
      :null}
      </>
    );
  }
}
