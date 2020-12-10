#IfWinActive, 制御中 (Pxxxxx) ; RemoteViewのタブで操作してる時だけ、ホットキーが有効となるようにする。Pxxxxxの部分はご自身のものに変更してください。
Esc::Return ; Escボタンを誤って押して画面最大化が解除されるのを防ぐ。
LWin::Return ; Windowsボタンを誤って押して、接続元PCでWindowsメニューが開いてしまうのを防ぐ。
!Tab::Return ; Alt + Tabを誤って押して、接続元PCでAlt + Tabが反応してしまうのを防ぐ。
^9::Send, win-password{Enter} ; Ctrl + 0で、接続先PCのWindowsのパスワード入力+Enter押下を自動で行う。windows-passwordの部分はご自身のものに変更してください。
#IfWinActive
