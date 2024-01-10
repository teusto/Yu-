const Movie = () => {

  const clickWin = () => {
    // increment win number
  }

  const fadeWhenLose = () => {
    /* 
      increment lose number
      apply effect to card dissapear in a fade out and show next movie in a fade in effect
    */
  }

  return (
    <div style={{ height: '300px', backgroundColor: '#00000020', margin: '.5em 1em', borderRadius: '2px', border: '2px solid #555555', padding: '.8em', display: 'flex', flexDirection: 'column' }}>
      <div style={{flex: 2, border: '2px solid red'}}>
        <p>Movie Name</p>
      </div>
      <div style={{flex: 1, border: '2px solid red'}}>
        <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
          <p style={{ margin: '0 .2em' }}>W: 0</p>
          <p style={{ margin: '0 .2em' }}>L: 0</p>
        </div>
        <div>
          <button onClick={clickWin}>
            Win
          </button>
        </div>
      </div>
    </div>
  )
}

export default Movie;