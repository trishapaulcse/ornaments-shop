import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div className='article-container'>
            <div>
                <a className='article-1' href="https://reactjs.org/"><b>How React Works..........???</b></a>
                <p>
                    React is a declarative, efficient, and flexible JavaScript library.React is a free and open-source front-end JavaScript library. So that user interfaces can be created based on UI elements. It is meta and maintained by a community of individual developers and companies.It can be used as help to build single page applications and mobile apps, or to build complex apps if you utilise it with other libraries.It is very core, React basically maintain a tree.This tree is able to do efficient diff computations on the nodes. Think of the HTML code as a tree. In fact, that is exactly how the browser treats DOM (rendered HTML on the browser)
                </p>
            </div>
            <div>
                <a className='article-1' href="https://reactjs.org/"><b>How use state works..........???</b> </a>
                <p>
                    The React usestate allows us to tract state in a function component.If we write a function component and realize that we need to add some state to it, previously we had to convert it to a class. Now we can use a Hook inside the existing function component.Another think is that , There are also some special rules about where we can and can’t use Hooks within a component.
                </p>
            </div>
        </div>
    );
};

export default Article;