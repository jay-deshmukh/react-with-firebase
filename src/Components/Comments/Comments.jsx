import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from './firebase'

import './Comments.css'
class Comments extends Component {

  constructor(props){
    super(props);
    this.state = {
      comment : '',
      comments : {}
    }
  }

  componentWillMount(){
    const pathParams = new URLSearchParams(window.location.search)
    const movie = pathParams.get('movie');
    const commentsRef = firebase.database().ref(`comments/${movie}`);
    commentsRef.on('value' , snapShot => {

      this.setState({
        movie : movie,
        comments : snapShot.val()
      })
    })
  }

  handleChange = (e) =>{
    e.preventDefault();
    this.setState({
      comment: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const commentsRef = firebase.database().ref(`comments/${this.state.movie}`);
    commentsRef.push(this.state.comment)
    document.getElementById('comment-input').value = "";
  }

  render() {
    let comments ;
    if(this.state.comments){
      comments = Object.keys(this.state.comments).map((key)=>{
          return(
            <div className="columns is-mobile">
            <div className="column is-one-fifth profile-image">
              <figure className="image is-48x48 ">
                <img alt="profile" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
              <div className="column profile-name">
              <p>{this.state.comments[key]}</p>
            </div>
          </div>
          )
      })
    }
    return (
      <div className="container">
        <div className="modal is-active" id="commentsModal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head modal-head">
              <Link to="/">
                <i className="fas fa-arrow-left back"></i>
              </Link>
              <p onClick={this.hideModal} className="modal-card-title">{this.state.movie} Comments</p>
            </header>
            <section className="modal-card-body">
              {comments}
            </section>
            <footer className="modal-card-foot">
              <input className="input" placeholder="The Movie Is So Cool" id="comment-input" onChange={this.handleChange}/>
              <figure className="image is-48x48" id="send">
                  <img alt="profile" className="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17BsdB-CGr94PrmM0YOgSJa5prx8wbqu-7cGTNbjAzzezn9osCQ" onClick={this.handleSubmit}/>
              </figure>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;