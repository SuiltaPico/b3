---
title: DOM Expressions
---

## insert
初始化 `initial` 为数组，作为 `insertExpression` 的 `current` 参数。

如果 `accessor` 不是函数，则直接返回 `insertExpression`。
如果 `accessor` 是函数，则创建一个以 initial 为监听值的 effect，将参数传递直接给 `insertExpression`。
## insertExpression
忽略水合的情况。

插入表达式到元素内。

参数说明：
* parent: 父节点，表示要插入或更新内容的容器。
* value: 要插入或更新的值，可以是字符串、数字、布尔值、函数、数组或 DOM 节点。
* current: 当前的值，表示之前插入的内容，用于比较和更新。
* marker: 标记节点，用于多节点操作时的标记位置。
* unwrapArray: 布尔值，指示是否需要展开数组。

1. 相同值检查：如果 `value` 和 `current` 相同，直接返回 `current`。
2. 设置 t 为 value 的类型。
3. 如果没有标记，就代表是渲染多个节点，并设置 parent 为 current[0] 的父节点。
3. 如果 t 是字符串或者数字:
  * 如果渲染多个节点：
    如果当前值的 0 是文本节点，则更改文本节点内容，否则创建新的文本节点。