function Avatar(props) {
    return (    
    <div>
        <img
          src={props.user.avatarUrl}
          alt={props.user.name}
        />
      </div>
    );
  }

  /* Then create a component, UserInfo, that will include the avatar and the author name */
  function UserInfo(props) {
    return (
      <div>
        <Avatar user={props.user} />
        {props.user.name} 
        </div>
    );
  }

  function Comment(props) {
    {console.log("inside comment");}
    //can't do this
    //props is read only. we can't change the value of it.
    //props.text="new text";
    return (    
    <div>
      <UserInfo user={props.author} />
      <div>
        {props.text}
      </div>
      <div>
        {props.date}
    </div>
    </div>
    );
  }

  export default Comment;