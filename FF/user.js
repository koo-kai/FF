//タイトルバーを表示
user_pref("browser.tabs.drawInTitlebar", false);

//検索バーを表示
user_pref("browser.search.widget.inNavBar", true);

//検索結果を新しいタブで開く
user_pref("browser.search.openintab",true);

//ダウンロードボタンを常に表示
user_pref("browser.download.autohideButton", false);

//アドレスバーをハイライトしない（FF77）
user_pref("browser.urlbar.openViewOnFocus", false);
user_pref("browser.urlbar.update1.interventions", false);
user_pref("browser.urlbar.update1.searchTips", false);
user_pref("browser.urlbar.disableExtendForTests", true);



//モバイルのブックマーク、最近追加したブックマークを追加しない
user_pref("browser.bookmarks.showMobileBookmarks", false);
user_pref("browser.bookmarks.showRecentlyBookmarked", false);

//ホーム画面にトップサイト、ハイライト、スニペットを表示しない
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

//リンクを新しいタブで開いたとき切り替える
user_pref("browser.tabs.loadInBackground", false);

//複数タブを閉じる際に確認しない
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);

//ダウンロード先をファイルごとに指定
user_pref("browser.download.useDownloadDir", false);

//自動更新無効
user_pref("app.update.auto", false);

//スクロール関連
user_pref("general.autoScroll", true);
user_pref("general.smoothScroll", false);

//キャレットブラウズ
user_pref("accessibility.browsewithcaret", true);

// AMO (addons.mozilla.org)で拡張を有効にする
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);

//キャッシュ関連
//user_pref("browser.cache.disk.parent_directory", "R:\TEMP\Firefox");
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 233016);
user_pref("browser.cache.memory.max_entry_size", 10240);
//user_pref("browser.cache.offline.parent_directory", "R:\TEMP\Firefox");

//userChrome.css, userContent.cssのロード有効化
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

//情報収集機能（ヘルスレポート）を無効化
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);

//情報収集機能（テレメトリ）を無効化
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("experiments.supported", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");

//以前のセッションを復元しない
user_pref("browser.sessionstore.resume_session_once", false);
