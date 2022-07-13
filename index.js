const { moduleInterop } = require("@textlint/module-interop");
module.exports = {
  rules: {
    "no-hankaku-kana": moduleInterop(require("textlint-rule-no-hankaku-kana")),
    "no-doubled-joshi": moduleInterop(require("textlint-rule-no-doubled-joshi")),
    "ja-no-abusage": moduleInterop(require("textlint-rule-ja-no-abusage")),
    "no-mixed-zenkaku-and-hankaku-alphabet": moduleInterop(require("textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet")),
    "no-doubled-conjunction": moduleInterop(require("textlint-rule-no-doubled-conjunction")),
    "ja-no-mixed-period": moduleInterop(require("textlint-rule-ja-no-mixed-period")),
    "ja-unnatural-alphabet": moduleInterop(require("textlint-rule-ja-unnatural-alphabet")),
    "prefer-tari-tari": moduleInterop(require("textlint-rule-prefer-tari-tari")),
    "no-synonyms": moduleInterop(require("@textlint-ja/textlint-rule-no-synonyms")),
    "general-novel-style-ja": moduleInterop(require("textlint-rule-general-novel-style-ja")),
    "jis-charset": moduleInterop(require("textlint-rule-jis-charset")),
  },
  rulesConfig: {
    // 半角カナの使用禁止
    // https://github.com/textlint-ja/textlint-rule-no-hankaku-kana
    "no-hankaku-kana": true,
    // 同じ助詞の連続禁止
    // https://github.com/textlint-ja/textlint-rule-no-doubled-joshi
    "no-doubled-joshi": true,
    // よくある誤用のチェック 
    // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
    "ja-no-abusage": true,
    // 全角アルファベットと半角アルファベットの混在の禁止 半角を強制する
    // https://github.com/textlint-ja/textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet
    "no-mixed-zenkaku-and-hankaku-alphabet": true,
    // 同じ接続詞の連続禁止
    // https://github.com/textlint-ja/textlint-rule-no-doubled-conjunction
    "no-doubled-conjunction": true,
    // 句点記号が必ずついていることをチェック
    // https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period
    "ja-no-mixed-period": true,
    // 不自然なアルファベットを検知
    // https://github.com/textlint-ja/textlint-rule-ja-unnatural-alphabet
    "ja-unnatural-alphabet": true,
    // 「～たり～たり」をチェック
    // https://github.com/textlint-ja/textlint-rule-prefer-tari-tari
    "prefer-tari-tari": true,
    // 同義語の表記ゆれチェック
    // https://github.com/textlint-ja/textlint-rule-no-synonyms
    "no-synonyms": true,
    // 日本の小説における一般的な作法に従う
    // https://github.com/io-monad/textlint-rule-general-novel-style-ja
    "general-novel-style-ja": true,
    // JISの範囲外の文字をチェック
    // https://github.com/lostandfound/textlint-rule-jis-charset
    "jis-charset": true,

  }
}
