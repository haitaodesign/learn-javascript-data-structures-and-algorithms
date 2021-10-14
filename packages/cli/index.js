// 创建项目步骤
// 1. 获取项目名
// 2. 读取渲染模板
// 3. 根据项目名渲染模板
// 构建项目
// 1. 获取目录结构
// 2. 根据目录结构生成 webpck 配置
// 3. 区分本地开发模式与生产打包模式
// 4. 输出数据结构与算法标准库
// 5. 支持js,ts
// 文档模式
// 1. 如何自动化加载 md 格式的文档

const { program } = require('commander')
const fs = require('fs-extra')

program.option('-n, --name <type>', '创建项目的名称').parse()

function init () {
  const { name } = program.opts()
  if (name) {
    // 复制文件到指定目录
    createProject(name)
  }
}

function createProject (name) {
  const currentDir = process.cwd()
  fs.copySync(`${currentDir}/packages/cli/template`, `${currentDir}/src/${name}`)
}

init()
