import React from 'react';
import {HashRouter} from "react-router-dom";
import {connect} from "react-redux";
import { AppStateType } from '../../m2-bll/store';


type MapStateToPropsType = {
    isAuthByLogin: boolean
    isAuthByRestore: boolean
    isAuthByRegistration: boolean
}

const ScreenSaver = (props: MapStateToPropsType) => {


    const isAuth = props.isAuthByLogin || props.isAuthByRegistration || props.isAuthByRestore;

    return (
        <div>
            <HashRouter>

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

export default connect<MapStateToPropsType, {}, {}, AppStateType>(mapStateToProps, {})(ScreenSaver);
