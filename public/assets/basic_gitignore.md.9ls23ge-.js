import{_ as s,c as i,o as n,a1 as a}from"./chunks/framework.DPIBHfDg.js";const A=JSON.parse('{"title":"おまけ3: .gitignore","description":"","frontmatter":{},"headers":[],"relativePath":"basic/gitignore.md","filePath":"basic/gitignore.md"}'),e={name:"basic/gitignore.md"},l=a(`<h1 id="おまけ3-gitignore" tabindex="-1">おまけ3: .gitignore <a class="header-anchor" href="#おまけ3-gitignore" aria-label="Permalink to &quot;おまけ3: .gitignore&quot;">​</a></h1><p>Gitはデフォルトでは管理するディレクトリ以下の全てのファイルの変更を追跡してしまいます。 しかし実際の開発ではGitに追跡されると困るもの、追跡しなくても良いものがある場合があります。</p><p>そういうときにGitに「このファイルは無視してね～」と伝えるのが<code>.gitignore</code>というファイルです。</p><div class="tip custom-block"><p class="custom-block-title">TIP: 実際の開発における追跡されたくないもの</p><ul><li>追跡されると困るもの <ul><li>機密情報が書かれたファイル (<code>.env</code>などの環境変数ファイル)</li></ul></li><li>追跡しなくても良いもの <ul><li>依存関係ファイル (<code>node_modules</code>など)</li><li>自動生成されるファイル (追跡する場合もある)</li></ul></li></ul></div><h2 id="gitignoreの書き方" tabindex="-1"><code>.gitignore</code>の書き方 <a class="header-anchor" href="#gitignoreの書き方" aria-label="Permalink to &quot;\`.gitignore\`の書き方&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-dark github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># #から始まる行はコメントになります</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 単純にファイル名だけ書くと、その名前のファイル全部にマッチする</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># マッチする例:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - /.env </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - /some/directory/.env</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">.env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># globパターンが使える (詳しくは自分で調べてみよう)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># マッチする例:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - /.env.local</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - /dir/.env.development</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">.env.*</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 最初に「/」を付けると.gitignoreファイルのあるディレクトリ基準で</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ↓だと「/.env」しかマッチしない</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">/.env</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># フォルダ (の中身全て) をマッチさせるときは最後に「/」をつける</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># マッチする例:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - /node_modules/bin.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - /dir/node_modules/package/index.js</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">node_modules/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># パス指定にもglobパターンが使える</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># マッチする例:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - /path/to/dir/node_modules/package/index.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - /path/node_modules/package/index.js</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">path/**/node_modules</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 最初に「!」を付けるとignoreしないという意味になる</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># この例では先に「.env.*」がignoreされるのに対して</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 「.env.production」だけはignoreしない (追跡する) という意味</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">.env.production</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ただし親ディレクトリがignoreされている場合は「!」ができない</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 例えば次の例では「node_modules/package-a/index.js」は追跡対象にならない</span></span>
<span class="line"><span style="--shiki-light:#F97583;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">node_modules/package-a/index.js</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ↑をしたい場合にはファイル全部をignoreするようにすればよい</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 「node_modules/」の例では次のような感じ</span></span>
<span class="line"><span style="--shiki-light:#B392F0;--shiki-dark:#B392F0;">node_modules/**/*</span></span></code></pre></div><h2 id="テンプレート" tabindex="-1">テンプレート <a class="header-anchor" href="#テンプレート" aria-label="Permalink to &quot;テンプレート&quot;">​</a></h2><p>とはいえ毎回<code>.gitignore</code>を書くのは少し面倒くさいですよね。ということで偉い人が用意してくれたテンプレートを使いましょう。</p><p><a href="https://github.com/github/gitignore" target="_blank" rel="noreferrer">github/gitignore - github.com</a> から自分の使いたい言語・環境を選んで内容をコピペするだけです。いたって簡単。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>GitHubでもGiteaでもリポジトリを作成するときに<code>.gitignore</code>のテンプレートを選択するオプションがあります。 新しくリポジトリを作成するときはそこから設定するのが楽かもしれません。</p></div>`,10),p=[l];function t(h,k,o,d,c,r){return n(),i("div",null,p)}const D=s(e,[["render",t]]);export{A as __pageData,D as default};
