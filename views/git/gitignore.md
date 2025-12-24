# .gitignore 文件

`.gitignore`文件是`Git`版本控制系统中的一个重要组成部分，它允许开发者指定在项目提交过程中应该被`Git`忽略的文件和目录。

这个功能对于保持仓库的整洁和排除不必要的文件（如编译生成的文件、操作系统生成的文件或包含敏感信息的配置文件）至关重要。

详细内容可参考[GitHub官方文档](https://docs.github.com/en/get-started/getting-started-with-git/ignoring-files)。

## 创建 .gitignore 文件

通常`.gitignore`文件位于项目的根目录下，但也可以放置在仓库的任何子目录中。

## 建议排除文件

- 操作系统生成的文件，如`macOS`的`.DS_Store`
- 代码编辑器和集成开发环境（IDE）生成的配置文件，如`VSCode`的`.vscode`
- 编程语言或框架自动生成的文件，如`Python`的`venv`。
- 软件包管理器生成的文件夹，如 npm 的`node_modules`。
- 包含敏感数据和个人信息的文件，如`.env`文件。
- 运行时文件，如`.log`文件。

## 完整内容示例

`.gitignore`文件内容如下：

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

.eslintcache
dist-electron
release
```
