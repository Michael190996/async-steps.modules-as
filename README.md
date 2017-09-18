# Async-steps.modules-as (0.0.1) **BETA**
## Что это?
**Async-steps.modules-as** - библиотека модулей для async-steps
* [Установка](#Установка)
* [Как добавить](#Добавить-модули-из-библиотеки)
* [Модули](#Модули)
  - [callComponent](#callcomponent)
  - [callComponents](#callcomponents)
  - [setComponent](#setcomponent)
  - [setComponents](#setcomponents)
  - [if](#if)
  - [ifs](#ifs)
  - [for](#for)
  - [vars](#vars)
## Установка:
- **Npm**:
```sh
npm install --save async-steps.modules-as
```
- **Source git**:
```sh
git clone https://github.com/Michael190996/async-steps.modules-as && \
cd async-steps.modules-as && \
npm i && \
npm run build # npm run prepublish
```
## Добавить модули из библиотеки:
### package.json
```json
{
  "asyncsteps": {
    "pathsToModules": [
      {
        "path": "async-steps.modules-as"
      }
    ]
  }
}
```
## Модули
#### callComponent
Модуль вызывает опеределенный компонент 
* params
  - name {string} - имя компонента, который должен вызываться
  - sync {boolean} - синхронность
#### setComponent
Модуль добавляет компонент
* params
	- name {string} - уникальное имя компонента
  - steps {object[]} - последовательные модули
* vars (по завершению модуля)
  - vars.$BASIC.components[newComponentName] - params.steps
#### callComponents
Модуль массивно вызывает модуль [@callComponent](#callcomponent)
* params
  - names {string[]} - имена компонентов, которые должны вызываться
  - sync {boolean} - синхронность
#### setComponents 
Модуль массивно вызывает модуль [@setComponent](#setcomponent)
* params
  - components {object[]} - массив объектов параметов модуля [@setComponent](#setcomponent)
    - name {string} - уникальное имя компонента
    - steps {object[]} - последовательные модули
* vars (по завершению модуля)
  - [vars.$BASIC.components[newComponentName]] - params.steps
#### if
Модуль логической проверки
- для шаблонизации используется библиотека lodash 
* params
  - condition {string|boolean|number} - шаблон условия (lodash.template(`${condition} ? true : false`))
  - steps {object[]} - последовательные модули
  - sync {boolean} - синхронность
#### ifs
Модуль массивно вызывает модуль [@if](#if)
* params
  - conditions {object[]} массив объектов параметов модуля [@if](#if)
  - condition {string|boolean|number} - шаблон условия (lodash.template(`${condition} ? true : false`))
  - steps {object[]} - последовательные модули
  - sync {boolean} - синхронность
#### for
Модуль логического цикла
- Бежит по заданному числу или массиву
- для шаблонизации используется библиотека lodash 
* params
  - condition {number|array} - условие (lodash.template(`${condition}`))
  - steps {object[]} - последовательные модули
  - sync {boolean} - синхронность
* vars (по завершению модуля)
  - vars.$BASIC.$forPath - цепочка от верхнего цикла до текущего
  - vars.$BASIC.$for - текущий цикл
#### vars
Модуль инициализации переменных
- для шаблонизации используется библиотека lodash 
* params
  - init {array|object[]}
    - [{var: value}]|{var: value} - имя переменной и её значение (lodash.template(`${value}`))
* vars (по завершению модуля)
  - [vars[newVar]]