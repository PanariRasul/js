const saveChanges = () => {
    const taskData = {
        id: `${Date.now()}`,
        imageUrl: document.getElementById("imageurl").value,
        imageTttle: document.getElementById("tasktitle").value,
        imageType: document.getElementById("tasktype").value,
        imageDescription: document.getElementById("taskdescription").value
    };
    console.log(taskData);
};

