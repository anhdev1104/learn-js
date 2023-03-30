    const form = document.getElementById("task-form");
    const taskList = document.getElementById("task-list");
    let tasks = [];

    //Thêm trình xử lý sự kiện để gửi biểu mẫu
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const taskName = form.elements["task-name"].value;
        const taskDescription = form.elements["task-description"].value;

        // Xác thực tên và mô tả task
        if (taskName.length < 5 || taskDescription.length < 20) {
            alert("Tên task phải có ít nhất 5 ký tự và mô tả task phải có ít nhất 20 ký tự.");
            return;
        }

        // Thêm task mới vào danh sách task
        const newTask = { name: taskName, description: taskDescription };
        tasks.push(newTask);
        const taskIndex = tasks.length - 1;
        const taskListItem = document.createElement("li");
        taskListItem.innerHTML = `
        <div class="list-wrap">
            <span>${newTask.name}:    ${newTask.description}</span>
            <div class="list-wrap-btn">
                <button onclick="editTask(${taskIndex})" class="btn-edit">Edit</button>
                <button onclick="deleteTask(${taskIndex})" class="btn-delete">Delete</button>
            </div>
        </div>
            `;
        taskList.appendChild(taskListItem);

        // Xóa các trường nhập biểu mẫu
        form.elements["task-name"].value = "";
        form.elements["task-description"].value = "";
    });

    // Chức năng xử lý chỉnh sửa một tác vụ
    function editTask(taskIndex) {
        const task = tasks[taskIndex];
        const newTaskName = prompt("Nhập tên task mới:", task.name);
        const newTaskDescription = prompt("Nhập mô tả task mới:", task.description);

        // Xác thực tên và mô tả task mới
        if (newTaskName.length < 5 || newTaskDescription.length < 20) {
            alert("Tên task phải có ít nhất 5 ký tự và mô tả task phải có ít nhất 20 ký tự.");
            return;
        }

        // Cập nhật task trong danh sách task
        task.name = newTaskName;
        task.description = newTaskDescription;
        const taskListItem = taskList.children[taskIndex];
        taskListItem.innerHTML = `
        <div class="list-wrap">
            <span>${task.name}: ${task.description}</span>
            <div class="list-wrap-btn">
                <button onclick="editTask(${taskIndex})" class="btn-edit">Edit</button>
                <button onclick="deleteTask(${taskIndex})" class="btn-delete">Delete</button>
            </div>

        </div>
            
            `;
    }

    // Hàm xử lý xóa tác vụ
    function deleteTask(taskIndex) {
        tasks.splice(taskIndex, 1);
        const taskListItem = taskList.children[taskIndex];
        taskListItem.remove();
    }