import React, { useState } from 'react';
import ChildMood from './ChildMood';

const MoodTracker = (props) => {
    const [state, setState] = useState({
        moodPoints: 0,
        updates: 0,
        submitText: 'testing'
    }); 

    const onClickMoodUpdateFn = (e) => {
        let newMoodPoints = state.moodPoints + 10;
        if(newMoodPoints > 100) {
            newMoodPoints = 0;
        }
        setState({
            ...state,
            moodPoints: newMoodPoints
        });
    };

    const onSubmitActionFn = (e) => {
        e.preventDefault();
        console.log('IN submit function');
        const newSubmitText = e.target.submitText.value;
        setState({
            ...state,
            submitText: newSubmitText
        })
    }

    const onChangeSubmitTextUpdate = (e) => {
        let newSubmitText = e.target.value;
        setState({
            ...state,
            submitText: newSubmitText
        })
    }

    const onChangeMoodUpdateFn = (e) => {
        let newMoodPoints = e.target.value && e.target.value !== '' ? 
            parseInt(e.target.value) : 0;
        let newUpdates = state.updates +1;
        setState({
            moodPoints: newMoodPoints,
            updates: newUpdates
        });
    }

    const updateMoodFn = (newMoodScore) => {
        setState({
            ...state,
            moodPoints: newMoodScore
        })
    }


    return (
        <div>
            <p>On a scale of 1-100</p>
            <p>You are this Happy: {state.moodPoints}</p>
            <button onClick={onClickMoodUpdateFn}>Cheer up!</button>
            <p>Total mood point updates: {state.updates}</p>
            <input value={state.moodPoints} onChange={onChangeMoodUpdateFn} />
            <form onSubmit={onSubmitActionFn}>
                <label>On submit text</label>
                <input name="submitText" value={state.submitText} onChange={onChangeSubmitTextUpdate} required/>
                <button type="submit">Submit</button>
            </form>
            <ChildMood 
                moodScore={state.moodPoints}
                updateMoodFn= {updateMoodFn}
            />
        </div>
    )
}

export default MoodTracker;