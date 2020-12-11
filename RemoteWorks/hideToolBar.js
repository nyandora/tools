// 対象ホスト：webrd995.remoteworks.jp
(function(){

  $("#app-nav").offset({top: -35});

  var timeoutHandle

  $("#app-nav").mouseenter(function(){
    $this = $(this);

    timeoutHandle = setTimeout(function(){
      $this.offset({top: 0});
    }, 500);
  });

  $("#app-nav").mouseleave(function(){
    $this = $(this);
    $this.offset({top: -35});

    clearTimeout(timeoutHandle);
  });

})();

