var app = new Vue({
    el: "#app",
    data: {
        taskName: null,
        taskList: []
    },
    methods: {
        onSubmit: function(taskName) {
            taskName = this.taskName
            this.taskList.push(taskName)
            this.taskName = null
        },
        onDelete: function(index) {
            this.taskList = this.taskList.filter((v, i) => {
                return i !== index
            })
        }

    }
})