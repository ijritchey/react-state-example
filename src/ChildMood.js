const ChildMood = ({moodScore, updateMoodFn}) => {
    const moodDivStyle = {
        margin: '0 auto',
        color: 'red',
        border: '5px solid green',
        width: '1000px',
        height: '100px'
    }

    const decreaseMood = (e) => {
        const newMoodScore = moodScore > 10 ? moodScore -= 10: 0
        updateMoodFn(newMoodScore);
    }

    return (
        <div style={moodDivStyle} onClick={decreaseMood}>
            Reduce Mood Score({moodScore})
        </div>
    )

}

export default ChildMood;