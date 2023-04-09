
        function overlayText() {
            // Get the selected file from the file input
            var fileInput = document.getElementById("fileInput");
            if (!fileInput.files[0]) {
                alert("Please upload an image file before generating the screenshot.");
                return;
            }
            var selectedFile = fileInput.files[0];

            var inputText1 = document.getElementById("result").textContent;
            var inputText2 = document.getElementById("textInput2").value;
            var inputText3 = document.getElementById("textInput3").value;
            var inputText4 = document.getElementById("textInput4").value;
            var outputImage = document.getElementById("outputImage");
            var canvas = document.createElement("canvas");
            var context = canvas.getContext("2d");
            var img = new Image();
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                context.drawImage(img, 0, 0);
                context.font = " 28px sans-serif";
                context.fillStyle = "white";
                context.fillText(inputText1, 172, 76);
                context.fillText(inputText2, 319, 76);
                context.font = " 60px sans-serif";
                context.fillText(inputText3, 440, 720);
                context.font = "30px sans-serif";
                context.fillStyle = "#1E90FF";
                context.fillText(inputText3, 816, 1892);
                context.font = " 26px sans-serif";
                context.fillStyle = "WHITE";
                context.fillText(inputText4, 984, 74);
                outputImage.src = canvas.toDataURL("image/jpeg");
                // Check if download button already exists
                var downloadButton = document.getElementById("downloadButton");
                if (!downloadButton) {
                    downloadButton = document.createElement("a");
                    downloadButton.id = "downloadButton";
                    downloadButton.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                    downloadButton.download = "output.jpg";
                    downloadButton.innerHTML = "Download Image";
                    document.body.appendChild(downloadButton);
                } else {
                    downloadButton.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                }
            };
            img.onerror = function() {
                console.error("Error loading image.");
            };
            // Load the selected image from the file input
            img.src = URL.createObjectURL(selectedFile);
        }

        window.addEventListener("load", function() {
            var button = document.getElementById("overlayButton");
            button.addEventListener("click", overlayText);
        });
    
