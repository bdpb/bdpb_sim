/*
 * キャラクター毎の初期値テーブル
 * 値にはキャラクターアビリティの補正は含めない
 */
var tblCharaMaster = [
  [ // N
    [ "未選択", 84, 19, 16, 16, 16, 16, 16, 16, "未選択" ],
    [ "ニコル・エニグマ",                    78, 23, 16, 20, 16, 16, 20, 16, "知性UP Lv1 (知性+3)" ],
    [ "アイア・ヴァイダス",                  84, 15, 16, 18, 16, 18, 18, 16, "体力UP Lv1 (体力+3)" ],
    [ "アイダ・スルー",                      84, 15, 18, 18, 16, 16, 16, 20, "獲得JEXP UP Lv1 (JEXP+10%)" ],
    [ "アキーア・ベディ",                    84, 15, 16, 16, 16, 16, 20, 18, "素早さUP Lv1 (素早さ+3)" ],
    [ "アニタ・モニカ",                      90, 15, 16, 16, 18, 18, 20, 16, "HP UP Lv1 (HP+15%)" ],
    [ "アンナ・ディーラ",                    78, 19, 16, 20, 18, 18, 20, 18, "睡眠無効" ],
    [ "イェーニ・カエール",                  84, 15, 16, 16, 16, 18, 18, 18, "素早さUP Lv1 (素早さ+3)" ],
    [ "イルマ・キャロット",                  84, 15, 16, 16, 16, 18, 18, 16, "水属性半減" ],
    [ "ヴィエラ・コルピト",                  84, 15, 18, 18, 18, 18, 18, 16, "体力UP Lv1 (体力+3)" ],
    [ "エイブラム・ディープ",                78, 15, 18, 16, 18, 18, 16, 16, "HP UP Lv1 (HP+15%)" ],
    [ "エドガー・ナロウ",                    84, 15, 18, 16, 18, 18, 18, 16, "沈黙無効" ],
    [ "エメラルダ・ヒトミ",                  78, 19, 16, 18, 16, 20, 18, 16, "素早さUP Lv1 (素早さ+3)" ],
    [ "エンディ・チャ・フェレーゴ",          78, 19, 16, 18, 20, 20, 16, 18, "精神UP Lv1 (精神+3)" ],
    [ "ガストン・パウアー",                  84, 19, 16, 16, 20, 18, 18, 20, "銃威力UP Lv1 (銃攻撃力+10%)" ],
    [ "カタリーナ・ガデス",                  84, 15, 16, 16, 16, 18, 16, 16, "闇属性半減" ],
    [ "カティーナ・ボディ",                  78, 23, 16, 18, 16, 16, 20, 18, "素早さUP Lv1 (素早さ+3)" ],
    [ "カラ・サガス",                        78, 23, 15, 15, 15, 23, 19, 15, "MP UP Lv1 (MP+15%)" ],
    [ "ガンダル・パレード",                  84, 15, 18, 20, 18, 18, 18, 16, "斧威力UP Lv1 (斧攻撃力+10%)" ],
    [ "キュロス・ミディアウェイ",            78, 23, 16, 20, 16, 16, 20, 16, "知性UP Lv1 (知性+3)" ],
    [ "キューティー・イアー",                78, 19, 16, 18, 16, 20, 18, 16, "沈黙無効" ],
    [ "グレープ・イーガン",                  84, 15, 18, 18, 16, 18, 20, 18, "短剣威力UP Lv1 (剣攻撃力+10%)" ],
    [ "グレネド・ミリティアリア",            84, 15, 18, 18, 16, 18, 16, 16, "暗闇無効" ],
    [ "コウ・オウ",                          82, 21, 16, 18, 18, 18, 18, 16, "知性UP Lv1 (知性+3)" ],
    [ "サイラス・フェザー",                  84, 19, 18, 16, 16, 18, 16, 16, "精神UP Lv1 (精神+3)" ],
    [ "ジェシカ・ファーム",                  90, 15, 18, 16, 20, 16, 16, 16, "力UP Lv1 (力+3)" ],
    [ "ジェーバー・アルベルト",              78, 19, 18, 16, 18, 18, 18, 16, "闇属性半減" ],
    [ "ジェニー・シュライン",                84, 15, 16, 16, 16, 16, 18, 16, "光属性半減" ],
    [ "ジェンソン・ライラック",              84, 15, 16, 16, 20, 18, 16, 18, "土半減" ],
    [ "シュバルツ・ボルド",                  84, 19, 18, 16, 18, 18, 18, 16, "器用さUP Lv1 (器用さ+3)" ],
    [ "セシリー・アント",                    78, 19, 18, 20, 16, 16, 16, 18, "毒無効" ],
    [ "ソニア・イースト",                    84, 15, 20, 20, 16, 16, 16, 18, "即死無効" ],
    [ "ダーミア・ベイラ",                    78, 23, 16, 20, 16, 16, 18, 16, "MP UP Lv1 (MP+15%)" ],
    [ "ダドリィ・ファーム",                  84, 19, 18, 18, 16, 18, 16, 16, "力UP Lv1 (力+3)" ],
    [ "ダニエル・ボギー",                    90, 15, 18, 16, 18, 20, 16, 16, "斧威力UP Lv1 (斧攻撃力+10%)" ],
    [ "チャーリー・ゼット",                  90, 15, 18, 16, 16, 18, 16, 16, "力UP Lv1 (力+3)" ],
    [ "デボラ・ムース",                      84, 15, 18, 16, 18, 18, 16, 16, "風属性半減" ],
    [ "ニッキー・アーネスト",                84, 15, 20, 16, 18, 18, 16, 16, "体力UP Lv1 (体力+3)" ],
    [ "ノーヴェ・ジ・オール",                78, 19, 16, 18, 20, 20, 18, 16, "知性UP Lv1 (知性+3)" ],
    [ "バゼル・オットー",                    78, 19, 16, 16, 20, 18, 20, 18, "素早さUP Lv1 (素早さ+3)" ],
    [ "ヒューゴ・ポメラ",                    84, 15, 18, 16, 18, 18, 18, 16, "素早さUP Lv1 (素早さ+3)" ],
    [ "ビリー・ドッグ",                      78, 19, 20, 16, 16, 18, 16, 16, "剣威力UP Lv1 (剣攻撃力+10%)" ],
    [ "ヒルデ・ガード",                      78, 15, 18, 16, 16, 18, 18, 16, "精神UP Lv1 (精神+3)" ],
    [ "ファニー・バトン",                    90, 15, 20, 16, 18, 18, 16, 16, "槍威力UP Lv1 (槍攻撃力+10%)" ],
    [ "フランシス・フェーダ",                78, 19, 16, 16, 20, 20, 20, 16, "沈黙無効" ],
    [ "ブロッサム・ジス",                    84, 19, 16, 20, 18, 16, 16, 16, "獲得pq UP Lv1 (pq+10%)" ],
    [ "ヘリア・カーブ",                      78, 15, 16, 18, 18, 18, 16, 16, "器用さUP Lv1 (器用さ+3)" ],
    [ "ヘルマ・レールズ",                    78, 21, 16, 16, 20, 20, 18, 18, "MP UP Lv1 (MP+15%)" ],
    [ "ポーロ・メタリア",                    78, 19, 16, 18, 18, 20, 18, 18, "沈黙無効" ],
    [ "マギー・キャンサー",                  84, 15, 18, 16, 18, 16, 16, 18, "格闘威力UP Lv1 (格闘攻撃力+10%)" ],
    [ "メイジー・ウィナー",                  84, 15, 18, 16, 16, 18, 16, 18, "弓威力UP Lv1 (弓攻撃力+10%)" ],
    [ "メーヴィス・バーリー",                90, 15, 16, 16, 18, 20, 16, 18, "睡眠無効" ],
    [ "メーガン・リーダス",                  78, 19, 16, 18, 20, 18, 18, 18, "獲得JEXP UP Lv1 (JEXP+10%)" ],
    [ "モーリス・チョップ",                  87, 19, 18, 18, 16, 16, 18, 18, "力UP Lv1 (力+3)" ],
    [ "モーリン・モリガン",                  78, 15, 16, 18, 20, 18, 16, 20, "器用さUP Lv1 (器用さ+3)" ],
    [ "モドラ・ボッソ",                      78, 19, 16, 16, 18, 18, 18, 16, "知性UP Lv1 (知性+3)" ],
    [ "ユアン・ウィード",                    84, 19, 20, 16, 16, 18, 18, 16, "暗闇無効" ],
    [ "ライタ・ヴァーナン",                  84, 15, 18, 18, 16, 18, 20, 18, "素早さUP Lv1 (素早さ+3)" ],
    [ "ラッセル・マナー",                    84, 15, 18, 16, 18, 18, 16, 18, "麻痺無効" ],
    [ "リリー・エイプリル",                  84, 19, 18, 18, 16, 16, 16, 16, "獲得EXP UP Lv1 (EXP+10%)" ],
    [ "レイナ・リスク",                      78, 23, 15, 15, 23, 19, 19, 15, "ストップ無効" ],
    [ "ロナルド・ディレクト・Jr",            84, 15, 16, 18, 16, 18, 20, 18, "HP UP Lv1 (HP+15%)" ],
    [ "ロラン・バック",                      78, 19, 16, 16, 18, 18, 16, 18, "精神UP Lv1 (精神+3)" ],
    [ "ワーニ・ギャワラン",                  84, 15, 20, 16, 16, 16, 18, 16, "力UP Lv1 (力+3)" ],
    [ "エミリィ・シーマー",                  84, 15, 20, 20, 16, 18, 18, 18, "毒付加" ],
    [ "S.シロ",                              84, 19, 16, 18, 16, 18, 20, 20, "銃威力UP Lv1 (銃攻撃力+10%)" ],
    [ "テリア・ヴィジョン",                  84, 15, 20, 18, 16, 16, 20, 20, "雷属性半減" ],
  ],

  [ // R
    [ "未選択", 84, 19, 18, 18, 18, 18, 18, 18, "未選択" ],
    [ "ヌビアー・ボルド",                    90, 19, 18, 16, 18, 20, 18, 16, "斧威力UP Lv2 (斧攻撃力+15%)" ],
    [ "シャロン・ホーン",                    82, 18, 18, 18, 16, 18, 20, 20, "体力UP Lv2 (体力+6)" ],
    [ "アシュリー・ベス",                    84, 19, 18, 18, 16, 18, 20, 20, "弓威力UP Lv2 (弓攻撃力+15%)" ],
    [ "アドラ・パーフォー",                  82, 23, 16, 18, 22, 18, 20, 16, "素早さUP Lv2 (素早さ+6)" ],
    [ "ウッディ・ソーラ",                    89, 22, 18, 22, 20, 20, 20, 18, "火属性無効" ],
    [ "エイジ・ダグレス",                    84, 15, 19, 23, 19, 15, 19, 19, "槍威力UP Lv2 (槍攻撃力+15%)" ],
    [ "エリテ・フォーフォロント",            78, 23, 16, 20, 20, 16, 20, 18, "MP UP Lv2 (MP+30%)" ],
    [ "エリヤ・ビー",                        84, 19, 18, 16, 18, 20, 18, 18, "刀威力UP Lv2 (刀攻撃力+15%)" ],
    [ "オパール・サマンダ",                  84, 18, 18, 20, 16, 20, 20, 20, "力UP Lv2 (力+6)" ],
    [ "カーラ・ゴルゴス",                    78, 23, 16, 20, 16, 18, 20, 16, "沈黙無効" ],
    [ "ガルダ・クリムゾン",                  78, 27, 16, 18, 20, 22, 20, 18, "知性UP Lv2 (知性+6)" ],
    [ "カルメン・マウス",                    90, 15, 18, 22, 16, 18, 16, 18, "剣威力UP Lv2 (剣攻撃力+15%)" ],
    [ "キャスト・クルツ",                    90, 15, 20, 18, 20, 20, 16, 16, "器用さUP Lv2 (器用さ+6)" ],
    [ "キョウジュ・ジョン",                  78, 23, 16, 18, 20, 20, 20, 16, "知性UP Lv2 (知性+6)" ],
    [ "クール",                              84, 15, 23, 23, 19, 15, 15, 19, "HP UP Lv2 (HP+30%)" ],
    [ "ククミス・リーノ",                    84, 19, 18, 18, 18, 16, 20, 18, "暗闇無効" ],
    [ "クローン・ストン",                    82, 23, 16, 18, 22, 18, 18, 18, "素早さUP Lv2 (素早さ+6)" ],
    [ "クロシュ・ルイ",                      96, 15, 20, 16, 16, 20, 20, 16, "HP UP Lv2 (HP+30%)" ],
    [ "コネリア・サディーフ",                90, 15, 16, 16, 22, 18, 16, 20, "槍威力UP Lv2 (槍攻撃力+15%)" ],
    [ "ゴンドール・バーリー",                84, 23, 16, 20, 16, 18, 22, 16, "獲得JEXP UP Lv2 (JEXP+15%)" ],
    [ "シイマ・セイル",                      84, 19, 18, 16, 18, 20, 18, 16, "器用さUP Lv2 (器用さ+6)" ],
    [ "ジネット・オメリー",                  80, 26, 16, 16, 22, 20, 22, 16, "沈黙無効" ],
    [ "シュンソク・ノダ",                    84, 19, 20, 18, 22, 18, 18, 18, "短剣威力UP Lv2 (短剣攻撃力+15%)" ],
    [ "ストール・ミラー",                    84, 15, 18, 18, 20, 20, 16, 20, "獲得EXP UP Lv2 (EXP+15%)" ],
    [ "セシリア・クロック",                  78, 19, 18, 18, 18, 18, 20, 18, "短剣威力UP Lv2 (短剣攻撃力+15%)" ],
    [ "セス・ペイント",                      84, 23, 16, 18, 18, 20, 16, 18, "精神UP Lv2 (精神+6)" ],
    [ "ソーニャ・エステル",                  78, 23, 16, 20, 20, 16, 16, 22, "闇属性半減" ],
    [ "チキン・マイスター",                  84, 15, 18, 18, 22, 16, 16, 20, "素早さUP Lv2 (素早さ+6)" ],
    [ "ディープ・ダウン",                    90, 19, 22, 20, 16, 18, 20, 18, "火風属性半減" ],
    [ "デューオ・サンダ",                    78, 27, 16, 20, 16, 16, 20, 20, "即死無効" ],
    [ "テリア・ヴェンガル",                  90, 15, 22, 16, 18, 18, 18, 18, "火属性無効" ],
    [ "トリック・ストアー",                  90, 19, 18, 16, 20, 18, 18, 18, "槍威力UP Lv2 (槍攻撃力+15%)" ],
    [ "ナオ・ディカルゴ",                    84, 15, 18, 16, 18, 20, 20, 18, "剣威力UP Lv2 (剣攻撃力+15%)" ],
    [ "ネオスママ・ニーナ",                  84, 15, 18, 16, 18, 20, 18, 18, "即死無効" ],
    [ "ノーティ・マウス",                    84, 19, 16, 20, 18, 18, 18, 18, "体力UP Lv2 (体力+6)" ],
    [ "ハイ・カンゼム",                      84, 15, 20, 18, 20, 18, 18, 18, "HP UP Lv2 (HP+30%)" ],
    [ "パメラ・ソイル",                      90, 15, 19, 19, 19, 19, 19, 19, "弓威力UP Lv2 (弓攻撃力+15%)" ],
    [ "フォルフ・ワーカイ",                  96, 15, 20, 22, 16, 18, 20, 16, "体力UP Lv2 (体力+6)" ],
    [ "プリシラ・モリッジ",                  84, 23, 16, 18, 22, 20, 20, 18, "ファストステップ" ],
    [ "ヘイド・ティム",                      80, 29, 16, 16, 20, 18, 18, 18, "MP UP Lv2 (MP+30%)" ],
    [ "ベリー・ミャン",                      84, 19, 23, 15, 19, 19, 19, 19, "獲得pq UP Lv2 (pq+15%)" ],
    [ "ベリアル・イフ",                      84, 19, 20, 18, 16, 18, 20, 18, "格闘威力UP Lv2 (格闘攻撃力+15%)" ],
    [ "ポニー・ヴェーナ",                    90, 19, 20, 18, 18, 18, 18, 16, "麻痺無効" ],
    [ "マイ・アッシワヤィ",                  84, 15, 20, 20, 16, 16, 18, 20, "闇属性無効" ],
    [ "マルコ・レーン",                      80, 20, 20, 20, 16, 16, 20, 18, "力UP Lv2 (力+6)" ],
    [ "ミミィ・シャンシャン",                84, 19, 19, 19, 19, 19, 15, 19, "獲得EXP UP Lv2 (EXP+15%)" ],
    [ "ムム",                                90, 19, 18, 16, 20, 20, 18, 16, "地属性無効" ],
    [ "ライオ・カレフ",                      84, 19, 20, 16, 18, 18, 18, 18, "力UP Lv2 (力+6)" ],
    [ "ラウラ・サークル",                    84, 19, 16, 22, 18, 16, 20, 16, "精神UP Lv2 (精神+6)" ],
    [ "ラフ・リール",                        78, 23, 18, 20, 18, 16, 18, 18, "獲得pq UP Lv2 (pq+15%)" ],
    [ "リュド・エンジル",                    90, 15, 22, 16, 18, 20, 16, 16, "精神UP Lv2 (精神+6)" ],
    [ "リンゲス・ニートル",                  84, 15, 19, 23, 19, 15, 19, 19, "力UP Lv2 (力+6)" ],
    [ "ルーシー・イー",                      84, 19, 16, 18, 16, 18, 20, 18, "HP UP Lv2 (HP+30%)" ],
    [ "レアリー・ボイ",                      90, 15, 20, 16, 20, 22, 16, 16, "短剣威力UP Lv2 (短剣攻撃力+15%)" ],
    [ "レーア・アース",                      78, 23, 16, 18, 18, 20, 16, 20, "獲得JEXP UP Lv2 (JEXP+15%)" ],
    [ "レナード・サーベイ",                  78, 23, 18, 22, 20, 18, 20, 18, "水属性強化 Lv2" ],
    [ "ローズ・テージ",                      84, 19, 18, 18, 18, 16, 18, 20, "器用さUP Lv2 (器用さ+6)" ],
    [ "ログ・フレッシィ",                    84, 15, 18, 18, 18, 18, 18, 18, "MP UP Lv2 (MP+30%)" ],
    [ "ロザンナ・ラマナス",                  90, 15, 20, 20, 16, 18, 18, 16, "斧威力UP Lv2 (斧攻撃力+15%)" ],
    [ "ロロ・コモモ",                        78, 23, 18, 18, 16, 16, 20, 18, "獲得EXP UP Lv2 (EXP+15%)" ],
    [ "ワンス・ナウーフ",                    84, 19, 18, 20, 16, 20, 20, 16, "斧威力UP Lv2 (斧攻撃力+15%)" ],
  ],

  [ // R+
    [ "未選択",                              90, 23, 20, 20, 20, 20, 20, 20, "未選択" ],
    [ "モニカ・レス",                        84, 27, 15, 15, 27, 27, 15, 19, "知性UP Lv3 (知性+9)" ],
    [ "アイーダ・ミネ",                      90, 27, 16, 20, 18, 18, 22, 16, "知性UP Lv3 (知性+9)" ],
    [ "アベル・ドレール",                    90, 23, 22, 20, 16, 18, 20, 20, "剣威力UP Lv3 (剣攻撃力+20%)" ],
    [ "アミリー・ノエマ",                    90, 19, 22, 18, 18, 20, 18, 20, "剣威力UP Lv3 (剣攻撃力+20%)" ],
    [ "イエリ・アークト",                    90, 19, 20, 16, 22, 18, 18, 22, "器用さUP Lv3 (器用さ+9)" ],
    [ "ウォーリー・ウォーク",                96, 19, 27, 23, 19, 19, 15, 23, "格闘威力UP Lv3 (ナックル攻撃力+20%)" ],
    [ "エト・ドリップ",                      90, 23, 16, 22, 18, 18, 22, 18, "MP UP Lv3 (MP+45%)" ],
    [ "エモリーリ・デール",                  90, 19, 20, 18, 18, 20, 18, 20, "精神UP Lv3 (精神+9)" ],
    [ "エルンスト・キング",                  84, 23, 19, 19, 19, 23, 23, 23, "短剣威力UP Lv3 (短剣攻撃力+20%)" ],
    [ "カーリン・ジロット",                  96, 27, 18, 18, 18, 18, 18, 18, "短剣威力UP Lv3 (短剣攻撃力+20%)" ],
    [ "カミラ・クエール",                    78, 27, 15, 19, 27, 27, 19, 19, "風属性半減" ],
    [ "キャサリン・クローマ",                90, 19, 19, 23, 23, 23, 19, 19, "HP UP Lv3 (HP+45%)" ],
    [ "グレース・キー",                      90, 23, 22, 20, 18, 16, 18, 20, "力UP Lv3 (力+9)" ],
    [ "シスター・ブラック",                  84, 23, 20, 20, 18, 18, 20, 20, "HP UP Lv3 (HP+45%)" ],
    [ "ジュエリー・アン",                    78, 22, 20, 20, 18, 20, 22, 20, "精神UP Lv3 (精神+9)" ],
    [ "ジェニー・ライ",                      84, 23, 18, 20, 20, 18, 20, 18, "弓威力 Lv3 (弓攻撃力+20%)" ],
    [ "シャー・レック",                      96, 19, 22, 20, 16, 18, 20, 18, "斧威力UP Lv3 (斧攻撃力+20%)" ],
    [ "ジョー・マンマル",                    82, 23, 16, 18, 20, 22, 18, 22, "精神UP Lv3 (精神+9)" ],
    [ "シルヴィア・ボーグ",                  90, 23, 22, 16, 16, 20, 22, 20, "沈黙無効" ],
    [ "セリオ・マトム",                      90, 19, 20, 18, 20, 18, 20, 18, "剣威力UP Lv3 (剣攻撃力+20%)" ],
    [ "ダム・ドム",                          84, 23, 23, 19, 19, 19, 23, 23, "獲得JEXP UP Lv3 (JEXP+20%)" ],
    [ "チェリー・J・リィキナ",               84, 27, 16, 18, 22, 18, 18, 18, "MP UP Lv3 (MP+45%)" ],
    [ "トム・バトン",                        90, 19, 20, 20, 18, 20, 18, 18, "力UP Lv3 (力+9)" ],
    [ "トルエ・アマン",                      90, 23, 19, 19, 23, 23, 19, 19, "毒無効" ],
    [ "ドロル・ラーミナー",                  84, 23, 18, 20, 18, 20, 18, 20, "槍威力UP Lv3 (槍攻撃力+20%)" ],
    [ "ニトロ・チップス",                    90, 15, 20, 16, 20, 22, 20, 22, "器用さUP Lv3 (器用さ+9)" ],
    [ "ネス・エールト",                      80, 19, 22, 20, 18, 18, 22, 20, "力UP Lv3 (力+9)" ],
    [ "ノエマト・シード",                    90, 23, 16, 20, 20, 18, 20, 18, "HP UP Lv3 (HP+45%)" ],
    [ "バシオ・バシル",                      84, 19, 20, 18, 20, 20, 18, 20, "獲得pq UP Lv3 (pq+20%)" ],
    [ "ファー・フォルス",                    90, 23, 20, 20, 18, 18, 18, 18, "斧威力UP Lv3 (斧攻撃力+20%)" ],
    [ "フローズン・スロート",                84, 19, 22, 22, 16, 20, 18, 20, "格闘威力UP Lv3 (ナックル攻撃力+20%)" ],
    [ "ブラザー・ブラック",                  90, 23, 22, 20, 18, 18, 18, 18, "剣威力UP Lv3 (剣攻撃力+20%)" ],
    [ "ヘディック・ショーン",                84, 19, 18, 18, 20, 20, 20, 20, "体力UP Lv3 (体力+9)" ],
    [ "マデリン・ナイツ",                    96, 23, 22, 20, 18, 18, 20, 20, "自動リジェネ" ],
    [ "ユーア・ルミエル",                    84, 27, 20, 18, 20, 20, 18, 20, "HP UP Lv3 (HP+45%)" ],
    [ "ヨナ・グリーフ",                      90, 19, 23, 23, 19, 15, 27, 23, "獲得EXP UP Lv3 (EXP+20%)" ],
    [ "クラリス・アイミュー",                86, 27, 16, 18, 22, 20, 22, 20, "沈黙無効" ],
    [ "カゲロウ・ヤクシ",                    96, 24, 22, 22, 14, 18, 20, 20, "星のステップ Lv1" ],
    [ "シグレ・ライテイ",                   100, 27, 22, 22, 16, 19, 21, 21, "星のステップ Lv2" ],
    [ "ヘルマン・カペル",                    96, 24, 16, 18, 22, 22, 20, 18, "自動シェル" ],
    [ "リーゼロッテ・バーデン",              96, 27, 17, 20, 22, 22, 21, 19, "自動リフレク" ],
    [ "ソレイユ・キーラ",                    84, 23, 18, 20, 18, 22, 22, 22, "ホークアイ" ],
    [ "リュンヌ・キーラ",                    89, 26, 20, 22, 20, 24, 24, 24, "オールカウンター Lv3" ],
    [ "ヴィント・パー",                      90, 19, 22, 22, 18, 20, 20, 20, "ふんばる" ],
    [ "レーゲン・ドゥオ",                    95, 22, 24, 24, 20, 22, 22, 22, "プレッシャー" ],
    [ "ユーリア・ビッテンフェルト",          90, 19, 22, 20, 18, 18, 22, 22, "火事場力" ],
    [ "クロード・オダン",                    90, 23, 18, 20, 18, 20, 22, 22, "ホークアイ" ],
    [ "ライリー・ライリー",                  90, 23, 20, 20, 18, 20, 20, 22, "カウンター Lv2" ],
    [ "パウリー・フルート",                  96, 19, 20, 18, 18, 22, 22, 20, "虹のステップ Lv2" ],
    [ "ロザンナ・GW・ラマナス",              90, 15, 22, 20, 18, 20, 20, 22, "カウンター Lv1" ],
    [ "エリクシィ・ソワ",                    90, 19, 18, 20, 18, 20, 22, 22, "銃威力UP Lv3 (銃攻撃力+20%)" ],
    [ "アヴェリア・シトラス",                90, 27, 18, 22, 24, 24, 22, 20, "風属性強化 Lv3" ],
  ],

  [ // SR
    [ "未選択",                              96, 27, 22, 22, 22, 22, 22, 22, "未選択" ],
    [ "エリック・イノウ",                    96, 27, 22, 22, 22, 22, 22, 22, "HP UP Lv4 (HP+60%)" ],
    [ "ラウル・ワーリオ",                    96, 27, 22, 22, 22, 22, 22, 22, "斧威力UP Lv4 (斧攻撃力+25%)", "戦士" ],
    [ "ダニエラ・ワーリオ",                  96, 27, 22, 22, 22, 22, 22, 22, "力UP Lv4 (力+12)", "戦士" ],
    [ "ホーリー・ホワイト",                  96, 27, 22, 22, 22, 22, 22, 22, "精神UP Lv4 (精神+12)", "白魔道士" ],
    [ "オミノス・クロウ",                    96, 27, 22, 22, 22, 22, 22, 22, "知性UP Lv4 (知性+12)", "黒魔道士" ],
    [ "ベアリング・アウト",                  96, 27, 22, 22, 22, 22, 22, 22, "HP UP Lv4 (HP+60%)", "モンク" ],
    [ "アルジェント・ハインケル",            96, 27, 22, 22, 22, 22, 22, 22, "体力UP Lv4 (体力+12)", "ナイト" ],
    [ "ジャッカル",                          96, 27, 22, 22, 22, 22, 22, 22, "短剣威力UP Lv4 (短剣攻撃力+25%))", "シーフ" ],
    [ "イクマ・ナジット",                    96, 27, 22, 22, 22, 22, 22, 22, "剣威力UP Lv4 (剣攻撃力+25%)", "魔法剣士" ],
    [ "マルメ・コンダ・マヌマット8世",       96, 27, 22, 22, 22, 22, 22, 22, "MP UP Lv4 (MP+60%)", "時魔道士" ],
    [ "アルテミア・ヴィーナス",              96, 27, 22, 22, 22, 22, 22, 22, "弓威力UP Lv4 (弓攻撃力+25%)", "狩人" ],
    [ "エインフェリア・ヴィーナス",          96, 27, 22, 22, 22, 22, 22, 22, "槍威力UP Lv4 (槍攻撃力+25%)", "ヴァルキリー" ],
    [ "フィオーレ・ディローザ",              96, 27, 22, 22, 22, 22, 22, 22, "器用さUP Lv4 (器用さ+12)", "赤魔道士" ],
    [ "ハイレディン・バルバロッサ",          96, 27, 22, 22, 22, 22, 22, 22, "力UP Lv4 (力+12)", "海賊" ],
    [ "プリン・ア・ラ・モード",              96, 27, 22, 22, 22, 22, 22, 22, "素早さUP Lv4 (素早さ+12)", "スーパースター" ],
    [ "ノブツナ・カミイズミ",                96, 27, 22, 22, 22, 22, 22, 22, "刀威力UP Lv4 (刀攻撃力+25%)", "ソードマスター" ],
    [ "キキョウ・コノエ",                    96, 27, 22, 22, 22, 22, 22, 22, "素早さUP Lv4 (素早さ+12)", "忍者" ],
    [ "ヴィクトリア・F・シュタイン",         96, 27, 22, 22, 22, 22, 22, 22, "知性UP Lv4 (知性+12)", "魔人" ],
    [ "ヴィクター・S・コート",               96, 27, 22, 22, 22, 22, 22, 22, "精神UP Lv4 (精神+12)", "導師" ],
    [ "ブレイブ・リー",                      96, 27, 22, 22, 22, 22, 22, 22, "斧威力UP Lv4 (斧攻撃力+25%)", "聖騎士" ],
    [ "アナゼル・ディー",                    96, 27, 22, 22, 22, 22, 22, 22, "体力UP Lv4 (体力+12)", "暗黒騎士" ],
    [ "ドナルド・ニーツ",                    96, 27, 22, 22, 22, 22, 22, 22, "器用さUP Lv4 (器用さ+12)", "ガンナー" ],
    [ "アレックス・イエロー",                96, 27, 22, 22, 22, 22, 22, 22, "銃威力UP Lv4 (銃攻撃力+25%)", "ガンナー" ],
    [ "ガトー・オ・ショコラ",                96, 27, 22, 22, 22, 22, 22, 22, "器用さUP Lv4 (器用さ+12)" ],
    [ "ガレット・デ・ロワ",                  96, 27, 22, 22, 22, 22, 22, 22, "力UP Lv4 (力+12)" ],
    [ "ブッシュ・ド・ノエル",                96, 27, 22, 22, 22, 22, 22, 22, "素早さUP Lv4 (素早さ+12)" ],
    [ "パォン・デ・ロー",                    96, 27, 22, 22, 22, 22, 22, 22, "知性UP Lv4 (知性+12)" ],
    [ "リンファ・ソーナ",                    96, 27, 22, 22, 22, 22, 22, 22, "阿形 (物理攻撃に高確立反撃)" ],
    [ "シュモン・ムラト",                    96, 27, 22, 22, 22, 22, 22, 22, "矛盾の構え Lv4 (力+12,体力+12)" ],
    [ "シャオロン・ムラト",                  96, 27, 22, 22, 22, 22, 22, 22, "吽形 (魔法攻撃に高確立反撃)" ],
    [ "ロウ・ホイェン",                      96, 27, 22, 22, 22, 22, 22, 22, "天竜の構え Lv4 (力+20,素早さ+5,体力-4)" ],
    [ "モル・バラーマ",                      96, 27, 22, 22, 22, 22, 22, 22, "天網恢恢 (まれに自分への攻撃を無効化)" ],
    [ "リングアベル",                        96, 27, 22, 22, 22, 22, 22, 22, "リボン" ],
    [ "ダーク・ユースァ",                    96, 27, 22, 22, 22, 22, 22, 22, "星のステップ Lv3" ],
    [ "アネモア・ユースァ",                  96, 27, 22, 22, 22, 22, 22, 22, "韋駄天" ],
    [ "ガーナ・ユースァ",                    96, 27, 22, 22, 22, 22, 22, 22, "ふんばる" ],
    [ "レコ・ユースァ",                      96, 27, 22, 22, 22, 22, 22, 22, "雷属性強化 Lv4" ],
    [ "バレード・ユースァ",                  96, 27, 22, 22, 22, 22, 22, 22, "地竜の構え Lv4 (力+17,体力+9,素早さ-11)" ],
    [ "ウシム・カンダエ",                    96, 27, 22, 22, 22, 22, 22, 22, "自動リレイズ" ],
    [ "タズサエ・フズキケ",                  96, 27, 22, 22, 22, 22, 22, 22, "槍威力UP Lv4 (槍攻撃力+25%)" ],
    [ "サエス・アクチ",                      96, 27, 22, 22, 22, 22, 22, 22, "短剣威力UP Lv4 (短剣攻撃力+25%)" ],
    [ "タキマ・ソルジ",                      96, 27, 22, 22, 22, 22, 22, 22, "阿形 (物理攻撃に高確立反撃)" ],
    [ "ヒズモシ・ウタエ",                    96, 27, 22, 22, 22, 22, 22, 22, "自動プロテス" ],
  ],

  [ // SR+
    [ "未選択",                             102, 32, 24, 24, 24, 24, 24, 24, "未選択" ],
    [ "アニエス・オブリージュ",             102, 31, 24, 24, 24, 24, 24, 24, "MP UP Lv5 (MP+75%)" ],
    [ "イグリア・ニングヴァ・オブリージュ", 102, 31, 24, 24, 24, 24, 24, 24, "知性UP Lv5 (知性+15)" ],
    [ "イデア・リー・オブリージュ",         102, 31, 24, 24, 24, 24, 24, 24, "精神UP Lv5 (精神+15)" ],
    [ "イデア・リー",                       102, 31, 24, 24, 24, 24, 24, 24, "力UP Lv5 (力+15)" ],
    [ "ティズ・オーリア",                   102, 31, 24, 24, 24, 24, 24, 24, "剣威力UP Lv5 (剣攻撃力+30%)" ],
    [ "リリア・ド・ロッソ・オブリージュ",   102, 31, 24, 24, 24, 24, 24, 24, "MP UP Lv5 (MP+75%)" ],
    [ "キューリ・オブリージュ",             102, 31, 24, 24, 24, 24, 24, 24, "弓威力UP Lv5 (弓攻撃力+30%)" ],
    [ "リングアベル",                       102, 31, 24, 24, 24, 24, 24, 24, "素早さUP Lv5 (素早さ+15)" ],
  ],
];

