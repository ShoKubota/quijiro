false_answers = ['ラーメン二郎 品川店', 'ラーメン二郎 京急川崎店', 'ラーメン二郎 八王子野猿街道店', 'ラーメン二郎 三田本店', 'ラーメン二郎 横浜関内店', 'ラーメン二郎 千葉店', 'ラーメン二郎 亀戸店', 'ラーメン二郎 池袋店', 'ラーメン二郎 相模大野店', 'ラーメン二郎 仙川店', 'ラーメン二郎 神保町店']

question_akahige = Question.create(
  title: 'このラーメンはどの店舗？',
  body: '赤ひげラーメンは、横浜市磯子にある、スタンダードな二郎系ラーメンを提供している。Googleの評価は驚異の4.3。横浜、いや関東含めてもこんなに高い数字は珍しい。この数字から分かる通り、ラーメンは爆発的にうまい。うまみを感じるスープ、小麦感や太さが絶妙な麺、柔らかい豚。そして、二郎らしからぬ温かい接客。どれをとっても100点のお店だ。',
  score: 10
)

#apiモードで画像を参照する場合どうするのか
2.times do 
  false_answer = false_answers.sample
  false_answer_akahige = question_akahige.answers.create(
    title: false_answer,
    correction: :false
  )
end

true_answer_akahige = question_akahige.answers.create(
  title: '赤ひげラーメン',
  correction: :true
)

p '赤ひげラーメンの問題と回答を作成しました'

question_butayama_nakano = Question.create(
  title: 'このラーメンはどの店舗？',
  body: 'ラーメン豚山は、横浜市磯子にある、スタンダードな二郎系ラーメンを提供している。Googleの評価は驚異の4.3。横浜、いや関東含めてもこんなに高い数字は珍しい。この数字から分かる通り、ラーメンは爆発的にうまい。うまみを感じるスープ、小麦感や太さが絶妙な麺、柔らかい豚。そして、二郎らしからぬ温かい接客。どれをとっても100点のお店だ。',
  score: 10
)

#apiモードで画像を参照する場合どうするのか
2.times do 
  false_answer = false_answers.sample
  false_answer_question_butayama_nakano = question_butayama_nakano.answers.create(
    title: false_answer,
    correction: :false
  )
end

true_answer_butayama_nakano = question_butayama_nakano.answers.create(
  title: 'ラーメン豚山 中野店',
  correction: :true
)

p 'ラーメン豚山 中野店の問題と回答を作成しました'

question_hibari = Question.create(
  title: 'このラーメンはどの店舗？',
  body: '赤ひげラーメンは、横浜市磯子にある、スタンダードな二郎系ラーメンを提供している。Googleの評価は驚異の4.3。横浜、いや関東含めてもこんなに高い数字は珍しい。この数字から分かる通り、ラーメンは爆発的にうまい。うまみを感じるスープ、小麦感や太さが絶妙な麺、柔らかい豚。そして、二郎らしからぬ温かい接客。どれをとっても100点のお店だ。',
  score: 10
)

#apiモードで画像を参照する場合どうするのか
2.times do 
  false_answer = false_answers.sample
  false_answer_question_hibari = question_hibari.answers.create(
    title: false_answer,
    correction: :false
  )
end

true_answer_hibari = question_hibari.answers.create(
  title: 'ラーメン二郎 ひばりヶ丘',
  correction: :true
)

p 'ラーメン二郎 ひばりヶ丘店の問題と回答を作成しました'

