- [ ✅ ] init project with Vite
- [ ✅ ] add linter
- [ ✅ ] add css TodoMVC
- [ ✅ ] add TODO list
- [ ✅ ] delete TODO
- [ ✅ ] TODO completed
- [ ✅ ] add filters
- [ ✅ ] add delete all Completed TODO
- [ ✅ ] add Header
- [ ✅ ] add Task

div.todoapp
    header.header
        h1 TODO
        form
            input.new-todo
    ul.todo--list
        li.completed (is completed)
            div.view
                input.toggle
            label
            button.destray
    footer.footer
        span.todo-count
        ul.filters
            li
                a.selectd (is selected)
        button.clear-completed
