import React  from "react";
const CommentRow = ({comment}) => {
  return(
    <div className="columns is-mobile">
    <div className="column is-one-fifth profile-image">
      <figure className="image is-48x48 ">
        <img alt="profile" className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
    </div>
      <div className="column profile-name">
      <p>{comment}</p>
    </div>
  </div>
  )
}


export default CommentRow;