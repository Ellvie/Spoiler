import React, { Component } from 'react';

export class ForumComment extends Component {
    static displayName = ForumComment.name;


    render() {
        return (
            <section>
                <h1>Add a comment</h1>

                <form className="">
                    <textarea id="forumComment" name="forumComment" placeholder="Add a comment..."></textarea>
                    <input type="submit" value="Post"></input>
                </form>
            </section>
        );
    }
}