// アスタリスク毎のパラメータ上昇率テーブル
var tblAstarisk = [
  // name,           HP,  MP, STR, VIT, INT, MEN, AGI, DEX,   HP,   MP,  STR,  VIT,  INT,  MEN,  AGI,  DEX
  ["すっぴん",        3,   3,   3,   3,   3,   5,   3,   3, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00, 1.00 ],
  ["戦士",            5,   3,   7,   5,   3,   5,   5,   5, 1.10, 1.05, 1.15, 1.10, 1.05, 1.10, 1.10, 1.10 ],
  ["白魔道士",        3,   7,   3,   5,   5,   7,   5,   5, 1.05, 1.15, 1.05, 1.10, 1.10, 1.15, 1.10, 1.10 ],
  ["黒魔道士",        3,   7,   3,   3,   7,   5,   6,   5, 1.05, 1.15, 1.00, 1.05, 1.15, 1.10, 1.15, 1.10 ],
  ["モンク",          7,   3,   7,   5,   5,   3,   6,   5, 1.15, 1.05, 1.15, 1.10, 1.00, 1.05, 1.15, 1.10 ],
  ["ナイト",          7,   3,   5,   7,   5,   5,   5,   5, 1.15, 1.05, 1.10, 1.15, 1.10, 1.10, 1.10, 1.10 ],
  ["シーフ",          5,   5,   5,   5,   5,   5,   7,   7, 1.10, 1.10, 1.10, 1.10, 1.10, 1.10, 1.20, 1.15 ],
  ["魔法剣士",        5,   5,   5,   5,   7,   7,   5,   7, 1.10, 1.10, 1.10, 1.10, 1.15, 1.15, 1.10, 1.15 ],
  ["時魔道士",        5,   7,   3,   5,   7,   7,   5,   5, 1.10, 1.15, 1.05, 1.10, 1.15, 1.15, 1.10, 1.10 ],
  ["狩人",            5,   5,   5,   5,   5,   5,   6,  10, 1.10, 1.10, 1.10, 1.10, 1.10, 1.10, 1.15, 1.20 ],
  ["ヴァルキリー",    7,   5,   7,   7,   5,   7,   5,   5, 1.15, 1.15, 1.15, 1.15, 1.15, 1.15, 1.10, 1.10 ],
  ["赤魔道士",        5,   7,   5,   5,   7,   7,   6,   7, 1.10, 1.15, 1.10, 1.10, 1.15, 1.15, 1.15, 1.15 ],
  ["海賊",            7,   3,   7,   7,   5,   5,   5,   5, 1.15, 1.05, 1.15, 1.15, 1.10, 1.10, 1.10, 1.10 ],
  ["スーパースター",  7,   7,   5,   3,   5,   7,   6,   7, 1.15, 1.15, 1.10, 1.15, 1.10, 1.15, 1.15, 1.15 ],
  ["ソードマスター",  7,   5,   7,   7,   7,   7,   6,  10, 1.15, 1.10, 1.15, 1.15, 1.15, 1.15, 1.15, 1.20 ],
  ["忍者",            7,   5,   5,   5,   7,   7,   7,  10, 1.15, 1.15, 1.10, 1.10, 1.15, 1.15, 1.20, 1.20 ],
  ["魔人",            5,  10,   3,   5,  10,  10,   6,   7, 1.10, 1.20, 1.05, 1.10, 1.20, 1.20, 1.15, 1.15 ],
  ["導師",            7,  10,   5,   7,   7,  10,   5,   5, 1.15, 1.20, 1.10, 1.15, 1.15, 1.20, 1.10, 1.10 ],
  ["聖騎士",         10,   7,  10,  10,   7,   7,   5,   7, 1.20, 1.15, 1.20, 1.20, 1.15, 1.15, 1.10, 1.15 ],
  ["暗黒騎士",       10,   5,  10,   7,   7,   7,   6,  10, 1.20, 1.10, 1.20, 1.15, 1.15, 1.15, 1.15, 1.20 ],
  ["ガンナー",        5,   5,   5,   7,   5,   7,   7,  10, 1.10, 1.10, 1.10, 1.15, 1.10, 1.15, 1.15, 1.20 ],
];

