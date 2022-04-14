const $input = document.querySelector('input')
const $button = document.querySelector('button')

const onInput = event => {
  search = event.target.value
  console.log(search)
}

const onClickButton = (e) => {
  e.preventDefault();
  window.location.href = "https://twitter.com/search?q=" + search
  
//위너
+ "%23위EAT_인EAT OR"
+ "%23승윤이의_맛집_PAGE OR"
+ "%23이맛집_찐받네 OR"
+ "%23마이노_마이무 OR"
+ "%23훈슐랭_여기도가봤니 OR"

//세븐틴
+ "%23정한아_마니머거여ㅎㅎ OR"
+ "%23조슈아_먹어보슈아 OR"
+ "%23순영아_이거_맛있어 OR"
+ "%23원우야_여기_테이스티 OR"
+ "%23도겸이도_도아할_맛집 OR"
+ "%23민규라고치고_디너쇼해도돼 OR"

//엔시티
+ "%23박지성_단1g도안줌 OR"
+ "%23제노의_맛그당어 OR"
+ "%23나나의_맛집탐방기 OR"
+ "%23정우의_원데이씩스밀 OR"
+ "%23먹어봤도영 OR"
+ "%23골라마디쉬 OR"
+ "%23너무너무맛있잼 OR"
+ "%23재혀니_맛있게머겅 OR"
+ "%23먹다가_해찬이_생각이나신거예요 OR"
+ "%23마크한테만공개 OR"
+ "%23런쥔아_밥무거쒀 OR"

//엑소
+ "%23백현이를_위한_맛집투어 OR"

//몬스타엑스
+ "%23#몬베베가_몬베베에게_추천하는_맛집 OR"
+ "%23#채형원_너는세입도못먹겠지 OR"

//방탄
+ "%23지민이와_밥밥밥을먹어요 OR"
+ "%23정국아_같이먹짱 OR"
+ "%23머거스트디 OR"
+ "%23뷔슐랭 OR"

+ "%23기범아_나혼자먹는거_아니야 OR"
+ "%23ㄷㅂㅇㅈ OR"
+ "%23이션같이찌자 OR"
+ "%23오늘은웬디여기 OR"
+ "%23강다니엘_염염긋 OR"
+ "%23우석아_맛집으로_우따따따 OR"
+ "%23승연아_우즈야_여기야 OR"
+ "%23황제님을위한메뉴판 OR"
+ "%23예의있게_추천해 OR"
+ "%23지훈아_여기가_맛있지훈 OR"
+ "%23김재환_밥은_잘먹고있냐 OR"
  
+  "&src=typed_query";
}

$input.addEventListener('input', onInput)
$button.addEventListener('click', onClickButton)