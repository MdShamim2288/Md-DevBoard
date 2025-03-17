let allsBtn = document.querySelectorAll('.btn');

for (let i = 0; i < allsBtn.length; i++) {
    const btn = allsBtn[i]
    btn.addEventListener('click',
        function (event) {
            let parent = event.target.parentElement.parentElement.parentElement;

            let title = parent.querySelector("h2").innerText;
            let time = getCurrentTime();

            let assigned = document.getElementById('task-Assigned').innerText;
            taskAssigned = parseInt(assigned);
            taskAssigned -= 1;
            document.getElementById('task-Assigned').innerText = taskAssigned;

            let completedTask = document.getElementById("complet").innerText;
            completedTask = parseInt(completedTask);
            completedTask += 1;
            document.getElementById("complet").innerText = completedTask;

            alert(`
                Board Updated Successfully
                `);

            if (taskAssigned == 0) {
                alert(`
                      ongrates!!! You Have completed All The current Task
                      `);
            }

            btn.setAttribute("disabled", "true");
            btn.style.backgroundColor = "rgb(173, 171, 171)";

            let history = `
        <div class="bg-[#F4F7FF] m-4 p-3 rounded-md flex flex-col gap-3">
            <h1 class="text-[16px] font-semibold ">You have completed the task ${title} at : ${time}</h1>
        </div>
        `;

        document.getElementById("history").style.display = "none";
            document
                .getElementById("history")
                .insertAdjacentHTML("afterend", history);

        })
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    return `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}