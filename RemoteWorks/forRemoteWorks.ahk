#IfWinActive, RemoteWorks Browse
!Tab::!q
!F4::!4
#r::#+r
#d::#+d
#e::#+e
Esc::^e
^+UP::Return
^+DOWN::Return
^+LEFT::Return
^+RIGHT::Return
^9::Send, win-password{Enter} ; Ctrl + 9で、接続先PCのWindowsのパスワード入力+Enter押下を自動で行う。passwordはご自身のものに変更してください。
#IfWinActive
