```
Scanner 扫描器（scanner.ts）
Parser 解析器（parser.ts）
Binder 绑定器（binder.ts）
Checker 检查器（checker.ts）
Emitter 发射器（emitter.ts）

文件：Utilities

core.ts ：TypeScript 编译器使用的核心工具集，重要的有：

let objectAllocator: ObjectAllocator 是一个定义为全局单例的变量。提供以下定义：
getNodeConstructor（节点会在解析器 / AST 中介绍）
getSymbolConstructor（符号会在绑定器中介绍）
getTypeConstructor（类型会在检查器中介绍）
getSignatureConstructor（签名是索引，调用和构造签名）

文件：关键数据结构

types.ts 包含整个编译器中使用的关键数据结构和接口，这里列出一些关键部分：

SyntaxKind AST 节点类型通过 SyntaxKind 枚举进行识别
TypeChecker 类型检查器提供此接口
CompilerHost 用于程序（Program）和系统之间的交互
Node AST 节点

文件：系统 System

system.ts，TypeScript 编译器与操作系统的所有交互均通过 System 接口进行。接口及其实现（WScript 和 Node） 均定义在 system.ts 中。你可以将其视为操作环境（OE, Operating Environment）。

程序 Program
```

```text
SourceCode（源码） ~~ 扫描器 ~~> Token 流
Token 流 ~~ 解析器 ~~> AST（抽象语法树）
AST ~~ 绑定器 ~~> Symbols（符号）
AST + 符号 ~~ 检查器 ~~> 类型验证
AST + 检查器 ~~ 发射器 ~~> JavaScript 代码
```

```typescript
import * as ts from "byots";

由解析器控制扫描器将源码转化为抽象语法树（AST）
SourceCode ~~ 扫描器 ~~> Token 流 ~~ 解析器 ~~> AST
```
