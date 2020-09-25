var app = new Vue({
    el: "#app",
    data: {
        taskName: null,
        taskList: [

        ]
    },
    methods: {
        onSubmit: function(taskName) {
            taskName = this.taskName
            this.taskList.push(taskName)
            this.taskName = null
        },
        onDelete: function(index) {
            console.log("hello", index)
            this.taskList.splice(this.taskList.indexOf(index))
        }
    }
})