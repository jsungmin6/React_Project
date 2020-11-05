//customName 변수는 "Enter custom name" 텍스트 필드 값을 저장
const customName = document.getElementById('customname');

//randomize 변수에는 "Generate random story" 버튼 오브젝트를 저장
const randomize = document.querySelector('.randomize');

//story 변수에 저장하며 해당 엘리먼트에는 랜덤한 이야기가 복사됩니다
const story = document.querySelector('.story');

//randomValueFromArray() 함수는 배열을 가져와서 배열이 가진 항목 중 하나를 랜덤하게 반환합니다.
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`

var insertX = ['Willy the Goblin',
    'Big Daddy',
    'Father Christmas']

var insertY = ['the soup kitchen',
    'Disneyland',
    'the White House']

var insertZ = ['spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away']


randomize.addEventListener('click', result);


function result() {

    var newStory = storyText

    var xItem=randomValueFromArray(insertX)
    var yItem=randomValueFromArray(insertY)
    var zItem=randomValueFromArray(insertZ)
    
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

    if(customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob',name);
    }
    
    if(document.getElementById("uk").checked) {
        let weight = Math.round(300*0.0714286);
        newStory = newStory.replace('300',weight+' stones');
        let temperature =  Math.round((94-32)*5/9);
        newStory = newStory.replace('94',temperature+' centigrade');
    }
    
    story.textContent = newStory;
    story.style.visibility = 'visible';
}