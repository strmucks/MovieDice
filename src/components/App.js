import React, { Component } from 'react';

import PreferencesButton from "./PreferencesButton"
import MovieList from "./MovieList"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pref_visible: false,
        };

        this.showPref = this.showPref.bind(this)
    }

    showPref(visible = false) {
        this.setState({ pref_visible: visible })
    }


    render() {
        const { pref_visible } = this.state
        const { showPref } = this
        return (
            <div className="App">
                <PreferencesButton visible={pref_visible} onShowPref={showPref} />
                {pref_visible || <MovieList />}
            </div>
        );
    }
}

export default App;

