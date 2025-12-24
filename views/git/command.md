# 基础命令

## 创建版本库

- 克隆远程版本库

  ```bash
  git clone <url>
  # 示例
  git clone https://github.com/VisionView/learning-document.git
  ```

- 初始化本地版本库
  ```bash
  git init
  ```

## 修改和提交

```bash
# 查看状态
git status

# 查看变更内容
git diff

# 跟踪所有改动过的文件
git add .

# 跟踪指定的文件
git add <file>
# 示例：git add App.vue

# 文件改名
git mv <old> <new>
# 示例：git mv App.vue App.js

# 删除文件
git rm <file>
# 示例：git rm App.vue

# 停止跟踪文件但不删除
git rm --cached <file>
# 示例：git rm --cached App.vue

# 提交
git commit -m "commit message"

# 修改最后一次提交
git commit --amend
```

## 查看提交历史

```bash
# 查看提交历史
git log

# 查看指定文件的提交历史
git log -p <file>
# 示例：git log -p App.vue

# 以列表方式查看指定文件的提交历史
git blame <file>
# 示例：git blame App.vue
```

## 暂存

```bash
# 暂存当前末commit的代码
git stash

# 暂存当前未commit的代码并添加备注
git stash save "备注内容"

# 查看所有暂存
git stash list

# 恢复最近的暂存内容，删除记录
git stash pop

# 恢复指定的暂存内容
git stash pop stash@{0}

# 删除stash的所有记录
git stash clear

# 参考第一次暂存
git stash show -p stash@{0}

#应用第一次暂存
git stash apply stash@{0}

# 删除最近的一次stash
git stash drop
```

## 撤消

```bash
# 撤消工作目录中所有未提交文件的修改内容
git reset --hard HEAD

# 撤消指定的未提交文件的修改内容
git checkout HEAD <file>
# 示例：git checkout HEAD App.vue

# 撤消指定的提交
git revert <commit>
# 示例：git revert 1234567890
```

## 分支与标签

```bash
# 显示所有本地分支
git branch

# 创建新分支
git branch <new-branch>
# 示例：git branch dev

# 删除本地分支
git branch -d <branch>
# 示例：git branch -d dev

# 切换到指定分支或标签
git checkout <branch/tag>
# 示例：git checkout dev

# 列出所有本地标签
git tag

# 基于最新提交创建标签
git tag <tagname>
# 示例：git tag v1.0.0

# 删除标签
git tag -d <tagname>
# 示例：git tag -d v1.0.0
```

## 合并与衍合

```bash
# 合并指定分支到当前分支
git merge <branch>
# 示例：git merge dev

# 衍合指定分支到当前分支
git rebase <branch>
# 示例：git rebase dev
```

## 远程操作

```bash
# 查看远程版本库信息
git remote -v

# 查看指定远程版本库信息
git remote show <remote>
# 示例：git remote show origin

# 添加远程版本库
git remote add <remote> <url>
# 示例：git remote add origin https://github.com/VisionView/learning-document.git

# 从远程库获取代码
git fetch <remote>
# 示例：git fetch origin

# 下载代码及快速合并
git pull <remote> <branch>
# 示例：git pull origin dev

# 上传代码及快速合并
git push <remote> <branch>
# 示例：git push origin dev

# 上传所有标签
git push --tags
```
