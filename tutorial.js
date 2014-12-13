var CommentBox = React.creatClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.getElementById('content')
]);

var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment.</Comment>
        <Comment author="Jordan Walke">This is another.</Comment>
      </div>
    );
  }
})

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
})

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.Author}
        </h2>
        {this.props.children}
      </div>
    )
  }
})