// HPの上昇率テーブル
var tblHP = [
  { 3:10, 5:12, 7:13, 10:16, },  // 2
  { 3:11, 5:13, 7:15, 10:18, },  // 3
  { 3:13, 5:15, 7:17, 10:20, },  // 4
  { 3:13, 5:15, 7:17, 10:20, },  // 5
  { 3:14, 5:16, 7:18, 10:22, },  // 6
  { 3:15, 5:18, 7:20, 10:24, },  // 7
  { 3:15, 5:18, 7:20, 10:24, },  // 8
  { 3:16, 5:19, 7:22, 10:26, },  // 9
  { 3:16, 5:19, 7:22, 10:26, },  // 10
  { 3:18, 5:21, 7:23, 10:28, },  // 11
  { 3:19, 5:22, 7:25, 10:30, },  // 12
  { 3:19, 5:22, 7:25, 10:30, },  // 13
  { 3:20, 5:24, 7:27, 10:32, },  // 14
  { 3:20, 5:24, 7:27, 10:32, },  // 15
  { 3:22, 5:25, 7:28, 10:34, },  // 16
  { 3:23, 5:27, 7:30, 10:36, },  // 17
  { 3:23, 5:27, 7:30, 10:36, },  // 18
  { 3:24, 5:28, 7:32, 10:38, },  // 19
  { 3:24, 5:28, 7:32, 10:38, },  // 20
  { 3:26, 5:30, 7:34, 10:40, },  // 21
  { 3:28, 5:31, 7:35, 10:42, },  // 22
  { 3:28, 5:31, 7:35, 10:42, },  // 23
  { 3:30, 5:33, 7:37, 10:44, },  // 24
  { 3:30, 5:33, 7:37, 10:44, },  // 25
  { 3:29, 5:34, 7:39, 10:46, },  // 26
  { 3:31, 5:36, 7:40, 10:48, },  // 27
  { 3:31, 5:36, 7:40, 10:48, },  // 28
  { 3:32, 5:37, 7:42, 10:50, },  // 29
  { 3:32, 5:37, 7:42, 10:50, },  // 30
  { 3:33, 5:39, 7:44, 10:52, },  // 31
  { 3:35, 5:40, 7:45, 10:54, },  // 32
  { 3:35, 5:40, 7:45, 10:54, },  // 33
  { 3:36, 5:42, 7:47, 10:56, },  // 34
  { 3:36, 5:42, 7:47, 10:56, },  // 35
  { 3:37, 5:43, 7:49, 10:58, },  // 36
  { 3:39, 5:45, 7:51, 10:60, },  // 37
  { 3:36, 5:42, 7:47, 10:56, },  // 38
  // ここからは下はダミー
  { 3:36, 5:42, 7:47, 10:56, },  // 39
  { 3:36, 5:42, 7:47, 10:56, },  // 40
];

