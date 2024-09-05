import{_ as i,c as e,a,o as n}from"./app-CrHWUBTE.js";const s={};function t(d,l){return n(),e("div",null,l[0]||(l[0]=[a(`<h1 id="linux常用命令" tabindex="-1"><a class="header-anchor" href="#linux常用命令"><span>Linux常用命令</span></a></h1><h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理"><span>文件管理</span></a></h2><ol><li><p>ls 列出文件</p><ol><li>-a 列出所有文件</li><li>-d 列出目录</li><li>-l 以长格式列出文件</li><li>-R 递归列出所有目录</li><li>-S 按文件大小降序排序</li></ol></li><li><p>ll 以长格式列出文件，相当于ls -al</p></li><li><p>cd 更改目录</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">cd     返回home目录</span>
<span class="line">cd ../ 返回父级目录</span>
<span class="line">cd dir_1 进入dir_1子目录</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>mkdir 创建目录</p></li><li><p>rmdir 删除空目录</p></li><li><p>touch 创建空文件</p></li><li><p>cp 复制文件</p><ol><li>-a 保留文件属性，链接并复制目录下所有文件；作用等同于-dpr；复制目录时使用</li><li>-d 保留链接</li><li>-p 保留属性（权限，时间，所有者等）</li><li>-r 复制所有子目录</li><li>-i 粘贴之前确认，以免覆盖</li><li>-v 列出粘贴过程</li></ol></li><li><p>mv 重命名或剪切</p><ol><li>-i 粘贴之前确认，以免覆盖</li><li>-v 列出粘贴过程</li></ol></li><li><p>rm 删除</p><ol><li>-i 删除之前确认，防止误删</li><li>-f 直接删除</li></ol></li><li><p>pwd 当前位置</p></li></ol><h2 id="搜索和过滤" tabindex="-1"><a class="header-anchor" href="#搜索和过滤"><span>搜索和过滤</span></a></h2><ol><li><p>find 查找</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">find [路径] [条件] [动作]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol><li>路径 一个或多个路径，多个路径空格分开</li><li>条件 <ol><li>-name 根据名称查找</li><li>-type 根据类型查找 f文件，d目录，l链接</li><li>-user 根据用户</li></ol></li><li>动作 对匹配到的文件进行操作</li></ol></li><li><p>whereis 查找二进制文件，命令，帮助文件</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">whereis shell</span>
<span class="line">whereis java</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>which 查找命令</p></li></ol><h2 id="文本操作" tabindex="-1"><a class="header-anchor" href="#文本操作"><span>文本操作</span></a></h2><ol><li>cat 查看文本 <ol><li>-b 只显示非空行行号</li><li>-n 显示所有行行号</li><li>-s 压缩连续空行为一行</li></ol></li><li>sort 文本排序 <ol><li>-r 降序排序（默认升序）</li><li>-u 排序并去重</li></ol></li><li>uniq 文本去重</li><li>tail 显示尾部 <ol><li>-f 只需打印</li><li>-n（数字） 打印n行</li><li>-v 显示文件名</li></ol></li><li>head 显示头部 <ol><li>-n（数字） 打印n行</li><li>-v 显示文件名</li></ol></li><li>less 查看文本，支持上下翻页</li><li>more 查看文本，按页展示</li><li>grep 查找文字 <ol><li>-i 忽略大小写</li><li>-n 显示行号</li></ol></li></ol><h2 id="备份和压缩" tabindex="-1"><a class="header-anchor" href="#备份和压缩"><span>备份和压缩</span></a></h2><ol><li>zip 压缩 <ol><li>-e 设置密码</li><li>-v 显示过程</li><li>-m 压缩后删除</li><li>-x 排除指定文件不压缩</li></ol></li><li>unzip 解压 <ol><li>-d 解压文件放到指定目录</li><li>-v 显示过程</li><li>-x 排除指定文件不解压</li></ol></li><li>tar <ol><li>-c 创建归档文件</li><li>-x 解压归档文件</li><li>-f 指定归档文件名称</li><li>-v 显示过程</li></ol></li></ol><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><ol><li><p>wget 从互联网下载文件</p><ol><li>-c 恢复中断</li><li>-r 递归下载</li></ol></li><li><p>curl 用于传输</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">curl -l https://www.baidu.com/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>ps aux 显示进程信息</p></li><li><p>top 实时显示系统信息</p><ol><li>-u 指定用户</li></ol></li><li><p>kill PID 结束进程</p></li><li><p>passwd 更换密码</p></li><li><p>ifconfig 网络接口信息（查看ip）</p></li><li><p>netstat 网络接口状态</p></li></ol><h2 id="vi-vim" tabindex="-1"><a class="header-anchor" href="#vi-vim"><span>vi/vim</span></a></h2><p>） vi/vim 分为三种模式：命令模式，输入模式和命令行模式。</p><h3 id="命令模式" tabindex="-1"><a class="header-anchor" href="#命令模式"><span>命令模式</span></a></h3><ol><li>i 切换到输入模式</li><li>: 切换到命令行模式</li><li>x 删除当前光标所在的字符</li><li>dd 删除光标所在行的所有数据</li><li>yy 复制当前行</li><li>p 光标所在行下方粘贴</li><li>P 光标所在行上方粘贴</li><li>o 光标所在行下方插入一行，并进入输入模式</li><li>O 光标所在行上方插入一行，并进入输入模式</li></ol><h3 id="输入模式" tabindex="-1"><a class="header-anchor" href="#输入模式"><span>输入模式</span></a></h3><ol><li>Esc 退出输入模式</li></ol><h3 id="命令行模式" tabindex="-1"><a class="header-anchor" href="#命令行模式"><span>命令行模式</span></a></h3><ol><li>:q 退出</li><li>:q! 强制退出</li><li>:w 写入</li><li>:w! 强制写入</li><li>:wq 写入并退出</li><li>:wq! 强制写入并退出</li><li>Esc 退出命令行模式</li></ol>`,19)]))}const p=i(s,[["render",t],["__file","common-commands.html.vue"]]),o=JSON.parse('{"path":"/article001/common-commands.html","title":"Linux常用命令","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"文件管理","slug":"文件管理","link":"#文件管理","children":[]},{"level":2,"title":"搜索和过滤","slug":"搜索和过滤","link":"#搜索和过滤","children":[]},{"level":2,"title":"文本操作","slug":"文本操作","link":"#文本操作","children":[]},{"level":2,"title":"备份和压缩","slug":"备份和压缩","link":"#备份和压缩","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":2,"title":"vi/vim","slug":"vi-vim","link":"#vi-vim","children":[{"level":3,"title":"命令模式","slug":"命令模式","link":"#命令模式","children":[]},{"level":3,"title":"输入模式","slug":"输入模式","link":"#输入模式","children":[]},{"level":3,"title":"命令行模式","slug":"命令行模式","link":"#命令行模式","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"article001/common-commands.md"}');export{p as comp,o as data};
