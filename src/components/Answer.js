export default function Answer({question, reveal, setReveal}){
    const answer = question.answer.replace();
    return (
      <div className='answer'>
      {reveal ? <h2>{answer}</h2> 
      : <></>}
        <button onClick={() => setReveal(true)}><h3>Click to Reveal Question</h3></button>
      </div>
    );
}