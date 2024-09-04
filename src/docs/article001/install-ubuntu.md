# Windows安装Linux环境

> 使用 wls 在 Windows 安装 Ubuntu（[Microsoft官网](https://learn.microsoft.com/zh-cn/windows/wsl/install)）

1. 在 Windows 功能中选中以下两个选项

    <img src="/article001/wsl-启用或关闭Windows功能.png" >

2. 根据提示重启电脑

    <img src="/article001/wsl-重启电脑.png" >

3. 打开命令行查看wsl版本并更新

   ```text
   wsl -l -v
   wsl --update
   ```

4. 打开Microsoft Store，搜索 Ubuntu 20.04.6 LTS并点获取

    <img src="/article001/wsl-获取Ubuntu 20.04.6 LTS.png" >

5. 以管理员身份运行 Ubuntu ，设置用户名以及密码

    <img src="/article001/wsl-启动Ubuntu.png" >

6. 运行简单 Linux 命令

    <img src="/article001/wsl-启动Ubuntu成功.png" >

