---
title: MobX
---

## 简述
MobX 是一个简单、可扩展的状态管理库，用于构建响应式应用程序。它通过使用透明的函数式响应式编程 (TFRP) 原理，自动跟踪应用程序状态的变化并在需要时更新视图。

## 问题解决
### 解决的问题
MobX 主要解决以下问题：
* **状态管理复杂性**：在大型应用中，管理应用状态及其变化可能变得非常复杂。 MobX 通过提供一种结构化和可预测的方式来管理状态，简化了这一过程。
* **手动更新视图**：传统方法需要手动更新视图以反映状态变化，这容易出错且难以维护。 MobX 自动执行此操作，确保视图始终与状态同步。
* **性能优化**：MobX 优化了状态更新和视图渲染，仅更新受影响的部分，从而提高应用程序性能。
### 核心理念和设计哲学
MobX 的核心理念是任何可以从应用程序状态派生的内容都应该自动派生。

其设计哲学基于以下原则：
* **透明性**：MobX 的工作机制易于理解和调试。
* **简单性**：使用最少的样板代码和概念来管理状态。
* **可扩展性**：MobX 可以轻松地与其他库和框架集成，并扩展到大型应用程序。
* **性能**：MobX 经过优化，可提供高性能的状态管理和视图渲染。

### 最适合解决的问题

MobX 非常适合解决以下类型的问题：

* **构建用户界面**：MobX 简化了构建响应式用户界面的过程，自动处理状态更新和视图渲染。
* **管理复杂状态**：对于具有大量相互依赖状态的应用程序，MobX 提供了一种结构化和可维护的方式来管理它们。
* **提高应用程序性能**：MobX 的优化可以提高应用程序的性能，尤其是在处理大量数据或频繁状态更新时。

### 使用 MobX 带来的问题
虽然 MobX 有很多优点，但也可能带来一些问题：

* **学习曲线**：对于不熟悉响应式编程概念的开发人员来说，MobX 可能需要一些时间来学习。
* **调试复杂性**：在某些情况下，调试 MobX 应用程序可能会很复杂，尤其是在处理异步操作和复杂的派生状态时。
* **过度使用**：将 MobX 用于所有状态管理需求可能会导致过度工程化，并降低小型应用程序的性能。

## 技术突破
### 突破和改进
* **简化状态管理**：相比于 Redux 等基于 Flux 架构的库，MobX 更为简洁直观。它不需要繁琐的 action 和 reducer，开发者可以直接修改状态，并自动触发视图更新。
* **提高性能**：MobX 通过细粒度观察和优化渲染，只更新必要的部分，避免了不必要的渲染，从而提高应用性能。
* **易于学习和使用**： MobX 的 API 简洁易懂，学习曲线平缓，开发者可以快速上手。

### 新技术或方法
1. **透明的函数响应式编程 (TFRP)**：这是 MobX 的核心机制。它允许开发者以一种命令式的方式编写代码，就像直接修改变量一样，而 MobX 在底层会自动跟踪这些变化，并自动更新依赖于这些状态的视图。
2. **可观察对象 (Observables)**：MobX 使用可观察对象来包装应用程序的状态。任何对可观察对象的修改都会被 MobX 跟踪。
3. **计算值 (Computed Values)**：计算值是基于可观察对象派生而来的值。当依赖的可观察对象发生变化时，计算值会自动更新。
4. **反应 (Reactions)**：反应是指当可观察对象或计算值发生变化时自动执行的函数。这通常用于更新 UI 或执行其他副作用操作。

### 实现方式
* **代理 (Proxies)**：MobX 使用 JavaScript Proxy 来拦截对可观察对象的访问和修改。当开发者读取或修改可观察对象时，Proxy 会通知 MobX 进行跟踪和更新。
* **依赖关系图 (Dependency Graph)**：MobX 内部维护了一个依赖关系图，用于跟踪哪些计算值和反应依赖于哪些可观察对象。当可观察对象发生变化时，MobX 会根据依赖关系图自动更新相关的计算值和反应。
* **优化算法**：MobX 使用了一些优化算法，例如批量更新和去重，来最小化渲染次数和提高性能。

## 技术架构
### 架构
MobX 的架构可以概括为三个核心概念：
1. **状态 (State)**：应用程序中需要被观察和响应的数据，可以是基本类型、对象、数组等。
2. **派生状态 (Derived State)**：根据状态计算得出的数据，例如过滤后的列表或计算结果。
3. **反应 (Reaction)**：自动跟踪状态变化并执行副作用的函数，例如更新 UI 或发送网络请求。

这三个概念构成了 MobX 的核心工作流程：

- **状态变化**：当状态发生变化时，MobX 会自动跟踪这些变化。
- **派生状态更新**：MobX 会自动重新计算依赖于变化状态的派生状态。
- **触发反应**：MobX 会自动执行依赖于变化状态或派生状态的反应。

### 核心组件和模块

MobX 的核心组件和模块包括：

- **`observable`**：用于将数据转换为可观察状态，使 MobX 能够跟踪其变化。
- **`computed`**：用于创建派生状态，它会自动跟踪依赖的状态并进行更新。
- **`autorun`、`reaction`、`when`**：用于创建反应，它们会自动执行副作用以响应状态变化。
- **`action`**：用于包装修改状态的操作，使状态更新更加明确和可控。
- **`useObserver` (MobX-React)**：用于在 React 组件中跟踪状态变化并触发重新渲染。

### 组件协同工作

各个组件之间通过以下方式协同工作：

1. **状态变化触发跟踪** 当使用 `observable` 标记的状态发生变化时，MobX 会自动跟踪这些变化。
2. **依赖关系建立** `computed` 和 `reaction` 会在创建时建立与所依赖状态的依赖关系。
3. **自动更新派生状态**：当依赖的状态发生变化时，MobX 会自动重新计算 `computed` 值。
4. **自动执行反应**：当依赖的状态或派生状态发生变化时，MobX 会自动执行 `autorun`、`reaction` 或 `when` 中定义的副作用。

例如，假设我们有一个 `observable` 状态 `count` 和一个 `computed` 值 `doubleCount`：

```javascript
import { observable, computed } from "mobx";

const state = observable({
  count: 0,
});

const doubleCount = computed(() => state.count * 2);
```

当 `state.count` 发生变化时，`doubleCount` 会自动更新。如果有一个 `autorun` 依赖于 `doubleCount`，它也会自动执行：

```javascript
import { autorun } from "mobx";

autorun(() => {
  console.log("Double count:", doubleCount.get());
});
```

4. **性能与效率**
  - 该技术在性能和效率方面如何？
  - 是否有具体的性能指标或测试结果可以参考？
  - 它在资源消耗（如内存、CPU）方面表现如何？