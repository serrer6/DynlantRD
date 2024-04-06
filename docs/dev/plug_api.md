# API
- dynlantrd.initDynlantRD(dom,settings)
> 返回：Render对象（Object）
  - 用途：初始化DynlantRender
  - 参数
    - dom，传入一个DOM，会检查是否有效
    > 传入HTML DOM对象，一般情况下，传入一个DIV DOM
    - settings
      - 设置，下面是目前完整的参数设置
      ```javascript
      // 写于2024年4月6日
      const settings = {
        debug:false,
        safely:{
          xssfilter:false
        }
        
      }
      ```
      > 在debug:true的情况下，程序会实时在console返回处理的过程和状态，这会极大提升程序的延迟。所以请不要在生产环境中启用。这会给前端渲染带了极大的性能损失
    > 无论如何，请至少保持有一个渲染器插件（你不需要担心在Releases中发布的版本没有渲染器插件）
---
- dynlantrd.RegisterPlugin(plugin)
> 返回：无
  - 用途：注册插件
  - 参数
    - plugin：传入object。注册插件时，无论渲染器还是装饰器，都不得重名。如果有重名插件将在控制台打印"[DynlantRD][Main---PluginMan]plugin ${plug_object.name} has already been registered！(PASS)"，在注册插件时会自动检查你的参数是否存在：
      - name
      > String> 插件的名称，在任何时候都不能与其他插件重名
      - protocol
      > Number> 当前protocol版本为1，但不匹配时，一般情况仅做出警告（DynlantRD提供向下兼容性，但不提供向上兼容性，但不代表新版本的插件完全无法在旧版本使用）
      - node
      > String> 对应传入json的node，用于在内部筛选插件。可以与其他插件重复（但只会选择最先注册的那一个）
      - exec
      > Function> 插件的主程序，无论在什么时候，都应当存在。DynlandRD会为插件按照顺序传入param（Obj）、processor（Obj）、element（DOM）
      - 定义插件时，还有一个不那么重要的参数：installation
      > Function> 在插件加载之时，它就会执行。常用用于预加载一些参数
