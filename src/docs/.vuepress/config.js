import {defaultTheme} from '@vuepress/theme-default'
import {viteBundler} from '@vuepress/bundler-vite'
import {searchPlugin} from '@vuepress/plugin-search'
import {defineUserConfig} from 'vuepress'

export default defineUserConfig({
    base: '/coderaji798/',
    dest: '../docs',
    title: 'CoderAji的学习文档',
    description: '记录我的学习成果',
    bundler: viteBundler(),
    theme: defaultTheme(
        {
            navbar: [
                {text: '主页', link: '/'},
                {text: '文档', link: '/article001/'},
                {text: 'GitHub', link: 'https://github.com/coderaji798'},
            ],
            sidebar: [
                {
                    text: 'Linux学习',
                    prefix: '/article001/',
                    link: '/article001/',
                    children: [
                        {
                            text: 'Windows安装Linux环境',
                            link: 'install-ubuntu.md'
                        },
                        {
                            text: 'Linux常用命令',
                            link: 'common-commands.md'
                        }
                    ],
                }
            ]
        }
    ),
    plugins: [
        searchPlugin({
            // 配置项
        }),
    ],
})