 
import { useState } from 'react';

function App() {
  const[questions, setquestions] = useState([
    {
      question: "Ques 1: What is Sum of 23+7 ?",
      answer: "a",
      options: ["30", "22", "37", "27",],
    },
    {
      question: "Ques 2: How many players are in a cricket team ?",
      answer: "c",
      options: ["10", "11", "12", "13",],
    },
    {
      question: "Ques 3: What is Capital of Punjab ?",
      answer: "c",
      options: [" Karachi", " Multan", " Rawalpendi", " Lahore",],
    },
    {
      question: "Ques 4: What do you call a type of shape that has five sides ?",
      answer: "a",
      options: ["Pentagon", " Rectangle ", "Triangle", "Square",],
    },
    {
      question: "Ques 5: Which is the coldest location in the earth ?",
      answer: "c",
      options: ["America", "Russia", "Antarctica ", "Europe",],
    },
    {
        question: "Ques 6: The largest ‘Democracy’ in the world ?",
        answer: "d",
        options: ["America", "Russia", "Pakistan ", "India",],
      },
      {
        question: "Ques 7: Who is the founder of Microsoft ?",
        answer: "a",
        options: ["Bill Gates", "Elon Musk", "Sundar Pichai ", " Mark Zuckerberg ",],
      },
      {
        question: "Ques 8: What is Computer Coding?",
        answer: "c",
        options:[ "A Radio Show", "List of Functions", "Giving Instructions to Computer", "StyleSheets",],
      },
      {
      question: "Ques 9: Which of these is a Programming Language?",
      answer: "d",
      options:[ "HyperText Markup Language", "Cascading StyleSheet", "Twitter Bootstrap", "JavaScript",],
    },
    {
      question: "Ques 10: Inside which HTML element do we put the JavaScript?",
      answer: "a",
        options:[ "<script src=''>", "<js>", "<scripting>",  "<javascript> ",],
      },
  ]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [marks, setMarks] = useState(0);
  const [result, setResult] = useState(false);

  const checkAns = (userSelected, correcAns) => {
   

    if (userSelected == correcAns) {
      setMarks(marks + 1);

    }

    if (indexNumber + 1 == questions.length) {
      setResult(true);
    }

    setIndexNumber(indexNumber + 1);
  };
  return (

    <div className="App">
       <div class="heading">
          <h2 className='quiz'>Quiz App</h2>
          <hr />
          <div>

<div>
  {
    result ? (<h1> YOUR MARKS = {marks} </h1>) : <div>

      <h1>{questions[indexNumber].question}</h1>
      <hr />
      <div>
        {questions[indexNumber].options.map((e, i) => {
          return (
            <div key={i}>
              <button
                onClick={() => checkAns(e, questions[indexNumber].
                  answer)}>
                {e}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  }



</div>

</div>
</div>
</div>
  );
};

export default App;
