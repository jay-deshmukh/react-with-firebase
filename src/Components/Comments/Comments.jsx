import React, { Component } from 'react';
import './Comments.css'
class Comments extends Component {

  hideModal = () => {
    const element = document.getElementById('commentsModal')
    element.classList.remove('is-active');
  }
  render() {
    return (
      <div className="container">
        <div className="modal" id="commentsModal">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head modal-head">
              <p className="fas fa-arrow-left back"></p>
              <p onClick={this.hideModal} className="modal-card-title">{"Movie"}  Coments</p>
            </header>
            <section className="modal-card-body">
            <div className="columns is-mobile">
              <div className="column is-one-fifth profile-image">
                <figure className="image is-48x48 ">
                  <img alt="profile" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
                <div className="column profile-name">
                <p>Alpha</p>
              </div>
					  </div>
            <div className="columns is-mobile">
              <div className="column is-one-fifth profile-image">
                <figure className="image is-48x48 ">
                  <img alt="profile" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
                <div className="column profile-name">
                <p>Bravo</p>
              </div>
					  </div>
            <div className="columns is-mobile">
              <div className="column is-one-fifth profile-image profile-image">
                <figure className="image is-48x48">
                  <img alt="profile" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
                <div className="column profile-name">
                <p>Charlie</p>
              </div>
					  </div>
            <div className="columns is-mobile">
              <div className="column is-one-fifth profile-image">
                <figure className="image is-48x48 ">
                  <img alt="profile" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
                <div className="column profile-name">
                <p>Delta</p>
              </div>
					  </div>
            <div className="columns is-mobile">
              <div className="column is-one-fifth profile-image">
                <figure className="image is-48x48 ">
                  <img alt="profile" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                </figure>
              </div>
                <div className="column profile-name">
                <p>Elexss</p>
              </div>
					  </div>
            </section>
            <footer className="modal-card-foot">
              <input className="input" placeholder="The Movie Is So Cool" id="comment-input"/>
              <figure className="image is-48x48" id="send">
                  <img alt="profile" className="is-rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17BsdB-CGr94PrmM0YOgSJa5prx8wbqu-7cGTNbjAzzezn9osCQ" />
              </figure>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Comments;