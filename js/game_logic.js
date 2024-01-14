let score=JSON.parse((localStorage.getItem('score'))) || {
  Win: 0,
  looses:0,
  ties:0
}

const viewScore= document.querySelector('.js-para');
updateScoreElement();

const showStatus=document.querySelector('.js-status');
const showStatus2=document.querySelector('.js-2status');





function playgame(playerchoose)
{
  computer=funrandom();
  let result='';

  if(playerchoose==='scissors')
  {
    if(computer==='scissors')
    {
        result='Tie';

    }else if(computer === 'paper')
    {
        result='You Win';

    }else if(computer === 'rock')
    {
        result='You Loose';
    }
  }else if(playerchoose==='paper')
  {
    if(computer==='paper')
    {
        result='Tie';

    }else if(computer === 'rock')
    {
        result='You Win';

    }else if(computer === 'scissors')
    {
        result='You Loose';
    }
  }else if(playerchoose==='rock')
  {
    if(computer==='rock')
    {
        result='Tie';

    }else if(computer === 'scissors')
    {
        result='You Win';

    }else if(computer === 'paper')
    {
        result='You Loose';
    }
  }
  if(result==='You Win'){

    score.Win+=1;
  }else if(result==='You Loose'){

  score.looses+=1;
  }else  if(result==='Tie'){

  score.ties+=1;
  } 

  localStorage.setItem('score', JSON.stringify(score));


  updateScoreElement();

  updateStatusElement(playerchoose,result,computer,);
  
} 

function updateScoreElement(){

  viewScore.innerHTML= `Wins: ${score.Win} Looses: ${score.looses} Ties: ${score.ties}`
}

function updateStatusElement(playerchoose,result,computer,image){
  showStatus.innerHTML=`${result} `
  showStatus2.innerHTML=`you ${`<img class="css-image" src="image/${playerchoose}-emoji.png" alt="Rock image">`} and computer ${`<img class="css-image" src="image/${computer}-emoji.png" alt="Rock image">`}`
}

function funrandom()
{
  const random= Math.random()
  let computer=''

  if(random>=0 && random<1/3)
  {
    computer='rock';
  }else if(random>=1/3 && random<2/3)
  {
    computer='paper';
  }else if(random>=2/3 && random<1){
    computer='scissors';
  }
  return computer;
}