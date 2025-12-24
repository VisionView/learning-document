# 安装 Git

## Windows

在Windows上使用Git，有两种安装方法。

### 独立安装程序

直接从[Git官网](https://git-scm.com/)下载[安装程序](https://git-scm.com/install/windows)。

安装完成后，在开始菜单中搜索`Git Bash`并打开，或打开`命令提示符`，输入`git --version`，如果显示版本信息，则安装成功。

> 注意：Git Bash是Git的命令行工具，用于在Windows上进行Git操作。

### 使用 winget 工具

如果您还没有 winget 工具，请先安装它，然后在`命令提示符`或`PowerShell`中键入以下命令：

```bash
winget install --id Git.Git -e --source winget
```

## MacOS

### Homebrew

如果您还没有安装`homebrew`，请先安装，然后

```bash
brew install git
```

### MacPorts

如果您还没有安装`MacPorts`，请先安装，然后

```bash
sudo port install git
```

## Linux

### Debian/Ubuntu

```bash
apt-get install git
```

### Centos

```bash
yum -y install git-core
```

## 配置 Git

配置个人的用户名称和电子邮件地址，是为了在每次提交代码时记录提交者的信息。在命令行输入：

```bash
git config --global user.name "Your Name"
git config --global user.email <EMAIL>
```

示例：

```bash
git config --global user.name "Zhangsan"
git config --global user.email zhangsan@163.com
```
