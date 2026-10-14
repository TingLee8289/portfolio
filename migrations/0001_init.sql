CREATE TABLE jokes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  text_zh TEXT NOT NULL,
  text_en TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT INTO jokes (text_zh, text_en) VALUES
  ('程式設計師為什麼分不清萬聖節和聖誕節？因為 Oct 31 == Dec 25。', 'Why do programmers confuse Halloween with Christmas? Because Oct 31 == Dec 25.'),
  ('我的程式沒有 bug，只是有一些意料之外的功能。', 'My code doesn''t have bugs. It just has some unexpected features.'),
  ('問：程式設計師最怕什麼？答：沒有 bug，因為那代表他根本不知道自己哪裡寫錯。', 'Q: What does a programmer fear most? A: No bugs, because it means they have no idea what they got wrong.'),
  ('SQL 查詢走進酒吧，看到兩張桌子，問：「我可以 JOIN 你們嗎？」', 'A SQL query walks into a bar, sees two tables and asks: "Can I JOIN you?"'),
  ('有 10 種人：懂二進位的，和不懂二進位的。', 'There are 10 types of people: those who understand binary and those who don''t.'),
  ('我本來想講一個關於 UDP 的笑話，但不確定你有沒有收到。', 'I would tell you a UDP joke, but you might not get it.'),
  ('改 bug 的三個階段：這不可能 → 在我電腦上沒問題 → 原來是我寫的。', 'Three stages of debugging: that''s impossible → it works on my machine → oh, I wrote that.'),
  ('Git commit 訊息寫「fix」的人，三個月後會看不懂自己改了什麼。', 'The person who writes "fix" as a commit message will not understand the change three months later.');
