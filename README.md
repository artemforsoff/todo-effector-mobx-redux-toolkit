# ☄️ todo app

[![Netlify Status](https://api.netlify.com/api/v1/badges/28ea953e-cc35-4496-bd8d-4bcf767a0883/deploy-status)](https://app.netlify.com/sites/todo-effector-mobx-redux-toolkit-recoil/deploys)
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)

Application that uses and demonstrates the difference between state managers: [effector](https://effector.dev/), [redux-toolkit](https://redux-toolkit.js.org/), [mobx](https://mobx.js.org/README.html) and [recoil](https://recoiljs.org/).

## Hosting

This application is hosted [here](https://todo-effector-mobx-redux-toolkit-recoil.netlify.app/todo) by Netlify.
If you want to change the active state manager, you can set the url get parameter `ACTIVE_STATE_MANAGER` to `effector`, `redux-toolkit`, `mobx`, or `recoil`.

Example:
https://todo-effector-mobx-redux-toolkit-recoil.netlify.app/todo?ACTIVE_STATE_MANAGER=redux-toolkit