// MPの上昇率テーブル
var tblMP = [
  { 3:2, 5:3, 7:3, 10:4,  },  // 2
  { 3:2, 5:3, 7:3, 10:4,  },  // 3
  { 3:2, 5:3, 7:3, 10:4,  },  // 4
  { 3:2, 5:3, 7:3, 10:4,  },  // 5
  { 3:2, 5:3, 7:3, 10:4,  },  // 6
  { 3:3, 5:4, 7:5, 10:6,  },  // 7
  { 3:3, 5:4, 7:5, 10:6,  },  // 8
  { 3:3, 5:4, 7:5, 10:6,  },  // 9
  { 3:3, 5:4, 7:5, 10:6,  },  // 10
  { 3:3, 5:4, 7:5, 10:6,  },  // 11
  { 3:3, 5:4, 7:5, 10:6,  },  // 12
  { 3:3, 5:4, 7:5, 10:6,  },  // 13
  { 3:3, 5:4, 7:5, 10:6,  },  // 14
  { 3:3, 5:4, 7:5, 10:6,  },  // 15
  { 3:3, 5:4, 7:5, 10:6,  },  // 16
  { 3:3, 5:4, 7:5, 10:6,  },  // 17
  { 3:3, 5:4, 7:5, 10:6,  },  // 18
  { 3:3, 5:4, 7:5, 10:6,  },  // 19
  { 3:3, 5:4, 7:5, 10:6,  },  // 20
  { 3:5, 5:6, 7:6, 10:8,  },  // 21
  { 3:5, 5:6, 7:6, 10:8,  },  // 22
  { 3:5, 5:6, 7:6, 10:8,  },  // 23
  { 3:5, 5:6, 7:6, 10:8,  },  // 24
  { 3:5, 5:6, 7:6, 10:8,  },  // 25
  { 3:5, 5:6, 7:6, 10:8,  },  // 26
  { 3:5, 5:6, 7:6, 10:8,  },  // 27
  { 3:5, 5:6, 7:6, 10:8,  },  // 28
  { 3:5, 5:6, 7:6, 10:8,  },  // 29
  { 3:5, 5:6, 7:6, 10:8,  },  // 30
  { 3:5, 5:6, 7:6, 10:8,  },  // 31
  { 3:5, 5:6, 7:6, 10:8,  },  // 32
  { 3:5, 5:6, 7:6, 10:8,  },  // 33
  { 3:5, 5:6, 7:6, 10:8,  },  // 34
  { 3:5, 5:6, 7:6, 10:8,  },  // 35
  { 3:6, 5:7, 7:8, 10:10, },  // 36
  { 3:6, 5:7, 7:8, 10:10, },  // 37
  { 3:6, 5:7, 7:8, 10:10, },  // 38
  // ここからは下はダミー
  { 3:6, 5:7, 7:8, 10:10, },  // 39
  { 3:6, 5:7, 7:8, 10:10, },  // 40
];

