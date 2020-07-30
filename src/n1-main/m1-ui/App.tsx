import React from 'react';
import './App.css';
import {HashRouter, Route} from "react-router-dom";
import {Login} from "../../n2-features/f1-auth/a1-login/l1-ui/Login";
import {Registration} from "../../n2-features/f1-auth/a2-registration/r1-ui/Registration";
import {Header} from "./u1-header/Header";
import {login, profile, registration, restore} from "./u2-routes/routes";
import Particles from 'react-particles-js';
import {RestorePassword} from "../../n2-features/f1-auth/a3-restorePassword/res1-ui/RestorePassword";
import {connect} from "react-redux";
import {AppStateType} from "../m2-bll/store";
import {Profile} from "../../n2-features/f1-auth/a4-profile/p1-ui/profile";



type MapStateToPropsType = {
    isAuthByLogin: boolean
    isAuthByRestore: boolean
    isAuthByRegistration: boolean
}

const App = (props: MapStateToPropsType) => {
    const particleOpts = {
        "particles": {
            "number": {
                "value": 50,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#715858"
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#E6E6FA",
                "opacity": 0.4,
                "width": 1
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "size": {
                "value": 20,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            }, "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            }
        }
    }

    const isAuth = props.isAuthByLogin || props.isAuthByRegistration || props.isAuthByRestore;

    return (
        <div className='App'>
            <HashRouter>
                <Particles className='particles' params={particleOpts}/>
                <Header/>
                <Route path={login} component={Login}/>
                <Route path={registration} component={Registration}/>
                <Route path={restore} component={RestorePassword}/>
                <Route path={profile} component={Profile}/>


                {!isAuth &&
                <div className='main'>
                    <span className='welcome'> Welcome to ANOX! </span>
                    <div>
                        Study different things with us!
                    </div>
                </div>
                }




            </HashRouter>
        </div>


    );
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuthByLogin: state.login.isAuth,
        isAuthByRestore: state.restore.isAuth,
        isAuthByRegistration: state.registration.isAuth

    }
}

export default connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps, {})(App);
