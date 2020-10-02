// 画面上部にある邪魔なアレを隠す。

const head = document.getElementsByTagName('head')
const script = document.createElement('script')
script.setAttribute('src', 'https://code.jquery.com/jquery-3.5.1.min.js')
script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {
  setTimeout(() => {setUpToolbar();}, 1000);
})

document.head.appendChild(script)

function setUpToolbar($toolbar) {
  $toolbar = $(".wv-ui-toolbar");

  // ツールバーが表示されるまで待つ。
  if($toolbar.length === 0) {
    setTimeout(() => {setUpToolbar()}, 1000);
    return;
  } 

  // 全画面表示
  $(".wv-ui-toolbar__item-group").find(".wv-ui-toolbar__item-wrap").eq(-3).find(".wv-ui-toolbar__item").click();


  $toolbar.offset({top: -43});

  var timeoutHandle

  $toolbar.mouseenter(function(){
    $this = $(this);

    timeoutHandle = setTimeout(function(){
      $this.offset({top: 0});
    }, 500);
  });

  $toolbar.mouseleave(function(){
    $this = $(this);
    $this.offset({top: -43});

    clearTimeout(timeoutHandle);
  });
}
