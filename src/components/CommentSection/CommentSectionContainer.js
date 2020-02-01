 // You will add code to this file
import React, {} from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
// const [comment, setComment] = useState()
  return (
    <div>
      <div>
      </div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map((info, index)=>{
          return (
            <div key= {index}> 
              <Comment comment={info}/>
            </div>
          )
      })
      }
      <CommentInput 
      />
    </div>
  );
};

export default CommentSection;