// キャラクターアビリティ毎のパラメータ補正率テーブル
var tblAbility = {
  "HP UP Lv1 (HP+15%)":                      [ 1.15, 1.00,  0,  0,  0,  0,  0,  0 ],
  "HP UP Lv2 (HP+30%)":                      [ 1.30, 1.00,  0,  0,  0,  0,  0,  0 ],
  "HP UP Lv3 (HP+45%)":                      [ 1.45, 1.00,  0,  0,  0,  0,  0,  0 ],
  "HP UP Lv4 (HP+60%)":                      [ 1.60, 1.00,  0,  0,  0,  0,  0,  0 ],
  "HP UP Lv5 (HP+75%)":                      [ 1.75, 1.00,  0,  0,  0,  0,  0,  0 ],
  "☆HP UPマスター (HP+90%)":                 [ 1.90, 1.00,  0,  0,  0,  0,  0,  0 ],
  "MP UP Lv1 (MP+15%)":                      [ 1.00, 1.15,  0,  0,  0,  0,  0,  0 ],
  "MP UP Lv2 (MP+30%)":                      [ 1.00, 1.30,  0,  0,  0,  0,  0,  0 ],
  "MP UP Lv3 (MP+45%)":                      [ 1.00, 1.45,  0,  0,  0,  0,  0,  0 ],
  "MP UP Lv4 (MP+60%)":                      [ 1.00, 1.60,  0,  0,  0,  0,  0,  0 ],
  "MP UP Lv5 (MP+75%)":                      [ 1.00, 1.75,  0,  0,  0,  0,  0,  0 ],
  "☆MP UPマスター (MP+90%)":                 [ 1.00, 1.90,  0,  0,  0,  0,  0,  0 ],
  "力UP Lv1 (力+3)":                         [ 1.00, 1.00,  3,  0,  0,  0,  0,  0 ],
  "力UP Lv2 (力+6)":                         [ 1.00, 1.00,  6,  0,  0,  0,  0,  0 ],
  "力UP Lv3 (力+9)":                         [ 1.00, 1.00,  9,  0,  0,  0,  0,  0 ],
  "力UP Lv4 (力+12)":                        [ 1.00, 1.00, 12,  0,  0,  0,  0,  0 ],
  "力UP Lv5 (力+15)":                        [ 1.00, 1.00, 15,  0,  0,  0,  0,  0 ],
  "☆力UPマスター (力+18)":                   [ 1.00, 1.00, 18,  0,  0,  0,  0,  0 ],
  "体力UP Lv1 (体力+3)":                     [ 1.00, 1.00,  0,  3,  0,  0,  0,  0 ],
  "体力UP Lv2 (体力+6)":                     [ 1.00, 1.00,  0,  6,  0,  0,  0,  0 ],
  "体力UP Lv3 (体力+9)":                     [ 1.00, 1.00,  0,  9,  0,  0,  0,  0 ],
  "体力UP Lv4 (体力+12)":                    [ 1.00, 1.00,  0, 12,  0,  0,  0,  0 ],
  "体力UP Lv5 (体力+15)":                    [ 1.00, 1.00,  0, 15,  0,  0,  0,  0 ],
  "☆体力UPマスター (体力+18)":               [ 1.00, 1.00,  0, 18,  0,  0,  0,  0 ],
  "知性UP Lv1 (知性+3)":                     [ 1.00, 1.00,  0,  0,  3,  0,  0,  0 ],
  "知性UP Lv2 (知性+6)":                     [ 1.00, 1.00,  0,  0,  6,  0,  0,  0 ],
  "知性UP Lv3 (知性+9)":                     [ 1.00, 1.00,  0,  0,  9,  0,  0,  0 ],
  "知性UP Lv4 (知性+12)":                    [ 1.00, 1.00,  0,  0, 12,  0,  0,  0 ],
  "知性UP Lv5 (知性+15)":                    [ 1.00, 1.00,  0,  0, 15,  0,  0,  0 ],
  "☆知性UPマスター (知性+18)":               [ 1.00, 1.00,  0,  0, 18,  0,  0,  0 ],
  "精神UP Lv1 (精神+3)":                     [ 1.00, 1.00,  0,  0,  0,  3,  0,  0 ],
  "精神UP Lv2 (精神+6)":                     [ 1.00, 1.00,  0,  0,  0,  6,  0,  0 ],
  "精神UP Lv3 (精神+9)":                     [ 1.00, 1.00,  0,  0,  0,  9,  0,  0 ],
  "精神UP Lv4 (精神+12)":                    [ 1.00, 1.00,  0,  0,  0, 12,  0,  0 ],
  "精神UP Lv5 (精神+15)":                    [ 1.00, 1.00,  0,  0,  0, 15,  0,  0 ],
  "☆精神UPマスター (精神+18)":               [ 1.00, 1.00,  0,  0,  0, 18,  0,  0 ],
  "素早さUP Lv1 (素早さ+3)":                 [ 1.00, 1.00,  0,  0,  0,  0,  3,  0 ],
  "素早さUP Lv2 (素早さ+6)":                 [ 1.00, 1.00,  0,  0,  0,  0,  6,  0 ],
  "素早さUP Lv3 (素早さ+9)":                 [ 1.00, 1.00,  0,  0,  0,  0,  9,  0 ],
  "素早さUP Lv4 (素早さ+12)":                [ 1.00, 1.00,  0,  0,  0,  0, 12,  0 ],
  "素早さUP Lv5 (素早さ+15)":                [ 1.00, 1.00,  0,  0,  0,  0, 15,  0 ],
  "☆素早さUPマスター (素早さ+18)":           [ 1.00, 1.00,  0,  0,  0,  0, 18,  0 ],
  "器用さUP Lv1 (器用さ+3)":                 [ 1.00, 1.00,  0,  0,  0,  0,  0,  3 ],
  "器用さUP Lv2 (器用さ+6)":                 [ 1.00, 1.00,  0,  0,  0,  0,  0,  6 ],
  "器用さUP Lv3 (器用さ+9)":                 [ 1.00, 1.00,  0,  0,  0,  0,  0,  9 ],
  "器用さUP Lv4 (器用さ+12)":                [ 1.00, 1.00,  0,  0,  0,  0,  0, 12 ],
  "器用さUP Lv5 (器用さ+15)":                [ 1.00, 1.00,  0,  0,  0,  0,  0, 15 ],
  "☆器用さUPマスター (器用さ+18)":           [ 1.00, 1.00,  0,  0,  0,  0,  0, 18 ],
  "矛盾の構え Lv4 (力+12,体力+12)":          [ 1.00, 1.00, 12, 12,  0,  0,  0,  0 ],
  "天竜の構え Lv4 (力+20,素早さ+5,体力-4)":  [ 1.00, 1.00, 20, -4,  0,  0,  5,  0 ],
  "地竜の構え Lv4 (力+17,体力+9,素早さ-11)": [ 1.00, 1.00, 17,  9,  0,  0,  0,-11 ],
};
