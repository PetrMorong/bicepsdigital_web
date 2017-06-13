import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './index.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            rollUp: true
        }
    }

    handleScroll(e){
        if(e.deltaY === 100){
            this.setState({rollUp: false});
        }else{
            this.setState({rollUp: true});
        }
    }

    render() {

        let header_bg = this.state.rollUp ? '' : 'header-bg-roll-up',
            header_wrap = this.state.rollUp ? '' : 'header-wrap-roll-up';

        return (
            <div className="container" onWheel={(e) => {this.handleScroll(e);}}>
                <div className="navigation">
                    <div className="logo" onClick={()=>this.setState({rollUp: true})}>
                        <span>biceps</span>.agency
                    </div>
                    <div className="links">
                        <NavLink to={'/'} className={this.state.rollUp ? 'link' : 'link-roll-up'} activeClassName={this.state.rollUp ? 'active-link' : 'active-link-roll-up'}><span>OUR WORK</span></NavLink>
                        <NavLink to={'about'} className={this.state.rollUp ? 'link' : 'link-roll-up'} activeClassName={this.state.rollUp ? 'active-link' : 'active-link-roll-up'}><span>ABOUT US</span></NavLink>
                        <NavLink to={'careers'} className={this.state.rollUp ? 'link' : 'link-roll-up'} activeClassName={this.state.rollUp ? 'active-link' : 'active-link-roll-up'}><span>CAREERS</span></NavLink>
                        <NavLink to={'contact'} className={this.state.rollUp ? 'link' : 'link-roll-up'} activeClassName={this.state.rollUp ? 'active-link' : 'active-link-roll-up'}><span>CONTACT</span></NavLink>
                    </div>
                </div>
                <div className={"header-wrap " + header_wrap}>
                    <h1>We are a creative <br/> digital agency</h1>
                    <h3>
                        This repository is a monorepo that we manage using Lerna.
                        That means that we<br/> actually publish several packages to npm from
                        the same codebase, including
                    </h3>
                    <div className="header-cta">
                        <span>DISCOVER MORE</span>
                    </div>
                </div>
                <div className={'header-bg ' + header_bg}>

                </div>
                <div className="our-work">
                    <div className="our-work-headline-wrap">
                        <h4>Some of our work</h4>
                        <div className="work-type">
                            <span className="work-type-active">All</span>
                            <span>UX</span>
                            <span>Web Design</span>
                            <span>Front-end</span>
                            <span>Visual Identity</span>
                        </div>
                    </div>
                    <div className="images">
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                        <div className="image"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default App;
